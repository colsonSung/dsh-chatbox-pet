/**
 * Reader collector — the user's own reading notes and current books ("读书").
 *
 * The shelf is the reader plugin's profile directory:
 *
 *   <profileDir>/reader/notes.json       { "<id>": Note }   (may not exist)
 *   <profileDir>/reader/books/<id>.json  full book record, one per file
 *   <profileDir>/reader/vocabulary.json  optional, not used as context
 *
 * Two item kinds are emitted, because both are personal reading context:
 *   - notes: the user's own sentences about a passage, joined to the book title
 *     (and chapter title, when the book record lets us resolve `unitIndex`);
 *   - recent books: what is being read right now, with progress — this is what
 *     keeps compose mode grounded on a machine with no saved notes yet.
 *
 * `notes.json` is deliberately allowed to be absent (the contract says so): a
 * fresh shelf has books but no notes. Vocabulary is optional and is not turned
 * into items — four reading items made of single words would spend the shared
 * budget on noise.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { homedir } from 'node:os';
import { basename, join } from 'node:path';

import { toEpochMs } from './rank.js';

const TIMEOUT_MS = 1200;
/** Maximum book records parsed in one collection (each record embeds chapters). */
const MAX_BOOK_FILES = 24;
const TITLE_LIMIT = 96;
const CHAPTER_LIMIT = 48;

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
 * Collapse whitespace inside a value.
 * @param {any} value - the raw value.
 * @returns {string} one normalised line.
 */
function line(value) {
  return text(value).replace(/\s+/g, ' ').trim();
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
 * Resolve a chapter title from a book record.
 * @param {any} record - the raw book record.
 * @param {any} index - a chapter/unit index.
 * @returns {string} the chapter title, or ''.
 */
function chapterTitle(record, index) {
  const chapters = Array.isArray(record?.chapters) ? record.chapters : [];
  const position = Number(index);
  if (!Number.isFinite(position) || position < 0 || position >= chapters.length) return '';
  const chapter = chapters[Math.trunc(position)];
  return line(chapter?.title);
}

/**
 * Format a reading progress percentage.
 * @param {any} value - `progress.percent`, normally 0..1.
 * @returns {string} e.g. `5.6`, or '' when unusable.
 */
function percentText(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return '';
  const percent = number <= 1 ? number * 100 : number;
  if (percent <= 0) return '';
  return `${Math.round(percent * 10) / 10}`.replace(/\.0$/, '');
}

/**
 * Turn one saved reading note into a collector item.
 * @param {any} note - the raw note.
 * @param {Map<string, object>} books - parsed book records by id.
 * @returns {{text: string, title?: string, at?: number}|null} the item, or null.
 */
function noteItem(note, books) {
  if (!isRecord(note)) return null;
  const body = line(note.text) || line(note.quote);
  if (body === '') return null;
  const item = { text: body };

  const book = books.get(text(note.bookId));
  if (book !== undefined) {
    const chapter = chapterTitle(book.record, note.unitIndex) || chapterTitle(book.record, book.progress?.chapterIndex);
    const heading = chapter !== '' ? `《${book.title}》· ${chapter.slice(0, CHAPTER_LIMIT)}` : `《${book.title}》`;
    item.title = heading.slice(0, TITLE_LIMIT);
  } else {
    const fallback = line(note.bookTitle);
    if (fallback !== '') item.title = fallback.slice(0, TITLE_LIMIT);
  }

  const at = toEpochMs(note.updatedAt) || toEpochMs(note.createdAt);
  if (at > 0) item.at = at;
  return item;
}

/**
 * Turn one book record into a "currently reading" item.
 * @param {object} book - the parsed book entry.
 * @returns {{text: string, title?: string, at?: number}|null} the item, or null.
 */
function bookItem(book) {
  const title = line(book?.title);
  if (title === '') return null;
  const progress = isRecord(book.progress) ? book.progress : {};
  const at = toEpochMs(progress.updatedAt) || toEpochMs(progress.activity?.lastReadAt);
  if (at === 0) return null;

  const parts = [`在读书目：《${title}》`];
  const author = line(book.author);
  if (author !== '') parts.push(`（${author.slice(0, 40)}）`);
  const percent = percentText(progress.percent);
  if (percent !== '') parts.push(`，已读 ${percent}%`);
  const chapter = chapterTitle(book.record, progress.chapterIndex) || chapterTitle(book.record, progress.unitIndex);
  if (chapter !== '') parts.push(`，当前：${chapter.slice(0, CHAPTER_LIMIT)}`);

  const item = { text: parts.join(''), title: title.slice(0, TITLE_LIMIT), at };
  return item;
}

/**
 * Parse book records, newest files first, keeping referenced books.
 * @param {string} directory - the reader directory.
 * @param {AbortSignal|undefined} signal - the collection timeout.
 * @param {Set<string>} referenced - book ids mentioned by saved notes.
 * @param {string[]} issues - non-fatal problems collected while reading.
 * @returns {Promise<Map<string, object>>} parsed books by id.
 */
async function readBooks(directory, signal, referenced, issues) {
  const books = new Map();
  const booksDir = join(directory, 'books');
  let entries;
  try {
    entries = await readdir(booksDir, { withFileTypes: true });
  } catch (error) {
    if (error?.code !== 'ENOENT') issues.push('读书书目无法读取');
    return books;
  }

  const candidates = [];
  for (const entry of entries) {
    if (entry === null || typeof entry !== 'object') continue;
    if (entry.isFile?.() !== true) continue;
    const name = typeof entry.name === 'string' ? entry.name : '';
    if (name === '' || !name.endsWith('.json') || name.startsWith('.')) continue;
    try {
      const info = await stat(join(booksDir, name));
      candidates.push({ name, id: basename(name, '.json'), mtime: Number.isFinite(info.mtimeMs) ? info.mtimeMs : 0 });
    } catch {
      // Unreadable book files simply drop out of the candidates.
    }
  }

  // Books referenced by notes are parsed even if the shelf has grown large; the
  // rest are taken newest-touched first, because their progress is the freshest
  // reading context.
  candidates.sort((left, right) => right.mtime - left.mtime);
  const ordered = [
    ...candidates.filter((candidate) => referenced.has(candidate.id)),
    ...candidates.filter((candidate) => !referenced.has(candidate.id)),
  ].slice(0, MAX_BOOK_FILES);

  for (const candidate of ordered) {
    if (signal?.aborted === true) {
      issues.push('读书数据读取超时');
      break;
    }
    try {
      const raw = await readFile(join(booksDir, candidate.name), 'utf8', ...(signal === undefined ? [] : [{ signal }]));
      const record = JSON.parse(raw);
      if (!isRecord(record)) {
        issues.push('读书书目格式异常');
        continue;
      }
      const id = text(record.id) || candidate.id;
      books.set(id, {
        id,
        title: line(record.title),
        author: line(record.author),
        progress: isRecord(record.progress) ? record.progress : {},
        record,
      });
    } catch (error) {
      issues.push(
        error?.name === 'TimeoutError' || error?.name === 'AbortError' ? '读书数据读取超时' : '读书书目无法解析',
      );
    }
  }
  return books;
}

/**
 * Collect reading notes and current books.
 * @param {object} options - the collector input.
 * @param {object} [options.config] - the whole collector config.
 * @param {string} [options.profileDir] - the resolved profile directory.
 * @returns {Promise<{items: Array<object>, error?: string}>} the collected items.
 */
export async function collectReader({ config = {}, profileDir = '' } = {}) {
  const readerConfig = isRecord(config?.reader) ? config.reader : {};
  const base = text(profileDir) || defaultProfileDir();
  const directory = text(readerConfig.dir) || join(base, 'reader');
  const issues = [];

  let signal;
  try {
    signal = AbortSignal.timeout(TIMEOUT_MS);
  } catch {
    signal = undefined;
  }

  // Notes first: their bookIds decide which book titles must be resolved.
  let noteEntries = [];
  let notesMissing = false;
  try {
    const raw = await readFile(join(directory, 'notes.json'), 'utf8', ...(signal === undefined ? [] : [{ signal }]));
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) noteEntries = parsed.filter(isRecord);
    else if (isRecord(parsed)) noteEntries = Object.values(parsed).filter(isRecord);
    else issues.push('读书笔记格式异常');
  } catch (error) {
    if (error?.code === 'ENOENT') notesMissing = true;
    else if (error?.name === 'TimeoutError' || error?.name === 'AbortError') issues.push('读书笔记读取超时');
    else issues.push('读书笔记无法解析');
  }

  const referenced = new Set();
  for (const note of noteEntries) {
    const bookId = text(note.bookId);
    if (bookId !== '') referenced.add(bookId);
  }

  const books = await readBooks(directory, signal, referenced, issues);

  const items = [];
  for (const note of noteEntries) {
    const item = noteItem(note, books);
    if (item !== null) items.push(item);
  }
  for (const book of books.values()) {
    const item = bookItem(book);
    if (item !== null) items.push(item);
  }

  if (items.length > 0) return { items };
  if (issues.length > 0) return { items: [], error: issues[0] };
  if (notesMissing) return { items: [], error: '读书目录不存在' };
  return { items: [], error: '还没有可用的读书数据' };
}
