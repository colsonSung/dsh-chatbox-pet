/**
 * Unit tests for the pet's context-menu catalogue and its pure helpers.
 *
 * The catalogue is data, so the important property is that every chip names a
 * clip the pack actually serves: a label with a missing clip is a 404 that only
 * shows up when a reader clicks it.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  actionLabel,
  MENU_ACTIONS,
  placeMenu,
  sanitizeSay,
  SAY_LIMIT,
} from '../src/client/pet-menu.js';
import { ANIMATIONS } from '../src/host/pack.js';

test('every menu chip names a whitelisted clip, once', () => {
  const clips = MENU_ACTIONS.map((action) => action.clip);
  assert.equal(new Set(clips).size, clips.length, 'no duplicate clips');
  for (const clip of clips) {
    assert.ok(ANIMATIONS.includes(clip), `${clip} is not in the pack whitelist`);
  }
});

test('the resting clips are not offered as actions', () => {
  const clips = MENU_ACTIONS.map((action) => action.clip);
  assert.ok(!clips.includes('idle-breathe'));
  assert.ok(!clips.includes('idle-breathe-loop'));
});

test('both new ambient clips are reachable from the menu', () => {
  assert.ok(MENU_ACTIONS.some((action) => action.clip === 'act-harley'));
  assert.ok(MENU_ACTIONS.some((action) => action.clip === 'act-beach'));
});

test('labels exist in both languages and stay short', () => {
  for (const action of MENU_ACTIONS) {
    for (const locale of ['zh', 'en']) {
      const label = actionLabel(action, locale);
      assert.notEqual(label, '', `${action.clip}/${locale}`);
      assert.ok(label.length <= 8, `${action.clip}/${locale}: "${label}"`);
    }
  }
  assert.equal(actionLabel(MENU_ACTIONS[0], 'en'), MENU_ACTIONS[0].en);
  assert.equal(actionLabel(undefined, 'zh'), '');
});

test('say text is cleaned, collapsed and capped by code point', () => {
  assert.equal(sanitizeSay('  你好   皮卡丘  '), '你好 皮卡丘');
  assert.equal(sanitizeSay('a\u0000b\u001fc'), 'a b c');
  assert.equal(sanitizeSay(''), '');
  assert.equal(sanitizeSay(undefined), '');
  assert.equal(sanitizeSay('   '), '');

  const long = '皮'.repeat(SAY_LIMIT + 20);
  assert.equal(Array.from(sanitizeSay(long)).length, SAY_LIMIT);

  // An emoji is two code units: the cap must not cut it in half.
  const emoji = '🐭'.repeat(SAY_LIMIT + 5);
  const capped = sanitizeSay(emoji);
  assert.equal(Array.from(capped).length, SAY_LIMIT);
  assert.ok(!/[\uD800-\uDBFF]$/.test(capped), 'no dangling high surrogate');
});

test('the menu opens above the pet and stays inside the viewport', () => {
  const viewport = { width: 1440, height: 900 };
  const size = { width: 268, height: 320 };

  // Composer at the bottom right: above the pet, right-aligned.
  const above = placeMenu({ left: 1232, right: 1344, top: 780, bottom: 864 }, size, viewport);
  assert.equal(above.left, 1344 - 268);
  assert.equal(above.top, 780 - 320 - 8);

  // Pet near the top: the menu flips below instead of leaving the viewport.
  const below = placeMenu({ left: 1200, right: 1300, top: 20, bottom: 100 }, size, viewport);
  assert.equal(below.top, 100 + 8);

  // Pet against the left edge: clamped to the margin, never negative.
  const leftEdge = placeMenu({ left: 0, right: 100, top: 400, bottom: 480 }, size, viewport);
  assert.ok(leftEdge.left >= 8);

  // A tiny viewport: still clamped inside.
  const tiny = placeMenu({ left: 0, right: 40, top: 200, bottom: 240 }, size, { width: 200, height: 260 });
  assert.ok(tiny.left >= 8 && tiny.top >= 8);
});
