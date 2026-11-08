/**
 * Unit tests for the sound kit: pref persistence, autoplay gating, throttle,
 * visibility gating, and the synth recipes — all against a fake AudioContext.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  createSoundKit,
  readSoundPref,
  SOUND_FOR_STATUS,
  SOUND_PREF_KEY,
  SOUND_THROTTLE_MS,
  toggleSoundPref,
  writeSoundPref,
} from '../src/client/sound.js';

/** A minimal fake Storage. */
function fakeStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    data,
  };
}

/** A fake AudioContext recording every scheduled node. */
function fakeAudioContext() {
  const log = { oscillators: [], gains: [], resumes: 0 };
  const param = () => ({
    value: 0,
    setValueAtTime(v) {
      this.value = v;
    },
    exponentialRampToValueAtTime(v) {
      this.value = v;
    },
  });
  return {
    log,
    currentTime: 0,
    state: 'suspended',
    destination: {},
    resume() {
      this.state = 'running';
      log.resumes++;
      return Promise.resolve();
    },
    createGain() {
      const gain = { gain: param(), connect() {} };
      log.gains.push(gain);
      return gain;
    },
    createOscillator() {
      const osc = { type: '', frequency: param(), detune: param(), connect() {}, start() {}, stop() {} };
      log.oscillators.push(osc);
      return osc;
    },
  };
}

/** A controllable kit environment. */
function fakeEnv(overrides = {}) {
  const state = { pref: 'on', visible: true, now: 1_000_000, ctx: fakeAudioContext(), creates: 0 };
  return {
    state,
    env: {
      getPref: () => state.pref,
      isVisible: () => state.visible,
      createContext: () => {
        state.creates++;
        return state.ctx;
      },
      now: () => state.now,
      ...overrides,
    },
  };
}

test('sound pref: default on, explicit off respected, write + toggle persist', () => {
  const storage = fakeStorage();
  assert.equal(readSoundPref(storage), 'on');
  assert.equal(readSoundPref(fakeStorage({ [SOUND_PREF_KEY]: 'off' })), 'off');
  assert.equal(readSoundPref(fakeStorage({ [SOUND_PREF_KEY]: 'garbage' })), 'on');
  assert.equal(readSoundPref(undefined), 'on');

  writeSoundPref(storage, 'off');
  assert.equal(storage.getItem(SOUND_PREF_KEY), 'off');
  assert.equal(toggleSoundPref(storage), 'on');
  assert.equal(storage.getItem(SOUND_PREF_KEY), 'on');
  assert.equal(toggleSoundPref(storage), 'off');
  assert.equal(readSoundPref(storage), 'off');
});

test('play() is a silent no-op before the AudioContext unlock', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  assert.equal(kit.play('thinking'), false);
  assert.equal(state.creates, 0, 'no context may be created before a gesture');
  assert.equal(state.ctx.log.oscillators.length, 0);
});

test('unlock creates the context once, resumes it, and arms the kit', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  kit.unlock();
  assert.equal(state.creates, 1, 'unlock is idempotent');
  assert.equal(state.ctx.log.resumes, 1, 'a suspended context is resumed');
  assert.equal(kit.isUnlocked(), true);
  assert.equal(kit.play('thinking'), true);
  assert.equal(state.ctx.log.oscillators.length, 1);
  // Master gain ~0.3, wired to the destination.
  assert.equal(state.ctx.log.gains[0].gain.value, 0.3);
});

test('a failed unlock stays locked and can be retried', () => {
  let attempts = 0;
  const { env } = fakeEnv({
    createContext: () => {
      attempts++;
      if (attempts === 1) throw new Error('no audio');
      return fakeAudioContext();
    },
  });
  const kit = createSoundKit(env);
  kit.unlock();
  assert.equal(kit.isUnlocked(), false);
  assert.equal(kit.play('thinking'), false);
  kit.unlock();
  assert.equal(kit.isUnlocked(), true);
});

test('pref off silences everything, even unlocked', () => {
  const { env, state } = fakeEnv();
  state.pref = 'off';
  const kit = createSoundKit(env);
  kit.unlock();
  assert.equal(kit.play('thinking'), false);
  assert.equal(kit.play('result'), false);
  assert.equal(state.ctx.log.oscillators.length, 0);
  // Flipping back re-arms without re-unlocking.
  state.pref = 'on';
  assert.equal(kit.play('thinking'), true);
});

test('repeats of the same sound within 1s collapse into one', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  assert.equal(kit.play('thinking'), true);
  state.now += SOUND_THROTTLE_MS - 1;
  assert.equal(kit.play('thinking'), false);
  // A different sound is throttled independently.
  assert.equal(kit.play('click'), true);
  state.now += 2;
  assert.equal(kit.play('thinking'), true);
  assert.equal(state.ctx.log.oscillators.length, 3);
});

test('a hidden page never plays', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  state.visible = false;
  assert.equal(kit.play('thinking'), false);
  assert.equal(state.ctx.log.oscillators.length, 0);
});

test('every state owns a distinct timbre family', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  const oscOf = () => state.ctx.log.oscillators;

  // thinking: a soft high sine pup.
  kit.play('thinking');
  assert.deepEqual(oscOf().map((o) => [o.frequency.value, o.type]), [[880, 'sine']]);

  // working: mid triangle double-tap.
  state.now += SOUND_THROTTLE_MS;
  kit.play('working');
  const working = oscOf().slice(-2).map((o) => [o.frequency.value, o.type]);
  assert.deepEqual(working, [
    [523.25, 'triangle'],
    [392, 'triangle'],
  ]);

  // result: a bright two-note bell.
  state.now += SOUND_THROTTLE_MS;
  kit.play('result');
  const result = oscOf().slice(-2).map((o) => [o.frequency.value, o.type]);
  assert.deepEqual(result, [
    [659.25, 'sine'],
    [880, 'sine'],
  ]);

  // success: a three-note rising arpeggio.
  state.now += SOUND_THROTTLE_MS;
  kit.play('success');
  const success = oscOf().slice(-3).map((o) => [o.frequency.value, o.type]);
  assert.deepEqual(success, [
    [523.25, 'triangle'],
    [659.25, 'triangle'],
    [783.99, 'sine'],
  ]);

  // waiting: two low pulses that lean down (the pitch ends on the slide).
  state.now += SOUND_THROTTLE_MS;
  kit.play('waiting');
  const waiting = oscOf().slice(-2).map((o) => [o.frequency.value, o.type]);
  assert.deepEqual(waiting, [
    [392, 'triangle'],
    [392, 'triangle'],
  ]);

  // error: a low detuned growl.
  state.now += SOUND_THROTTLE_MS;
  kit.play('error');
  const error = oscOf().slice(-2).map((o) => [o.frequency.value, o.type]);
  assert.deepEqual(error, [
    [164.81, 'sawtooth'],
    [155.56, 'sawtooth'],
  ]);

  // click: a pop with a pitch drop (the pitch ends on the slide target).
  state.now += SOUND_THROTTLE_MS;
  kit.play('click');
  assert.deepEqual(oscOf().slice(-1).map((o) => [o.frequency.value, o.type]), [[320, 'triangle']]);
});

test('the pout sound is its own soft sigh', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  kit.play('pout');
  assert.deepEqual(state.ctx.log.oscillators.map((o) => [o.frequency.value, o.type]), [
    [293.66, 'triangle'],
    [261.63, 'sine'],
  ]);
});

test('a cancelled task is a soft descending pair, not success or failure', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  assert.equal(kit.play('cancelled'), true);
  assert.deepEqual(state.ctx.log.oscillators.map((o) => [o.frequency.value, o.type]), [
    [415.3, 'triangle'],
    [329.63, 'sine'],
  ]);
  assert.notDeepEqual(
    state.ctx.log.oscillators.map((o) => o.frequency.value),
    [523.25, 659.25, 783.99],
    'not the success arpeggio',
  );
  assert.notDeepEqual(
    state.ctx.log.oscillators.map((o) => o.frequency.value),
    [164.81, 155.56],
    'not the failure growl',
  );
});

test('the boost sounds are their own, not a status re-use', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  const oscOf = () => state.ctx.log.oscillators;

  kit.play('boostStart');
  assert.deepEqual(oscOf().slice(-1).map((o) => [o.frequency.value, o.type]), [[1567.98, 'sine']]);

  state.now += SOUND_THROTTLE_MS;
  kit.play('boostDone');
  assert.deepEqual(oscOf().slice(-2).map((o) => [o.frequency.value, o.type]), [
    [783.99, 'sine'],
    [1174.66, 'sine'],
  ]);

  state.now += SOUND_THROTTLE_MS;
  kit.play('boostFail');
  assert.deepEqual(oscOf().slice(-1).map((o) => [o.frequency.value, o.type]), [[233.08, 'sine']]);
});

test('the prompt chooses the variant: the same line sounds the same', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  const oscOf = () => state.ctx.log.oscillators;

  const first = '皮卡……在想下一步';
  kit.play('thinking', first);
  const a = oscOf().slice(-1).map((o) => o.frequency.value);
  state.now += SOUND_THROTTLE_MS;
  kit.play('thinking', first);
  const b = oscOf().slice(-1).map((o) => o.frequency.value);
  assert.deepEqual(a, b, 'the same prompt must sound identical every time');

  // Across a set of different prompts the seed must actually discriminate:
  // the same state must not always sound the same.
  const lines = [
    '皮卡……在想下一步',
    '皮卡丘正在整理思路',
    '皮卡……梳理中',
    '皮卡丘正在跑测试',
    '皮卡……正在干活',
  ];
  const heard = new Set();
  for (const line of lines) {
    state.now += SOUND_THROTTLE_MS;
    kit.play('thinking', line);
    heard.add(oscOf().slice(-1)[0].frequency.value);
  }
  assert.ok(heard.size > 1, 'different prompts must reach more than one variant');
});

test('without a prompt the variants rotate instead of repeating', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  const oscOf = () => state.ctx.log.oscillators;

  kit.play('thinking');
  const first = oscOf().slice(-1).map((o) => o.frequency.value);
  state.now += SOUND_THROTTLE_MS;
  kit.play('thinking');
  const second = oscOf().slice(-1).map((o) => o.frequency.value);
  assert.notDeepEqual(first, second, 'bare repeats must not sound identical');
});

test('every note is detuned a little, so repeats never sound machine-made', () => {
  const { env, state } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  const detunes = [];
  for (let round = 0; round < 3; round += 1) {
    state.now += SOUND_THROTTLE_MS;
    kit.play('thinking', '皮卡……在想下一步');
    detunes.push(state.ctx.log.oscillators.at(-1).detune.value);
  }
  assert.ok(new Set(detunes).size > 1, 'repeated notes must differ in pitch');
  for (const cents of detunes) {
    assert.ok(Math.abs(cents) <= 7, `detune ${cents} is outside the small range`);
  }
});

test('every transition status maps to its own sound; idle stays silent', () => {
  assert.equal(SOUND_FOR_STATUS.thinking, 'thinking');
  assert.equal(SOUND_FOR_STATUS.working, 'working');
  assert.equal(SOUND_FOR_STATUS.result, 'result');
  assert.equal(SOUND_FOR_STATUS.success, 'success');
  assert.equal(SOUND_FOR_STATUS.waiting, 'waiting');
  assert.equal(SOUND_FOR_STATUS.error, 'error');
  assert.equal(SOUND_FOR_STATUS.idle, undefined);
  const names = Object.values(SOUND_FOR_STATUS);
  assert.equal(new Set(names).size, names.length, 'no two states may share a sound');
  const { env } = fakeEnv();
  const kit = createSoundKit(env);
  kit.unlock();
  assert.equal(kit.play('idle'), false, 'unknown names never play');
});
