/**
 * The translation feature's Host half.
 *
 * Text goes through the Host's own model, so there is no third-party MT key and
 * no sentence leaving the machine beyond the model call the reader already
 * configured. Documents are parsed locally first (extract.py), then translated
 * as one string.
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
 * Translate one block of text.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.provider - resolved provider id.
 * @param {string} input.model - resolved model id.
 * @param {string} input.text - the source text.
 * @param {string} [input.from] - source language id or auto.
 * @param {string} [input.to] - target language id.
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<{translated: string, from: string, to: string}>} the result.
 */
export async function translateText({ llm, provider, model, text, from = 'auto', to = 'zh', sessionId, signal }) {
  const source = typeof text === 'string' ? text.trim() : '';
  if (source === '') throw aiError('先输入要翻译的文字');
  if (source.length > MAX_CHARS) throw aiError(`一次最多翻译 ${MAX_CHARS} 个字符，请分段`);
  const target = LANGUAGES.includes(to) && to !== 'auto' ? to : 'zh';
  const fromId = lang(from);
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
  return { translated: clean, from: fromId, to: target };
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
