/**
 * Unit tests for the remembered lines: the pure list maths on both halves, and
 * the client store's optimistic write + mirror fallback.
 *
 * The property that matters: a line the reader made the pet say is still there
 * after a reload, is never duplicated, and never exceeds the cap.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  cleanSaidLine,
  normaliseSaid,
  rememberSaid,
  SAID_LIMIT,
  SAID_MAX_CHARS,
} from '../src/host/said.js';
import {
  cleanLine,
  CLIENT_SAID_LIMIT,
  createSaidStore,
  foldLine,
  normaliseLines,
} from '../src/client/said.js';

/** A tiny fake Storage. */
function fakeStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
    data,
  };
}

test('a line is cleaned, capped and never stored empty', () => {
  assert.equal(cleanSaidLine('  你好   皮卡 '), '你好 皮卡');
  assert.equal(cleanSaidLine('a\u0000b'), 'a b');
  assert.equal(cleanSaidLine('   '), '');
  assert.equal(cleanSaidLine(undefined), '');
  const long = '皮'.repeat(SAID_MAX_CHARS + 10);
  assert.equal(Array.from(cleanSaidLine(long)).length, SAID_MAX_CHARS);
  const emoji = '🐭'.repeat(SAID_MAX_CHARS + 4);
  assert.ok(!/[\uD800-\uDBFF]$/.test(cleanSaidLine(emoji)));
});

test('re-saying a line moves it to the front instead of duplicating it', () => {
  let lines = [];
  lines = rememberSaid(lines, '第一句', 1);
  lines = rememberSaid(lines, '第二句', 2);
  lines = rememberSaid(lines, '第一句', 3);
  assert.deepEqual(lines.map((line) => line.text), ['第一句', '第二句']);
  assert.deepEqual(lines.map((line) => line.at), [3, 2]);
});

test('the list is bounded and keeps the newest lines', () => {
  let lines = [];
  for (let index = 0; index < SAID_LIMIT + 6; index += 1) {
    lines = rememberSaid(lines, `第${index}句`, index);
  }
  assert.equal(lines.length, SAID_LIMIT);
  assert.equal(lines[0].text, `第${SAID_LIMIT + 5}句`);
  assert.equal(lines.at(-1).text, `第6句`);
});

test('a corrupt or foreign file shape reads as no memory', () => {
  assert.deepEqual(normaliseSaid(null), []);
  assert.deepEqual(normaliseSaid({ lines: 'nope' }), []);
  assert.deepEqual(normaliseSaid([{ text: '' }, { text: 'ok', at: 5 }, 'plain']), [
    { text: 'ok', at: 5 },
    { text: 'plain', at: 0 },
  ]);
  // Duplicates collapse, keeping the first (newest) occurrence.
  assert.deepEqual(normaliseSaid([{ text: 'a', at: 9 }, { text: 'a', at: 2 }]), [{ text: 'a', at: 9 }]);
});

test('the client folds lines the same way', () => {
  assert.equal(cleanLine(' x  y '), 'x y');
  let lines = [];
  lines = foldLine(lines, 'hello', 1);
  lines = foldLine(lines, 'world', 2);
  lines = foldLine(lines, 'hello', 3);
  assert.deepEqual(lines.map((line) => line.text), ['hello', 'world']);
  for (let index = 0; index < CLIENT_SAID_LIMIT + 3; index += 1) lines = foldLine(lines, `l${index}`, index);
  assert.equal(lines.length, CLIENT_SAID_LIMIT);
});

test('the store remembers optimistically and mirrors to localStorage', async () => {
  const storage = fakeStorage();
  const calls = [];
  const store = createSaidStore({
    storage,
    fetch: async (url, init) => {
      calls.push([init?.method ?? 'GET', url]);
      if (init?.method === 'POST') {
        const body = JSON.parse(init.body);
        return { json: async () => ({ ok: true, result: { lines: [{ text: body.text, at: 1 }] } }) };
      }
      return { json: async () => ({ ok: true, result: { lines: [{ text: '旧句子', at: 0 }] } }) };
    },
  });
  assert.deepEqual(store.getSnapshot().lines, []);
  await store.refresh();
  assert.deepEqual(store.getSnapshot().lines.map((line) => line.text), ['旧句子']);
  await store.remember('新句子');
  assert.deepEqual(store.getSnapshot().lines.map((line) => line.text), ['新句子']);
  assert.deepEqual(JSON.parse(storage.getItem('chatboxPet.said')).map((line) => line.text), ['新句子']);
  assert.ok(calls.some(([method]) => method === 'POST'));
});

test('a failing Host keeps the line in the mirror instead of losing it', async () => {
  const storage = fakeStorage();
  const store = createSaidStore({
    storage,
    fetch: async () => {
      throw new Error('offline');
    },
  });
  await store.remember('断网也要记住');
  assert.deepEqual(store.getSnapshot().lines.map((line) => line.text), ['断网也要记住']);
  assert.deepEqual(JSON.parse(storage.getItem('chatboxPet.said')).map((line) => line.text), ['断网也要记住']);
  // A fresh store on the same storage starts from the mirror.
  const again = createSaidStore({ storage, fetch: async () => ({ json: async () => ({ ok: false }) }) });
  assert.deepEqual(again.getSnapshot().lines.map((line) => line.text), ['断网也要记住']);
});

test('the store clears both the Host copy and the mirror', async () => {
  const storage = fakeStorage({ 'chatboxPet.said': JSON.stringify([{ text: '一句', at: 1 }]) });
  const calls = [];
  const store = createSaidStore({
    storage,
    fetch: async (url, init) => {
      calls.push(init?.method ?? 'GET');
      return { json: async () => ({ ok: true, result: { lines: [] } }) };
    },
  });
  await store.clear();
  assert.deepEqual(store.getSnapshot().lines, []);
  assert.deepEqual(JSON.parse(storage.getItem('chatboxPet.said')), []);
  assert.ok(calls.includes('DELETE'));
});
