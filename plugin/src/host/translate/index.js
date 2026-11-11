/**
 * The translation feature's Host half.
 *
 * Two engines, in this order:
 *
 *   local  an OpenAI-compatible server on this machine (LM Studio with hy-mt2-7b
 *          by default). ~0.5 s per sentence, no key, no network.
 *   host   the Host's configured chat model. Slower, used only when the local
 *          server is not running or fails.
 *
 * Documents are parsed locally first (extract.py), then translated as one string.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import { aiError, complete } from '../llm.js';
import { pythonPath } from '../deck/generate.js';
import { expandLocal, localSettings, lookupLocal, parseDictionary, parseExpansion, translateLocal } from './local.js';

const run = promisify(execFile);

const HERE = path.dirname(fileURLToPath(import.meta.url));
const EXTRACT_SCRIPT = path.join(HERE, 'extract.py');

/** One request is capped: this is a translator, not a book pipeline. */
export const MAX_CHARS = 8000;
/** Uploaded documents are capped before parsing. */
export const MAX_BYTES = 30 * 1024 * 1024;

/** Language ids the page offers. `auto` is resolved by the model. */
export const LANGUAGES = ['auto', 'zh', 'en', 'ja', 'ko', 'fr', 'de', 'es'];

const NAME = {
  auto: '自动检测',
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
};

/**
 * Read one language id, falling back to auto.
 * @param {any} value - the raw value.
 * @returns {string} the id.
 */
function lang(value) {
  return LANGUAGES.includes(value) ? value : 'auto';
}

/**
 * Translate one block of text, local engine first.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.provider - resolved provider id.
 * @param {string} input.model - resolved model id.
 * @param {string} input.text - the source text.
 * @param {string} [input.from] - source language id or auto.
 * @param {string} [input.to] - target language id.
 * @param {object} [input.config] - the plugin row config (local engine settings).
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<{translated: string, from: string, to: string, engine: string, ms: number}>} the result.
 */
export async function translateText({ llm, provider, model, text, from = 'auto', to = 'zh', config, sessionId, signal }) {
  const source = typeof text === 'string' ? text.trim() : '';
  if (source === '') throw aiError('先输入要翻译的文字');
  if (source.length > MAX_CHARS) throw aiError(`一次最多翻译 ${MAX_CHARS} 个字符，请分段`);
  const target = LANGUAGES.includes(to) && to !== 'auto' ? to : 'zh';
  const fromId = lang(from);
  const settings = localSettings(config);

  if (settings.enabled) {
    const started = Date.now();
    try {
      const translated = await translateLocal({
        settings,
        text: source,
        fromLabel: fromId === 'auto' ? 'its own language (detect it)' : NAME[fromId],
        toLabel: NAME[target],
        signal,
      });
      if (translated !== '') return { translated, from: fromId, to: target, engine: 'local', ms: Date.now() - started };
    } catch {
      // A missing or busy local server is the normal path on another machine:
      // fall through to the Host model instead of failing the request.
    }
  }

  const started = Date.now();
  const fromLabel = fromId === 'auto' ? 'the source language (detect it)' : NAME[fromId];
  const system = [
    '你是一位专业译者，译文准确、自然、符合目标语言的表达习惯。',
    `把内容从 ${fromLabel} 翻译成 ${NAME[target]}。`,
    '只输出译文本身：不要解释、不要加引号、不要重复原文、不要 markdown 代码块。',
    '保留数字、专有名词、代码、URL 原样；原文分段就保留分段。',
  ].join('\n');
  const translated = await complete({
    llm,
    provider,
    model,
    system,
    user: source,
    maxTokens: Math.min(4096, Math.max(512, Math.ceil(source.length * 2))),
    sessionId,
    signal,
  });
  const clean = translated.replace(/^\s*\n+/, '').trim();
  if (clean === '') throw aiError('模型没有返回译文，请重试');
  return { translated: clean, from: fromId, to: target, engine: 'host', ms: Date.now() - started };
}

/**
 * Dictionary lookup with the same local-first order.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.provider - resolved provider id.
 * @param {string} input.model - resolved model id.
 * @param {string} input.word - the headword.
 * @param {'zh'|'en'} [input.locale] - explanation language.
 * @param {object} [input.config] - plugin row config.
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<object>} `{ dict, engine, ms }`.
 */
export async function lookupWord({ llm, provider, model, word, locale = 'zh', config, sessionId, signal }) {
  const headword = typeof word === 'string' ? word.trim() : '';
  if (headword === '') throw aiError('先输入要查的词');
  if (headword.length > 60) throw aiError('这个词太长了，用句子翻译更合适');
  const settings = localSettings(config);

  if (settings.enabled) {
    const started = Date.now();
    try {
      const dict = await lookupLocal({ settings, word: headword, locale, signal });
      return { dict, engine: 'local', ms: Date.now() - started };
    } catch {
      // fall through to the Host model
    }
  }

  const started = Date.now();
  const zh = locale !== 'en';
  const answer = await complete({
    llm,
    provider,
    model,
    system: zh ? '你是英汉词典编辑。只输出 JSON，不要解释、不要代码块。' : 'You are an English dictionary editor. Output JSON only, no prose.',
    user: zh
      ? `输出 JSON：{"word":"","phonetic":"","senses":[{"pos":"","meaning":"","example":""}],"note":""}。senses 最多 4 条。词条：${headword}`
      : `Output JSON: {"word":"","phonetic":"","senses":[{"pos":"","meaning":"","example":""}],"note":""}. At most 4 senses. Word: ${headword}`,
    maxTokens: 700,
    sessionId,
    signal,
  });
  return { dict: parseDictionary(answer, headword), engine: 'host', ms: Date.now() - started };
}

/**
 * Expand one headword: synonyms, antonyms, word forms, phrases, memory hook.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.provider - resolved provider id.
 * @param {string} input.model - resolved model id.
 * @param {string} input.word - the headword.
 * @param {object} [input.config] - plugin row config.
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<object>} `{ expand, engine, ms }`.
 */
export async function expandWord({ llm, provider, model, word, config, sessionId, signal }) {
  const headword = typeof word === 'string' ? word.trim() : '';
  if (headword === '') throw aiError('先输入要扩词的单词');
  if (headword.length > 60) throw aiError('这个词太长了');
  const settings = localSettings(config);

  if (settings.enabled) {
    const started = Date.now();
    try {
      const expand = await expandLocal({ settings, word: headword, signal });
      if (expand.synonyms.length + expand.antonyms.length + expand.forms.length + expand.phrases.length > 0) {
        return { expand, engine: 'local', ms: Date.now() - started };
      }
    } catch {
      // fall through to the Host model
    }
  }

  const started = Date.now();
  const answer = await complete({
    llm,
    provider,
    model,
    system: '你是英汉词典编辑，只输出规定格式的五行，不要解释。',
    user: [
      `词条：${headword}`,
      '',
      '按下面五行输出，用 | 分隔多项，没有内容就留空：',
      'SYN: 英文近义词，最多 5 个',
      'ANT: 英文反义词，最多 5 个',
      'FORM: 词形，"标签 值"，如 "复数 words"',
      'PHRASE: 搭配，"英文 = 中文"',
      'MNE: 一句中文记忆提示',
    ].join('\n'),
    maxTokens: 600,
    sessionId,
    signal,
  });
  return { expand: parseExpansion(answer), engine: 'host', ms: Date.now() - started };
}

/**
 * Extract the text of one dropped document.
 * @param {object} input - the request.
 * @param {Buffer|Uint8Array} input.bytes - the file bytes.
 * @param {string} input.name - the original file name (extension decides the parser).
 * @returns {Promise<{text: string, chars: number, truncated: boolean}>} the text.
 */
export async function extractDocument({ bytes, name }) {
  const buffer = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes ?? []);
  if (buffer.length === 0) throw aiError('没有收到文件');
  if (buffer.length > MAX_BYTES) throw aiError('文件超过 30 MB，请先拆分');
  if (!existsSync(EXTRACT_SCRIPT)) throw aiError('解析脚本缺失，请重装插件');

  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'cbp-doc-'));
  const ext = path.extname(String(name ?? '')).toLowerCase().replace(/[^.a-z0-9]/g, '').slice(0, 8) || '.txt';
  const source = path.join(dir, `input${ext}`);
  const out = path.join(dir, 'text.json');
  try {
    await fsp.writeFile(source, buffer);
    const { stdout } = await run(pythonPath(), [EXTRACT_SCRIPT, '--in', source, '--out', out], {
      timeout: 120_000,
      maxBuffer: 16 * 1024 * 1024,
    });
    const last = String(stdout).trim().split('\n').filter(Boolean).pop() ?? '{}';
    let parsed;
    try {
      parsed = JSON.parse(last);
    } catch (error) {
      throw aiError('解析脚本返回了无法解析的结果', error);
    }
    if (parsed?.ok !== true) throw aiError(String(parsed?.error ?? '解析失败'));
    return { text: parsed.text, chars: parsed.chars, truncated: parsed.truncated === true };
  } finally {
    await fsp.rm(dir, { recursive: true, force: true });
  }
}
