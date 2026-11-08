/**
 * Prompt Boost — the browser half's state.
 *
 * Two slots (the tool-row button and the dock chip/panel) have to agree on one
 * running request, one streamed result, one collapsed/expanded view and one
 * undo, and neither may look the other up in the DOM. This module is that agreement: a tiny external
 * store with `subscribe`/`getSnapshot` for `useSyncExternalStore`.
 *
 * State is keyed by the composer's `inputActions` face. That object has one
 * stable identity per session, so two sessions never share a panel, and the
 * two slots of the same composer always do. The store is plain JavaScript —
 * no React, no DOM — so the streaming reader and the cache stay testable
 * outside a browser.
 *
 * The request is a `text/event-stream` read: `sources` first (chips paint in
 * ~150ms), then `delta` chunks into the textarea, then `done`. A failure before
 * any event retries once over the plain JSON route; a cached repeat answers in
 * one tick.
 */

import { petSound } from '../sound.js';

/** The exact route the Host half serves. */
export const ROUTE = '/api/chatbox-pet/boost';

/** The draft cap the Host enforces; the client truncates first. */
const DRAFT_LIMIT = 4000;

/** Client-side result cache lifetime: reopening the same draft is instant. */
const CACHE_TTL_MS = 120_000;

/** Upper bound on cached drafts held in the page. */
const CACHE_MAX = 24;

/** How long the "replaced · undo" row stays after applying. */
const UNDO_MS = 8000;

/** Abort a stream that stays silent this long (slow model, dead socket). */
const STREAM_IDLE_MS = 25_000;

/**
 * The timers the store owns, injectable so a test can run them by hand.
 * @param {object} value - partial overrides.
 * @returns {object} the timer face.
 */
function timerFace(value) {
  return {
    set: typeof value?.set === 'function' ? value.set : (fn, ms) => setTimeout(fn, ms),
    clear: typeof value?.clear === 'function' ? value.clear : (handle) => clearTimeout(handle),
  };
}

/**
 * Truncate the draft exactly like the Host does.
 * @param {string} value - the draft.
 * @returns {string} the capped draft.
 */
function capDraft(value) {
  const text = typeof value === 'string' ? value : '';
  return text.length > DRAFT_LIMIT ? text.slice(0, DRAFT_LIMIT) : text;
}

/**
 * The initial per-session state.
 * @returns {object} state.
 */
function initialState() {
  return {
    phase: 'idle',
    mode: 'improve',
    prompt: '',
    seed: '',
    sources: [],
    elapsedMs: null,
    cached: false,
    error: null,
    undo: null,
    applied: '',
    expanded: false,
  };
}

/**
 * Copy the draft a restore has to reproduce.
 * @param {object} draft - `{ text, references }`.
 * @returns {object} an owned copy.
 */
function copyDraft(draft) {
  return {
    text: typeof draft?.text === 'string' ? draft.text : '',
    references: Array.isArray(draft?.references) ? draft.references.map((ref) => ({ ...ref })) : [],
  };
}

/**
 * Normalize the chips the Host sent.
 * @param {any} value - the `sources` event payload.
 * @returns {Array<object>} `[{ id, label, count }]` with non-empty counts only.
 */
function normalizeSources(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const source of value) {
    if (source === null || typeof source !== 'object') continue;
    const id = typeof source.id === 'string' ? source.id.trim() : '';
    const count = Number(source.count);
    if (id === '' || !Number.isFinite(count) || count <= 0) continue;
    out.push({
      id,
      label: typeof source.label === 'string' && source.label.trim() !== '' ? source.label.trim() : id,
      count: Math.round(count),
    });
  }
  return out;
}

/**
 * Whether a failure is the abort of a superseded request.
 * @param {any} error - the thrown value.
 * @returns {boolean} true when the request was cancelled.
 */
function isAbort(error) {
  return error !== null && typeof error === 'object' && error.name === 'AbortError';
}

/**
 * Build a typed failure the panel can localize.
 * @param {string} code - the machine code.
 * @param {string} [message] - a user-facing sentence from the Host.
 * @param {any} [cause] - the underlying failure.
 * @returns {Error} the failure.
 */
function typedError(code, message, cause) {
  const error = new Error(typeof message === 'string' && message !== '' ? message : code);
  error.code = code;
  if (cause !== undefined) error.cause = cause;
  return error;
}

/**
 * Map a thrown failure to the panel's `{ code, message }` shape.
 * @param {any} error - the thrown value.
 * @returns {{ code: string, message?: string }} the error state.
 */
function errorState(error) {
  const code = typeof error?.code === 'string' && error.code !== '' ? error.code : 'unknown';
  const message = typeof error?.message === 'string' && error.message !== '' && error.message !== code
    ? error.message
    : undefined;
  return message === undefined ? { code } : { code, message };
}

/**
 * Split an SSE buffer into complete frames.
 * @param {string} buffer - the decoded stream so far.
 * @returns {{ frames: string[], rest: string }} complete frames and the remainder.
 */
function splitFrames(buffer) {
  const frames = [];
  let rest = buffer;
  for (;;) {
    const match = /(?:\r?\n){2}/.exec(rest);
    if (match === null) break;
    frames.push(rest.slice(0, match.index));
    rest = rest.slice(match.index + match[0].length);
  }
  return { frames, rest };
}

/**
 * Parse one `data:` frame.
 * @param {string} frame - one frame body.
 * @returns {object|null} the event, or null for a comment/blank/invalid frame.
 */
function parseFrame(frame) {
  const data = [];
  for (const line of frame.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith(':')) continue;
    if (trimmed.startsWith('data:')) data.push(trimmed.slice(5).trimStart());
  }
  if (data.length === 0) return null;
  try {
    const value = JSON.parse(data.join('\n'));
    return value !== null && typeof value === 'object' && Array.isArray(value) === false ? value : null;
  } catch {
    return null;
  }
}

/**
 * Read a `Response` body as an object, tolerating an absent body.
 * @param {Response} response - the response.
 * @returns {Promise<any>} the parsed body.
 */
async function readJsonBody(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

/**
 * Validate one Host result body into the panel's result shape.
 * @param {any} body - the `{ ok, result }` body.
 * @param {number} status - the HTTP status.
 * @returns {object} the result.
 * @throws {Error} with a code the panel can localize.
 */
function resultOf(body, status) {
  if (body === null || typeof body !== 'object') throw typedError('host', undefined, status);
  if (body.ok !== true) {
    const message = typeof body.error?.message === 'string' ? body.error.message.trim() : '';
    throw typedError(typeof body.error?.code === 'string' ? body.error.code : 'host', message === '' ? undefined : message);
  }
  const result = body.result;
  const prompt = typeof result?.prompt === 'string' ? result.prompt.trim() : '';
  if (prompt === '') throw typedError('empty');
  return {
    prompt,
    mode: result.mode === 'compose' ? 'compose' : 'improve',
    sources: normalizeSources(result.sources),
    elapsedMs: Number.isFinite(result.elapsedMs) ? Math.max(0, Number(result.elapsedMs)) : null,
    cached: result.cached === true,
  };
}

/**
 * Stream one rewrite from the Host.
 *
 * The call resolves after the stream closes; every event is handed to
 * `onEvent`. A non-SSE answer (an adapter without streaming) and a bodyless
 * answer are translated into `replace` + `done` so the caller sees one shape.
 * @param {object} options - the request.
 * @param {string} options.draft - the draft (already truncated).
 * @param {'improve'|'compose'} options.mode - the mode.
 * @param {'zh'|'en'} options.locale - the output language.
 * @param {AbortSignal} options.signal - the caller's abort signal.
 * @param {Function} options.onEvent - receives each event; may return 'stop'.
 * @param {Function} options.fetch - the fetch implementation.
 * @param {object} options.timers - the timer face.
 * @param {number} options.idleMs - the silent-stream timeout.
 * @returns {Promise<void>} resolves when the stream ends.
 * @throws {Error} with a code when the request or the stream failed.
 */
export async function streamOptimize(options) {
  const { draft, mode, locale, signal, onEvent, idleMs = STREAM_IDLE_MS, sessionId = '' } = options;
  const payloadBase = sessionId === '' ? {} : { sessionId };
  const doFetch = typeof options.fetch === 'function' ? options.fetch : globalThis.fetch;
  const timers = timerFace(options.timers);
  const controller = new AbortController();
  const forwardAbort = () => controller.abort();
  if (signal !== undefined) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', forwardAbort, { once: true });
  }
  let timedOut = false;
  let timer = null;
  const arm = () => {
    if (timer !== null) timers.clear(timer);
    timer = timers.set(() => {
      timedOut = true;
      controller.abort();
    }, idleMs);
  };
  let stopped = false;
  try {
    arm();
    let response;
    try {
      response = await doFetch(ROUTE, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'text/event-stream' },
        body: JSON.stringify({
          method: 'optimize',
          payload: { draft: capDraft(draft), mode, locale, stream: true, ...payloadBase },
        }),
        signal: controller.signal,
      });
    } catch (error) {
      if (timedOut) throw typedError('timeout', undefined, error);
      if (isAbort(error)) throw error;
      throw typedError('network', undefined, error);
    }
    if (timedOut) throw typedError('timeout');
    if (response === null || typeof response !== 'object') throw typedError('host');
    if (response.ok !== true) {
      const body = await readJsonBody(response);
      if (response.status >= 400) throw typedError('host', undefined, response.status);
      const result = resultOf(body, response.status);
      onEvent({ type: 'replace', text: result.prompt });
      onEvent({ type: 'done', result });
      return;
    }
    const contentType = typeof response.headers?.get === 'function'
      ? String(response.headers.get('content-type') ?? '')
      : '';
    if (response.body === null || response.body === undefined
      || typeof response.body.getReader !== 'function'
      || !contentType.includes('text/event-stream')) {
      const result = resultOf(await readJsonBody(response), response.status);
      onEvent({ type: 'replace', text: result.prompt });
      onEvent({ type: 'done', result });
      return;
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (!stopped) {
      let chunk;
      try {
        chunk = await reader.read();
      } catch (error) {
        if (timedOut) throw typedError('timeout', undefined, error);
        if (isAbort(error)) throw error;
        throw typedError('stream', undefined, error);
      }
      if (chunk.done === true) break;
      arm();
      buffer += decoder.decode(chunk.value, { stream: true });
      const parsed = splitFrames(buffer);
      buffer = parsed.rest;
      for (const frame of parsed.frames) {
        const event = parseFrame(frame);
        if (event === null) continue;
        if (onEvent(event) === 'stop') {
          stopped = true;
          break;
        }
      }
    }
    if (!stopped) {
      const tail = buffer.trim();
      if (tail !== '') {
        const event = parseFrame(tail);
        if (event !== null) onEvent(event);
      }
    }
    if (stopped) {
      try {
        await reader.cancel();
      } catch {
        // The stream is already closed; nothing to release.
      }
    }
  } finally {
    if (timer !== null) timers.clear(timer);
    if (signal !== undefined) signal.removeEventListener('abort', forwardAbort);
  }
}

/**
 * Ask for one rewrite over the plain JSON route (the non-streaming fallback).
 * @param {object} options - the request.
 * @param {string} options.draft - the draft.
 * @param {'improve'|'compose'} options.mode - the mode.
 * @param {'zh'|'en'} options.locale - the output language.
 * @param {AbortSignal} options.signal - the abort signal.
 * @param {Function} options.fetch - the fetch implementation.
 * @returns {Promise<object>} `{ prompt, mode, sources, elapsedMs, cached }`.
 * @throws {Error} with a code.
 */
export async function requestOptimize(options) {
  const { draft, mode, locale, signal, sessionId = '' } = options;
  const doFetch = typeof options.fetch === 'function' ? options.fetch : globalThis.fetch;
  let response;
  try {
    response = await doFetch(ROUTE, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        method: 'optimize',
        payload: { draft: capDraft(draft), mode, locale, stream: false, ...(sessionId === '' ? {} : { sessionId }) },
      }),
      signal,
    });
  } catch (error) {
    if (isAbort(error)) throw error;
    throw typedError('network', undefined, error);
  }
  if (response === null || typeof response !== 'object') throw typedError('host');
  if (response.ok !== true && response.status >= 400) throw typedError('host', undefined, response.status);
  return resultOf(await readJsonBody(response), response.status);
}

/**
 * Build one Prompt Boost store.
 *
 * Dependencies are injectable (`fetch`, `now`, `timers`) so the streaming
 * parser, the cache and the undo timer can be exercised without a browser.
 * @param {object} [deps] - the dependencies.
 * @returns {object} the store face.
 */
export function createBoostStore(deps = {}) {
  const doFetch = typeof deps.fetch === 'function' ? deps.fetch : undefined;
  const now = typeof deps.now === 'function' ? deps.now : () => Date.now();
  const timers = timerFace(deps.timers);
  const idleMs = Number.isFinite(deps.idleMs) ? Number(deps.idleMs) : STREAM_IDLE_MS;
  const undoMs = Number.isFinite(deps.undoMs) ? Number(deps.undoMs) : UNDO_MS;
  const cacheTtlMs = Number.isFinite(deps.cacheTtlMs) ? Number(deps.cacheTtlMs) : CACHE_TTL_MS;

  /** Per-session state, keyed by the composer's action face (stable identity). */
  const sessions = new WeakMap();
  /** Stable short ids for DOM ids and cache keys. */
  const sessionIds = new WeakMap();
  /** Draft mirrors, kept off the rendered snapshot so typing never emits. */
  const mirrors = new WeakMap();
  /** Undo timers per session. */
  const undoTimers = new WeakMap();
  /** The Session each composer belongs to (model routing on the Host). */
  const sessionIdByOwner = new WeakMap();
  /** Last Session seen by the dock; the button seat is not handed one. */
  let lastSessionId = '';
  const listeners = new Set();
  const cache = new Map();
  let anonymous = initialState();
  let anonymousMirror = copyDraft(null);
  let anonymousUndo = null;
  let sessionSeq = 0;
  let sequence = 0;
  let inflight = null;
  let lastActions = null;

  const emit = () => {
    for (const listener of [...listeners]) {
      try {
        listener();
      } catch (error) {
        console.error('[prompt-boost] a store listener failed:', error);
      }
    }
  };

  const hasActions = (actions) => actions !== null && actions !== undefined
    && (typeof actions === 'object' || typeof actions === 'function');

  /**
   * The state of one composer.
   * @param {any} actions - the composer actions face.
   * @returns {object} the state (stable until it changes).
   */
  function getState(actions) {
    const owner = hasActions(actions) ? actions : lastActions;
    if (!hasActions(owner)) return anonymous;
    let state = sessions.get(owner);
    if (state === undefined) {
      state = initialState();
      sessions.set(owner, state);
    }
    return state;
  }

  /**
   * Write a partial state.
   * @param {any} actions - the composer actions face.
   * @param {object} patch - the changed fields.
   * @returns {object} the new state.
   */
  function write(actions, patch) {
    const owner = hasActions(actions) ? actions : lastActions;
    const previous = getState(owner);
    const next = { ...previous, ...patch };
    if (hasActions(owner)) sessions.set(owner, next);
    else anonymous = next;
    emit();
    return next;
  }

  /**
   * The mirror of the composer draft.
   * @param {any} actions - the composer actions face.
   * @returns {object} `{ text, references }`.
   */
  function readMirror(actions) {
    const owner = hasActions(actions) ? actions : lastActions;
    if (!hasActions(owner)) return anonymousMirror;
    return mirrors.get(owner) ?? copyDraft(null);
  }

  /**
   * The actions face that owns the current session.
   * @param {any} actions - the slot's action prop, when present.
   * @returns {any} the face.
   */
  function resolveActions(actions) {
    if (hasActions(actions)) return actions;
    return lastActions;
  }

  /**
   * A stable short id for one session.
   * @param {any} actions - the composer actions face.
   * @returns {string} the id.
   */
  function sessionKey(actions) {
    const owner = hasActions(actions) ? actions : lastActions;
    if (!hasActions(owner)) return 'default';
    let id = sessionIds.get(owner);
    if (id === undefined) {
      sessionSeq += 1;
      id = `s${sessionSeq}`;
      sessionIds.set(owner, id);
    }
    return id;
  }

  /**
   * The DOM id the button points its `aria-controls` at.
   * @param {any} actions - the composer actions face.
   * @returns {string} the panel id.
   */
  function panelId(actions) {
    return `prompt-boost-panel-${sessionKey(actions)}`;
  }

  /**
   * The client cache key for one draft.
   * @param {any} actions - the composer actions face.
   * @param {string} mode - the mode.
   * @param {string} draft - the draft.
   * @returns {string} the key.
   */
  function cacheKey(actions, mode, draft) {
    return `${sessionKey(actions)}\u0000${mode}\u0000${draft}`;
  }

  /**
   * Read a cached result and drop it when it expired.
   * @param {string} key - the cache key.
   * @returns {object|null} the result.
   */
  function readCache(key) {
    const entry = cache.get(key);
    if (entry === undefined) return null;
    if (now() - entry.at > cacheTtlMs) {
      cache.delete(key);
      return null;
    }
    cache.delete(key);
    cache.set(key, entry);
    return entry.result;
  }

  /**
   * Remember one finished result.
   * @param {string} key - the cache key.
   * @param {object} result - the result.
   * @returns {void}
   */
  function writeCache(key, result) {
    cache.delete(key);
    cache.set(key, { at: now(), result });
    while (cache.size > CACHE_MAX) {
      const oldest = cache.keys().next();
      if (oldest.done === true) break;
      cache.delete(oldest.value);
    }
  }

  /** Stop the one in-flight request, if any. */
  function abortInflight() {
    if (inflight === null) return;
    const current = inflight;
    inflight = null;
    try {
      current.controller.abort();
    } catch {
      // The controller is already aborted; nothing to release.
    }
  }

  /**
   * Clear the undo row and its timer.
   * @param {any} actions - the composer actions face.
   * @returns {void}
   */
  function clearUndo(actions) {
    const owner = hasActions(actions) ? actions : lastActions;
    const timer = hasActions(owner) ? undoTimers.get(owner) : anonymousUndo;
    if (timer !== undefined && timer !== null) timers.clear(timer);
    if (hasActions(owner)) undoTimers.delete(owner);
    else anonymousUndo = null;
  }

  /**
   * Start the ~8s window in which the replacement can be undone.
   * @param {any} actions - the composer actions face.
   * @returns {void}
   */
  function scheduleUndo(actions) {
    clearUndo(actions);
    let handle = null;
    handle = timers.set(() => {
      const state = getState(actions);
      if (state.undo === null) return;
      // The applied chip lives exactly as long as the undo window.
      write(actions, { undo: null, phase: state.phase === 'applied' ? 'idle' : state.phase, applied: '', prompt: state.phase === 'applied' ? '' : state.prompt, sources: state.phase === 'applied' ? [] : state.sources });
    }, undoMs);
    const owner = hasActions(actions) ? actions : lastActions;
    if (hasActions(owner)) undoTimers.set(owner, handle);
    else anonymousUndo = handle;
  }

  /**
   * Mark the request settled and hand the panel a finished result.
   * @param {any} actions - the composer actions face.
   * @param {object} result - `{ prompt, mode, sources, elapsedMs, cached }`.
   * @param {string} key - the cache key.
   * @returns {void}
   */
  function settleReady(actions, result, key) {
    // The user asked for the better prompt to land in the composer by itself,
    // with an undo window — no second confirmation click.
    const target = resolveActions(actions);
    const previous = copyDraft(readMirror(actions));
    let written = false;
    if (hasActions(target) && typeof target.setDraft === 'function') {
      try {
        target.setDraft({ text: result.prompt, references: [] });
        written = true;
      } catch {
        try {
          target.setDraft(result.prompt);
          written = true;
        } catch {
          written = false;
        }
      }
    }
    if (!written) {
      write(actions, {
        phase: 'error',
        mode: result.mode,
        prompt: result.prompt,
        sources: result.sources,
        elapsedMs: result.elapsedMs,
        cached: result.cached === true,
        error: { code: 'apply' },
        undo: null,
        applied: '',
        expanded: false,
      });
      return;
    }
    write(actions, {
      phase: 'applied',
      mode: result.mode,
      prompt: result.prompt,
      applied: result.prompt,
      sources: result.sources,
      elapsedMs: result.elapsedMs,
      cached: result.cached === true,
      error: null,
      undo: { draft: previous, at: now() },
      expanded: false,
    });
    scheduleUndo(actions);
    writeCache(key, result);
    petSound.play('boostDone');
  }

  /**
   * Run one rewrite: stream first, plain JSON as the fallback.
   * @param {any} actions - the composer actions face.
   * @param {object} request - the in-flight record.
   * @param {object} input - `{ draft, mode, locale, key }`.
   * @returns {Promise<void>} resolves when the request settled or was dropped.
   */
  async function runStream(actions, request, input) {
    const { draft, mode, locale, key, sessionId } = input;
    let sawEvent = false;
    let settled = false;
    const current = () => inflight === request && request.controller.signal.aborted === false;

    /**
     * Handle one stream event.
     * @param {object} event - the parsed event.
     * @returns {string|undefined} 'stop' closes the reader.
     */
    const onEvent = (event) => {
      if (!current()) return 'stop';
      sawEvent = true;
      if (event.type === 'sources') {
        const state = getState(actions);
        write(actions, {
          sources: normalizeSources(event.sources),
          mode: event.mode === 'compose' ? 'compose' : state.mode,
        });
        return undefined;
      }
      if (event.type === 'delta') {
        if (typeof event.text !== 'string' || event.text === '') return undefined;
        const state = getState(actions);
        write(actions, { phase: 'streaming', prompt: state.prompt + event.text });
        return undefined;
      }
      if (event.type === 'replace') {
        if (typeof event.text !== 'string') return undefined;
        const state = getState(actions);
        // A non-streaming adapter sends the whole prompt at once: show it in
        // the read-only textarea immediately rather than leaving the skeleton.
        const phase = state.phase === 'ready' || event.text === '' ? state.phase : 'streaming';
        write(actions, { prompt: event.text, phase });
        return undefined;
      }
      if (event.type === 'done') {
        settled = true;
        const result = {
          prompt: typeof event.result?.prompt === 'string' ? event.result.prompt.trim() : getState(actions).prompt.trim(),
          mode: event.result?.mode === 'compose' ? 'compose' : mode,
          sources: normalizeSources(event.result?.sources ?? getState(actions).sources),
          elapsedMs: Number.isFinite(event.result?.elapsedMs) ? Math.max(0, Number(event.result.elapsedMs)) : null,
          cached: event.result?.cached === true,
        };
        if (result.prompt === '') {
          write(actions, { phase: 'error', error: { code: 'empty' } });
          petSound.play('boostFail');
          return 'stop';
        }
        settleReady(actions, result, key);
        return 'stop';
      }
      if (event.type === 'error') {
        settled = true;
        const message = typeof event.message === 'string' && event.message.trim() !== '' ? event.message.trim() : undefined;
        write(actions, {
          phase: 'error',
          error: message === undefined ? { code: 'unknown' } : { code: 'host', message },
        });
        return 'stop';
      }
      return undefined;
    };

    try {
      await streamOptimize({
        draft,
        mode,
        locale,
        sessionId,
        signal: request.controller.signal,
        onEvent,
        fetch: doFetch,
        timers,
        idleMs,
      });
      if (settled) return;
      if (sawEvent) throw typedError('stream');
      await runJson(actions, request, { draft, mode, locale, key, sessionId });
    } catch (error) {
      if (request.controller.signal.aborted || isAbort(error) || !current()) return;
      if (sawEvent) {
        write(actions, { phase: 'error', error: errorState(error) });
        petSound.play('boostFail');
        return;
      }
      try {
        await runJson(actions, request, { draft, mode, locale, key, sessionId });
      } catch (fallbackError) {
        if (request.controller.signal.aborted || isAbort(fallbackError) || !current()) return;
        write(actions, { phase: 'error', error: errorState(fallbackError) });
        petSound.play('boostFail');
      }
    } finally {
      if (inflight === request) inflight = null;
    }
  }

  /**
   * Run one rewrite over the JSON route.
   * @param {any} actions - the composer actions face.
   * @param {object} request - the in-flight record.
   * @param {object} input - `{ draft, mode, locale, key }`.
   * @returns {Promise<void>} resolves when the result settled.
   */
  async function runJson(actions, request, input) {
    const result = await requestOptimize({
      draft: input.draft,
      mode: input.mode,
      locale: input.locale,
      signal: request.controller.signal,
      fetch: doFetch,
      // The fallback must carry the Session id too: some providers route per
      // conversation and reject a call without it.
      sessionId: input.sessionId ?? '',
    });
    if (inflight !== request || request.controller.signal.aborted) return;
    settleReady(actions, result, input.key);
  }

  /**
   * Remember which Session this composer belongs to. The Host passes it to the
   * model adapter, which some providers need for per-conversation routing.
   * @param {any} actions - the composer actions face.
   * @param {string} sessionId - the Session id.
   * @returns {void}
   */
  function setSessionId(actions, sessionId) {
    const id = typeof sessionId === 'string' ? sessionId : '';
    if (id === '') return;
    lastSessionId = id;
    if (hasActions(actions)) sessionIdByOwner.set(actions, id);
  }

  /**
   * Read the remembered Session id.
   * @param {any} actions - the composer actions face.
   * @returns {string} the id, or ''.
   */
  function readSessionId(actions) {
    if (!hasActions(actions)) return lastSessionId;
    return sessionIdByOwner.get(actions) ?? lastSessionId;
  }

  /**
   * Mirror the composer draft into the store (silent: no listener is woken).
   * @param {any} actions - the composer actions face.
   * @param {object} inputState - the composer's published input state.
   * @returns {void}
   */
  function setDraftMirror(actions, inputState) {
    const text = typeof inputState?.draft === 'string' ? inputState.draft : '';
    const occurrences = Array.isArray(inputState?.occurrences) ? inputState.occurrences : [];
    const previous = readMirror(actions);
    if (previous.text === text && previous.references.length === occurrences.length) return;
    const mirror = {
      text,
      references: occurrences.map((ref) => ({ ...ref })),
    };
    const owner = hasActions(actions) ? actions : lastActions;
    if (hasActions(owner)) mirrors.set(owner, mirror);
    else anonymousMirror = mirror;
  }

  /**
   * Start (or restart) a rewrite for the current draft.
   * @param {any} actions - the composer actions face.
   * @param {object} [options] - `{ locale, force }`.
   * @returns {void}
   */
  function start(actions, options = {}) {
    if (hasActions(actions)) lastActions = actions;
    const locale = options.locale === 'en' ? 'en' : 'zh';
    const force = options.force === true;
    const mirror = readMirror(actions);
    const draft = capDraft(mirror.text);
    const mode = draft.trim() === '' ? 'compose' : 'improve';
    const key = cacheKey(actions, mode, draft);
    abortInflight();
    clearUndo(actions);
    if (!force) {
      const cached = readCache(key);
      if (cached !== null) {
        settleReady(actions, { ...cached, cached: true }, key);
        return;
      }
    }
    sequence += 1;
    const request = { seq: sequence, actions, controller: new AbortController() };
    inflight = request;
    const previous = getState(actions);
    write(actions, {
      phase: 'running',
      mode,
      seed: draft,
      prompt: '',
      sources: [],
      elapsedMs: null,
      cached: false,
      error: null,
      undo: null,
      // The first click after idle lands on the compact chip; a restart from an
      // already-open panel keeps the reader where they are.
      expanded: previous.phase === 'idle' && previous.undo === null ? false : previous.expanded,
    });
    petSound.play('boostStart');
    void runStream(actions, request, { draft, mode, locale, key, sessionId: readSessionId(actions) });
  }

  /**
   * Ask for another version of the same draft (bypasses the client cache).
   * @param {any} actions - the composer actions face.
   * @param {object} [options] - `{ locale }`.
   * @returns {void}
   */
  function retry(actions, options = {}) {
    start(actions, { locale: options.locale, force: true });
  }

  /**
   * Replace the draft with the edited result and open the undo window.
   * @param {any} actions - the composer actions face.
   * @returns {boolean} whether the draft was written.
   */
  function apply(actions) {
    const state = getState(actions);
    if (state.phase !== 'ready') return false;
    const prompt = state.prompt.trim();
    if (prompt === '') return false;
    const target = resolveActions(actions);
    if (!hasActions(target) || typeof target.setDraft !== 'function') {
      write(actions, { phase: 'error', error: { code: 'apply' } });
      return false;
    }
    const previous = copyDraft(readMirror(actions));
    let written = false;
    try {
      target.setDraft({ text: prompt, references: [] });
      written = true;
    } catch {
      try {
        target.setDraft(prompt);
        written = true;
      } catch {
        written = false;
      }
    }
    if (!written) {
      write(actions, { phase: 'error', error: { code: 'apply' } });
      return false;
    }
    clearUndo(actions);
    write(actions, {
      phase: 'idle',
      prompt: '',
      sources: [],
      elapsedMs: null,
      cached: false,
      error: null,
      undo: { draft: previous, at: now() },
      expanded: false,
    });
    scheduleUndo(actions);
    return true;
  }

  /**
   * Restore the exact draft the replacement overwrote.
   * @param {any} actions - the composer actions face.
   * @returns {boolean} whether the draft was restored.
   */
  function undo(actions) {
    const state = getState(actions);
    if (state.undo === null) return false;
    const target = resolveActions(actions);
    const draft = copyDraft(state.undo.draft);
    let written = false;
    if (hasActions(target) && typeof target.setDraft === 'function') {
      try {
        target.setDraft({ text: draft.text, references: draft.references });
        written = true;
      } catch {
        try {
          target.setDraft(draft.text);
          written = true;
        } catch {
          written = false;
        }
      }
    }
    clearUndo(actions);
    write(actions, {
      undo: null,
      phase: 'idle',
      applied: '',
      prompt: '',
      sources: [],
      elapsedMs: null,
      cached: false,
      error: null,
      expanded: false,
    });
    return written;
  }

  /**
   * Fold the expanded panel back to the compact chip. The request keeps
   * running, and the result keeps streaming into the store.
   * @param {any} actions - the composer actions face.
   * @returns {void}
   */
  function collapse(actions) {
    if (getState(actions).expanded === false) return;
    write(actions, { expanded: false });
  }

  /**
   * Expand the compact chip into the full panel.
   * @param {any} actions - the composer actions face.
   * @returns {void}
   */
  function expand(actions) {
    const state = getState(actions);
    if ((state.phase === 'idle' && state.undo === null) || state.expanded === true) return;
    write(actions, { expanded: true });
  }

  /**
   * Flip between the chip and the panel.
   * @param {any} actions - the composer actions face.
   * @returns {void}
   */
  function toggle(actions) {
    if (getState(actions).expanded === true) collapse(actions);
    else expand(actions);
  }

  /**
   * Throw the chip away: cancel the stream that feeds it, clear the result and
   * the undo window.
   * @param {any} actions - the composer actions face.
   * @returns {void}
   */
  function dismiss(actions) {
    const owner = hasActions(actions) ? actions : lastActions;
    if (inflight !== null && inflight.actions === owner) abortInflight();
    clearUndo(actions);
    write(actions, {
      phase: 'idle',
      prompt: '',
      sources: [],
      elapsedMs: null,
      cached: false,
      error: null,
      undo: null,
      applied: '',
      expanded: false,
    });
  }

  /**
   * Edit the result before applying it.
   * @param {any} actions - the composer actions face.
   * @param {string} text - the new prompt text.
   * @returns {void}
   */
  function edit(actions, text) {
    const state = getState(actions);
    if (state.phase !== 'streaming') return;
    if (typeof text !== 'string' || text === state.prompt) return;
    write(actions, { prompt: text });
  }

  return {
    subscribe(listener) {
      if (typeof listener !== 'function') return () => {};
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getState,
    panelId,
    sessionKey,
    setDraftMirror,
    setSessionId,
    start,
    retry,
    apply,
    undo,
    expand,
    collapse,
    toggle,
    dismiss,
    edit,
  };
}

/** The process-wide store the two slots share. */
export const boostStore = createBoostStore();
