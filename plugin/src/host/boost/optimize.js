/**
 * The rewriter: gather the user's own context, ask the Host's model for one
 * better prompt, hand it back.
 *
 * The Host owns the model and the stores, so this module never touches a
 * provider or a browser. Everything is injectable, which is what makes the
 * behaviour testable without a model.
 *
 * Efficiency is part of the contract, not a later optimisation:
 *   - the collectors run in parallel under their own timeouts (sources/index.js);
 *   - the model call streams: the caller sees the first text within a second or
 *     two instead of waiting for the whole answer;
 *   - one request per draft is in flight at a time (single-flight);
 *   - a short-lived cache makes pressing the button twice on the same draft
 *     instant, while a changed draft always re-queries.
 */
import { createHash } from 'node:crypto';

import { collectContext } from './sources/index.js';
import { buildSystemPrompt, buildUserPrompt } from './prompt.js';

const DRAFT_LIMIT = 4000;
const HINT_LIMIT = 400;
const CACHE_TTL_MS = 120_000;
const CACHE_MAX = 32;
const NO_MODEL_MESSAGE = '宿主未配置可用模型，提示词增强暂时不可用';
const NO_CONTEXT_MESSAGE = '还没有可用的记忆、听记、读书笔记或瞬间，先写一句草稿再做增强';
const EMPTY_MESSAGE = 'AI 没有返回可用的提示词，请重试';

/** Rewritten results, keyed by mode + locale + draft hash. */
const cache = new Map();

/** One pending rewrite per cache key, so a double click cannot fork two model calls. */
const inFlight = new Map();

/**
 * Read a string field and trim it.
 * @param {any} value - any value.
 * @returns {string} the trimmed string, or '' when the value is not a string.
 */
function text(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * Build an error with a Chinese, user-facing message.
 * @param {string} message - the Chinese message.
 * @param {any} [cause] - the underlying failure, kept for diagnosis only.
 * @returns {Error} the error to throw.
 */
function aiError(message, cause) {
  const error = new Error(message);
  error.code = 'prompt-boost/failed';
  if (cause !== undefined) error.cause = cause;
  return error;
}

/**
 * Hash the request identity the cache is keyed by.
 * @param {'improve'|'compose'} mode - the mode.
 * @param {string} locale - the output language.
 * @param {string} draft - the draft.
 * @returns {string} the cache key.
 */
function cacheKey(mode, locale, draft) {
  return createHash('sha1').update(`${mode}\u0000${locale}\u0000${draft}`).digest('hex');
}

/**
 * Drop expired entries and keep the cache bounded.
 * @param {number} now - the current epoch ms.
 */
function pruneCache(now) {
  for (const [key, entry] of cache) {
    if (now - entry.at > CACHE_TTL_MS) cache.delete(key);
  }
  while (cache.size > CACHE_MAX) {
    const oldest = cache.keys().next();
    if (oldest.done) break;
    cache.delete(oldest.value);
  }
}

/**
 * Ask the model for one completion, reporting deltas as they arrive.
 *
 * A prepared call binds one adapter generation to one dispatch, so the stream
 * options are built from `prepared.config` rather than rebuilt by hand.
 * @param {object} options - the call parameters.
 * @returns {Promise<string>} the model's answer.
 */
async function complete({ llm, provider, model, system, user, temperature, maxTokens, signal, onDelta, sessionId }) {
  // A temperature the model does not accept fails the whole call, so it is only
  // sent when the row asked for one; the adapter's resolved config decides otherwise.
  const asked = { provider, model, maxTokens };
  if (Number.isFinite(temperature)) asked.temperature = temperature;
  // Some providers route per conversation (OpenCode requires the header); the
  // Session id is what the adapter turns into that header.
  if (typeof sessionId === 'string' && sessionId !== '') asked.sessionId = sessionId;
  // A reasoning model left on its default effort can spend the whole token
  // budget thinking and return no text at all (measured 2026-11-07). Ask for
  // the lowest effort the model actually offers; the picker is capability-
  // driven, so a model without reasoning metadata is left alone.
  const preferLow = (controls, info) => {
    const efforts = Array.isArray(info?.reasoning?.efforts) ? info.reasoning.efforts.map((effort) => effort?.id) : [];
    const pick = ['off', 'minimal', 'low', 'medium', 'high', 'max'].find((id) => efforts.includes(id));
    return pick === undefined ? controls : { ...controls, reasoningEffort: pick };
  };
  const prepared = await llm.prepareCall(asked, signal, preferLow);
  const config = prepared?.config ?? asked;
  const request = {
    ...config,
    messages: [{ role: 'user', content: [{ type: 'text', text: user }] }],
    system,
    signal,
  };
  const stream = prepared.stream(request);
  let answer = '';
  let failure;
  for await (const chunk of stream) {
    if (chunk === null || typeof chunk !== 'object') continue;
    if (chunk.type === 'text-delta' && typeof chunk.text === 'string') {
      answer += chunk.text;
      if (typeof onDelta === 'function') onDelta(chunk.text);
      continue;
    }
    if (chunk.type === 'finish') {
      const reason = chunk.reason;
      if (reason !== null && typeof reason === 'object' && (reason.kind === 'error' || reason.kind === 'aborted')) {
        failure = reason;
      }
    }
  }
  if (failure !== undefined) {
    // Keep the adapter's own reason for the Host log; the reader gets a short line.
    throw aiError('AI 生成失败，请重试', new Error(JSON.stringify(failure).slice(0, 400)));
  }
  return answer.trim();
}

/**
 * Keep only the usable, sendable body of the model's answer.
 *
 * Models still occasionally wrap the prompt in fences, a heading, or quotes;
 * a prompt that starts with "```" is worse than useless in a composer.
 * @param {string} raw - the model's answer.
 * @returns {string} the prompt body.
 */
export function sanitizePrompt(raw) {
  let value = text(raw);
  if (value === '') return '';
  if (value.startsWith('```')) {
    value = value.replace(/^```[a-zA-Z]*\s*\n?/, '').replace(/\n?```\s*$/, '');
  }
  // A heading line such as "优化后的提示词：" carries no meaning inside the draft.
  const lines = value.split('\n');
  if (lines.length > 1 && /^[^。！？\n]{0,20}[：:]$/.test(lines[0].trim()) && !/^[-*\d]/.test(lines[1].trim())) {
    lines.shift();
  }
  value = lines.join('\n').trim();
  if (value.length >= 2 && /^[「“"']/.test(value) && /[」”"']$/.test(value)) {
    value = value.slice(1, -1).trim();
  }
  return value.slice(0, DRAFT_LIMIT);
}

/**
 * Summarise the collectors into the chips the client renders.
 * @param {object} context - the collector result.
 * @returns {Array<{id: string, label: string, count: number}>} the chips.
 */
function sourceSummary(context) {
  const sources = Array.isArray(context?.sources) ? context.sources : [];
  return sources
    .filter((source) => Array.isArray(source?.items) && source.items.length > 0)
    .map((source) => ({ id: String(source.id), label: String(source.label ?? source.id), count: source.items.length }));
}

/**
 * Prepare one request from the client payload.
 * @param {any} payload - the client payload.
 * @returns {{ draft: string, contextHint: string, locale: 'zh'|'en', mode: 'improve'|'compose' }} the request.
 */
function prepare(payload) {
  const draft = text(payload?.draft).slice(0, DRAFT_LIMIT);
  const contextHint = text(payload?.contextHint).slice(0, HINT_LIMIT);
  const locale = payload?.locale === 'en' ? 'en' : 'zh';
  // An empty draft has no intent to preserve; the compose prompt is the useful one.
  const mode = payload?.mode === 'compose' || draft === '' ? 'compose' : 'improve';
  return { draft, contextHint, locale, mode };
}

/**
 * Run one rewrite and report progress through `emit`.
 * @param {object} request - the checked request.
 * @param {object} deps - the injected dependencies.
 * @param {(event: object) => void} emit - the progress sink; may be a no-op.
 * @returns {Promise<object>} the result body.
 */
async function rewrite(request, deps, emit) {
  const startedAt = Date.now();
  const config = deps.config ?? {};

  let context = { sources: [], totalChars: 0 };
  try {
    context = await collectContext({
      query: request.draft !== '' ? request.draft : request.contextHint,
      now: startedAt,
      config,
    });
  } catch (error) {
    // A broken collection is a degraded experience, not a failed request: the
    // model can still improve the draft without personal context.
    context = { sources: [], totalChars: 0, failure: error instanceof Error ? error.message : String(error) };
  }

  const chips = sourceSummary(context);
  emit({ type: 'sources', sources: chips, mode: request.mode });
  if (request.mode === 'compose' && chips.length === 0) throw aiError(NO_CONTEXT_MESSAGE);

  const llmConfig = config.llm ?? {};
  const selection = deps.agentDefaultModel.currentSelection();
  // A row may pin a fast model for this feature; otherwise the user's default.
  const provider = text(llmConfig.provider) !== '' ? text(llmConfig.provider) : text(selection?.provider);
  const model = text(llmConfig.model) !== '' ? text(llmConfig.model) : text(selection?.model);
  if (provider === '' || model === '') throw aiError(NO_MODEL_MESSAGE);


  const controller = new AbortController();
  let timedOut = false;
  const timeoutMs = Number.isFinite(llmConfig.timeoutMs) && llmConfig.timeoutMs > 0 ? llmConfig.timeoutMs : 30000;
  let timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  // A disconnected browser must stop paying for the model call.
  const outerSignal = deps.signal;
  const onOuterAbort = () => controller.abort();
  if (outerSignal !== undefined && outerSignal !== null && typeof outerSignal.addEventListener === 'function') {
    if (outerSignal.aborted) controller.abort();
    else outerSignal.addEventListener('abort', onOuterAbort, { once: true });
  }

  /**
   * One model attempt with its own time budget.
   *
   * A reasoning model can spend the whole token budget thinking and return no
   * text at all — measured at roughly one attempt in three on MiniMax M3.1
   * Flash (2026-11-07). The caller retries once with a larger budget, so each
   * attempt gets a fresh timeout instead of sharing one window.
   * @param {number} maxTokens - the token budget for this attempt.
   * @returns {Promise<string>} the model's answer.
   */
  const attempt = async (maxTokens) => {
    timedOut = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);
    let streamed = '';
    const answer = await complete({
      llm: deps.llm,
      provider,
      model,
      system: buildSystemPrompt(request.mode, request.locale),
      user: buildUserPrompt({ ...request, context }),
      temperature: llmConfig.temperature,
      maxTokens,
      signal: controller.signal,
      sessionId: deps.sessionId,
      onDelta: (delta) => {
        streamed += delta;
        emit({ type: 'delta', text: delta });
      },
    });
    return { answer, streamed };
  };

  try {
    const baseTokens = Number.isFinite(llmConfig.maxTokens) ? llmConfig.maxTokens : 3000;
    let first = await attempt(baseTokens);
    if (first.answer.trim() === '') {
      // No text at all: the budget was too small for the thinking. One more
      // attempt with double the room is cheaper than showing the user an error.
      first = await attempt(baseTokens * 2);
    }
    const answer = first.answer;
    const streamed = first.streamed;

    if (request.mode === 'compose' && /^NO_CONTEXT$/i.test(answer.trim())) throw aiError(NO_CONTEXT_MESSAGE);
    const prompt = sanitizePrompt(answer);
    if (prompt === '') throw aiError(EMPTY_MESSAGE);
    if (streamed.trim() !== answer.trim()) {
      // The adapter did not stream (or the answer was wrapped); the client must
      // still end up with the final body, so send the whole prompt once.
      emit({ type: 'replace', text: prompt });
    }

    return {
      prompt,
      mode: request.mode,
      sources: chips,
      elapsedMs: Date.now() - startedAt,
      cached: false,
    };
  } catch (error) {
    if (timedOut) throw aiError('AI 生成超时，请稍后再试', error);
    if (error?.name === 'AbortError') throw aiError('请求已取消', error);
    if (typeof error?.message === 'string' && error.message !== '') throw error;
    throw aiError('AI 生成失败，请重试', error);
  } finally {
    clearTimeout(timer);
    if (outerSignal !== undefined && outerSignal !== null && typeof outerSignal.removeEventListener === 'function') {
      outerSignal.removeEventListener('abort', onOuterAbort);
    }
  }
}

/**
 * Shared entry: cache, single-flight, then `rewrite`.
 * @param {object} request - the checked request.
 * @param {object} deps - the injected dependencies.
 * @param {(event: object) => void} emit - the progress sink.
 * @returns {Promise<object>} the result body.
 */
async function run(request, deps, emit) {
  const key = cacheKey(request.mode, request.locale, request.draft);
  const now = Date.now();
  pruneCache(now);
  const hit = cache.get(key);
  if (hit !== undefined) {
    const result = { ...hit.result, cached: true, elapsedMs: 0 };
    emit({ type: 'sources', sources: result.sources, mode: result.mode });
    emit({ type: 'replace', text: result.prompt });
    return result;
  }

  const pending = inFlight.get(key);
  if (pending !== undefined) return pending;

  const promise = (async () => {
    const result = await rewrite(request, deps, emit);
    cache.set(key, { at: Date.now(), result });
    pruneCache(Date.now());
    return result;
  })();
  inFlight.set(key, promise);
  try {
    return await promise;
  } finally {
    inFlight.delete(key);
  }
}

/**
 * Validate the Host services the rewrite depends on.
 * @param {object} deps - the injected dependencies.
 * @returns {void}
 * @throws {Error} with a Chinese message when the Host cannot serve the request.
 */
function requireServices(deps) {
  const { llm, agentDefaultModel } = deps;
  if (llm === undefined || llm === null || typeof llm.prepareCall !== 'function') throw aiError(NO_MODEL_MESSAGE);
  if (agentDefaultModel === undefined || agentDefaultModel === null || typeof agentDefaultModel.currentSelection !== 'function') {
    throw aiError(NO_MODEL_MESSAGE);
  }
}

/**
 * Rewrite one draft prompt with the user's own context, without streaming.
 *
 * @param {any} payload - the client payload.
 * @param {object} deps - the injected dependencies.
 * @returns {Promise<object>} `{ prompt, mode, sources, elapsedMs, cached }`.
 * @throws {Error} with a Chinese message when the request cannot be served.
 */
export async function optimizePrompt(payload, deps = {}) {
  requireServices(deps);
  return run(prepare(payload), deps, () => {});
}

/**
 * Rewrite one draft prompt with the user's own context, streaming progress.
 *
 * The sink receives, in order: one `sources` event (as soon as collection is
 * done), zero or more `delta` events, optionally one `replace` event when the
 * adapter did not stream, and — only on success — the caller's `done` event is
 * built from the returned result.
 * @param {any} payload - the client payload.
 * @param {object} deps - the injected dependencies.
 * @param {(event: object) => void} emit - the progress sink.
 * @returns {Promise<object>} `{ prompt, mode, sources, elapsedMs, cached }`.
 */
export async function optimizePromptStream(payload, deps = {}, emit = () => {}) {
  requireServices(deps);
  return run(prepare(payload), deps, emit);
}

/**
 * Exposed for tests and for the diagnostic route.
 * @returns {void} clears the rewrite cache.
 */
export function clearOptimizeCache() {
  cache.clear();
  inFlight.clear();
}
