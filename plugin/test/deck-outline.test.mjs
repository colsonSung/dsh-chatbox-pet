/**
 * The outline contract: a chatty model answer must never reach the renderer
 * half-shaped, and a good answer must keep its numbers and headings verbatim.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { normalizeOutline } from '../src/host/deck/outline.js';

test('normalizeOutline: 保留标题、章节、要点与备注', () => {
  const outline = normalizeOutline(
    {
      title: '  支付季度复盘  ',
      subtitle: '面向管理层',
      footer: 'Onerway · 2026 年 4 月',
      sections: [
        { heading: '关键结果', summary: '交易量', bullets: ['授权率 94.8%', '跨境占比 38%'], notes: '讲清重试策略' },
        { heading: '下季度重点', bullets: ['上线 6 个本地支付方式'] },
      ],
    },
    'zh',
  );
  assert.equal(outline.title, '支付季度复盘');
  assert.equal(outline.sections.length, 2);
  assert.deepEqual(outline.sections[0].bullets, ['授权率 94.8%', '跨境占比 38%']);
  assert.equal(outline.sections[0].notes, '讲清重试策略');
  assert.equal(outline.sections[1].summary, '');
});

test('normalizeOutline: 丢掉没有要点或没有标题的章节', () => {
  const outline = normalizeOutline(
    {
      title: 'T',
      sections: [
        { heading: '', bullets: ['a'] },
        { heading: '有标题没要点', bullets: [] },
        { heading: '合格', bullets: ['  ', '有用的一条'] },
        'not an object',
      ],
    },
    'zh',
  );
  assert.equal(outline.sections.length, 1);
  assert.deepEqual(outline.sections[0].bullets, ['有用的一条']);
});

test('normalizeOutline: 超过 6 个章节就截断，要点最多 4 条', () => {
  const sections = Array.from({ length: 9 }, (_, index) => ({
    heading: '章节 ' + index,
    bullets: ['一', '二', '三', '四', '五'],
  }));
  const outline = normalizeOutline({ title: 'T', sections }, 'zh');
  assert.equal(outline.sections.length, 6);
  assert.equal(outline.sections[0].bullets.length, 4);
});

test('normalizeOutline: 全是垃圾就抛错，而不是生成空 PPT', () => {
  assert.throws(() => normalizeOutline({ sections: [] }, 'zh'));
  assert.throws(() => normalizeOutline(null, 'zh'));
  assert.throws(() => normalizeOutline({ sections: [{ heading: 'x', bullets: [] }] }, 'zh'));
});

test('normalizeOutline: 英文负载允许更长的句子', () => {
  const long = 'x'.repeat(200);
  const outline = normalizeOutline({ title: 'Deck', sections: [{ heading: 'Why', bullets: [long] }] }, 'en');
  assert.equal(outline.sections[0].bullets[0].length, 140);
});
