/**
 * The Pikachu asset pack on disk.
 *
 * The pack belongs to the desktop pet (`dsh-pet`); this bundle only reads it.
 * Everything here is tolerant: a missing or damaged pack yields the defaults
 * so the routes answer 200 with an empty text set instead of failing.
 */
import { homedir } from 'node:os';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { parseJsonc } from './jsonc.js';

/** Root of the live pack, verified on this machine. */
export const PACK_DIR = join(homedir(), '.dsh', 'dsh-pet', 'pet');

/** Directory holding the alpha-transparent webm clips (VP9-alpha). */
export const ANIMATION_DIR = join(PACK_DIR, 'pokemon-animation');

/**
 * Directory holding the HEVC-with-Alpha movs: the same clips in the one form
 * WebKit can play *with* their alpha channel intact.
 *
 * Why both formats exist. WebKit decodes VP9-in-WebM but drops the alpha
 * plane, so the pack's webm renders as an opaque black rectangle in Safari and
 * on every iPhone browser (all of them are WebKit) — that is the black box
 * reported on mobile. HEVC-with-Alpha inside a QuickTime container is
 * transparent there (Apple: iOS 13 / macOS Catalina and later). Chromium and
 * Firefox are the opposite: webm carries alpha and they cannot play the mov.
 * The client picks one format per renderer (src/client/media.js); the Host
 * serves whichever was asked for.
 */
export const MOV_ANIMATION_DIR = join(ANIMATION_DIR, 'mov');

/** The static fallback frame. */
export const AVATAR_NAME = 'pokemon-avatar.png';

/**
 * The seamless idle loop, derived from idle-breathe (frames 35..139, the
 * turned-pose look-around whose last frame matches its first — the pack's own
 * idle clips all have a loop seam). Produced by tools/make-idle-loop.sh into
 * the profile's derived directory in both formats; when absent the asset route
 * falls back to the pack's idle-breathe in the same format, so the idle loop
 * never 404s on a machine that never ran the tool.
 */
export const IDLE_LOOP_NAME = 'idle-breathe-loop.webm';
export const IDLE_LOOP_MOV_NAME = 'idle-breathe-loop.mov';

/** The derived directory: both formats of the loop live side by side. */
const DERIVED_DIR = join(homedir(), '.dsh', 'profiles', 'desktop', 'chatbox-pet', 'derived');
export const DERIVED_IDLE_LOOP = join(DERIVED_DIR, IDLE_LOOP_NAME);
export const DERIVED_IDLE_LOOP_MOV = join(DERIVED_DIR, IDLE_LOOP_MOV_NAME);

/**
 * The pack clips plus the derived seamless idle loop — the whitelist the
 * client may ever request. Anything else is a 404 before any path is built.
 */
export const ANIMATIONS = [
  'idle-breathe',
  'idle-look',
  'idle-march',
  'act-charge',
  'act-beach',
  'act-fishing',
  'act-harley',
  'act-reading',
  'act-shy',
  'act-snore',
  'act-spin',
  'act-stretch',
  'act-thunderbolt',
  'act-typing',
  'click-angry',
  'click-cheer',
  'click-surprise',
  'click-wave',
  'idle-breathe-loop',
];

/**
 * Every file the asset route may serve, with its content type.
 *
 * Two formats per clip: `<name>.webm` (Chromium/Firefox, VP9-alpha) and
 * `<name>.mov` (WebKit, HEVC-with-Alpha). Both are whitelisted so the client
 * can ask for exactly the one its renderer can show with transparency; a
 * missing mov is a 404 and the client falls back to the still avatar, never to
 * the webm — a webm on WebKit is the black box this format split exists to
 * remove.
 */
export const ASSET_FILES = new Map([
  ...ANIMATIONS.filter((name) => name !== 'idle-breathe-loop').flatMap((name) => [
    [`${name}.webm`, { file: join(ANIMATION_DIR, `${name}.webm`), contentType: 'video/webm' }],
    [`${name}.mov`, { file: join(MOV_ANIMATION_DIR, `${name}.mov`), contentType: 'video/quicktime' }],
  ]),
  // The derived seamless loop lives outside the pack; the fallback keeps the
  // idle loop alive on a fresh machine that never ran tools/make-idle-loop.sh.
  [
    IDLE_LOOP_NAME,
    {
      file: DERIVED_IDLE_LOOP,
      contentType: 'video/webm',
      fallback: join(ANIMATION_DIR, 'idle-breathe.webm'),
    },
  ],
  [
    IDLE_LOOP_MOV_NAME,
    {
      file: DERIVED_IDLE_LOOP_MOV,
      contentType: 'video/quicktime',
      fallback: join(MOV_ANIMATION_DIR, 'idle-breathe.mov'),
    },
  ],
  [AVATAR_NAME, { file: join(PACK_DIR, AVATAR_NAME), contentType: 'image/png' }],
]);

/**
 * Bucket order of the pack's workStatusTexts, matching the contract table.
 * The live pack ships five buckets; `error` has no bucket there and falls
 * back to ERROR_LINES.
 */
export const BUCKET_INDEX = {
  thinking: 0,
  working: 1,
  result: 2,
  waiting: 3,
  success: 4,
  error: 5,
};

/** Pikachu-voiced error lines used when the pack has no sixth bucket. */
export const ERROR_LINES = ['皮卡……出错了', '皮卡丘，这一步失败了', '皮卡……需要帮忙'];

/** How long a pack read stays cached; the pack changes rarely. */
const PACK_TTL_MS = 5000;

let cached = { at: 0, value: null };

/**
 * Read the pack definition.
 * @returns {Promise<{name: string, size: number, workStatusTexts: string[][], animations: string[]}>}
 */
export async function loadPack() {
  const now = Date.now();
  if (cached.value !== null && now - cached.at < PACK_TTL_MS) return cached.value;
  const value = await readPack();
  cached = { at: now, value };
  return value;
}

/**
 * Normalize the raw JSONC into the config-route shape.
 * @returns {Promise<{name: string, size: number, workStatusTexts: string[][], animations: string[]}>}
 */
async function readPack() {
  const fallback = { name: '皮卡丘', size: 110, workStatusTexts: [], animations: ANIMATIONS };
  let raw;
  try {
    raw = await readFile(join(PACK_DIR, 'pokemon-config.jsonc'), 'utf8');
  } catch {
    return fallback;
  }
  const config = parseJsonc(raw);
  if (config === null || typeof config !== 'object') return fallback;
  const pet = Array.isArray(config.pets)
    ? config.pets.find((entry) => entry?.id === 'pikachu') ?? config.pets[0]
    : undefined;
  const name = typeof pet?.name === 'string' && pet.name !== '' ? pet.name : fallback.name;
  // The pack's own size is 180; the contract caps the rendered pet at 120.
  const size = 110;
  const workStatusTexts = Array.isArray(config.workStatusTexts)
    ? config.workStatusTexts.map((bucket) =>
        Array.isArray(bucket) ? bucket.filter((line) => typeof line === 'string' && line !== '') : [],
      )
    : [];
  return { name, size, workStatusTexts, animations: ANIMATIONS };
}

/**
 * Pick one bubble line for a status, randomly within its bucket.
 * @param {{workStatusTexts: string[][]}} pack - the loaded pack.
 * @param {string} status - one of the six work statuses.
 * @param {() => number} [rng] - randomness source, injectable for tests.
 * @returns {string|undefined} a line, or undefined when nothing fits.
 */
export function pickBubble(pack, status, rng = Math.random) {
  const index = BUCKET_INDEX[status];
  const bucket = index === undefined ? undefined : pack?.workStatusTexts?.[index];
  const lines = Array.isArray(bucket) && bucket.length > 0
    ? bucket
    : status === 'error'
      ? ERROR_LINES
      : undefined;
  if (lines === undefined || lines.length === 0) return undefined;
  return lines[Math.floor(rng() * lines.length) % lines.length];
}
