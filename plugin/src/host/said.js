/**
 * The lines the reader has put in the pet's mouth.
 *
 * The pet should remember what it was told to say, so the same line can be
 * asked for again later — after a reload, in another session, on another day.
 * That makes it Host state, not page state: one JSON file next to the prefs,
 * read tolerantly (a missing or corrupt file is an empty list) and written
 * atomically.
 *
 * The list is bounded and de-duplicated: newest first, at most `SAID_LIMIT`
 * lines, and re-saying an existing line moves it to the front instead of
 * adding a twin.
 */
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';

import { serviceOf } from './boost/config.js';

/** How many remembered lines survive; the oldest fall off. */
export const SAID_LIMIT = 24;

/** The longest line the pet will store (mirrors the client's say cap). */
export const SAID_MAX_CHARS = 60;

/**
 * Resolve the remembered-lines file for this Host.
 * @param {any} ctx - the Host plugin context.
 * @returns {string} the absolute file path.
 */
export function saidFile(ctx) {
  const profileContext = serviceOf(ctx, 'profileContext');
  const profileDir =
    typeof profileContext?.dir === 'string' && profileContext.dir !== ''
      ? profileContext.dir
      : process.env.DSH_PROFILE_DIR || join(homedir(), '.dsh');
  return join(profileDir, 'chatbox-pet', 'said.json');
}

/**
 * Clean one line the same way the client does: collapse whitespace, cap by
 * code point so an emoji is never cut in half.
 * @param {any} raw - the raw text.
 * @returns {string} the storable line, or ''.
 */
export function cleanSaidLine(raw) {
  const text = String(raw ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text === '') return '';
  const characters = Array.from(text);
  return characters.length <= SAID_MAX_CHARS ? text : characters.slice(0, SAID_MAX_CHARS).join('');
}

/**
 * Fold one new line into the remembered list.
 * @param {Array<{text: string, at: number}>} lines - the current list, newest first.
 * @param {string} text - the new line.
 * @param {number} [at] - when it was said (epoch ms).
 * @returns {Array<{text: string, at: number}>} the new list.
 */
export function rememberSaid(lines, text, at = Date.now()) {
  const line = cleanSaidLine(text);
  const current = Array.isArray(lines) ? lines : [];
  const rest = current.filter((entry) => entry !== null && typeof entry?.text === 'string' && entry.text !== line);
  const next = [{ text: line, at: Number.isFinite(at) ? at : Date.now() }, ...rest];
  return line === '' ? rest.slice(0, SAID_LIMIT) : next.slice(0, SAID_LIMIT);
}

/**
 * Keep only well-formed entries from a parsed file.
 * @param {any} parsed - whatever the file held.
 * @returns {Array<{text: string, at: number}>} the usable lines.
 */
export function normaliseSaid(parsed) {
  const raw = Array.isArray(parsed?.lines) ? parsed.lines : Array.isArray(parsed) ? parsed : [];
  const out = [];
  const seen = new Set();
  for (const entry of raw) {
    const text = cleanSaidLine(typeof entry === 'string' ? entry : entry?.text);
    if (text === '' || seen.has(text)) continue;
    seen.add(text);
    const at = typeof entry?.at === 'number' && Number.isFinite(entry.at) ? entry.at : 0;
    out.push({ text, at });
    if (out.length >= SAID_LIMIT) break;
  }
  return out;
}

/**
 * Read the remembered lines (never throws).
 * @param {any} ctx - the Host plugin context.
 * @returns {Promise<Array<{text: string, at: number}>>} the lines, newest first.
 */
export async function readSaid(ctx) {
  try {
    const raw = await readFile(saidFile(ctx), 'utf8');
    return normaliseSaid(JSON.parse(raw));
  } catch {
    // Missing, half-written or corrupt: no memory is a valid memory.
    return [];
  }
}

/**
 * Persist a list atomically.
 * @param {any} ctx - the Host plugin context.
 * @param {Array<{text: string, at: number}>} lines - the lines to store.
 * @returns {Promise<Array<{text: string, at: number}>>} what was stored.
 */
async function persistSaid(ctx, lines) {
  const file = saidFile(ctx);
  await mkdir(dirname(file), { recursive: true });
  const temporary = `${file}.tmp-${process.pid}`;
  await writeFile(temporary, JSON.stringify({ lines }, null, 2), 'utf8');
  await rename(temporary, file);
  return lines;
}

/**
 * Remember one line and return the whole list.
 * @param {any} ctx - the Host plugin context.
 * @param {string} text - the line.
 * @param {number} [at] - when it was said.
 * @returns {Promise<Array<{text: string, at: number}>>} the new list.
 */
export async function rememberLine(ctx, text, at = Date.now()) {
  const current = await readSaid(ctx);
  const next = rememberSaid(current, text, at);
  return persistSaid(ctx, next);
}

/**
 * Forget every remembered line.
 * @param {any} ctx - the Host plugin context.
 * @returns {Promise<Array<{text: string, at: number}>>} the empty list.
 */
export async function clearSaid(ctx) {
  return persistSaid(ctx, []);
}
