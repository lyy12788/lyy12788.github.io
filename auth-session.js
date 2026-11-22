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
    const logoutPrefix = tokenKey + '-logout:';
    const startedKey = tokenKey + '-started';
    const tabModeKey = tokenKey + '-tab-only';
    const local = window.localStorage;
    const tab = window.sessionStorage;
    let pendingLogin;
    let signingOut;
    let expiryObserved = false;
    let lastReadStore;

    function currentStore() {
      if (tab.getItem(tokenKey) !== null || tab.getItem(tabModeKey) !== null) {
        return tab.getItem(tokenKey) === null ? null : tab;
      }
      return local.getItem(tokenKey) !== null ? local : null;
    }

    function parseSession(value) {
      try { return JSON.parse(value); } catch { return null; }
    }

    function clear(store) {
      store.removeItem(tokenKey);
      store.removeItem(deadlineKey);
      store.removeItem(startedKey);
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
      const accountId = parseSession(value)?.user?.id;
      const signedOutAt = accountId && Number(local.getItem(logoutPrefix + accountId));
      if (signedOutAt && signedOutAt >= Number(store.getItem(startedKey))) {
        clear(store);
        expiryObserved = true;
        return null;
      }
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
        const prior = pendingLogin ? null : readSession();
        if (!pendingLogin && (expiryObserved || (!prior && lastReadStore))) return;
        if (prior && parseSession(prior)?.user?.id !== parseSession(value)?.user?.id) return;

        const destination = pendingLogin ? (pendingLogin.remember ? local : tab) : existing || local;
        if (pendingLogin || destination.getItem(deadlineKey) === null) {
          const signedInAt = pendingLogin?.started ?? Date.now();
          destination.setItem(deadlineKey, String(signedInAt + duration));
          destination.setItem(startedKey, String(signedInAt));
        }
        if (destination === tab) {
          tab.setItem(tabModeKey, '1');
        } else if (pendingLogin) {
          clear(tab);
          tab.removeItem(tabModeKey);
        }
        destination.setItem(tokenKey, value);
        expiryObserved = false;
        lastReadStore = destination;
      },
      removeItem(name) {
        if (name !== tokenKey) return local.removeItem(name);
        const store = currentStore();
        if (store && (!signingOut || (store === signingOut.store &&
            parseSession(store.getItem(tokenKey))?.user?.id === signingOut.accountId &&
            store.getItem(startedKey) === signingOut.started))) clear(store);
      }
    };

    const client = window.supabase.createClient(url, key, { auth: { storageKey: tokenKey, storage } });
    clients.set(url, client);

    const originalSignOut = client.auth.signOut.bind(client.auth);
    client.auth.signOut = async (options) => {
      const accountId = parseSession(readSession())?.user?.id;
      const store = currentStore();
      signingOut = { accountId, store, started: store?.getItem(startedKey) };
      try {
        const result = await originalSignOut(options);
        if (!result.error && accountId && (!options?.scope || options.scope === 'global')) {
          local.setItem(logoutPrefix + accountId, String(Date.now()));
        }
        return result;
      } finally {
        signingOut = undefined;
      }
    };

    // GoTrue broadcasts session events across tabs even for tab-only sign-ins.
    const originalSubscribe = client.auth.onAuthStateChange.bind(client.auth);
    client.auth.onAuthStateChange = (callback) => originalSubscribe((event, session) => {
      const stored = readSession();
      if (session) {
        if (parseSession(stored)?.access_token !== session.access_token) return;
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
      const store = currentStore();
      const accountId = store && parseSession(store.getItem(tokenKey))?.user?.id;
      if (accountId && event.key === logoutPrefix + accountId) checkExpiry();
    });

    if (client.auth.signUp) {
      const originalSignUp = client.auth.signUp.bind(client.auth);
      client.auth.signUp = async (credentials) => {
        // Registration immediately signs out any returned session.
        pendingLogin = { remember: false, started: Date.now() };
        try {
          return await originalSignUp(credentials);
        } finally {
          pendingLogin = undefined;
        }
      };
    }

    const originalSignIn = client.auth.signInWithPassword.bind(client.auth);
    policies.set(client, async (credentials, remember) => {
      pendingLogin = { remember, started: Date.now() };
      try {
        return await originalSignIn(credentials);
      } finally {
        pendingLogin = undefined;
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
