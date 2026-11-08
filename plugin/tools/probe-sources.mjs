#!/usr/bin/env node
/**
 * Print what Prompt Boost would feed the model for one draft.
 *
 * This is the real-data probe: it calls the same `collectContext` the Host route
 * calls, against the machine's actual stores (Supermemory, Moments, the reader
 * shelf, ai-minutes), and prints a few lines per source. The Lead uses it to
 * verify the collectors against live data instead of trusting fixtures.
 *
 * Usage:
 *   node prompt-boost/tools/probe-sources.mjs                      # improve mode, default query
 *   node prompt-boost/tools/probe-sources.mjs "prompt 优化 插件"
 *   node prompt-boost/tools/probe-sources.mjs --compose            # empty query, recency only
 *   node prompt-boost/tools/probe-sources.mjs --profile <dir> "query"
 */
import { homedir } from 'node:os';
import { join } from 'node:path';

import { collectContext } from '../src/host/sources/index.js';

/** Longest item body printed before the line is cut. */
const PREVIEW = 110;

/**
 * Read `--flag value` from argv.
 * @param {string[]} args - process args after the script name.
 * @param {string} flag - the flag name.
 * @returns {string} the value, or ''.
 */
function flagValue(args, flag) {
  const index = args.indexOf(flag);
  if (index < 0) return '';
  return typeof args[index + 1] === 'string' && !args[index + 1].startsWith('--') ? args[index + 1] : '';
}

/**
 * Format an epoch-ms timestamp as a short local date.
 * @param {number} at - epoch ms.
 * @returns {string} e.g. `2026-11-07`.
 */
function day(at) {
  const date = new Date(at);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10);
}

const args = process.argv.slice(2);
const compose = args.includes('--compose');
const profileFlag = flagValue(args, '--profile');
const query = compose
  ? ''
  : args.filter((arg) => !arg.startsWith('--') && arg !== profileFlag).join(' ').trim() || 'prompt 优化 插件';
const profileDir = profileFlag || process.env.DSH_PROFILE_DIR || join(homedir(), '.dsh', 'profiles', 'desktop');

const startedAt = Date.now();
const result = await collectContext({ query, now: startedAt, config: { profileDir } });
const elapsed = Date.now() - startedAt;

console.log('# prompt-boost sources probe');
console.log(`profileDir: ${profileDir}`);
console.log(`query: ${JSON.stringify(query)} (${compose ? 'compose — recency' : 'improve — keyword'}, empty means recency)`);
console.log(`elapsed: ${elapsed}ms  totalChars: ${result.totalChars}`);
console.log('');

const details = [
  ['memory', 'supermemory search/list'],
  ['minutes', 'ai-minutes meetings'],
  ['reader', 'reader shelf'],
  ['moments', 'moments-notes'],
];
for (const source of result.sources) {
  const detail = details.find(([id]) => id === source.id)?.[1] ?? '';
  if (source.items.length === 0) {
    console.log(`[${source.id}] ${source.label}: 0 items${source.error ? ` — error: ${source.error}` : ' — empty (no data)'}`);
    console.log('');
    continue;
  }
  const filled = source.items.reduce((total, item) => total + item.text.length, 0);
  console.log(`[${source.id}] ${source.label}: ${source.items.length} items, ${filled} chars (${detail})`);
  for (const item of source.items) {
    const head = item.text.length > PREVIEW ? `${item.text.slice(0, PREVIEW)}…` : item.text;
    const meta = [
      item.title ? `title=${item.title}` : '',
      item.at ? `at=${day(item.at)}` : '',
      typeof item.similarity === 'number' ? `similarity=${item.similarity}` : '',
    ].filter((value) => value !== '').join(' ');
    console.log(`  - ${head}${meta === '' ? '' : `  [${meta}]`}`);
  }
  console.log('');
}

const failed = result.sources.filter((source) => source.error);
if (failed.length > 0) {
  console.log(`degraded sources: ${failed.map((source) => `${source.id}=${source.error}`).join('; ')}`);
}
process.exitCode = 0;
