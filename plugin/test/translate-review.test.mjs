/**
 * The review scheduler: a simplified SM-2. These tests pin the interval math
 * and the due counting, which are the parts a reader cannot verify by looking.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

const NOW = 1_700_000_000_000;
const DAY = 24 * 60 * 60 * 1000;

const { countDue, freshSchedule, gradeCard, scheduleOf } = await import('../src/host/translate/favorites.js');

test('freshSchedule: 新卡立即可复习', () => {
  const schedule = freshSchedule(NOW);
  assert.equal(schedule.due, NOW);
  assert.equal(schedule.interval, 0);
  assert.equal(schedule.reps, 0);
  assert.equal(schedule.ease, 2.5);
});

test('gradeCard good: 第一次 1 天，第二次按 ease 放大', () => {
  const first = gradeCard(freshSchedule(NOW, false), 'good', NOW);
  assert.equal(first.interval, 1);
  assert.equal(first.due, NOW + DAY);
  assert.equal(first.reps, 1);
  const second = gradeCard(first, 'good', NOW + DAY);
  assert.ok(second.interval >= 2, 'interval grows');
  assert.ok(second.due > NOW + DAY);
});

test('gradeCard again: 十分钟后重来并记一次 lapse', () => {
  const reviewed = gradeCard({ ...freshSchedule(NOW), interval: 10, reps: 3 }, 'again', NOW);
  assert.equal(reviewed.interval, 0);
  assert.equal(reviewed.due, NOW + 10 * 60 * 1000);
  assert.equal(reviewed.lapses, 1);
  assert.ok(reviewed.ease < 2.5, 'ease drops');
});

test('gradeCard easy 比 good 间隔更长，hard 更短', () => {
  const base = { ...freshSchedule(NOW), interval: 6, reps: 2, ease: 2.5 };
  const hard = gradeCard(base, 'hard', NOW);
  const good = gradeCard(base, 'good', NOW);
  const easy = gradeCard(base, 'easy', NOW);
  assert.ok(hard.interval < good.interval);
  assert.ok(easy.interval > good.interval);
});

test('gradeCard: ease 被限制在 1.3 到 3.0 之间', () => {
  let schedule = { ...freshSchedule(NOW), ease: 1.35 };
  for (let i = 0; i < 5; i += 1) schedule = gradeCard(schedule, 'again', NOW);
  assert.ok(schedule.ease >= 1.3);
  let fast = { ...freshSchedule(NOW), ease: 2.95 };
  for (let i = 0; i < 5; i += 1) fast = gradeCard(fast, 'easy', NOW);
  assert.ok(fast.ease <= 3.0);
});

test('scheduleOf: 老条目没有 srs 就当作新卡（立即到期）', () => {
  const schedule = scheduleOf({ id: 'x', source: 'word' }, NOW);
  assert.equal(schedule.due, NOW);
  assert.equal(schedule.reps, 0);
});

test('countDue: 只数到期的，新卡也算到期', () => {
  const items = [
    { id: 'a' },
    { id: 'b', srs: { due: NOW - 1000, reps: 1, ease: 2.5, interval: 3 } },
    { id: 'c', srs: { due: NOW + DAY, reps: 1, ease: 2.5, interval: 3 } },
  ];
  const counts = countDue(items, NOW);
  assert.equal(counts.total, 3);
  assert.equal(counts.due, 2);
  assert.equal(counts.newCards, 1);
});
