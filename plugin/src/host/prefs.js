/**
 * The two feature switches of the bundle.
 *
 * `pet` and `boost` are independent: one can be off while the other works.
 * `sound` belongs to the pet (it is the pet's own audio). The file is the
 * source of truth at runtime; the plugin row's `config` only supplies the
 * initial defaults for a machine that has never written one.
 *
 * Reading tolerates a missing, half-written or corrupt file (defaults win);
 * writing is atomic (temp file + rename) so a crash never leaves a partial
 * JSON, and a patch merges over the current values instead of replacing them.
 */
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';

/** Every switch, all on by default. */
export const DEFAULT_PREFS = Object.freeze({ pet: true, boost: true, sound: true });

/** The keys a client may change. */
export const PREF_KEYS = Object.freeze(['pet', 'boost', 'sound']);

/**
 * Resolve the prefs file for this Host.
 * @param {any} ctx - the Host plugin context.
 * @returns {string} the absolute file path.
 */
export function prefsFile(ctx) {
  const profileContext = serviceOf(ctx, 'profileContext');
  const profileDir =
    typeof profileContext?.dir === 'string' && profileContext.dir !== ''
      ? profileContext.dir
      : process.env.DSH_PROFILE_DIR || join(homedir(), '.dsh');
  return join(profileDir, 'chatbox-pet', 'prefs.json');
}

/**
 * Read one Host service without assuming it is mounted.
 * @param {any} ctx - the Host plugin context.
 * @param {string} name - the service name.
 * @returns {any} the service, or undefined.
 */
function serviceOf(ctx, name) {
  try {
    if (ctx !== null && ctx !== undefined && typeof ctx.get === 'function') {
      const found = ctx.get(name);
      if (found !== undefined && found !== null) return found;
    }
  } catch {
    // Try the property below.
  }
  try {
    if (ctx !== null && ctx !== undefined) {
      const found = ctx[name];
      if (found !== undefined && found !== null) return found;
    }
  } catch {
    // Not reachable from this context.
  }
  return undefined;
}

/**
 * Coerce one stored value to a boolean, leaving bad input at the default.
 * @param {any} value - the stored value.
 * @param {boolean} fallback - the default.
 * @returns {boolean} the switch.
 */
function flag(value, fallback) {
  return typeof value === 'boolean' ? value : fallback;
}

/**
 * Read the current preferences (never throws).
 * @param {any} ctx - the Host plugin context.
 * @param {object} [config] - the plugin row config, used as defaults.
 * @returns {Promise<{pet: boolean, boost: boolean, sound: boolean}>} the prefs.
 */
export async function readPrefs(ctx, config) {
  const defaults = {
    pet: flag(config?.pet, DEFAULT_PREFS.pet),
    boost: flag(config?.boost, DEFAULT_PREFS.boost),
    sound: flag(config?.sound, DEFAULT_PREFS.sound),
  };
  try {
    const raw = await readFile(prefsFile(ctx), 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed === null || typeof parsed !== 'object') return defaults;
    return {
      pet: flag(parsed.pet, defaults.pet),
      boost: flag(parsed.boost, defaults.boost),
      sound: flag(parsed.sound, defaults.sound),
    };
  } catch {
    // Missing or unreadable: the defaults are the answer, and the next write
    // creates a clean file.
    return defaults;
  }
}

/**
 * Merge a patch into the stored preferences and persist atomically.
 * Unknown keys are ignored; a non-boolean value is ignored rather than stored.
 * @param {any} ctx - the Host plugin context.
 * @param {any} patch - the requested changes.
 * @param {object} [config] - the plugin row config, used as defaults.
 * @returns {Promise<{pet: boolean, boost: boolean, sound: boolean}>} the new prefs.
 */
export async function writePrefs(ctx, patch, config) {
  const current = await readPrefs(ctx, config);
  const next = { ...current };
  if (patch !== null && typeof patch === 'object') {
    for (const key of PREF_KEYS) {
      if (typeof patch[key] === 'boolean') next[key] = patch[key];
    }
  }
  const file = prefsFile(ctx);
  await mkdir(dirname(file), { recursive: true });
  const temporary = `${file}.tmp-${process.pid}`;
  await writeFile(temporary, JSON.stringify(next, null, 2), 'utf8');
  await rename(temporary, file);
  return next;
}
