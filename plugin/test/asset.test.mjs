/**
 * Unit tests for the asset whitelist and the pack reader, run against the
 * live pack on disk (~/.dsh/dsh-pet/pet).
 *
 * The whitelist now holds two containers per clip: `<clip>.webm` (VP9-alpha,
 * Chromium/Firefox) and `<clip>.mov` (HEVC-with-Alpha, WebKit). The mov is
 * what stops the pet painting a black box in Safari and on iOS.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  resolveIdleLoopFile,
  resolveIdleLoopMovFile,
  serveAsset,
  serveAssetConditional,
} from '../src/host/assets.js';
import {
  ANIMATIONS,
  ASSET_FILES,
  IDLE_LOOP_MOV_NAME,
  IDLE_LOOP_NAME,
  MOV_ANIMATION_DIR,
  loadPack,
} from '../src/host/pack.js';

test('the whitelist holds both containers of the 19 clips plus the avatar, nothing else', () => {
  assert.equal(ANIMATIONS.length, 19);
  // 18 pack clips × 2 containers + the derived loop in both + the avatar.
  assert.equal(ASSET_FILES.size, 39);
  assert.ok(ASSET_FILES.has('idle-breathe.webm'));
  assert.ok(ASSET_FILES.has('idle-breathe.mov'));
  assert.ok(ASSET_FILES.has(IDLE_LOOP_NAME));
  assert.ok(ASSET_FILES.has(IDLE_LOOP_MOV_NAME));
  assert.ok(ASSET_FILES.has('pokemon-avatar.png'));
});

test('every clip ships in both containers, with the right content types', () => {
  for (const name of ANIMATIONS) {
    const webm = ASSET_FILES.get(`${name}.webm`);
    const mov = ASSET_FILES.get(`${name}.mov`);
    assert.ok(webm !== undefined, `${name}.webm is whitelisted`);
    assert.ok(mov !== undefined, `${name}.mov is whitelisted`);
    assert.equal(webm.contentType, 'video/webm');
    assert.equal(mov.contentType, 'video/quicktime');
  }
});

test('mov entries live in the pack mov/ directory, except the derived loop', () => {
  for (const name of ANIMATIONS) {
    if (name === 'idle-breathe-loop') continue;
    const mov = ASSET_FILES.get(`${name}.mov`);
    assert.ok(
      mov.file.startsWith(MOV_ANIMATION_DIR + '/') || mov.file.startsWith(MOV_ANIMATION_DIR + '\\'),
      `${name}.mov must be served from the mov/ subdirectory, got ${mov.file}`,
    );
  }
});

test('serveAsset serves a whitelisted webm with the right headers', async () => {
  const response = await serveAsset('idle-breathe.webm');
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'video/webm');
  // The clips are regenerated in place, so the cache must revalidate instead of
  // promising `immutable` bytes for a day.
  assert.match(response.headers.get('cache-control'), /no-cache/);
  assert.ok(response.headers.get('etag'), 'an etag is what makes revalidation cheap');
  const bytes = await response.arrayBuffer();
  assert.ok(bytes.byteLength > 1000, `expected real clip bytes, got ${bytes.byteLength}`);
});

test('a rebuilt clip changes its etag, so the browser cannot keep the old one', async () => {
  const first = await serveAsset('act-harley.webm');
  const etag = first.headers.get('etag');
  assert.ok(etag, 'the shipped clip answers with an etag');
  const same = await serveAssetConditional('act-harley.webm', etag);
  assert.equal(same.status, 304, 'a matching etag answers 304 with no body');
  assert.equal((await same.arrayBuffer()).byteLength, 0);
  const stale = await serveAssetConditional('act-harley.webm', '"something-else"');
  assert.equal(stale.status, 200, 'a stale etag gets the fresh bytes');
  assert.ok((await stale.arrayBuffer()).byteLength > 1000);
});

test('serveAsset serves a whitelisted mov as video/quicktime (the WebKit form)', async () => {
  const response = await serveAsset('idle-breathe.mov');
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'video/quicktime');
  const bytes = await response.arrayBuffer();
  assert.ok(bytes.byteLength > 1000, `expected real HEVC bytes, got ${bytes.byteLength}`);
});

test('serveAsset serves the avatar as image/png', async () => {
  const response = await serveAsset('pokemon-avatar.png');
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'image/png');
  const bytes = await response.arrayBuffer();
  assert.ok(bytes.byteLength > 1000);
});

test('serveAsset 404s unknown names and traversal attempts', async () => {
  for (const name of [
    'nope.webm',
    'nope.mov',
    '../pokemon-config.jsonc',
    '../../etc/passwd',
    '..%2fpokemon-config.jsonc',
    '..',
    '',
    'idle-breathe',
    'idle-breathe.webm/extra',
    'mov/idle-breathe.mov',
  ]) {
    const response = await serveAsset(name);
    assert.equal(response.status, 404, `expected 404 for ${JSON.stringify(name)}`);
  }
});

test('the derived idle loop serves when present and falls back when absent', async () => {
  // On this machine the derived file exists → served directly.
  const resolved = resolveIdleLoopFile();
  assert.equal(resolved.derived, true);
  assert.ok(resolved.file.endsWith(IDLE_LOOP_NAME));
  // A missing derived path falls back to the pack clip, never a 404.
  const fallback = resolveIdleLoopFile('/no/such/derived/idle-breathe-loop.webm');
  assert.equal(fallback.derived, false);
  assert.ok(fallback.file.endsWith('idle-breathe.webm'));
  // The route serves the loop either way.
  const response = await serveAsset(IDLE_LOOP_NAME);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'video/webm');
  const bytes = await response.arrayBuffer();
  assert.ok(bytes.byteLength > 1000);
});

test('the derived idle loop mov falls back to a mov, never to the webm', async () => {
  // A missing derived mov must not resolve to the webm: on WebKit that is the
  // black box. The pack's idle-breathe.mov is the same format and is valid.
  const fallback = resolveIdleLoopMovFile('/no/such/derived/idle-breathe-loop.mov');
  assert.equal(fallback.derived, false);
  assert.ok(fallback.file.endsWith('idle-breathe.mov'), `got ${fallback.file}`);
  const response = await serveAsset(IDLE_LOOP_MOV_NAME);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'video/quicktime');
});

test('loadPack reads the live JSONC pack tolerantly', async () => {
  const pack = await loadPack();
  assert.equal(pack.name, '皮卡丘');
  assert.equal(pack.size, 110);
  assert.equal(pack.animations.length, 19);
  // The live pack ships five work-status buckets of three lines each.
  assert.equal(pack.workStatusTexts.length, 5);
  for (const bucket of pack.workStatusTexts) {
    assert.ok(Array.isArray(bucket) && bucket.length > 0);
    for (const line of bucket) assert.equal(typeof line, 'string');
  }
});
