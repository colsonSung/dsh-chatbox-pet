/**
 * Build one .pptx from one sentence.
 *
 * Flow: the model writes a validated outline (outline.js), render.py draws it
 * (python-pptx), and the file lands in a local folder the page can download.
 * Nothing here calls a cloud renderer; a deck with 6 slides takes a couple of
 * seconds end to end.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import { aiError } from '../llm.js';
import { draftOutline } from './outline.js';

const run = promisify(execFile);

const HERE = path.dirname(fileURLToPath(import.meta.url));
const RENDER_SCRIPT = path.join(HERE, 'render.py');

/** Where generated decks live. Kept out of the workspace on purpose. */
export const DECKS_DIR = path.join(os.homedir(), '.dsh', 'chatbox-pet', 'decks');

/** Keep the folder from growing without bound. */
const KEEP = 40;

/**
 * Find the interpreter that has python-pptx installed.
 * @returns {string} an absolute path or the bare command.
 */
export function pythonPath() {
  const candidates = [
    process.env.VIDEO_LENS_PYTHON,
    process.env.CHATBOX_PET_PYTHON,
    path.join(os.homedir(), 'miniconda3', 'bin', 'python3'),
    '/opt/homebrew/bin/python3',
    '/usr/local/bin/python3',
  ].filter((candidate) => typeof candidate === 'string' && candidate !== '');
  for (const candidate of candidates) {
    if (candidate.includes('/') ? existsSync(candidate) : true) return candidate;
  }
  return 'python3';
}

/**
 * Make a filesystem-safe slug from a title.
 * @param {string} title - the deck title.
 * @returns {string} a short slug.
 */
function slug(title) {
  const base = String(title ?? '')
    .replace(/[\\/:*?"<>|\s]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  return base === '' ? 'deck' : base;
}

/**
 * Drop the oldest decks once the folder is over the cap.
 * @returns {Promise<void>} resolves when done.
 */
async function prune() {
  try {
    const names = (await fsp.readdir(DECKS_DIR)).filter((name) => name.endsWith('.pptx'));
    if (names.length <= KEEP) return;
    const stat = await Promise.all(
      names.map(async (name) => ({ name, at: (await fsp.stat(path.join(DECKS_DIR, name))).mtimeMs })),
    );
    stat.sort((a, b) => a.at - b.at);
    for (const entry of stat.slice(0, stat.length - KEEP)) {
      await fsp.rm(path.join(DECKS_DIR, entry.name), { force: true });
    }
  } catch {
    // Pruning is housekeeping; a failure must never fail the deck.
  }
}

/**
 * Render an outline into a file.
 * @param {object} outline - the normalised outline.
 * @param {string} [title] - file name source.
 * @returns {Promise<{path: string, name: string, slides: number}>} the result.
 */
export async function renderDeck(outline, title = outline?.title) {
  if (!existsSync(RENDER_SCRIPT)) throw aiError('渲染脚本缺失，请重装插件');
  await fsp.mkdir(DECKS_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const name = `${stamp}-${slug(title)}.pptx`;
  const pptx = path.join(DECKS_DIR, name);
  const outlinePath = path.join(DECKS_DIR, `${stamp}.outline.json`);
  await fsp.writeFile(outlinePath, JSON.stringify(outline, null, 2), 'utf8');

  let parsed;
  try {
    const { stdout } = await run(pythonPath(), [RENDER_SCRIPT, '--in', outlinePath, '--out', pptx], {
      timeout: 120_000,
      maxBuffer: 4 * 1024 * 1024,
    });
    parsed = JSON.parse(String(stdout).trim().split('\n').pop());
  } catch (error) {
    throw aiError('生成 PPT 失败：' + String(error?.message ?? error), error);
  } finally {
    await fsp.rm(outlinePath, { force: true });
  }
  if (parsed?.ok !== true) {
    throw aiError(String(parsed?.error ?? '生成 PPT 失败'));
  }
  await prune();
  return { path: pptx, name, slides: Number(parsed.slides) || 0 };
}

/**
 * One sentence in, one .pptx out.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.topic - what the deck is about.
 * @param {string} [input.audience] - who it is for.
 * @param {number} [input.pages] - desired slide count (6/10/14).
 * @param {string} [input.points] - must-cover notes.
 * @param {'zh'|'en'} [input.locale] - output language.
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<object>} `{ path, name, slides, outline }`.
 */
export async function buildDeck({ llm, provider, model, topic, audience, pages = 10, points, locale = 'zh', sessionId, signal }) {
  const clean = typeof topic === 'string' ? topic.trim() : '';
  if (clean === '') throw aiError('先写一句主题，例如「支付产品季度复盘」');
  // 2 content sections + cover + agenda + closing ≈ 6 slides, so a 6-slide deck
  // gets 2 sections and a 14-slide deck gets 6.
  const sections = Math.min(6, Math.max(2, Math.round((Number(pages) || 10) / 2.4)));
  const outline = await draftOutline({ llm, provider, model, topic: clean, audience, sections, points, locale, sessionId, signal });
  const file = await renderDeck(outline, clean);
  return { ...file, outline };
}
