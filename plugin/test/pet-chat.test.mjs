/**
 * Unit tests for the pet's conversation mode: wake detection, intent
 * classification, deterministic lines, and the state machine that keeps the
 * pet from answering every half-typed word.
 *
 * The cross-module checks matter most: a clip name that is not in the pack's
 * whitelist is a 404 at runtime, and a sound name that the kit does not know
 * is silence. Both are asserted here instead of discovered live.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  classifyIntent,
  createChatEngine,
  detectWake,
  draftLocale,
  INTENT_IDS,
  replyFor,
  WAKE_WORDS,
  wakeLine,
} from '../src/client/pet-chat.js';
import { ANIMATIONS } from '../src/host/pack.js';
import { createSoundKit } from '../src/client/sound.js';

/** The sound kit's recipe names, without needing a browser. */
const SOUND_RECIPES = createSoundKit({
  getPref: () => 'on',
  isVisible: () => true,
  createContext: () => null,
  now: () => 0,
}).recipeNames();

test('every wake word is detected, mid-sentence and case-insensitively', () => {
  for (const word of WAKE_WORDS) {
    const hit = detectWake(`  ${word.toUpperCase()} 你好 `);
    assert.notEqual(hit, null, `${word} must be a wake word`);
    assert.equal(hit.wake, word);
  }
  assert.equal(detectWake('皮卡丘你好').wake, '皮卡丘');
  assert.equal(detectWake('first hi pika there').wake, 'hi pika');
  assert.equal(detectWake('PIKA PIKA!').wake, 'pika pika');
});

test('the wake word is stripped out of what the pet has to answer', () => {
  assert.equal(detectWake('hi pika 你好').rest, '你好');
  assert.equal(detectWake('皮卡丘，你笨死了').rest, '你笨死了');
  assert.equal(detectWake('pika pika 一起玩').rest, '一起玩');
  assert.equal(detectWake('皮卡丘').rest, '');
});

test('a word that only contains a wake word is not a call', () => {
  assert.equal(detectWake('pikachu is a pokemon'), null);
  assert.equal(detectWake('this is not a call'), null);
  assert.equal(detectWake('皮卡'), null, 'the pack voice says 皮卡 all the time');
  assert.equal(detectWake(''), null);
  assert.equal(detectWake(undefined), null);
});

test('each intent owns keywords and a distinct reply shape', () => {
  const cases = {
    greet: ['你好', 'hello there', '嗨！'],
    praise: ['你真厉害', 'so cute'],
    thanks: ['谢谢你', 'thank you'],
    scold: ['你笨死了', 'you are annoying'],
    bye: ['拜拜皮卡', 'bye bye'],
    food: ['你饿吗', 'got food?'],
    play: ['一起玩吧', 'let us play'],
    status: ['你在干嘛', 'how are you'],
    question: ['为什么', 'what is that?'],
    sleep: ['我困了', 'i am sleepy'],
  };
  for (const [intent, samples] of Object.entries(cases)) {
    for (const sample of samples) {
      assert.equal(classifyIntent(sample), intent, `${sample} -> ${intent}`);
    }
  }
  assert.equal(classifyIntent(''), 'fallback');
  assert.equal(classifyIntent('嗯嗯'), 'fallback');
});

test('the intent order is the product decision, not an accident', () => {
  // Thanks beats praise: the reader made a social move, answer that one.
  assert.equal(classifyIntent('谢谢你真厉害'), 'thanks');
  // A goodbye that also wishes a good night is a goodbye, not a sleep cue.
  assert.equal(classifyIntent('晚安拜拜'), 'sleep');
  // "你好吗" asks about the pet, it is not a greeting.
  assert.equal(classifyIntent('你好吗'), 'status');
});

test('every intent has a reply whose clip and sound really exist', () => {
  for (const intent of INTENT_IDS) {
    const reply = replyFor(intent);
    assert.ok(ANIMATIONS.includes(reply.clip), `${intent}: clip ${reply.clip} is not in the pack whitelist`);
    assert.ok(SOUND_RECIPES.includes(reply.sound), `${intent}: sound ${reply.sound} is not a recipe`);
    assert.notEqual(reply.line, '', `${intent}: empty line`);
  }
});

test('lines stay inside the one-line bubble budget', () => {
  for (const intent of INTENT_IDS) {
    for (const locale of ['zh', 'en']) {
      const line = replyFor(intent, { locale, seed: `${intent}-${locale}` }).line;
      assert.ok(line.length <= 20, `${intent}/${locale}: "${line}" is ${line.length} chars`);
    }
  }
  for (const locale of ['zh', 'en']) {
    assert.ok(wakeLine({ locale }).length <= 20);
  }
});

test('the same draft always gets the same line, a different draft may not', () => {
  const one = replyFor('greet', { seed: '皮卡丘\u0000你好' });
  const two = replyFor('greet', { seed: '皮卡丘\u0000你好' });
  assert.deepEqual(one, two);
  const lines = new Set();
  for (const seed of ['a', 'b', 'c', 'd', 'e', 'f']) {
    lines.add(replyFor('greet', { seed }).line);
  }
  assert.ok(lines.size > 1, 'variants must rotate across drafts');
});

test('the locale switches the whole voice', () => {
  const zh = replyFor('praise', { locale: 'zh', seed: 'x' });
  const en = replyFor('praise', { locale: 'en', seed: 'x' });
  assert.notEqual(zh.line, en.line);
  assert.match(en.line, /[A-Za-z]/);
});

test('the pet answers in the language the reader used', () => {
  assert.equal(draftLocale('皮卡丘你好', 'en'), 'zh', 'a Chinese draft wins over an English shell');
  assert.equal(draftLocale('hi pika hello', 'zh'), 'en');
  assert.equal(draftLocale('皮卡丘 hello', 'en'), 'zh');
  assert.equal(draftLocale('', 'en'), 'en', 'no letters at all -> the shell locale');
  assert.equal(draftLocale('123', 'zh'), 'zh');
  assert.equal(draftLocale(undefined, 'zh'), 'zh');
});

test('conversation mode: hear the name, then answer the content', () => {
  let at = 1000;
  const engine = createChatEngine({ now: () => at, debounceMs: 700, holdMs: 15000 });
  assert.equal(engine.isActive(), false);

  const heard = engine.observe('皮卡丘');
  assert.equal(heard.kind, 'wake');
  assert.equal(engine.isActive(), true);

  at += 800;
  const answer = engine.settle('皮卡丘你好呀');
  assert.equal(answer.kind, 'reply');
  assert.equal(answer.intent, 'greet');
  assert.notEqual(answer.line, '');

  // The same content does not get answered twice.
  at += 800;
  assert.equal(engine.settle('皮卡丘你好呀'), null);

  // New content after the minimum gap does.
  at += 1500;
  const second = engine.settle('皮卡丘你笨死了');
  assert.equal(second.kind, 'reply');
  assert.equal(second.intent, 'scold');
});

test('conversation mode ends when the draft stops addressing the pet', () => {
  let at = 1000;
  const engine = createChatEngine({ now: () => at });
  engine.observe('皮卡丘你好');
  at += 900;
  assert.equal(engine.observe('你好呀').kind, 'off');
  assert.equal(engine.isActive(), false);
  at += 900;
  assert.equal(engine.settle('你好呀'), null, 'a settled draft after the call is not answered');
});

test('a quiet conversation mode expires, an active one does not', () => {
  let at = 1000;
  const engine = createChatEngine({ now: () => at, holdMs: 1000 });
  engine.observe('皮卡丘');
  at += 500;
  assert.equal(engine.expire(), null);
  at += 800;
  assert.equal(engine.expire().kind, 'off');
  assert.equal(engine.isActive(), false);
});

test('one paused draft gets one answer, not one per keystroke', () => {
  // The component only calls settle after the typing pauses; the engine still
  // guards itself: a settled draft answers once, and new content waits for the
  // minimum gap instead of firing on every keystroke.
  let at = 1000;
  const engine = createChatEngine({ now: () => at, minReplyGapMs: 1200 });
  engine.observe('皮卡丘');

  at += 700;
  const first = engine.settle('皮卡丘你好呀');
  assert.equal(first.kind, 'reply');

  // Same content again: nothing (the digest dedupes it).
  at += 120;
  assert.equal(engine.settle('皮卡丘你好呀'), null);

  // New content inside the gap is not swallowed: the engine says when to retry.
  at += 200;
  const cooldown = engine.settle('皮卡丘你笨死了');
  assert.equal(cooldown.kind, 'cooldown');
  assert.ok(cooldown.retryInMs > 0 && cooldown.retryInMs <= 1200, `retryInMs ${cooldown.retryInMs}`);

  // After the gap it answers the new content.
  at += 1200;
  const second = engine.settle('皮卡丘你笨死了');
  assert.equal(second.kind, 'reply');
  assert.equal(second.intent, 'scold');
});
