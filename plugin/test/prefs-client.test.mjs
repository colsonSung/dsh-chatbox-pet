/**
 * The page-side prefs store: the switches move independently.
 *
 * The pet display switch is the one a reader reaches for when the pet itself is
 * in the way — so these tests pin the property that makes it usable: writing
 * `pet` never touches `boost` or `sound`, and a failed write puts the value
 * back instead of leaving the page showing a switch the Host did not accept.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { createPrefsStore } from '../src/client/prefs.js';

/**
 * A stub fetch that records calls and answers with one body.
 * @param {object} body - the JSON body to answer with.
 * @param {Array<object>} [calls] - collected requests.
 * @param {boolean} [fail] - reject instead of answering.
 * @returns {Function} the fetch.
 */
function stubFetch(body, calls = [], fail = false) {
  return async (url, init = {}) => {
    calls.push({ url, method: init.method ?? 'GET', body: init.body });
    if (fail) throw new Error('offline');
    return { json: async () => body };
  };
}

test('the initial snapshot keeps every switch on until the Host answers', () => {
  const store = createPrefsStore({ fetch: stubFetch({ ok: true, result: {} }) });
  assert.deepEqual(store.getSnapshot(), { pet: true, boost: true, sound: true, loaded: false });
});

test('refresh adopts the Host copy', async () => {
  const store = createPrefsStore({
    fetch: stubFetch({ ok: true, result: { pet: false, boost: true, sound: false } }),
  });
  const snapshot = await store.refresh();
  assert.deepEqual(snapshot, { pet: false, boost: true, sound: false, loaded: true });
});

test('turning the pet off sends only the pet key and leaves the other switches alone', async () => {
  const calls = [];
  const store = createPrefsStore({
    fetch: stubFetch({ ok: true, result: { pet: false, boost: true, sound: true } }, calls),
  });
  let notified = 0;
  store.subscribe(() => {
    notified += 1;
  });

  const accepted = await store.update({ pet: false });

  assert.equal(accepted, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, 'POST');
  assert.deepEqual(JSON.parse(calls[0].body), { prefs: { pet: false } });
  assert.deepEqual(store.getSnapshot(), { pet: false, boost: true, sound: true, loaded: true });
  assert.ok(notified >= 1, 'the page re-renders when the switch moves');
});

test('a rejected write rolls the pet switch back', async () => {
  const store = createPrefsStore({ fetch: stubFetch({ ok: false }, [], true) });
  const accepted = await store.update({ pet: false });
  assert.equal(accepted, false);
  assert.equal(store.getSnapshot().pet, true);
});

test('a value the Host rejects rolls back even when the response is shaped wrongly', async () => {
  const store = createPrefsStore({ fetch: stubFetch({ ok: true, result: null }) });
  const accepted = await store.update({ boost: false });
  assert.equal(accepted, false);
  assert.equal(store.getSnapshot().boost, true);
});
