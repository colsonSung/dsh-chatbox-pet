/**
 * Asset serving for the pet pack.
 *
 * The whitelist is the `ASSET_FILES` map: a name is either exactly one of its
 * keys or a 404. No path is ever built from request input, so `..` segments
 * and unknown names die at the map lookup, before the filesystem is touched.
 *
 * Two formats, one name space: `<clip>.webm` for Chromium/Firefox and
 * `<clip>.mov` for WebKit (HEVC-with-Alpha). The split is not cosmetic —
 * WebKit decodes the webm but drops its alpha plane, which paints the pet as
 * a black box; only the mov is transparent there. A missing mov answers 404
 * instead of quietly serving the webm: the client turns that into the still
 * transparent avatar, which is a far better failure than a black rectangle.
 */
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { ASSET_FILES, IDLE_LOOP_MOV_NAME, IDLE_LOOP_NAME } from './pack.js';

/**
 * Cache policy for pack bytes.
 *
 * These files are REGENERATED IN PLACE: the whole point of the animation
 * pipeline is that `act-*.webm` gets rebuilt and copied over the same name.
 * `immutable` promised the browser it could keep the old bytes for a day, so a
 * fixed clip kept rendering the broken one until the cache expired (measured
 * 2026-11-08: act-harley was rebuilt and reinstalled, and the page still played
 * the bike-less version). `no-cache` still allows storing the response, but
 * makes every use revalidate against the ETag — a 304 on the common path, and
 * the new bytes the moment they change.
 */
const CACHE_CONTROL = 'no-cache';

/** The two names that resolve through the derived directory rather than the pack. */
const LOOP_NAMES = new Set([IDLE_LOOP_NAME, IDLE_LOOP_MOV_NAME]);

/** The missing-derived-file warning is logged once per format, not per hit. */
const loggedLoopFallback = new Set();

/**
 * Resolve a loop file: the derived file when it exists, the pack clip otherwise.
 * @param {string} name - the loop's whitelist name.
 * @param {string} [derivedPath] - overridable for tests.
 * @returns {{file: string, derived: boolean}}
 */
function resolveLoopFile(name, derivedPath) {
  const entry = ASSET_FILES.get(name);
  const derived = derivedPath ?? entry.file;
  try {
    if (existsSync(derived)) return { file: derived, derived: true };
  } catch {
    // Fall through to the pack clip.
  }
  return { file: entry.fallback, derived: false };
}

/**
 * Resolve the idle-loop webm (Chromium/Firefox).
 * @param {string} [derivedPath] - overridable for tests.
 * @returns {{file: string, derived: boolean}}
 */
export function resolveIdleLoopFile(derivedPath) {
  return resolveLoopFile(IDLE_LOOP_NAME, derivedPath);
}

/**
 * Resolve the idle-loop mov (WebKit).
 * @param {string} [derivedPath] - overridable for tests.
 * @returns {{file: string, derived: boolean}}
 */
export function resolveIdleLoopMovFile(derivedPath) {
  return resolveLoopFile(IDLE_LOOP_MOV_NAME, derivedPath);
}

/**
 * Serve one whitelisted asset.
 * @param {string} name - the file name, e.g. `idle-breathe.webm`.
 * @returns {Promise<Response>} 200 with the bytes, or 404.
 */
export async function serveAsset(name) {
  const entry = typeof name === 'string' ? ASSET_FILES.get(name) : undefined;
  if (entry === undefined) {
    return new Response('chatbox-pet: unknown asset', { status: 404 });
  }
  let file = entry.file;
  if (LOOP_NAMES.has(name)) {
    const resolved = name === IDLE_LOOP_NAME ? resolveIdleLoopFile() : resolveIdleLoopMovFile();
    if (!resolved.derived && !loggedLoopFallback.has(name)) {
      loggedLoopFallback.add(name);
      console.warn(
        '[chatbox-pet] derived idle loop missing; falling back to the pack clip for ' + name,
      );
    }
    file = resolved.file;
  }
  try {
    const bytes = await readFile(file);
    const info = await stat(file).catch(() => null);
    // The validator must follow the BYTES, not the name: size + mtime catches a
    // replaced file, and the digest catches a rewrite that keeps both.
    const digest = createHash('sha1').update(bytes).digest('base64url').slice(0, 16);
    const etag = `"${digest}"`;
    return new Response(bytes, {
      status: 200,
      headers: {
        'content-type': entry.contentType,
        'cache-control': CACHE_CONTROL,
        etag,
        ...(info === null ? {} : { 'last-modified': info.mtime.toUTCString() }),
      },
    });
  } catch {
    return new Response('chatbox-pet: asset unreadable', { status: 404 });
  }
}

/**
 * Answer an asset request with a 304 when the browser already holds these bytes.
 *
 * Without this the `no-cache` policy would re-send the whole clip on every
 * poll of a page that plays it; the conditional request keeps the cost at one
 * hash comparison while still guaranteeing fresh bytes after a rebuild.
 * @param {string} name - the whitelisted file name.
 * @param {string} ifNoneMatch - the request's If-None-Match header, if any.
 * @param {(name: string) => Promise<Response>} [serve] - injectable for tests.
 * @returns {Promise<Response>} 200 with bytes, or 304 with no body.
 */
export async function serveAssetConditional(name, ifNoneMatch, serve = serveAsset) {
  const response = await serve(name);
  if (response.status !== 200 || typeof ifNoneMatch !== 'string' || ifNoneMatch === '') {
    return response;
  }
  const etag = response.headers.get('etag');
  if (etag === null) return response;
  const candidates = ifNoneMatch.split(',').map((value) => value.trim());
  if (!candidates.includes(etag) && !candidates.includes('*')) return response;
  return new Response(null, {
    status: 304,
    headers: {
      etag,
      'cache-control': response.headers.get('cache-control') ?? CACHE_CONTROL,
      ...(response.headers.get('last-modified') === null
        ? {}
        : { 'last-modified': response.headers.get('last-modified') }),
    },
  });
}
