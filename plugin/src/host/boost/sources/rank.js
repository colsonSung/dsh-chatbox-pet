/**
 * Shared text shaping, keyword ranking and budget helpers for the collectors.
 *
 * The four personal stores are different shapes of "something the user already
 * wrote or decided", so they are ranked by one rule rather than four: keyword
 * overlap between the draft and the item, ties broken by recency (and then by
 * memory similarity, which is the only other deterministic relevance signal
 * available). Compose mode has no draft, so it falls back to pure recency —
 * "the most recent personal context" is exactly the ranking the contract asks
 * for.
 *
 * Everything here is pure and synchronous on purpose: the per-store modules own
 * I/O and error degradation, this module owns the deterministic part that the
 * tests can pin down.
 */

/** Latin words too common to say anything about relevance. */
const STOP_WORDS = new Set([
  'a', 'about', 'after', 'again', 'against', 'all', 'also', 'am', 'an', 'and', 'any', 'are', 'as',
  'at', 'be', 'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'can', 'could',
  'did', 'do', 'does', 'doing', 'down', 'each', 'few', 'for', 'from', 'further', 'get', 'give', 'go',
  'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'him', 'his', 'how', 'i', 'if', 'in',
  'into', 'is', 'it', 'its', 'just', 'let', 'like', 'make', 'many', 'me', 'more', 'most', 'much', 'my',
  'need', 'no', 'not', 'now', 'of', 'off', 'on', 'once', 'one', 'only', 'or', 'other', 'our', 'out',
  'over', 'own', 'same', 'she', 'should', 'so', 'some', 'such', 'than', 'that', 'the', 'their', 'them',
  'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'two', 'under', 'until',
  'up', 'us', 'use', 'using', 'very', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while',
  'who', 'why', 'will', 'with', 'would', 'you', 'your',
]);

/** A run of CJK characters; bigrams are built from it. */
const CJK_RUN = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+/g;

/** A latin / numeric token; underscores and dots stay in, so `node:fs` keeps its shape. */
const LATIN_WORD = /[a-z0-9][a-z0-9._:+-]*/g;

/** Invisible characters (zero width spaces and a BOM) that would survive `\s`. */
const INVISIBLE = /[\u200b-\u200d\ufeff]/g;

/** Ellipsis appended when a value is cut. */
const ELLIPSIS = '…';

/**
 * Collapse a value into one whitespace-normalised line.
 * @param {any} value - any value; non-strings become ''.
 * @returns {string} the collapsed text.
 */
export function collapse(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(INVISIBLE, '')
    .replace(/[\u0000-\u001f\u007f]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Shorten one line to a hard character limit, keeping the first part.
 *
 * Used for titles, where "the part near the query" makes no sense.
 * @param {any} value - any value.
 * @param {number} limit - maximum characters.
 * @returns {string} the collapsed and, when needed, truncated text.
 */
export function clip(value, limit) {
  const text = collapse(value);
  if (text.length <= limit) return text;
  return `${text.slice(0, Math.max(0, limit - 1)).trimEnd()}${ELLIPSIS}`;
}

/**
 * Shorten a long body to a limit, preferring the window around the first query
 * match. A 1500-character Moments note is only useful when the relevant
 * sentence survives the 320-character cap.
 * @param {any} value - any value.
 * @param {Set<string>} tokens - query tokens used to pick the window; may be empty.
 * @param {number} limit - maximum characters.
 * @returns {string} the collapsed and, when needed, truncated text.
 */
export function excerpt(value, tokens, limit) {
  const text = collapse(value);
  if (text.length <= limit) return text;
  if (limit <= 0) return '';

  let matchAt = -1;
  if (tokens !== undefined && tokens !== null && tokens.size > 0) {
    const lower = text.toLowerCase();
    for (const token of tokens) {
      const index = lower.indexOf(token);
      if (index >= 0 && (matchAt < 0 || index < matchAt)) matchAt = index;
    }
  }

  const head = matchAt > 0 ? 1 : 0;
  const bodyLimit = Math.max(0, limit - head - 1);
  let start = 0;
  if (matchAt > 0) start = Math.max(0, matchAt - 60);
  const body = text.slice(start, start + bodyLimit).trim();
  const tail = start + bodyLimit < text.length ? ELLIPSIS : '';
  return `${start > 0 ? ELLIPSIS : ''}${body}${tail}`;
}

/**
 * Turn a timestamp-ish value into epoch milliseconds.
 *
 * Accepts epoch ms, epoch seconds, ISO strings, and Date objects. Anything
 * unusable is 0 rather than an exception: a record with no date still has a
 * usable body.
 * @param {any} value - the raw timestamp.
 * @returns {number} epoch ms, or 0.
 */
export function toEpochMs(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value <= 0) return 0;
    return Math.round(value < 1e11 ? value * 1000 : value);
  }
  if (value instanceof Date) {
    const time = value.getTime();
    return Number.isFinite(time) && time > 0 ? time : 0;
  }
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Date.parse(value.trim());
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }
  return 0;
}

/**
 * Tokenise text for overlap ranking: latin words (stop words dropped) plus CJK
 * bigrams. Bigrams are a deliberately dumb but deterministic stand-in for
 * segmentation, and they work for mixed zh/en drafts.
 * @param {any} value - any value.
 * @returns {Set<string>} the tokens.
 */
export function tokenize(value) {
  const tokens = new Set();
  const text = collapse(value).toLowerCase();
  if (text === '') return tokens;
  for (const match of text.matchAll(LATIN_WORD)) {
    const word = match[0];
    if (word.length >= 2 && !STOP_WORDS.has(word)) tokens.add(word);
  }
  for (const run of text.match(CJK_RUN) ?? []) {
    if (run.length === 1) {
      tokens.add(run);
      continue;
    }
    for (let index = 0; index + 1 < run.length; index += 1) tokens.add(run.slice(index, index + 2));
  }
  return tokens;
}

/**
 * How many query tokens appear in the item text.
 * @param {Set<string>} tokens - query tokens.
 * @param {Set<string>} itemTokens - item tokens.
 * @returns {number} the overlap count.
 */
function overlap(tokens, itemTokens) {
  if (tokens.size === 0 || itemTokens.size === 0) return 0;
  let score = 0;
  for (const token of tokens) {
    if (itemTokens.has(token)) score += 1;
  }
  return score;
}

/**
 * Read the optional similarity field.
 * @param {any} item - a normalised item.
 * @returns {number} the similarity, or -1 when absent.
 */
function similarityOf(item) {
  return typeof item?.similarity === 'number' && Number.isFinite(item.similarity) ? item.similarity : -1;
}

/**
 * Read an item's timestamp, already in epoch milliseconds.
 *
 * The single-conversion boundary lives in the collectors: each store turns its
 * native timestamp into epoch ms exactly once. Converting again here would
 * reinterpret old millisecond values as seconds and break cross-source recency.
 * @param {any} item - a normalised item.
 * @returns {number} epoch ms, or 0.
 */
function epochOf(item) {
  return typeof item?.at === 'number' && Number.isFinite(item.at) && item.at > 0 ? item.at : 0;
}

/**
 * Rank items for the current query.
 *
 * The input is not mutated. Internal `_score` / `_index` fields are attached so
 * the budget cutter can compare relevance across stores; the caller strips them
 * before returning anything to the Host.
 * @param {Array<object>} items - normalised items whose `at` is epoch ms.
 * @param {any} query - the draft; empty means pure recency.
 * @returns {Array<object>} a new, sorted array.
 */
export function rankItems(items, query) {
  const tokens = tokenize(query);
  const hasQuery = tokens.size > 0;
  const ranked = items.map((item, index) => {
    const itemTokens = hasQuery ? tokenize(`${item?.text ?? ''} ${item?.title ?? ''}`) : new Set();
    const score = hasQuery ? overlap(tokens, itemTokens) : epochOf(item);
    return { item, score, index };
  });
  ranked.sort((left, right) => {
    if (right.score !== left.score) return right.score - left.score;
    const recency = epochOf(right.item) - epochOf(left.item);
    if (recency !== 0) return recency;
    const similarity = similarityOf(right.item) - similarityOf(left.item);
    if (similarity !== 0) return similarity;
    return left.index - right.index;
  });
  return ranked.map((entry) => ({ ...entry.item, _score: entry.score, _index: entry.index }));
}

/**
 * Sum every item's text length; the number `totalChars` reports.
 * @param {Array<object>} sources - collector results with `items` arrays.
 * @returns {number} the total character count.
 */
export function countChars(sources) {
  let total = 0;
  for (const source of sources) {
    if (!Array.isArray(source?.items)) continue;
    for (const item of source.items) total += typeof item?.text === 'string' ? item.text.length : 0;
  }
  return total;
}

/**
 * Drop the least relevant items until the total fits the budget.
 *
 * Each source is already sorted by relevance, so its last item is its weakest;
 * across sources the weakest `_score` loses, and a source that has something
 * keeps at least one item (an empty source is simply omitted from the prompt).
 * @param {Array<object>} sources - collector results; their `items` arrays are mutated.
 * @param {number} budget - maximum total characters.
 * @returns {number} the resulting total character count.
 */
export function trimToBudget(sources, budget) {
  let total = countChars(sources);
  while (total > budget) {
    let victim = null;
    for (const source of sources) {
      if (!Array.isArray(source?.items) || source.items.length <= 1) continue;
      const item = source.items[source.items.length - 1];
      const score = typeof item?._score === 'number' ? item._score : 0;
      if (victim === null || score < victim.score) victim = { source, score };
    }
    if (victim === null) break;
    const removed = victim.source.items.pop();
    total -= typeof removed?.text === 'string' ? removed.text.length : 0;
  }
  // Recount once: guards against a collector handing us a non-string text.
  return countChars(sources);
}

/**
 * Reject with a readable error when a task runs past its deadline.
 *
 * The collectors have their own `AbortSignal.timeout`, but an injected or
 * third-party implementation can ignore a signal. This wrapper is the last
 * line of defence that keeps the whole `collectContext` inside its time box.
 * @param {Promise<any>} task - the work to bound.
 * @param {number} ms - the deadline.
 * @param {string} message - the Chinese error message on timeout.
 * @returns {Promise<any>} the task's value, or a rejection on timeout.
 */
export function withDeadline(task, ms, message = '采集超时') {
  return new Promise((resolve, reject) => {
    // The timer is kept referenced on purpose: a collector waiting on a fetch
    // that ignores its signal must still be cut off even when nothing else is
    // keeping the event loop busy. It is cleared the moment the task settles.
    const timer = setTimeout(() => reject(new Error(message)), ms);
    Promise.resolve(task).then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
