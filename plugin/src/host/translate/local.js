/**
 * The local translation model (LM Studio / any OpenAI-compatible server).
 *
 * It is 10-20x faster than a hosted chat model for this job and needs no key:
 * hy-mt2-7b answers a sentence in ~0.5 s. The plugin therefore asks the local
 * server first and only falls back to the Host model when it is not running.
 *
 * Nothing here assumes a particular port or model id: both are configurable,
 * and a missing server is a normal state ("not available"), not an error.
 */
import { aiError } from '../llm.js';

/** Defaults match the local LM Studio install this bundle was developed on. */
export const DEFAULT_BASE_URLS = ['http://127.0.0.1:6121/v1', 'http://127.0.0.1:1234/v1'];
export const DEFAULT_MODEL = 'hy-mt2-7b';

/** Han characters: used to check that a Chinese dictionary is really Chinese. */
const HAN = /[\u4e00-\u9fff]/;

/** A local server that has to think for 30 s is not the fast path any more. */
const TIMEOUT_MS = 20_000;

/**
 * Read the local-translator configuration.
 * @param {object} [config] - the plugin row config.
 * @returns {{enabled: boolean, baseUrl: string, baseUrls: string[], model: string}} the settings.
 */
export function localSettings(config) {
  const raw = config !== null && typeof config === 'object' && config.translate !== null && typeof config.translate === 'object' ? config.translate : {};
  const local = raw.local !== null && typeof raw.local === 'object' ? raw.local : {};
  const configured = typeof local.baseUrl === 'string' ? local.baseUrl.trim() : '';
  const model = typeof local.model === 'string' && local.model.trim() !== '' ? local.model.trim() : DEFAULT_MODEL;
  return {
    enabled: local.enabled !== false,
    baseUrl: configured,
    baseUrls: configured === '' ? DEFAULT_BASE_URLS : [configured],
    model,
  };
}

/**
 * Call one OpenAI-compatible chat completion.
 * @param {object} options - the call.
 * @param {string} options.baseUrl - the /v1 base.
 * @param {string} options.model - the model id.
 * @param {Array<object>} options.messages - chat messages.
 * @param {number} [options.maxTokens] - output budget.
 * @param {AbortSignal} [options.signal] - cancellation.
 * @returns {Promise<string>} the answer text.
 */
export async function chat({ baseUrl, model, messages, maxTokens = 700, signal }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const onAbort = () => controller.abort();
  if (signal !== undefined) signal.addEventListener('abort', onAbort, { once: true });
  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ model, messages, max_tokens: maxTokens, stream: false, temperature: 0 }),
      signal: controller.signal,
    });
    if (!response.ok) throw aiError(`本地翻译模型返回 HTTP ${response.status}`);
    const body = await response.json();
    const text = body?.choices?.[0]?.message?.content;
    if (typeof text !== 'string' || text.trim() === '') throw aiError('本地翻译模型返回了空内容');
    return text.trim();
  } catch (error) {
    if (error?.name === 'AbortError') throw aiError('本地翻译模型超时');
    if (error?.code === 'chatbox-pet/ai-failed') throw error;
    throw aiError('本地翻译模型不可用：' + String(error?.message ?? error));
  } finally {
    clearTimeout(timer);
    if (signal !== undefined) signal.removeEventListener('abort', onAbort);
  }
}

/**
 * Is a local server answering?
 * @param {object} settings - from localSettings().
 * @param {AbortSignal} [signal] - cancellation.
 * @returns {Promise<{ok: boolean, baseUrl: string, model: string, models: string[]}>} the probe result.
 */
export async function probeLocal(settings, signal) {
  for (const baseUrl of settings.baseUrls) {
    try {
      const response = await fetch(`${baseUrl.replace(/\/$/, '')}/models`, {
        signal: signal ?? AbortSignal.timeout(1200),
      });
      if (!response.ok) continue;
      const body = await response.json();
      const models = Array.isArray(body?.data) ? body.data.map((item) => String(item?.id ?? '')) : [];
      return { ok: true, baseUrl, model: settings.model, models };
    } catch {
      // try the next candidate
    }
  }
  return { ok: false, baseUrl: '', model: settings.model, models: [] };
}

/**
 * Translate one segment with the local model.
 * @param {object} options - the call.
 * @param {object} options.settings - from localSettings().
 * @param {string} options.text - the source text.
 * @param {string} options.fromLabel - human language name, or a detect instruction.
 * @param {string} options.toLabel - human language name.
 * @param {AbortSignal} [options.signal] - cancellation.
 * @returns {Promise<string>} the translation.
 */
export async function translateLocal({ settings, text, fromLabel, toLabel, signal }) {
  const instruction = [
    `Translate the following segment from ${fromLabel} into ${toLabel}, without additional explanation.`,
    'Keep numbers, proper nouns, code and URLs unchanged; keep paragraph breaks.',
    '',
    text,
  ].join('\n');
  const answer = await chat({ baseUrl: settings.baseUrl, model: settings.model, messages: [{ role: 'user', content: instruction }], signal });
  return cleanTranslation(answer);
}

/**
 * Look a word up in dictionary shape with the local model.
 * @param {object} options - the call.
 * @param {object} options.settings - from localSettings().
 * @param {string} options.word - the headword.
 * @param {'zh'|'en'} options.locale - explanation language.
 * @param {AbortSignal} [options.signal] - cancellation.
 * @returns {Promise<object>} `{ word, phonetic, senses, note }`.
 */
export async function lookupLocal({ settings, word, locale, signal }) {
  const zh = locale !== 'en';
  const system = zh
    ? '你是英汉词典编辑，面向中文读者。只输出 JSON，不要解释、不要代码块。释义必须用简体中文，例句保留英文原文。'
    : 'You are an English dictionary editor. Output JSON only, no prose, no code fences.';
  const user = zh
    ? [
        '输出 JSON：{"word":"","phonetic":"国际音标","senses":[{"pos":"词性缩写，如 adj. / n. / v.","meaning":"简体中文释义","example":"一句英文例句"}],"note":"一句中文辨析或用法提示"}',
        '要求：',
        '- meaning 必须是中文（可以带英文近义词做补充），不要只给英文释义；',
        '- 一词多义就拆成多条 sense，最多 4 条；',
        '- example 是英文例句，要能体现该义项；',
        '- 没有把握的字段留空字符串。',
        '',
        `词条：${word}`,
      ].join('\n')
    : `Output JSON: {"word":"","phonetic":"IPA","senses":[{"pos":"part of speech","meaning":"definition","example":"one natural example"}],"note":"one usage note"}\nAt most 4 senses; leave a field empty when unsure.\nWord: ${word}`;
  const answer = await chat({ baseUrl: settings.baseUrl, model: settings.model, maxTokens: 700, messages: [{ role: 'system', content: system }, { role: 'user', content: user }], signal });
  let dict = parseDictionary(answer, word);
  // A small model occasionally ignores the language instruction and explains the
  // word in the source language. One retry with the requirement stated first is
  // cheaper than showing the reader a dictionary in the wrong language.
  if (zh && !dict.senses.some((sense) => HAN.test(sense.meaning))) {
    const retryUser = `用简体中文解释这个词，释义必须是中文。只输出 JSON：{"word":"","phonetic":"","senses":[{"pos":"","meaning":"","example":""}],"note":""}\n词条：${word}`;
    const retry = await chat({ baseUrl: settings.baseUrl, model: settings.model, maxTokens: 700, messages: [{ role: 'user', content: retryUser }], signal });
    const second = parseDictionary(retry, word);
    if (second.senses.some((sense) => HAN.test(sense.meaning))) dict = second;
  }
  return dict;
}

/**
 * Ask the local model for the word's family: synonyms, antonyms, forms, phrases
 * and a memory hook.
 *
 * The answer is line-oriented on purpose. A JSON object with five arrays is
 * where a 7B model starts mis-quoting (measured: unbalanced quotes around the
 * antonyms); "PREFIX: a | b | c" survives that, and a missing line is simply an
 * empty section instead of a parse failure.
 * @param {object} options - the call.
 * @param {object} options.settings - from localSettings().
 * @param {string} options.word - the headword.
 * @param {AbortSignal} [options.signal] - cancellation.
 * @returns {Promise<object>} `{ synonyms, antonyms, forms, phrases, mnemonic }`.
 */
export async function expandLocal({ settings, word, signal }) {
  const user = [
    `词条：${word}`,
    '',
    '按下面五行输出，每行一个前缀，用 | 分隔多项。没有内容的行留空前缀（例如 "ANT:"）：',
    'SYN: 英文近义词，最多 5 个',
    'ANT: 英文反义词，最多 5 个',
    'FORM: 该词真实存在的词形，格式 "标签 值"，如 "复数 words"、"过去式 worked"、"比较级 more accurate"',
    'PHRASE: 常见搭配，格式 "英文 = 中文释义"，最多 5 个',
    'MNE: 一句中文记忆提示',
    '',
    '只输出这五行，不要解释。',
  ].join('\n');
  const answer = await chat({ baseUrl: settings.baseUrl, model: settings.model, messages: [{ role: 'user', content: user }], maxTokens: 600, signal });
  return parseExpansion(answer, word);
}

/**
 * Parse the five-line expansion answer.
 * @param {string} raw - the model's answer.
 * @param {string} [word] - the headword, used to drop forms that just repeat it.
 * @returns {{synonyms: string[], antonyms: string[], forms: Array<{label: string, value: string}>, phrases: Array<{en: string, zh: string}>, mnemonic: string}} the sections.
 */
export function parseExpansion(raw, word = '') {
  const sections = { synonyms: [], antonyms: [], forms: [], phrases: [], mnemonic: '' };
  for (const line of String(raw ?? '').split('\n')) {
    const match = /^\s*(SYN|ANT|FORM|PHRASE|MNE)\s*[:：]\s*(.*)$/i.exec(line);
    if (match === null) continue;
    const kind = match[1].toUpperCase();
    const body = match[2].trim();
    if (body === '') continue;
    const parts = body.split(/\s*[|｜]\s*/).map((part) => part.trim()).filter(Boolean);
    if (kind === 'MNE') {
      sections.mnemonic = body.slice(0, 200);
      continue;
    }
    if (kind === 'SYN' || kind === 'ANT') {
      const list = parts.map((part) => part.replace(/^["'\[]|[\]"']$/g, '').trim()).filter((part) => /^[a-zA-Z][a-zA-Z' -]*$/.test(part));
      sections[kind === 'SYN' ? 'synonyms' : 'antonyms'] = list.slice(0, 5);
      continue;
    }
    if (kind === 'FORM') {
      sections.forms = parts
        .map((part) => {
          const pieces = part.split(/\s+/);
          if (pieces.length < 2) return null;
          return { label: pieces[0].slice(0, 12), value: pieces.slice(1).join(' ').slice(0, 40) };
        })
        // "形容词 accurate" names the headword itself; that is not a form.
        .filter((form) => form !== null && form.value.trim().toLowerCase() !== String(word ?? '').trim().toLowerCase())
        .slice(0, 6);
      continue;
    }
    if (kind === 'PHRASE') {
      sections.phrases = parts
        .map((part) => {
          const [en, zh] = part.split(/\s*=\s*/);
          if (typeof en !== 'string' || en.trim() === '') return null;
          return { en: en.trim().slice(0, 60), zh: (zh ?? '').trim().slice(0, 60) };
        })
        .filter(Boolean)
        .slice(0, 5);
    }
  }
  return sections;
}

/**
 * Strip the wrappers a chat model sometimes adds around a translation.
 * @param {string} raw - the model's answer.
 * @returns {string} the translation body.
 */
export function cleanTranslation(raw) {
  let value = String(raw ?? '').trim();
  if (value.startsWith('```')) value = value.replace(/^```[a-zA-Z]*\s*\n?/, '').replace(/\n?```\s*$/, '');
  // A leading label ("译文：", "Translation:") carries no meaning in the result.
  value = value.replace(/^(译文|翻译|结果|translation|result)\s*[:：]\s*/i, '').trim();
  const lines = value.split('\n');
  if (lines.length > 1 && /^[^。！？\n]{0,24}[：:]$/.test(lines[0].trim())) lines.shift();
  return lines.join('\n').trim();
}

/**
 * Parse and bound a dictionary answer.
 * @param {string} raw - the model's answer.
 * @param {string} word - the headword asked for.
 * @returns {object} `{ word, phonetic, senses, note }`.
 * @throws {Error} when nothing usable comes back.
 */
export function parseDictionary(raw, word) {
  let text = String(raw ?? '').trim();
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start >= 0 && end > start) text = text.slice(start, end + 1);
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (error) {
    throw aiError('词典结果无法解析', error);
  }
  const senses = (Array.isArray(parsed?.senses) ? parsed.senses : [])
    .map((sense) => ({
      pos: typeof sense?.pos === 'string' ? sense.pos.trim().slice(0, 16) : '',
      meaning: typeof sense?.meaning === 'string' ? sense.meaning.trim().slice(0, 120) : '',
      example: typeof sense?.example === 'string' ? sense.example.trim().slice(0, 200) : '',
    }))
    .filter((sense) => sense.meaning !== '')
    .slice(0, 4);
  if (senses.length === 0) throw aiError('词典没有返回释义');
  return {
    word: typeof parsed?.word === 'string' && parsed.word.trim() !== '' ? parsed.word.trim() : word,
    phonetic: typeof parsed?.phonetic === 'string' ? parsed.phonetic.trim().slice(0, 60) : '',
    senses,
    note: typeof parsed?.note === 'string' ? parsed.note.trim().slice(0, 200) : '',
  };
}
