/**
 * The favourite book: it must survive a restart, not duplicate a word, and
 * export something a reader can paste.
 */
import assert from 'node:assert/strict';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';

const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'cbp-fav-'));
process.env.CHATBOX_PET_FAV_FILE = path.join(dir, 'favorites.json');
const { addFavorite, exportFavorites, FAV_FILE, listFavorites, removeFavorite } = await import(
  '../src/host/translate/favorites.js'
);

test('addFavorite: 收藏单词与句子，最新的在前', async () => {
  await addFavorite({ kind: 'word', source: 'abrupt', target: 'adj. 突然的', from: 'en', to: 'zh' });
  await addFavorite({ kind: 'sentence', source: 'This is a test.', target: '这是一个测试。', from: 'en', to: 'zh' });
  const items = await listFavorites();
  assert.equal(items.length, 2);
  assert.equal(items[0].source, 'This is a test.');
  assert.equal(items[0].kind, 'sentence');
});

test('addFavorite: 同一个原文再次收藏是更新，不是新增', async () => {
  const before = (await listFavorites()).length;
  const updated = await addFavorite({ kind: 'word', source: 'abrupt', target: 'adj. 突然的；唐突的', from: 'en', to: 'zh' });
  const items = await listFavorites();
  assert.equal(items.length, before, 'no duplicate row');
  assert.equal(items.find((item) => item.source === 'abrupt').target, 'adj. 突然的；唐突的');
  assert.equal(typeof updated.id, 'string');
});

test('listFavorites: 按类型与搜索过滤', async () => {
  const words = await listFavorites({ kind: 'word' });
  assert.equal(words.every((item) => item.kind === 'word'), true);
  const found = await listFavorites({ search: 'test' });
  assert.equal(found.length, 1);
  assert.match(found[0].source, /test/i);
});

test('removeFavorite: 删掉存在的，忽略不存在的', async () => {
  const [first] = await listFavorites();
  assert.equal(await removeFavorite(first.id), true);
  assert.equal(await removeFavorite('nope'), false);
  const items = await listFavorites();
  assert.equal(items.some((item) => item.id === first.id), false);
});

test('exportFavorites: 输出可直接粘贴的 Markdown', async () => {
  // The previous case removed the newest row; put one back so this asserts on
  // content rather than on whatever happened to survive.
  await addFavorite({ kind: 'sentence', source: 'Ship it on Monday.', target: '周一上线。', from: 'en', to: 'zh' });
  const markdown = await exportFavorites();
  assert.match(markdown, /^# 生词本/m);
  assert.match(markdown, /\*\*Ship it on Monday\.\*\*/);
  assert.match(markdown, /周一上线/);
});

test('空收藏内容被拒绝，且不会写文件', async () => {
  await assert.rejects(() => addFavorite({ kind: 'word', source: '  ', target: '' }), /收藏内容不能为空/);
});

test.after(async () => {
  await fsp.rm(dir, { recursive: true, force: true });
});
