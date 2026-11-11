/**
 * The favourite book: words and sentences the reader keeps, shared by the
 * translate page and the quick-actions sheet.
 *
 * Stored as one JSON file in the profile's data directory (not the browser's
 * localStorage): the same list survives a browser reset and is visible to the
 * Host, which is what makes "export" and "search across sessions" possible.
 */
import { randomUUID } from 'node:crypto';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

/**
 * Where the list lives. `CHATBOX_PET_FAV_FILE` overrides it so tests can use a
 * throwaway file instead of the reader's real favourite book.
 */
export const FAV_FILE = process.env.CHATBOX_PET_FAV_FILE || path.join(os.homedir(), '.dsh', 'chatbox-pet', 'favorites.json');
export const FAV_DIR = path.dirname(FAV_FILE);

/** A cap that keeps the page fast; the oldest entries fall off. */
const MAX_ITEMS = 2000;

/** Kinds the page distinguishes. */
export const KINDS = ['word', 'sentence'];

/** One lock per file so two quick saves cannot interleave a read-modify-write. */
let queue = Promise.resolve();

/** Grades the review flow offers, in the order it shows them. */
export const GRADES = ['again', 'hard', 'good', 'easy'];

/** A day in milliseconds; the scheduler works in whole days. */
const DAY = 24 * 60 * 60 * 1000;

/** Ease never leaves this band, or intervals explode or collapse. */
const MIN_EASE = 1.3;
const MAX_EASE = 3.0;

/**
 * The schedule of a card that has never been reviewed.
 * @param {number} now - the current time.
 * @param {boolean} [newCard] - true when the card is due immediately.
 * @returns {object} the schedule.
 */
export function freshSchedule(now, newCard = true) {
  return { due: newCard ? now : now + DAY, interval: 0, ease: 2.5, reps: 0, lapses: 0, last: 0 };
}

/**
 * Apply one grade to a schedule (a simplified SM-2).
 *
 * - again: back in ten minutes, ease drops, lapse counted
 * - hard:  interval grows slowly
 * - good:  interval × ease
 * - easy:  interval × ease × 1.3
 * @param {object} schedule - the current schedule.
 * @param {string} grade - again | hard | good | easy.
 * @param {number} now - the current time.
 * @returns {object} the next schedule.
 */
export function gradeCard(schedule, grade, now) {
  const base = schedule !== null && typeof schedule === 'object' ? schedule : freshSchedule(now);
  const ease = Number.isFinite(base.ease) ? base.ease : 2.5;
  const interval = Number.isFinite(base.interval) ? Math.max(0, base.interval) : 0;
  const reps = Number.isFinite(base.reps) ? base.reps : 0;
  const lapses = Number.isFinite(base.lapses) ? base.lapses : 0;
  const clamp = (value) => Math.min(MAX_EASE, Math.max(MIN_EASE, Number(value.toFixed(2))));

  if (grade === 'again') {
    return {
      due: now + 10 * 60 * 1000,
      interval: 0,
      ease: clamp(ease - 0.2),
      reps: reps + 1,
      lapses: lapses + 1,
      last: now,
    };
  }
  let nextInterval;
  if (grade === 'hard') {
    nextInterval = interval === 0 ? 1 : Math.max(1, Math.round(interval * 1.2));
  } else if (grade === 'easy') {
    nextInterval = interval === 0 ? 3 : Math.max(2, Math.round(interval * ease * 1.3));
  } else {
    nextInterval = interval === 0 ? 1 : Math.max(2, Math.round(interval * ease));
  }
  const nextEase = grade === 'hard' ? ease - 0.15 : grade === 'easy' ? ease + 0.1 : ease;
  return {
    due: now + nextInterval * DAY,
    interval: nextInterval,
    ease: clamp(nextEase),
    reps: reps + 1,
    lapses,
    last: now,
  };
}

/**
 * The schedule attached to a stored item (new cards are due now).
 * @param {object} item - the stored favourite.
 * @param {number} now - the current time.
 * @returns {object} the schedule.
 */
export function scheduleOf(item, now) {
  const stored = item?.srs;
  if (stored === null || typeof stored !== 'object') return freshSchedule(now);
  return {
    due: Number.isFinite(stored.due) ? stored.due : now,
    interval: Number.isFinite(stored.interval) ? stored.interval : 0,
    ease: Number.isFinite(stored.ease) ? stored.ease : 2.5,
    reps: Number.isFinite(stored.reps) ? stored.reps : 0,
    lapses: Number.isFinite(stored.lapses) ? stored.lapses : 0,
    last: Number.isFinite(stored.last) ? stored.last : 0,
  };
}

/**
 * How many cards are due, and how many exist.
 * @param {Array<object>} items - the stored items.
 * @param {number} now - the current time.
 * @returns {{due: number, total: number, newCards: number}} the counts.
 */
export function countDue(items, now = Date.now()) {
  let due = 0;
  let newCards = 0;
  for (const item of items) {
    const schedule = scheduleOf(item, now);
    if (schedule.due <= now) {
      due += 1;
      if (schedule.reps === 0) newCards += 1;
    }
  }
  return { due, total: items.length, newCards };
}

/**
 * Read the stored list.
 * @returns {Promise<Array<object>>} the items, newest first.
 */
async function readAll() {
  try {
    const raw = await fsp.readFile(FAV_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed?.items) ? parsed.items : [];
  } catch {
    return [];
  }
}

/**
 * Write the list atomically.
 * @param {Array<object>} items - the items to persist.
 * @returns {Promise<void>} resolves when written.
 */
async function writeAll(items) {
  await fsp.mkdir(FAV_DIR, { recursive: true });
  const tmp = `${FAV_FILE}.${process.pid}.tmp`;
  await fsp.writeFile(tmp, JSON.stringify({ items: items.slice(0, MAX_ITEMS) }, null, 2), 'utf8');
  await fsp.rename(tmp, FAV_FILE);
}

/**
 * Run one mutation after the previous one finished.
 * @param {Function} work - the mutation.
 * @returns {Promise<any>} its result.
 */
function serial(work) {
  const next = queue.then(work, work);
  queue = next.then(
    () => undefined,
    () => undefined,
  );
  return next;
}

/**
 * List favourites, optionally filtered.
 * @param {object} [query] - `{ kind, search, limit }`.
 * @returns {Promise<Array<object>>} the items.
 */
export async function listFavorites(query = {}) {
  const items = await readAll();
  const kind = KINDS.includes(query.kind) ? query.kind : '';
  const search = typeof query.search === 'string' ? query.search.trim().toLowerCase() : '';
  return items
    .filter((item) => (kind === '' ? true : item.kind === kind))
    .filter((item) =>
      search === ''
        ? true
        : String(item.source ?? '').toLowerCase().includes(search) ||
          String(item.target ?? '').toLowerCase().includes(search),
    )
    .slice(0, Number.isFinite(query.limit) ? Math.max(1, Number(query.limit)) : 500);
}

/**
 * Add one favourite. A repeat of the same source text updates the existing row
 * instead of piling up duplicates.
 * @param {object} input - `{ kind, source, target, from, to }`.
 * @returns {Promise<object>} the stored item.
 */
export function addFavorite({ kind, source, target, from, to }) {
  return serial(async () => {
    const text = typeof source === 'string' ? source.trim() : '';
    const meaning = typeof target === 'string' ? target.trim() : '';
    if (text === '') throw new Error('收藏内容不能为空');
    const items = await readAll();
    const existing = items.find((item) => item.source === text);
    if (existing !== undefined) {
      Object.assign(existing, {
        kind: KINDS.includes(kind) ? kind : existing.kind,
        target: meaning,
        from: from ?? existing.from,
        to: to ?? existing.to,
        at: Date.now(),
      });
      await writeAll(items);
      return existing;
    }
    const item = {
      id: randomUUID(),
      kind: KINDS.includes(kind) ? kind : text.includes(' ') ? 'sentence' : 'word',
      source: text,
      target: meaning,
      from: from ?? '',
      to: to ?? '',
      at: Date.now(),
      // New cards are due immediately: the first review is what schedules them.
      srs: freshSchedule(Date.now()),
    };
    items.unshift(item);
    await writeAll(items);
    return item;
  });
}

/**
 * The cards to review now, scheduled first by due time.
 * @param {number} [limit] - how many cards to return.
 * @param {number} [now] - the current time.
 * @returns {Promise<Array<object>>} the due items, each with its schedule.
 */
export async function listDue(limit = 30, now = Date.now()) {
  const items = await readAll();
  return items
    .map((item) => ({ ...item, srs: scheduleOf(item, now) }))
    .filter((item) => item.srs.due <= now)
    .sort((a, b) => a.srs.due - b.srs.due)
    .slice(0, Math.max(1, limit));
}

/**
 * Record one review grade for a card.
 * @param {string} id - the item id.
 * @param {string} grade - again | hard | good | easy.
 * @param {number} [now] - the current time.
 * @returns {Promise<object|null>} the updated item, or null when not found.
 */
export function gradeFavorite(id, grade, now = Date.now()) {
  return serial(async () => {
    if (!GRADES.includes(grade)) throw new Error('未知的评分：' + grade);
    const items = await readAll();
    const item = items.find((entry) => entry.id === id);
    if (item === undefined) return null;
    item.srs = gradeCard(scheduleOf(item, now), grade, now);
    await writeAll(items);
    return item;
  });
}

/**
 * Remove one favourite.
 * @param {string} id - the item id.
 * @returns {Promise<boolean>} whether something was removed.
 */
export function removeFavorite(id) {
  return serial(async () => {
    const items = await readAll();
    const next = items.filter((item) => item.id !== id);
    if (next.length === items.length) return false;
    await writeAll(next);
    return true;
  });
}

/**
 * Export the whole list as Markdown, which is what a reader actually pastes
 * into a note or an Anki import.
 * @returns {Promise<string>} the Markdown document.
 */
export async function exportFavorites() {
  const items = await readAll();
  const lines = ['# 生词本', ''];
  for (const item of items) {
    const stamp = new Date(Number(item.at) || Date.now()).toISOString().slice(0, 10);
    lines.push(`- **${item.source}** — ${item.target}  `);
    const schedule = scheduleOf(item, 0);
    const stage = schedule.reps === 0 ? 'new' : `interval ${schedule.interval}d`;
    lines.push(`  <sub>${item.from || 'auto'} → ${item.to || ''} · ${stamp} · ${stage}</sub>`);
  }
  return lines.join('\n') + '\n';
}
