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
    };
    items.unshift(item);
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
    lines.push(`  <sub>${item.from || 'auto'} → ${item.to || ''} · ${stamp}</sub>`);
  }
  return lines.join('\n') + '\n';
}
