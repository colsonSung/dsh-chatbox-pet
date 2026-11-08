/**
 * Context collection for Prompt Boost.
 *
 * One call fans out to four independent personal stores, each behind its own
 * 1.2s timeout, then ranks, caps and budget-trims the union. The hard rules of
 * the contract are enforced here, once:
 *
 *   - never throw: a dead store is `{ items: [], error }` and must not cost the
 *     other three sources;
 *   - parallel collection, so the whole call is bounded by the slowest source
 *     (~1.3s worst case including the deadline guard);
 *   - caps 5/2/4/4 and 320 characters per item, 2400 characters in total,
 *     trimmed from the least relevant item while every non-empty source keeps
 *     at least one;
 *   - deterministic ranking: keyword overlap for improve mode, recency when the
 *     query is empty (compose mode).
 *
 * Callers pass `{ query, now, config }`; `config.profileDir` decides where the
 * profile stores live, and each store branch may override its own paths.
 */
import { homedir } from 'node:os';
import { join } from 'node:path';

import { collectMemory } from './memory.js';
import { collectMinutes } from './minutes.js';
import { collectReader } from './reader.js';
import { collectMoments } from './moments.js';
import {
  clip,
  excerpt,
  rankItems,
  tokenize,
  trimToBudget,
  withDeadline,
} from './rank.js';

/** Display labels the client shows in the source chips. */
const LABELS = {
  memory: '记忆',
  minutes: '听记',
  reader: '读书',
  moments: '瞬间',
};

/** Per-source item caps from the contract. */
const LIMITS = {
  memory: 5,
  minutes: 2,
  reader: 4,
  moments: 4,
};

/** Every item body is cut to this many characters. */
const ITEM_TEXT_LIMIT = 320;
/** Item titles are metadata, not context; keep them short. */
const ITEM_TITLE_LIMIT = 120;
/** The whole context block spends at most this many characters. */
const TOTAL_CHAR_BUDGET = 2400;
/** One store may not hold the request longer than this. */
const SOURCE_DEADLINE_MS = 1200;

/** The fixed source list; its order is part of the contract. */
const SOURCE_DEFS = [
  { id: 'memory', collect: collectMemory },
  { id: 'minutes', collect: collectMinutes },
  { id: 'reader', collect: collectReader },
  { id: 'moments', collect: collectMoments },
];

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
 * Resolve the profile directory: caller config, then the Host environment,
 * then `~/.dsh` (the fallback both the Moments plugin and the shelf contract use).
 * @param {any} config - the collector config.
 * @returns {string} the profile directory.
 */
function resolveProfileDir(config) {
  const configured = isRecord(config) ? text(config.profileDir) : '';
  if (configured !== '') return configured;
  const fromEnv = text(process.env.DSH_PROFILE_DIR);
  return fromEnv !== '' ? fromEnv : join(homedir(), '.dsh');
}

/**
 * Normalise, clamp and de-duplicate one store's raw items.
 * @param {any} rawItems - whatever the collector produced.
 * @param {Set<string>} tokens - query tokens, used to pick a useful excerpt.
 * @returns {Array<object>} clean items in collector order.
 */
function normalizeItems(rawItems, tokens) {
  if (!Array.isArray(rawItems)) return [];
  const items = [];
  const seen = new Set();
  for (const raw of rawItems) {
    if (!isRecord(raw)) continue;
    const body = excerpt(raw.text, tokens, ITEM_TEXT_LIMIT);
    if (body === '' || seen.has(body)) continue;
    seen.add(body);
    const item = { text: body };
    const title = clip(raw.title, ITEM_TITLE_LIMIT);
    if (title !== '') item.title = title;
    // Collectors already normalise their timestamps to epoch milliseconds; a
    // second conversion here would turn old millisecond values into the future
    // and scramble cross-source recency.
    const at = typeof raw.at === 'number' && Number.isFinite(raw.at) && raw.at > 0 ? Math.round(raw.at) : 0;
    if (at > 0) item.at = at;
    if (typeof raw.similarity === 'number' && Number.isFinite(raw.similarity)) {
      item.similarity = Math.round(raw.similarity * 1e4) / 1e4;
    }
    items.push(item);
  }
  return items;
}

/**
 * Strip internal ranking fields from one item before it leaves the module.
 * @param {object} item - a ranked item.
 * @returns {{text: string, title?: string, at?: number, similarity?: number}} the public item.
 */
function publicItem(item) {
  const out = { text: item.text };
  if (typeof item.title === 'string' && item.title !== '') out.title = item.title;
  if (typeof item.at === 'number' && item.at > 0) out.at = item.at;
  if (typeof item.similarity === 'number') out.similarity = item.similarity;
  return out;
}

/**
 * Turn any thrown value into a short message.
 * @param {any} error - the thrown value.
 * @returns {string} a readable error string.
 */
function messageOf(error) {
  if (typeof error?.message === 'string' && error.message.trim() !== '') return error.message.trim();
  return '上下文采集失败';
}

/**
 * Collect personal context from every store.
 *
 * @param {object} [input] - the request.
 * @param {any} [input.query] - the draft; '' means compose mode (pure recency).
 * @param {number} [input.now] - epoch ms, injected for deterministic tests.
 * @param {object} [input.config] - resolved Host config.
 * @returns {Promise<{sources: Array<object>, totalChars: number}>} the context.
 */
export async function collectContext({ query = '', now = Date.now(), config = {} } = {}) {
  const safeConfig = isRecord(config) ? config : {};
  const draft = typeof query === 'string' ? query.slice(0, 4000) : '';
  const at = Number.isFinite(now) ? now : Date.now();
  const profileDir = resolveProfileDir(safeConfig);
  const tokens = tokenize(draft);

  const collected = await Promise.all(
    SOURCE_DEFS.map(async (definition) => {
      let result;
      try {
        const task = definition.collect({ query: draft, now: at, config: safeConfig, profileDir });
        result = await withDeadline(task, SOURCE_DEADLINE_MS, `${LABELS[definition.id]}采集超时`);
      } catch (error) {
        result = { items: [], error: messageOf(error) };
      }

      const items = normalizeItems(result?.items, tokens);
      const limit = LIMITS[definition.id] ?? 0;
      const ranked = rankItems(items, draft).slice(0, limit);
      // Keep the internal `_score` on the items until the budget cutter has
      // run: it is what makes "drop the least relevant item first" meaningful
      // across four stores. It is stripped from the returned items below.
      return {
        id: definition.id,
        label: LABELS[definition.id],
        items: ranked,
        error: text(result?.error),
      };
    }),
  );

  const totalChars = trimToBudget(collected, TOTAL_CHAR_BUDGET);

  const sources = collected.map((source) => {
    const out = {
      id: source.id,
      label: source.label,
      items: source.items.map(publicItem),
    };
    // A source with usable items did not fail, even if it also reported a
    // partial problem deeper down; only a source that lost everything is
    // marked so the client can omit its chip.
    if (out.items.length === 0 && source.error !== '') out.error = source.error;
    return out;
  });

  return { sources, totalChars };
}
