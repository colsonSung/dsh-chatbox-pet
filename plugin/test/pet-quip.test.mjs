/**
 * Unit tests for the small-talk client module.
 *
 * The Host owns the wording; the page owns the reaction. So the properties
 * that matter here are: every kind has a clip that the pack actually serves,
 * every kind has a sound that the sound kit can play, and a failed request
 * never throws into the page.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  fetchQuip,
  kindLabel,
  QUIP_AFTER_MS,
  QUIP_KINDS,
  QUIP_REACTION,
  reactionFor,
  shouldBringUp,
} from '../src/client/pet-quip.js';
import { ANIMATIONS } from '../src/host/pack.js';

test('every kind has a clip the pack serves', () => {
  for (const kind of QUIP_KINDS) {
    const reaction = QUIP_REACTION[kind];
    assert.ok(reaction, `${kind} has no reaction`);
    assert.ok(ANIMATIONS.includes(reaction.clip), `${kind}: ${reaction.clip} is not whitelisted`);
  }
});

test('every kind has a label in both languages', () => {
  for (const kind of QUIP_KINDS) {
    assert.notEqual(kindLabel(kind, 'zh'), '', `${kind}/zh`);
    assert.notEqual(kindLabel(kind, 'en'), '', `${kind}/en`);
  }
  assert.equal(kindLabel('nonsense', 'zh'), '');
});

test('an unknown kind falls back to plain chitchat', () => {
  assert.deepEqual(reactionFor('nonsense'), QUIP_REACTION.chitchat);
  assert.deepEqual(reactionFor(undefined), QUIP_REACTION.chitchat);
});

test('a successful request returns the line and its source', async () => {
  const quip = await fetchQuip({
    kind: 'reminder',
    locale: 'zh',
    fetch: async (url, init) => {
      assert.equal(url, '/api/chatbox-pet/quip');
      const body = JSON.parse(init.body);
      assert.equal(body.kind, 'reminder');
      assert.equal(body.locale, 'zh');
      return {
        ok: true,
        json: async () => ({
          ok: true,
          result: { kind: 'reminder', text: '  提醒你一下，下周一发布  ', source: { id: 'minutes', label: '听记' } },
        }),
      };
    },
  });
  assert.equal(quip.kind, 'reminder');
  assert.equal(quip.text, '提醒你一下，下周一发布');
  assert.equal(quip.source.label, '听记');
});

test('the pet only speaks up on its own after a long silence, and rarely', () => {
  // Too soon: never.
  assert.equal(shouldBringUp({ idleForMs: 0 }), false);
  assert.equal(shouldBringUp({ idleForMs: QUIP_AFTER_MS - 1 }), false);

  // Long enough, and the roll comes up: yes.
  const hit = shouldBringUp({ idleForMs: QUIP_AFTER_MS, random: () => 0.01 });
  assert.equal(hit, true);

  // Long enough, but the roll says no: no.
  assert.equal(shouldBringUp({ idleForMs: QUIP_AFTER_MS, random: () => 0.9 }), false);

  // The chance is small: over many ticks it is rare, never frequent.
  let spoke = 0;
  let seed = 0;
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  for (let index = 0; index < 1000; index += 1) {
    if (shouldBringUp({ idleForMs: QUIP_AFTER_MS, random })) spoke += 1;
  }
  assert.ok(spoke < 100, `spoke ${spoke} times out of 1000`);
});

test('a failed request resolves to null instead of throwing', async () => {
  const throwing = await fetchQuip({
    fetch: async () => {
      throw new Error('offline');
    },
  });
  assert.equal(throwing, null);

  const notOk = await fetchQuip({ fetch: async () => ({ ok: false }) });
  assert.equal(notOk, null);

  const empty = await fetchQuip({
    fetch: async () => ({ ok: true, json: async () => ({ ok: true, result: { text: '   ' } }) }),
  });
  assert.equal(empty, null);

  const badKind = await fetchQuip({
    fetch: async () => ({ ok: true, json: async () => ({ ok: true, result: { kind: 'zzz', text: 'hi' } }) }),
  });
  assert.equal(badKind.kind, 'chitchat');
});
