/**
 * Supermemory collector — the user's long-term memory as one context source.
 *
 * Two requests are needed because the store has two useful reads and they are
 * not the same endpoint:
 *
 *   - with a draft (`query !== ''`) the hybrid search endpoint ranks memories
 *     by meaning against the draft;
 *   - without a draft (compose mode with no conversation hint) the search
 *     endpoint rejects an empty query with HTTP 400, so the list endpoint is
 *     used to fetch the most recently written memories instead — that is the
 *     "pure recency" the contract asks compose mode for.
 *
 * A dead server, a missing key, a slow search and a malformed body are all
 * degraded to `{ items: [], error }`; this module never throws.
 */
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';

const DEFAULT_BASE_URL = 'http://127.0.0.1:6767';
const DEFAULT_NAMESPACE = 'dh-memory';
const DEFAULT_KEY_FILE = join(homedir(), '.supermemory', 'api-key');
const DEFAULT_TIMEOUT_MS = 1200;
const MAX_TIMEOUT_MS = 1200;
const DEFAULT_LIMIT = 5;
const MAX_LIMIT = 5;

/**
 * Is the value a plain object?
 * @param {any} value - any value.
 * @returns {boolean} true for non-array objects.
 */
function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Read a trimmed string, with a fallback.
 * @param {any} value - the raw value.
 * @param {string} fallback - the default.
 * @returns {string} the trimmed value or the fallback.
 */
function text(value, fallback = '') {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : fallback;
}

/**
 * Clamp an integer into a range.
 * @param {any} value - the raw value.
 * @param {number} min - the lower bound.
 * @param {number} max - the upper bound.
 * @param {number} fallback - the value when the input is not usable.
 * @returns {number} the clamped integer.
 */
function clampInt(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, Math.round(number)));
}

/**
 * Resolve the memory branch of the collector config.
 * @param {any} config - the whole collector config.
 * @returns {object} the resolved options.
 */
function resolveOptions(config) {
  const memory = isRecord(config?.memory) ? config.memory : {};
  const injectedFetch = typeof memory.fetch === 'function'
    ? memory.fetch
    : typeof config?.fetch === 'function'
      ? config.fetch
      : globalThis.fetch;
  return {
    baseUrl: text(memory.baseUrl, DEFAULT_BASE_URL).replace(/\/+$/, ''),
    namespace: text(memory.namespace, DEFAULT_NAMESPACE),
    apiKey: text(memory.apiKey, ''),
    keyFile: text(memory.keyFile ?? memory.apiKeyPath, DEFAULT_KEY_FILE),
    limit: clampInt(memory.limit, 1, MAX_LIMIT, DEFAULT_LIMIT),
    timeoutMs: clampInt(memory.timeoutMs, 1, MAX_TIMEOUT_MS, DEFAULT_TIMEOUT_MS),
    fetchImpl: injectedFetch,
  };
}

/**
 * Read the bearer key: the explicit override first, then the key file.
 * @param {object} options - resolved options.
 * @returns {Promise<string>} the trimmed key, or ''.
 */
async function readApiKey(options) {
  if (options.apiKey !== '') return options.apiKey;
  try {
    const raw = await readFile(options.keyFile, 'utf8');
    return typeof raw === 'string' ? raw.trim() : '';
  } catch {
    return '';
  }
}

/**
 * Read and parse a fetch response without letting JSON errors escape.
 * @param {Response} response - the HTTP response.
 * @returns {Promise<{ok: boolean, status: number, body: any, raw: string}>} the parsed result.
 */
async function readResponse(response) {
  const status = typeof response?.status === 'number' ? response.status : 0;
  let raw = '';
  try {
    raw = await response.text();
  } catch {
    raw = '';
  }
  let body;
  if (raw !== '') {
    try {
      body = JSON.parse(raw);
    } catch {
      body = undefined;
    }
  }
  return { ok: response?.ok === true, status, body, raw };
}

/**
 * Turn one raw search hit into a normalised item.
 * @param {any} hit - the raw hit.
 * @returns {{text: string, similarity?: number, at?: number}|null} the item, or null.
 */
function searchItem(hit) {
  if (!isRecord(hit)) return null;
  const body = text(hit.memory) || text(hit.content) || text(hit.text);
  if (body === '') return null;
  const item = { text: body };
  const similarity = Number(hit.similarity);
  if (Number.isFinite(similarity)) item.similarity = similarity;
  const at = temporalAt(hit);
  if (at > 0) item.at = at;
  return item;
}

/**
 * Turn one raw list record into a normalised item.
 * @param {any} hit - the raw record.
 * @returns {{text: string, at?: number}|null} the item, or null.
 */
function listItem(hit) {
  if (!isRecord(hit)) return null;
  const body = text(hit.memory) || text(hit.content) || text(hit.text);
  if (body === '') return null;
  const item = { text: body };
  const at = temporalAt(hit);
  if (at > 0) item.at = at;
  return item;
}

/**
 * Derive an item timestamp from a memory record's metadata.
 * @param {any} hit - the raw record.
 * @returns {number} epoch ms, or 0.
 */
function temporalAt(hit) {
  if (!isRecord(hit)) return 0;
  const metadata = isRecord(hit.metadata) ? hit.metadata : {};
  const eventStart = Number(metadata.temporalEventStartMs);
  if (Number.isFinite(eventStart) && eventStart > 0) return eventStart;
  const system = isRecord(hit.system) ? hit.system : {};
  for (const value of [system.createdAt, system.updatedAt, hit.createdAt, metadata.eventDate]) {
    if (typeof value === 'string' && value.trim() !== '') {
      const parsed = Date.parse(value);
      if (Number.isFinite(parsed) && parsed > 0) return parsed;
    }
    if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
      return value < 1e11 ? value * 1000 : value;
    }
  }
  return 0;
}

/**
 * Describe a fetch failure in the user's language.
 * @param {any} error - the thrown value.
 * @param {number} timeoutMs - the configured timeout.
 * @returns {string} a short Chinese message.
 */
function describeFailure(error, timeoutMs) {
  const name = typeof error?.name === 'string' ? error.name : '';
  const code = typeof error?.cause?.code === 'string'
    ? error.cause.code
    : typeof error?.code === 'string'
      ? error.code
      : '';
  if (name === 'TimeoutError' || name === 'AbortError') return `记忆检索超时（${timeoutMs}ms）`;
  if (code === 'ECONNREFUSED' || code === 'ECONNRESET' || code === 'ENOTFOUND' || name === 'TypeError') {
    return '记忆服务不可用';
  }
  if (error instanceof SyntaxError) return '记忆服务返回了无法解析的内容';
  return '记忆检索失败';
}

/**
 * Collect long-term memories relevant to the draft.
 * @param {object} options - the collector input.
 * @param {any} options.query - the draft; '' falls back to the newest memories.
 * @param {object} options.config - the whole collector config.
 * @returns {Promise<{items: Array<object>, error?: string}>} the collected items.
 */
export async function collectMemory({ query = '', config = {} } = {}) {
  const options = resolveOptions(config);
  const fetchImpl = options.fetchImpl;
  if (typeof fetchImpl !== 'function') {
    return { items: [], error: '记忆检索不可用（当前环境没有 fetch）' };
  }
  const apiKey = await readApiKey(options);
  if (apiKey === '') return { items: [], error: '没有可用的记忆密钥' };

  // An explicitly referenced timer, not `AbortSignal.timeout`: the signal's own
  // timer does not keep the event loop alive, and a fetch that never settles
  // must still be aborted deterministically (the tests run with no server
  // handles keeping the loop busy).
  const controller = new AbortController();
  const timeoutError = new Error('memory search timed out');
  timeoutError.name = 'TimeoutError';
  let timer;
  try {
    timer = setTimeout(() => controller.abort(timeoutError), options.timeoutMs);
  } catch {
    timer = undefined;
  }

  const draft = typeof query === 'string' ? query.trim() : '';
  const endpoint = draft === ''
    ? `${options.baseUrl}/ns/${encodeURIComponent(options.namespace)}/list/memories?limit=${options.limit}&sort=createdAt&order=desc`
    : `${options.baseUrl}/ns/${encodeURIComponent(options.namespace)}/search`;

  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: draft === ''
        ? '{}'
        : JSON.stringify({ query: draft, limit: options.limit, searchMode: 'hybrid' }),
      signal: controller.signal,
    });
    const parsed = await readResponse(response);
    if (!parsed.ok) {
      if (parsed.status === 401 || parsed.status === 403) return { items: [], error: '记忆服务拒绝访问' };
      return { items: [], error: `记忆服务返回 HTTP ${parsed.status}` };
    }
    if (parsed.body === undefined) return { items: [], error: '记忆服务返回了无法解析的内容' };
    const hits = draft === ''
      ? Array.isArray(parsed.body?.memories) ? parsed.body.memories : null
      : Array.isArray(parsed.body?.results) ? parsed.body.results : null;
    if (hits === null) return { items: [], error: '记忆服务返回了无法识别的数据结构' };
    const items = [];
    for (const hit of hits) {
      const item = draft === '' ? listItem(hit) : searchItem(hit);
      if (item !== null) items.push(item);
    }
    return { items };
  } catch (error) {
    return { items: [], error: describeFailure(error, options.timeoutMs) };
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}
