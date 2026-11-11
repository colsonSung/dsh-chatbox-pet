/**
 * The local translation engine's pure parts: answer cleanup, the dictionary
 * contract, and the settings resolution that decides whether the local server
 * is even tried.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { cleanTranslation, DEFAULT_MODEL, localSettings, parseDictionary } from '../src/host/translate/local.js';

/** A code fence, built at runtime so this file needs no backticks. */
const FENCE = String.fromCharCode(96, 96, 96);

test('localSettings: 默认探测两个本地端口，模型 hy-mt2-7b', () => {
  const settings = localSettings({});
  assert.equal(settings.enabled, true);
  assert.equal(settings.model, DEFAULT_MODEL);
  assert.deepEqual(settings.baseUrls, ['http://127.0.0.1:6121/v1', 'http://127.0.0.1:1234/v1']);
});

test('localSettings: 配置了 baseUrl 就只打这一个，enabled=false 关掉本地', () => {
  const configured = localSettings({ translate: { local: { baseUrl: 'http://127.0.0.1:9999/v1', model: 'my-mt' } } });
  assert.deepEqual(configured.baseUrls, ['http://127.0.0.1:9999/v1']);
  assert.equal(configured.model, 'my-mt');
  assert.equal(localSettings({ translate: { local: { enabled: false } } }).enabled, false);
});

test('cleanTranslation: 去掉代码块与引导句', () => {
  assert.equal(cleanTranslation(FENCE + '\n准确的\n' + FENCE), '准确的');
  assert.equal(cleanTranslation('译文：准确的'), '准确的');
  assert.equal(cleanTranslation('  准确的  '), '准确的');
});

test('parseDictionary: 保留音标、多义项与例句，空义项丢弃', () => {
  const dict = parseDictionary(
    JSON.stringify({
      word: 'accurate',
      phonetic: '/ˈækjərət/',
      senses: [
        { pos: 'adj.', meaning: '准确的；精确的', example: 'The data is accurate.' },
        { pos: 'adj.', meaning: '严谨的', example: 'She is accurate in detail.' },
        { pos: '', meaning: '', example: '' },
        { pos: 'n.', meaning: '准确性', example: 'Accuracy matters.' },
      ],
      note: '强调与事实相符。',
    }),
    'accurate',
  );
  assert.equal(dict.phonetic, '/ˈækjərət/');
  assert.equal(dict.senses.length, 3);
  assert.equal(dict.senses[0].example, 'The data is accurate.');
  assert.equal(dict.note, '强调与事实相符。');
});

test('parseDictionary: 容忍代码块与前后废话', () => {
  const raw = '好的：\n' + FENCE + 'json\n' + '{"word":"abrupt","senses":[{"meaning":"突然的"}]}' + '\n' + FENCE;
  const dict = parseDictionary(raw, 'abrupt');
  assert.equal(dict.word, 'abrupt');
  assert.equal(dict.senses[0].meaning, '突然的');
});

test('parseDictionary: 没有释义就抛错，不返回空卡', () => {
  assert.throws(() => parseDictionary('{"word":"x","senses":[]}', 'x'));
  assert.throws(() => parseDictionary('不是 JSON', 'x'));
});
