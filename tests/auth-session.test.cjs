const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const source = readFileSync(join(__dirname, '../auth-session.js'), 'utf8');
const key = 'sb-test-auth-token';
const logout = id => key + '-logout:' + id;
const duration = 30 * 24 * 60 * 60 * 1000;

function storage() {
  const values = new Map();
  return {
    getItem: name => values.get(name) ?? null,
    setItem: (name, value) => values.set(name, String(value)),
    removeItem: name => values.delete(name)
  };
}

function browser() {
  const local = storage();
  let now = 2000;
  function page(tab = storage()) {
    const listeners = new Map();
    let reloads = 0;
    let adapter;
    const window = {
      localStorage: local,
      sessionStorage: tab,
      location: { reload() { reloads++; } },
      setInterval: callback => listeners.set('interval', callback),
      addEventListener: (name, callback) => listeners.set(name, callback),
      supabase: { createClient(url, key, options) {
        adapter = options.auth.storage;
        return { auth: {
          async signInWithPassword({email, password}) {
            if (password === 'wrong') return { error: new Error('Wrong password') };
            adapter.setItem(options.auth.storageKey, JSON.stringify({
              access_token: 'synthetic-' + email,
              user: { id: email }
            }));
            return { error: null };
          },
          async signOut() {
            adapter.removeItem(options.auth.storageKey);
            return { error: null };
          },
          onAuthStateChange(callback) { listeners.set('auth', callback); }
        }};
      }}
    };
    vm.runInNewContext(source, {
      window, URL, Date: { now: () => now },
      document: { addEventListener: (name, callback) => listeners.set(name, callback) }
    });
    const client = window.lyyAuth.createClient('https://test.supabase.co', 'public');
    return {
      tab, client, adapter,
      login(id, remember, password = 'correct') {
        return window.lyyAuth.signIn(client, { email: id, password }, remember);
      },
      user() { return JSON.parse(adapter.getItem(key))?.user.id ?? null; },
      signOut: () => client.auth.signOut(),
      deliverLogout: id => listeners.get('storage')({ key: logout(id) }),
      resume: () => listeners.get('pageshow')(),
      reloadCount: () => reloads
    };
  }
  return { local, page, advance(ms = 1) { now += ms; } };
}

test('a different account’s temporary session survives logout without reloading', async () => {
  const fixture = browser();
  const a = fixture.page(), b = fixture.page();
  await a.login('a', false);
  await b.login('b', false);
  assert.equal(fixture.local.getItem(key), null);
  await a.signOut();
  b.deliverLogout('a');
  assert.equal(a.user(), null);
  assert.equal(b.user(), 'b');
  assert.equal(b.reloadCount(), 0);
  assert.match(fixture.local.getItem(logout('a')), /^\d+$/);
});

test('same account signs out in both storage modes even if a tab misses the event', async () => {
  const fixture = browser();
  const temporary = fixture.page(), persistent = fixture.page(), resumed = fixture.page();
  await temporary.login('a', false);
  await resumed.login('a', false);
  await persistent.login('a', true);
  assert.equal(temporary.user(), 'a');
  await persistent.signOut();
  temporary.deliverLogout('a');
  resumed.resume();
  assert.equal(temporary.user(), null);
  assert.equal(resumed.user(), null);
  assert.equal(temporary.reloadCount(), 1);
  assert.equal(resumed.reloadCount(), 1);
  fixture.advance();
  await temporary.login('a', false);
  assert.equal(temporary.user(), 'a');
});

test('different mixed-mode accounts retain their own sessions and refreshes', async () => {
  const fixture = browser();
  const a = fixture.page(), b = fixture.page();
  await a.login('a', true);
  await b.login('b', false);
  const temporary = b.tab.getItem(key);
  b.adapter.setItem(key, temporary);
  assert.equal(a.user(), 'a');
  await b.signOut();
  a.deliverLogout('b');
  assert.equal(a.user(), 'a');
  assert.equal(a.reloadCount(), 0);
  assert.equal(b.user(), null);
});

test('expiry, page navigation, failed login and password recheck preserve the deadline', async () => {
  const fixture = browser(), a = fixture.page();
  await a.login('a', false);
  const deadline = a.tab.getItem(key + '-deadline');
  fixture.advance();
  const nextPage = fixture.page(a.tab);
  assert.equal(nextPage.user(), 'a');
  await nextPage.client.auth.signInWithPassword({ email: 'a', password: 'correct' });
  assert.equal(a.tab.getItem(key + '-deadline'), deadline);
  await nextPage.login('b', true, 'wrong');
  assert.equal(nextPage.user(), 'a');
  fixture.advance(duration);
  const stale = a.tab.getItem(key);
  nextPage.resume();
  nextPage.adapter.setItem(key, stale);
  assert.equal(nextPage.user(), null);
  assert.equal(nextPage.reloadCount(), 1);
});

test('an in-flight refresh cannot resurrect a signed-out account', async () => {
  const fixture = browser(), a = fixture.page(), b = fixture.page();
  await a.login('a', true);
  assert.equal(b.user(), 'a');
  const stale = fixture.local.getItem(key);
  await a.signOut();
  b.adapter.setItem(key, stale);
  assert.equal(fixture.local.getItem(key), null);
});
