/**
 * Unit tests for the pet's small talk.
 *
 * What must hold: a line is never empty, never longer than a bubble, always
 * carries a real snippet when the stores have one, never quotes the same item
 * twice in a row, and rotates its kind. The stores are faked, so the test is
 * about the judgement, not about the collectors (they have their own suite).
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  buildQuip,
  createQuipEngine,
  flattenItems,
  hashText,
  pickKind,
  QUIP_KINDS,
  QUIP_LIMIT,
  RECENT_LIMIT,
  quoteFor,
  rankForKind,
  relativeWhen,
  renderQuip,
  snippet,
  SNIPPET_LIMIT,
} from '../src/host/quip.js';

const NOW = 1794060000000;
const DAY = 24 * 60 * 60 * 1000;

/** A store set shaped like `collectContext()` output. */
function stores() {
  return [
    {
      id: 'memory',
      label: '记忆',
      items: [
        { text: '欧洲商户自助进件的本地化范围还差 EEA 与币种清单。', at: NOW - 3 * DAY },
        { text: 'UBO 的七个安全决策还没拍板。', at: NOW - 10 * DAY },
      ],
    },
    {
      id: 'minutes',
      label: '听记',
      items: [{ text: '下周一发布版本还有六个 P0 没关。', at: NOW - 1 * DAY }],
    },
    {
      id: 'moments',
      label: '瞬间',
      items: [{ text: '今天终于把提示词增强合并进一个 bundle 了。', at: NOW - 2 * 60 * 60 * 1000 }],
    },
    { id: 'reader', label: '读书', items: [], error: 'no shelf' },
  ];
}

test('the quote prefers a heading or title over the body', () => {
  const heading = quoteFor({ text: '# 插件元数据报错：locale/t2s.json（已修）\n## 现象\nPlugin Manager 里红字' });
  assert.equal(heading, '插件元数据报错：locale/t2s.json');

  const titled = quoteFor({ text: '在读书目：《Pricing Design》，已读 9.8%', title: 'Pricing Design' });
  assert.equal(titled, 'Pricing Design');

  const plain = quoteFor({ text: 'Moments 标题栏溢出 −20px。' });
  assert.equal(plain, 'Moments 标题栏溢出 −20px');

  // A leading date is noise, not the thought.
  const dated = quoteFor({ text: '2026-11-07 Moments 标题栏动作区图标化这一轮改动后测试套件 259/259 全绿。' });
  assert.ok(!dated.startsWith('2026-11-07'), dated);
  assert.ok(dated.length > 10, dated);

  assert.equal(quoteFor({ text: '' }), '');
});

test('a heading does not swallow the fields under it', () => {
  const quote = quoteFor({
    text: '# DSH 插件发布到 GitHub 的约定（2026-11-03 核实） 仓库：colsonSung/dsh-plugin-management 根目录：README.md',
  });
  assert.ok(!quote.includes('仓库'), quote);
  assert.ok(!quote.includes('根目录'), quote);
  assert.ok(quote.startsWith('DSH 插件发布到 GitHub 的约定'), quote);
});

test('a long quote is cut and marked, never silently truncated', () => {
  const long = quoteFor({ text: 'a'.repeat(200) });
  assert.ok(Array.from(long).length <= SNIPPET_LIMIT);
  assert.ok(long.endsWith('…'));
});

test('a snippet is one clause, short, and never a fragment', () => {
  assert.equal(snippet('第一句。第二句。'), '第一句');
  assert.equal(snippet('  多  空格  '), '多 空格');
  assert.equal(snippet(''), '');
  assert.equal(snippet(undefined), '');
  const long = '很长的句子'.repeat(10);
  const cut = snippet(long);
  assert.ok(Array.from(cut).length <= SNIPPET_LIMIT, cut);
  assert.ok(cut.endsWith('…'));
});

test('the relative time reads like a person wrote it', () => {
  assert.equal(relativeWhen(NOW - 30 * 1000, NOW, 'zh'), '刚才');
  assert.equal(relativeWhen(NOW - 3 * 60 * 60 * 1000, NOW, 'zh'), '3 小时前');
  assert.equal(relativeWhen(NOW - DAY, NOW, 'zh'), '昨天');
  assert.equal(relativeWhen(NOW - 3 * DAY, NOW, 'zh'), '3 天前');
  assert.equal(relativeWhen(NOW - 10 * DAY, NOW, 'zh'), '1 周前');
  assert.equal(relativeWhen(NOW - 70 * DAY, NOW, 'zh'), '2 个月前');
  assert.equal(relativeWhen(0, NOW, 'zh'), '');
  assert.equal(relativeWhen(NOW - 3 * DAY, NOW, 'en'), '3d ago');
});

test('the preferred store comes first, then the freshest', () => {
  const items = flattenItems(stores());
  const ranked = rankForKind(items, 'reminder');
  assert.equal(ranked[0].source, 'minutes', 'a reminder prefers meeting minutes');

  const recall = rankForKind(items, 'recall');
  assert.equal(recall[0].source, 'memory', 'a recollection prefers memory');
  assert.ok(recall[0].at >= recall[1].at, 'newest first inside the preferred store');
});

test('the kind rotates and never repeats itself', () => {
  let previous = null;
  const seen = [];
  for (let index = 0; index < 14; index += 1) {
    const kind = pickKind(previous, index * 3 + 1);
    assert.notEqual(kind, previous);
    assert.ok(QUIP_KINDS.includes(kind));
    seen.push(kind);
    previous = kind;
  }
  assert.ok(new Set(seen).size > 3, 'the rotation visits several kinds');
});

test('a grounded line always shows the quote', () => {
  // Every phrasing of every kind must carry the quote: a template without a
  // placeholder would collect the item and then never say it.
  for (const kind of QUIP_KINDS) {
    for (const locale of ['zh', 'en']) {
      for (let seed = 0; seed < 12; seed += 1) {
        const quip = buildQuip({ sources: stores(), kind, locale, now: NOW, seed });
        assert.ok(quip.quote !== '', `${kind}/${locale}/${seed} has no quote`);
        assert.ok(
          quip.text.includes(quip.quote.replace(/…$/, '').slice(0, 6)),
          `${kind}/${locale}/${seed}: "${quip.text}" does not show "${quip.quote}"`,
        );
      }
    }
  }
});

test('every kind renders a grounded line inside the bubble budget', () => {
  for (const kind of QUIP_KINDS) {
    for (const locale of ['zh', 'en']) {
      const quip = buildQuip({ sources: stores(), kind, locale, now: NOW, seed: 7 });
      assert.equal(quip.kind, kind);
      assert.notEqual(quip.text, '', `${kind}/${locale}`);
      assert.ok(Array.from(quip.text).length <= QUIP_LIMIT, `${kind}/${locale}: ${quip.text}`);
      assert.ok(!quip.text.includes('{what}'), 'no unrendered placeholder');
      assert.ok(!/\s{2,}/.test(quip.text), 'no double space');
      if (kind !== 'encourage') assert.notEqual(quip.source, null, `${kind} should quote a real item`);
    }
  }
});

test('a grounded line quotes the store it came from', () => {
  const quip = buildQuip({ sources: stores(), kind: 'recall', now: NOW, seed: 3 });
  assert.notEqual(quip.source, null);
  assert.ok(['记忆', '听记', '瞬间'].includes(quip.source.label));
  assert.ok(quip.text.includes('欧洲') || quip.text.includes('UBO') || quip.text.includes('P0') || quip.text.includes('提示词'), quip.text);
});

test('an empty store set falls back to the generic pool, honestly', () => {
  const quip = buildQuip({ sources: [], kind: 'tease', now: NOW, seed: 5 });
  assert.equal(quip.source, null);
  assert.equal(quip.key, null);
  assert.notEqual(quip.text, '');
  assert.ok(Array.from(quip.text).length <= QUIP_LIMIT);
});

test('the rendered wording is deterministic for the same seed', () => {
  const once = renderQuip({ kind: 'topic', snippetText: '某件事', when: '昨天', locale: 'zh', seed: 'abc' });
  const twice = renderQuip({ kind: 'topic', snippetText: '某件事', when: '昨天', locale: 'zh', seed: 'abc' });
  assert.equal(once, twice);
  const variants = new Set();
  for (const seed of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
    variants.add(renderQuip({ kind: 'topic', snippetText: '某件事', when: '昨天', locale: 'zh', seed }));
  }
  assert.ok(variants.size > 1, 'phrasings must rotate');
});

test('the engine does not quote the same item twice in a row', () => {
  const engine = createQuipEngine({ now: () => NOW });
  const keys = [];
  for (let index = 0; index < 3; index += 1) {
    const quip = engine.next(stores());
    if (quip.key !== null) {
      assert.ok(!keys.includes(quip.key), `item quoted twice: ${quip.key}`);
      keys.push(quip.key);
    }
  }
  assert.ok(engine.usedCount() > 0);
  engine.reset();
  assert.equal(engine.usedCount(), 0);
});

test('the no-repeat ring stays smaller than the pool, so items come back', () => {
  const engine = createQuipEngine({ now: () => NOW });
  // More quips than the ring holds: the pet must keep finding real items,
  // not fall back to the generic pool for the rest of the session.
  let grounded = 0;
  for (let index = 0; index < RECENT_LIMIT * 3; index += 1) {
    const quip = engine.next(stores());
    if (quip.source !== null) grounded += 1;
  }
  assert.ok(grounded >= RECENT_LIMIT * 2, `only ${grounded} grounded quips`);
  assert.ok(engine.usedCount() <= RECENT_LIMIT, `ring holds ${engine.usedCount()}`);
});

test('the quote decides the language, not the shell', () => {
  // A Chinese note inside an English shell still reads as Chinese.
  const chinese = buildQuip({ sources: stores(), kind: 'recall', locale: 'en', now: NOW, seed: 5 });
  assert.equal(chinese.locale, 'zh');
  assert.ok(/[\u3400-\u9fff]/.test(chinese.text), chinese.text);

  // An English note inside a Chinese shell reads as English.
  const english = buildQuip({
    sources: [{ id: 'reader', label: '读书', items: [{ text: 'Reading Pricing Design, page 9', at: NOW }] }],
    kind: 'recall',
    locale: 'zh',
    now: NOW,
    seed: 5,
  });
  assert.equal(english.locale, 'en');
  // Only ASCII plus the ellipsis the cut may leave behind.
  assert.ok(/^[\x20-\x7e\u2026]+$/.test(english.text), english.text);

  // A product name is not a language: a Chinese note that merely mentions
  // "Moments Canvas" still reads as Chinese.
  const mixed = buildQuip({
    sources: [{ id: 'memory', label: '记忆', items: [{ text: 'Moments Canvas 标题栏溢出 −20px，搜索框保持 440px。', at: NOW }] }],
    kind: 'nudge',
    locale: 'en',
    now: NOW,
    seed: 5,
  });
  assert.equal(mixed.locale, 'zh');
  assert.ok(/[\u3400-\u9fff]/.test(mixed.text), mixed.text);

  // With no quote at all, the requested locale stands.
  const generic = buildQuip({ sources: [], kind: 'tease', locale: 'en', now: NOW, seed: 5 });
  assert.equal(generic.locale, 'en');
});

test('the quip carries the quote it used', () => {
  const quip = buildQuip({ sources: stores(), kind: 'topic', now: NOW, seed: 5 });
  assert.notEqual(quip.quote, '');
  assert.ok(quip.text.includes(quip.quote.slice(0, 8)), quip.text);
});

test('a forced kind is honoured by the engine', () => {
  const engine = createQuipEngine({ now: () => NOW });
  const quip = engine.next(stores(), { kind: 'nudge' });
  assert.equal(quip.kind, 'nudge');
  assert.notEqual(hashText(quip.text), 0);
});
