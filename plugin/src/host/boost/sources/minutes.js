/**
 * Minutes collector — the user's local AI meeting minutes ("听记").
 *
 * Storage is the ai-voice-minutes plugin's data directory:
 *
 *   <dataDir>/settings.json          { "dataDir": "..." } (optional)
 *   <dataDir>/meetings/*.json        one meeting per file:
 *     { title, createdAt, transcript, minutes: { summary, topics: [{ title, summary, decisions }] } }
 *
 * Only a few meetings are read (the newest by file mtime), because transcript
 * files grow with the meeting length and the source budget is 2400 characters
 * anyway. A single corrupt meeting file is skipped; it must not lose the rest.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, isAbsolute, join, normalize, resolve } from 'node:path';

import { toEpochMs } from './rank.js';

const DEFAULT_HOME = join(homedir(), '.ai-minutes');
const TIMEOUT_MS = 1200;
/** Maximum meeting files parsed in one collection. */
const MAX_MEETINGS = 16;
/** Topic text is trimmed before the item cap so decisions are not cut away. */
const SUMMARY_LIMIT = 200;
const DECISIONS_LIMIT = 96;
const TRANSCRIPT_LIMIT = 180;

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
 * Cut a line to a limit, ending with an ellipsis when it was longer.
 * @param {string} value - the line.
 * @param {number} limit - maximum characters.
 * @returns {string} the line, shortened when needed.
 */
function clip(value, limit) {
  const body = line(value);
  if (body.length <= limit) return body;
  return `${body.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
}

/**
 * Expand a leading `~` and resolve a path against its base.
 * @param {string} value - the configured value.
 * @param {string} base - the directory relative values live under.
 * @returns {string} the absolute path.
 */
function absoluteFrom(value, base) {
  const raw = line(value);
  if (raw === '') return base;
  const expanded = raw === '~' ? homedir() : raw.startsWith('~/') ? join(homedir(), raw.slice(2)) : raw;
  return isAbsolute(expanded) ? normalize(expanded) : resolve(base, expanded);
}

/**
 * Resolve the data directory from the config, the settings file, then the default.
 * @param {object} options - the minutes branch of the config.
 * @param {AbortSignal|undefined} signal - the collection timeout.
 * @param {string[]} issues - non-fatal problems collected while resolving.
 * @returns {Promise<string>} the resolved data directory.
 */
async function resolveDataDir(options, signal, issues) {
  const home = line(options.homeDir) ? absoluteFrom(options.homeDir, DEFAULT_HOME) : DEFAULT_HOME;
  const configured = line(options.dataDir);
  if (configured !== '') return absoluteFrom(configured, home);

  const settingsPath = line(options.settingsPath) || join(home, 'settings.json');
  try {
    const raw = await readFile(settingsPath, 'utf8', ...(signal === undefined ? [] : [{ signal }]));
    const settings = JSON.parse(raw);
    const fromSettings = isRecord(settings) ? line(settings.dataDir) : '';
    if (fromSettings !== '') return absoluteFrom(fromSettings, dirname(settingsPath));
  } catch (error) {
    if (error?.code !== 'ENOENT' && error?.name !== 'TimeoutError' && error?.name !== 'AbortError') {
      // A broken settings file must degrade to the default directory, not fail
      // the whole source.
      issues.push('听记设置无法解析');
    }
  }
  return home;
}

/**
 * Build one context item from a meeting record.
 * @param {any} record - the parsed meeting JSON.
 * @returns {{text: string, title?: string, at?: number}|null} the item, or null.
 */
function meetingItem(record) {
  if (!isRecord(record)) return null;
  const minutes = isRecord(record.minutes) ? record.minutes : {};
  const title = line(record.title) || line(minutes.title);

  const summary = clip(minutes.summary, SUMMARY_LIMIT);
  const topics = Array.isArray(minutes.topics) ? minutes.topics : [];
  const decisions = [];
  const topicSummaries = [];
  for (const topic of topics) {
    if (!isRecord(topic)) continue;
    if (Array.isArray(topic.decisions)) {
      for (const decision of topic.decisions) {
        const value = clip(decision, DECISIONS_LIMIT);
        if (value !== '') decisions.push(value);
      }
    }
    const topicSummary = line(topic.summary);
    if (topicSummary !== '') topicSummaries.push(clip(topicSummary, DECISIONS_LIMIT));
  }

  const parts = [];
  if (summary !== '') parts.push(summary);
  if (summary === '' && topicSummaries.length > 0) parts.push(topicSummaries.slice(0, 3).join('；'));
  if (decisions.length > 0) parts.push(`决策：${decisions.slice(0, 3).join('；')}`);
  if (parts.length === 0) {
    const transcript = line(record.finalTranscript) || line(record.transcript);
    if (transcript !== '') parts.push(clip(transcript, TRANSCRIPT_LIMIT));
  }
  if (parts.length === 0) return null;

  const item = { text: parts.join(' ') };
  if (title !== '') item.title = title;
  const at = toEpochMs(record.createdAt) || toEpochMs(record.updatedAt) || toEpochMs(record.finalAt);
  if (at > 0) item.at = at;
  return item;
}

/**
 * Collect the user's meeting minutes, newest first by file mtime.
 * @param {object} options - the collector input.
 * @param {object} [options.config] - the whole collector config.
 * @returns {Promise<{items: Array<object>, error?: string}>} the collected items.
 */
export async function collectMinutes({ config = {} } = {}) {
  const minutesConfig = isRecord(config?.minutes) ? config.minutes : {};
  const issues = [];
  let signal;
  try {
    signal = AbortSignal.timeout(TIMEOUT_MS);
  } catch {
    signal = undefined;
  }

  let meetingsDir;
  try {
    const dataDir = await resolveDataDir(minutesConfig, signal, issues);
    meetingsDir = join(dataDir, 'meetings');
  } catch {
    return { items: [], error: '听记目录无法解析' };
  }

  let entries;
  try {
    entries = await readdir(meetingsDir, { withFileTypes: true });
  } catch (error) {
    if (error?.name === 'TimeoutError' || error?.name === 'AbortError') return { items: [], error: '听记读取超时' };
    if (error?.code === 'ENOENT') return { items: [], error: '听记目录不存在' };
    return { items: [], error: '听记目录无法读取' };
  }

  const files = [];
  for (const entry of entries) {
    if (entry === null || typeof entry !== 'object') continue;
    if (entry.isFile?.() !== true) continue;
    const name = typeof entry.name === 'string' ? entry.name : '';
    if (name === '' || !name.endsWith('.json') || name.startsWith('.')) continue;
    files.push(name);
  }
  if (files.length === 0) return { items: [], error: '还没有听记数据' };

  // Newest files first: progress is appended to a meeting, so mtime prefers the
  // records the user most recently touched without parsing every transcript.
  const candidates = [];
  for (const name of files) {
    if (signal?.aborted === true) break;
    try {
      const info = await stat(join(meetingsDir, name));
      candidates.push({ name, mtime: Number.isFinite(info.mtimeMs) ? info.mtimeMs : 0 });
    } catch {
      // An unreadable file simply drops out of the candidates.
    }
  }
  candidates.sort((left, right) => right.mtime - left.mtime);
  if (candidates.length === 0) return { items: [], error: '听记文件无法读取' };

  const items = [];
  for (const candidate of candidates.slice(0, MAX_MEETINGS)) {
    if (signal?.aborted === true) {
      issues.push('听记读取超时');
      break;
    }
    try {
      const raw = await readFile(join(meetingsDir, candidate.name), 'utf8', ...(signal === undefined ? [] : [{ signal }]));
      const record = JSON.parse(raw);
      const item = meetingItem(record);
      if (item !== null) items.push(item);
      else issues.push('听记记录缺少可用内容');
    } catch (error) {
      issues.push(
        error?.name === 'TimeoutError' || error?.name === 'AbortError' ? '听记读取超时' : '听记记录无法解析',
      );
    }
  }

  if (items.length > 0) return { items };
  return { items: [], error: issues[0] ?? '还没有听记数据' };
}
