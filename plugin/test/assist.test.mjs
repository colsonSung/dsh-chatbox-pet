/**
 * The eight text assistants: the catalogue is part of the contract (the page
 * renders one chip per task), and the guards must reject bad input before any
 * model is called.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

const { ASSIST_TASKS, TASK_IDS, assist } = await import('../src/host/assist/index.js');

test('目录里有八个任务，与页面上的 chip 一一对应', () => {
  assert.equal(TASK_IDS.length, 8);
  assert.deepEqual(TASK_IDS, ['polish', 'grammar', 'wiki', 'dedupe', 'write', 'reading', 'summarize', 'expand']);
});

test('每个任务都有中英文名、system 提示与输出上限', () => {
  for (const id of TASK_IDS) {
    const task = ASSIST_TASKS[id];
    assert.equal(task.id, id);
    assert.ok(task.zh.length > 0, id + ' has a Chinese label');
    assert.ok(task.en.length > 0, id + ' has an English label');
    assert.ok(task.system.length > 10, id + ' has a system prompt');
    assert.ok(task.maxTokens >= 500, id + ' has an output budget');
    assert.ok(task.kind === 'rewrite' || task.kind === 'analyze', id + ' has a kind');
  }
});

test('改写类走本地、分析类走宿主：kind 决定路由', () => {
  const rewrite = TASK_IDS.filter((id) => ASSIST_TASKS[id].kind === 'rewrite').sort();
  const analyze = TASK_IDS.filter((id) => ASSIST_TASKS[id].kind === 'analyze').sort();
  assert.deepEqual(rewrite, ['dedupe', 'expand', 'polish', 'write']);
  assert.deepEqual(analyze, ['grammar', 'reading', 'summarize', 'wiki']);
});

test('未知任务直接报错，不调用模型', async () => {
  await assert.rejects(
    () => assist({ llm: null, provider: '', model: '', task: 'nope', text: 'hello' }),
    /未知的助手任务/,
  );
});

test('空输入与超长输入被挡住', async () => {
  await assert.rejects(() => assist({ llm: null, provider: '', model: '', task: 'polish', text: '   ' }), /先在输入框里写点内容/);
  await assert.rejects(
    () => assist({ llm: null, provider: '', model: '', task: 'polish', text: 'x'.repeat(6001) }),
    /最多处理 6000 个字符/,
  );
});
