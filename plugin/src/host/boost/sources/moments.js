/**
 * Moments collector — the user's short personal notes ("瞬间").
 *
 * The store is a single JSON file written by the Moments plugin:
 * `{ version, notes: [{ id, content, createdAt, updatedAt, deletedAt, pinned }] }`.
 * Deleted notes must never reach the model; pinned notes are not special here
 * because ranking is the same for every item: keyword overlap with the draft,
 * then recency.
 *
 * The reader tolerates a missing file (it is normal on a fresh profile) but
 * reports it, and never throws.
 */
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';

import { toEpochMs } from './rank.js';

const TIMEOUT_MS = 1200;

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
 * The profile directory when the caller did not resolve one.
 * @returns {string} the default profile directory.
 */
function defaultProfileDir() {
  const fromEnv = text(process.env.DSH_PROFILE_DIR);
  return fromEnv !== '' ? fromEnv : join(homedir(), '.dsh');
}

/**
 * Turn one stored note into a collector item.
 * @param {any} note - the raw note.
 * @returns {{text: string, at?: number}|null} the item, or null when unusable.
 */
function noteItem(note) {
  if (!isRecord(note)) return null;
  if (note.deletedAt !== null && note.deletedAt !== undefined && note.deletedAt !== 0) return null;
  const body = text(note.content) || text(note.text);
  if (body === '') return null;
  const item = { text: body };
  const at = toEpochMs(note.updatedAt) || toEpochMs(note.createdAt);
  if (at > 0) item.at = at;
  return item;
}

/**
 * Collect the user's active Moments notes.
 * @param {object} options - the collector input.
 * @param {object} [options.config] - the whole collector config.
 * @param {string} [options.profileDir] - the resolved profile directory.
 * @returns {Promise<{items: Array<object>, error?: string}>} the collected items.
 */
export async function collectMoments({ config = {}, profileDir = '' } = {}) {
  const moments = isRecord(config?.moments) ? config.moments : {};
  const base = text(profileDir) || defaultProfileDir();
  const directory = text(moments.dir) || join(base, 'moments-notes');
  const file = text(moments.file) || join(directory, 'notes.json');

  let signal;
  try {
    signal = AbortSignal.timeout(TIMEOUT_MS);
  } catch {
    signal = undefined;
  }

  let raw;
  try {
    raw = await readFile(file, 'utf8', ...(signal === undefined ? [] : [{ signal }]));
  } catch (error) {
    if (error?.name === 'TimeoutError' || error?.name === 'AbortError') {
      return { items: [], error: '瞬间读取超时' };
    }
    if (error?.code === 'ENOENT') return { items: [], error: '瞬间记录不存在' };
    return { items: [], error: '瞬间记录无法读取' };
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { items: [], error: '瞬间数据无法解析' };
  }

  const notes = isRecord(parsed) && Array.isArray(parsed.notes) ? parsed.notes : null;
  if (notes === null) return { items: [], error: '瞬间数据格式异常' };

  const items = [];
  for (const note of notes) {
    const item = noteItem(note);
    if (item !== null) items.push(item);
  }
  if (items.length === 0) return { items: [], error: '还没有瞬间记录' };
  return { items };
}
