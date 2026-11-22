(() => {
  'use strict';

  const duration = 30 * 24 * 60 * 60 * 1000;
  const clients = new Map();
  const policies = new WeakMap();

  function createClient(url, key) {
    if (!window.supabase?.createClient) return null;
    if (clients.has(url)) return clients.get(url);

    const tokenKey = 'sb-' + new URL(url).hostname.split('.')[0] + '-auth-token';
    const deadlineKey = tokenKey + '-deadline';
    const logoutKey = tokenKey + '-logout';
    const local = window.localStorage;
    const tab = window.sessionStorage;
    let pendingMode;
    let expiryObserved = false;
    let lastReadStore;

    function currentStore() {
      if (tab.getItem(tokenKey) !== null) return tab;
      return local.getItem(tokenKey) !== null ? local : null;
    }

    function clear(store) {
      store.removeItem(tokenKey);
      store.removeItem(deadlineKey);
    }

    function discardIfExpired(store) {
      const raw = store.getItem(deadlineKey);
      if (raw === null) return false;
      const expiry = Number(raw);
      if (Number.isFinite(expiry) && expiry > Date.now()) return false;
      clear(store);
      expiryObserved = true;
      return true;
    }

    function readSession() {
      const store = currentStore();
      if (!store || discardIfExpired(store)) return null;
      const value = store.getItem(tokenKey);
      lastReadStore = store;
      if (store.getItem(deadlineKey) === null) {
        // Existing sessions receive a fixed browser migration window.
        store.setItem(deadlineKey, String(Date.now() + duration));
      }
      return value;
    }

    const storage = {
      getItem(name) {
        return name === tokenKey ? readSession() : local.getItem(name);
      },
      setItem(name, value) {
        if (name !== tokenKey) return local.setItem(name, value);
        const existing = currentStore();
        if (pendingMode === undefined && (expiryObserved || (!existing && lastReadStore) ||
            (existing && discardIfExpired(existing)))) return;

        const destination = pendingMode === undefined ? existing || local : pendingMode ? local : tab;
        if (pendingMode !== undefined || destination.getItem(deadlineKey) === null) {
          destination.setItem(deadlineKey, String(Date.now() + duration));
        }
        destination.setItem(tokenKey, value);
        clear(destination === local ? tab : local);
        expiryObserved = false;
        lastReadStore = destination;
      },
      removeItem(name) {
        if (name !== tokenKey) return local.removeItem(name);
        clear(tab);
        clear(local);
      }
    };

    const client = window.supabase.createClient(url, key, { auth: { storageKey: tokenKey, storage } });
    clients.set(url, client);

    const originalSignOut = client.auth.signOut.bind(client.auth);
    client.auth.signOut = async (options) => {
      const result = await originalSignOut(options);
      if (!result.error && options?.scope !== 'others') {
        local.setItem(logoutKey, String(Date.now()) + ':' + Math.random());
      }
      return result;
    };

    // GoTrue broadcasts session events across tabs even for tab-only sign-ins.
    const originalSubscribe = client.auth.onAuthStateChange.bind(client.auth);
    client.auth.onAuthStateChange = (callback) => originalSubscribe((event, session) => {
      const stored = readSession();
      if (session) {
        let accessToken;
        try { accessToken = JSON.parse(stored)?.access_token; } catch { return; }
        if (accessToken !== session.access_token) return;
      }
      if (event === 'SIGNED_OUT' && stored) return;
      return callback(event, session);
    });

    function checkExpiry() {
      readSession();
      if (expiryObserved) window.location.reload();
    }
    window.setInterval(checkExpiry, 15000);
    window.addEventListener('pageshow', checkExpiry);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) checkExpiry();
    });
    window.addEventListener('storage', (event) => {
      if (event.key === tokenKey && event.newValue === null && lastReadStore === local && !currentStore()) {
        window.location.reload();
        return;
      }
      if (event.key !== logoutKey) return;
      if (tab.getItem(tokenKey) === null) return;
      clear(tab);
      window.location.reload();
    });

    const originalSignIn = client.auth.signInWithPassword.bind(client.auth);
    policies.set(client, async (credentials, remember) => {
      pendingMode = remember ?? (currentStore() !== tab);
      try {
        return await originalSignIn(credentials);
      } finally {
        pendingMode = undefined;
      }
    });
    client.auth.signInWithPassword = (credentials) => {
      const existing = currentStore();
      // In-account password verification preserves the original deadline.
      if (existing && readSession()) return originalSignIn(credentials);
      return signIn(client, credentials, true);
    };
    return client;
  }

  function signIn(client, credentials, remember) {
    return policies.get(client)(credentials, remember);
  }

  window.lyyAuth = { createClient, signIn };
})();
