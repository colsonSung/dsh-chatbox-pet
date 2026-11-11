/**
 * The word-expansion line protocol: a 7B model mis-quotes JSON, so the
 * answer is five prefixed lines. The parser must survive garbage in one
 * section without losing the others.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { parseExpansion } from '../src/host/translate/local.js';

test('parseExpansion: 解析近义、反义、词形、搭配与记忆提示', () => {
  const raw = [
    'SYN: precise | exact | correct',
    'ANT: imprecise | inaccurate',
    'FORM: 复数 words | 过去式 worded',
    'PHRASE: accurate data = 精确的数据 | accurate estimate = 准确的估计',
    'MNE: 准，就是与事实相符',
  ].join('\n');
  const parsed = parseExpansion(raw);
  assert.deepEqual(parsed.synonyms, ['precise', 'exact', 'correct']);
  assert.deepEqual(parsed.antonyms, ['imprecise', 'inaccurate']);
  assert.deepEqual(parsed.forms[0], { label: '复数', value: 'words' });
  assert.deepEqual(parsed.phrases[0], { en: 'accurate data', zh: '精确的数据' });
  assert.equal(parsed.mnemonic, '准，就是与事实相符');
});

test('parseExpansion: 空行与坏行被忽略，不拖垮其它部分', () => {
  const raw = ['随便一句话', 'SYN:', 'ANT: wrong', 'FORM: 坏行', 'PHRASE: =', 'MNE:'].join('\n');
  const parsed = parseExpansion(raw);
  assert.deepEqual(parsed.synonyms, []);
  assert.deepEqual(parsed.antonyms, ['wrong']);
  assert.deepEqual(parsed.forms, []);
  assert.deepEqual(parsed.phrases, []);
  assert.equal(parsed.mnemonic, '');
});

test('parseExpansion: 中英文冒号都接受，全角分隔符也能拆', () => {
  const raw = ['SYN：quick｜fast', 'MNE：记作“快”'].join('\n');
  const parsed = parseExpansion(raw);
  assert.deepEqual(parsed.synonyms, ['quick', 'fast']);
  assert.equal(parsed.mnemonic, '记作“快”');
});

test('parseExpansion: 全空输入返回空结构，不抛错', () => {
  const parsed = parseExpansion('');
  assert.deepEqual(parsed, { synonyms: [], antonyms: [], forms: [], phrases: [], mnemonic: '' });
});
