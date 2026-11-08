/**
 * Preference plumbing tests: the file, the tolerance, and the merge rule.
 */
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

import { DEFAULT_PREFS, prefsFile, readPrefs, writePrefs } from '../src/host/prefs.js';

/**
 * A fake Host context whose profile is a scratch directory.
 * @returns {Promise<{ctx: object, root: string, clean: () => Promise<void>}>} the fixture.
 */
async function scratch() {
  const root = await mkdtemp(join(tmpdir(), 'cbp-prefs-'));
  const ctx = {
    get(name) {
      if (name === 'profileContext') return { dir: root };
      return undefined;
    },
  };
  return {
    ctx,
    root,
    clean: () => rm(root, { recursive: true, force: true }),
  };
}

test('defaults are all on and the file lives under the profile', async () => {
  const { ctx, root, clean } = await scratch();
  try {
    assert.deepEqual(await readPrefs(ctx), { ...DEFAULT_PREFS });
    assert.equal(prefsFile(ctx), join(root, 'chatbox-pet', 'prefs.json'));
  } finally {
    await clean();
  }
});

test('a missing file reads as defaults, a write creates it', async () => {
  const { ctx, clean } = await scratch();
  try {
    assert.deepEqual(await readPrefs(ctx), { pet: true, boost: true, sound: true });
    const written = await writePrefs(ctx, { boost: false });
    assert.deepEqual(written, { pet: true, boost: false, sound: true });
    const raw = JSON.parse(await readFile(prefsFile(ctx), 'utf8'));
    assert.deepEqual(raw, { pet: true, boost: false, sound: true });
    assert.deepEqual(await readPrefs(ctx), { pet: true, boost: false, sound: true });
  } finally {
    await clean();
  }
});

test('a corrupt file falls back to defaults instead of throwing', async () => {
  const { ctx, clean } = await scratch();
  try {
    await mkdir(join(prefsFile(ctx), '..'), { recursive: true });
    await writeFile(prefsFile(ctx), '{ not json', 'utf8');
    assert.deepEqual(await readPrefs(ctx), { pet: true, boost: true, sound: true });
    // A write recovers the file.
    assert.deepEqual(await writePrefs(ctx, { pet: false }), { pet: false, boost: true, sound: true });
  } finally {
    await clean();
  }
});

test('a patch merges and ignores bad values', async () => {
  const { ctx, clean } = await scratch();
  try {
    await writePrefs(ctx, { pet: false, boost: true, sound: true });
    const next = await writePrefs(ctx, { pet: true, boost: 'yes', sound: null, extra: 1 });
    assert.deepEqual(next, { pet: true, boost: true, sound: true });
    const raw = JSON.parse(await readFile(prefsFile(ctx), 'utf8'));
    assert.equal(raw.extra, undefined);
  } finally {
    await clean();
  }
});

test('the plugin row config supplies the defaults for an untouched machine', async () => {
  const { ctx, clean } = await scratch();
  try {
    assert.deepEqual(await readPrefs(ctx, { pet: true, boost: false, sound: true }), {
      pet: true,
      boost: false,
      sound: true,
    });
    // The file wins once it exists.
    await writePrefs(ctx, { boost: true });
    assert.deepEqual(await readPrefs(ctx, { boost: false }), { pet: true, boost: true, sound: true });
  } finally {
    await clean();
  }
});
