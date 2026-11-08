/**
 * Tests for the Prompt Boost context collectors.
 *
 * Everything runs against `test/fixtures/` or a scratch directory under the OS
 * temp dir: no test reads the machine's real profile, real minutes directory or
 * real Supermemory server. `fetch` is always injected where HTTP would happen,
 * so the memory request shape is pinned down without a network.
 *
 * Covered, per the contract: missing files, malformed JSON, timeout/abort,
 * budget trimming, keyword ranking vs compose recency, per-source caps, the
 * 320-character item limit, the 2400-character total, per-source degradation,
 * and the exact Supermemory request payload/headers.
 */
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { collectContext } from '../src/host/boost/sources/index.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURES = join(HERE, 'fixtures');
const COMPLETE = join(FIXTURES, 'complete');
const PROFILE = join(COMPLETE, 'profile');
const MINUTES_SETTINGS = join(COMPLETE, 'minutes', 'settings.json');

/** Scratch directories removed after the run. */
const scratchDirs = [];

after(async () => {
  await Promise.all(scratchDirs.map((dir) => rm(dir, { recursive: true, force: true })));
});

/**
 * Create a scratch directory that is cleaned up after the test run.
 * @param {string} [prefix] - mkdtemp prefix.
 * @returns {Promise<string>} the directory path.
 */
async function scratch(prefix = 'prompt-boost-test-') {
  const dir = await mkdtemp(join(tmpdir(), prefix));
  scratchDirs.push(dir);
  return dir;
}

/**
 * Write a JSON file, creating parent directories.
 * @param {string} file - absolute path.
 * @param {any} value - the JSON value.
 * @returns {Promise<void>} resolves when written.
 */
async function writeJson(file, value) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(value, null, 2), 'utf8');
}

/**
 * A fetch stand-in returning a canned response body.
 * @param {any} body - the JSON body (a Response, or a value to serialise).
 * @param {number} [status] - the HTTP status.
 * @returns {Response} the response.
 */
function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}

/**
 * Build a fetch stub that answers both memory reads, recording each call.
 * @param {{results?: Array<any>, memories?: Array<any>}} [data] - canned payloads.
 * @returns {Function} the stub, with a `calls` array attached.
 */
function storageFetch(data = {}) {
  const calls = [];
  const impl = async (url, init) => {
    calls.push({ url: String(url), init });
    if (String(url).includes('/list/memories')) return jsonResponse({ documents: [], chunks: [], memories: data.memories ?? [] });
    return jsonResponse({ results: data.results ?? [] });
  };
  impl.calls = calls;
  return impl;
}

/**
 * The config for the "complete" fixtures, with an injectable memory fetch.
 * @param {Function} fetchImpl - the memory fetch stub.
 * @param {object} [overrides] - top-level config overrides.
 * @returns {object} the collector config.
 */
function completeConfig(fetchImpl, overrides = {}) {
  return {
    profileDir: PROFILE,
    minutes: { settingsPath: MINUTES_SETTINGS },
    memory: { apiKey: 'test-key', fetch: fetchImpl },
    ...overrides,
  };
}

/**
 * Pad a string to an exact length with a CJK filler.
 * @param {string} prefix - the leading text.
 * @param {number} [length] - target length.
 * @returns {string} the padded string.
 */
function padded(prefix, length = 320) {
  assert.ok(prefix.length <= length, `prefix too long: ${prefix.length} > ${length}`);
  return prefix + '填'.repeat(length - prefix.length);
}

/** Every source's item caps, straight from the contract. */
const CAPS = { memory: 5, minutes: 2, reader: 4, moments: 4 };

test('collects every source with the contract shape, labels and caps', async () => {
  const fetchImpl = storageFetch({ results: [{ memory: '记忆里提到过插件', similarity: 0.87 }] });
  const result = await collectContext({
    query: '插件',
    now: 1700003000000,
    config: completeConfig(fetchImpl),
  });

  assert.deepEqual(result.sources.map((source) => source.id), ['memory', 'minutes', 'reader', 'moments']);
  assert.deepEqual(result.sources.map((source) => source.label), ['记忆', '听记', '读书', '瞬间']);

  const byId = Object.fromEntries(result.sources.map((source) => [source.id, source]));
  assert.equal(byId.memory.items.length, 1);
  assert.equal(byId.memory.items[0].text, '记忆里提到过插件');
  assert.equal(byId.memory.items[0].similarity, 0.87);
  assert.equal(byId.minutes.items.length, 2);
  assert.equal(byId.reader.items.length, 3); // two notes + one book with progress
  assert.equal(byId.moments.items.length, 3); // n3 is deleted

  for (const source of result.sources) {
    assert.ok(Array.isArray(source.items));
    assert.ok(source.items.length <= CAPS[source.id], `${source.id} exceeds its cap`);
    assert.equal(source.error, undefined, `${source.id} should not report an error`);
    for (const item of source.items) {
      assert.equal(typeof item.text, 'string');
      assert.ok(item.text.length <= 320, `${source.id} item text is too long`);
      assert.ok(!/[\n\r\t]/.test(item.text), `${source.id} item text is not collapsed`);
      if (item.at !== undefined) assert.ok(Number.isFinite(item.at) && item.at > 0);
    }
  }

  // The minutes item carries the title; decisions are folded into the text.
  assert.equal(byId.minutes.items[0].title, '提示词增强评审');
  assert.match(byId.minutes.items[0].text, /决策：/);
  // The acknowledged deleted note never appears.
  assert.ok(!byId.moments.items.some((item) => item.text.includes('已删除')));
  // A note resolves its book and chapter title from the books directory.
  const firstBookNote = byId.reader.items.find((item) => item.text.includes('定价要跟着价值走'));
  assert.equal(firstBookNote.title, '《Pricing Design》· 第一章 定价与价值');
  // A book with progress becomes a "currently reading" item.
  const bookItem = byId.reader.items.find((item) => item.text.includes('在读书目'));
  assert.match(bookItem.text, /已读 42%/);

  const summed = result.sources.reduce(
    (total, source) => total + source.items.reduce((sum, item) => sum + item.text.length, 0),
    0,
  );
  assert.equal(result.totalChars, summed);
  assert.ok(result.totalChars <= 2400);
});

test('ranks improve-mode items by keyword overlap, ties broken by recency', async () => {
  const result = await collectContext({
    query: '插件',
    now: 1700003000000,
    config: completeConfig(storageFetch()),
  });
  const moments = result.sources.find((source) => source.id === 'moments').items;
  const texts = moments.map((item) => item.text);
  const matched = texts.filter((text) => text.includes('插件'));
  assert.equal(matched.length, 2);
  // n1 (newer) and n4 both contain the keyword; the newer one wins the tie.
  assert.ok(texts[0].includes('插件'));
  assert.ok(texts[0].includes('提示词增强'));
  // n2 has no overlap and must come after both matches.
  assert.equal(texts[texts.length - 1].includes('插件'), false);

  const reader = result.sources.find((source) => source.id === 'reader').items;
  assert.ok(reader[0].text.includes('插件'), 'the reader note mentioning the keyword ranks first');
});

test('compose mode (empty query) ranks purely by recency and uses the list endpoint', async () => {
  const fetchImpl = storageFetch({
    memories: [
      { memory: '较旧的记忆', system: { createdAt: '2024-01-01T00:00:00.000Z' } },
      { memory: '最新的记忆', system: { createdAt: '2024-01-03T00:00:00.000Z' } },
    ],
  });
  const result = await collectContext({ query: '', now: 1700003000000, config: completeConfig(fetchImpl) });
  const byId = Object.fromEntries(result.sources.map((source) => [source.id, source]));

  // Memory: the newest record first.
  assert.deepEqual(byId.memory.items.map((item) => item.text), ['最新的记忆', '较旧的记忆']);
  // Moments: n2 is the most recent active note.
  assert.ok(byId.moments.items[0].text.includes('天气'));
  // Minutes: m2 was created after m1.
  assert.equal(byId.minutes.items[0].title, '游戏手感讨论');

  assert.equal(fetchImpl.calls.length, 1);
  const [call] = fetchImpl.calls;
  assert.match(call.url, /\/ns\/dh-memory\/list\/memories\?limit=5&sort=createdAt&order=desc$/);
  assert.equal(call.init.method, 'POST');
  assert.equal(call.init.body, '{}');
  assert.equal(call.init.headers.authorization, 'Bearer test-key');
});

test('memory search request has the exact contract shape', async () => {
  const fetchImpl = storageFetch({ results: [{ memory: '命中', similarity: 0.5 }] });
  const config = completeConfig(fetchImpl, {
    memory: {
      baseUrl: 'http://127.0.0.1:1234/',
      namespace: 'ns-test',
      apiKey: '  secret-key  ',
      limit: 3,
      timeoutMs: 500,
      fetch: fetchImpl,
    },
  });
  await collectContext({ query: 'hello world', now: 1, config });

  assert.equal(fetchImpl.calls.length, 1);
  const [call] = fetchImpl.calls;
  assert.equal(call.url, 'http://127.0.0.1:1234/ns/ns-test/search');
  assert.equal(call.init.method, 'POST');
  assert.equal(call.init.headers.authorization, 'Bearer secret-key');
  assert.equal(call.init.headers['content-type'], 'application/json');
  assert.deepEqual(JSON.parse(call.init.body), {
    query: 'hello world',
    limit: 3,
    searchMode: 'hybrid',
  });
});

test('memory limit is clamped to the contract cap of 5', async () => {
  const fetchImpl = storageFetch({ results: [] });
  await collectContext({
    query: 'x',
    now: 1,
    config: completeConfig(fetchImpl, { memory: { apiKey: 'k', limit: 50, fetch: fetchImpl } }),
  });
  assert.equal(JSON.parse(fetchImpl.calls[0].init.body).limit, 5);
});

test('memory key is read from the key file and trimmed', async () => {
  const directory = await scratch();
  const keyFile = join(directory, 'api-key');
  await writeFile(keyFile, '\n  file-secret\n\n', 'utf8');
  const fetchImpl = storageFetch({ results: [] });
  const config = {
    profileDir: await scratch(),
    minutes: { homeDir: await scratch() },
    memory: { baseUrl: 'http://127.0.0.1:9', namespace: 'n', keyFile, fetch: fetchImpl },
  };
  await collectContext({ query: '插件', now: 1, config });
  assert.equal(fetchImpl.calls[0].init.headers.authorization, 'Bearer file-secret');
});

test('a missing memory key degrades without calling fetch', async () => {
  const fetchImpl = storageFetch({ results: [] });
  const config = {
    profileDir: await scratch(),
    minutes: { homeDir: await scratch() },
    memory: { keyFile: join(await scratch(), 'does-not-exist'), fetch: fetchImpl },
  };
  const result = await collectContext({ query: '插件', now: 1, config });
  assert.equal(result.sources[0].items.length, 0);
  assert.match(result.sources[0].error, /密钥/);
  assert.equal(fetchImpl.calls.length, 0);
});

test('memory HTTP failures and malformed payloads degrade to an error string', async () => {
  const cases = [
    { response: new Response('{"error":"boom"}', { status: 500 }), match: /HTTP 500/ },
    { response: new Response('not json at all', { status: 200 }), match: /无法解析/ },
    { response: jsonResponse({ unexpected: true }), match: /无法识别/ },
    { response: new Response('{"error":"Unauthorized"}', { status: 401 }), match: /拒绝访问/ },
  ];
  for (const entry of cases) {
    const fetchImpl = async () => entry.response;
    const result = await collectContext({
      query: '插件',
      now: 1,
      config: completeConfig(fetchImpl),
    });
    const memory = result.sources[0];
    assert.equal(memory.items.length, 0);
    assert.match(memory.error, entry.match);
    // The other stores keep working.
    assert.ok(result.sources[1].items.length > 0);
    assert.ok(result.sources[3].items.length > 0);
  }
});

test('memory timeout is reported, bounded and does not lose other sources', async () => {
  const fetchImpl = (url, init) =>
    new Promise((resolve, reject) => {
      const signal = init?.signal;
      if (signal === undefined) return;
      signal.addEventListener('abort', () => reject(signal.reason ?? new DOMException('aborted', 'AbortError')));
    });
  const startedAt = Date.now();
  const result = await collectContext({
    query: '插件',
    now: startedAt,
    config: completeConfig(fetchImpl, {
      memory: { apiKey: 'k', timeoutMs: 25, fetch: fetchImpl },
    }),
  });
  assert.match(result.sources[0].error, /超时/);
  assert.ok(Date.now() - startedAt < 1000);
  assert.ok(result.sources[2].items.length > 0);
  assert.ok(result.sources[3].items.length > 0);
});

test('a fetch that ignores its abort signal still cannot hold the collection past 1.5s', async () => {
  const fetchImpl = () => new Promise(() => {});
  const startedAt = Date.now();
  const result = await collectContext({
    query: '插件',
    now: startedAt,
    config: completeConfig(fetchImpl, { memory: { apiKey: 'k', timeoutMs: 1200, fetch: fetchImpl } }),
  });
  const elapsed = Date.now() - startedAt;
  assert.match(result.sources[0].error, /采集超时/);
  assert.ok(elapsed < 1500, `collection took ${elapsed}ms`);
  assert.ok(result.sources[3].items.length > 0);
});

test('missing stores degrade to empty items plus an error, without throwing', async () => {
  const emptyProfile = await scratch();
  const emptyMinutes = await scratch();
  const result = await collectContext({
    query: '',
    now: 1,
    config: {
      profileDir: emptyProfile,
      minutes: { homeDir: emptyMinutes },
      memory: { apiKey: 'k', fetch: storageFetch() },
    },
  });
  const byId = Object.fromEntries(result.sources.map((source) => [source.id, source]));
  assert.equal(byId.memory.items.length, 0);
  assert.equal(byId.memory.error, undefined);
  assert.match(byId.minutes.error, /听记目录不存在/);
  assert.match(byId.reader.error, /读书目录不存在/);
  assert.match(byId.moments.error, /瞬间记录不存在/);
  assert.equal(result.totalChars, 0);
});

test('one broken store does not lose the other three', async () => {
  const fetchImpl = storageFetch({ results: [{ memory: '记忆还在', similarity: 0.9 }] });
  const config = completeConfig(fetchImpl, {
    moments: { file: join(FIXTURES, 'broken', 'moments.json') },
    reader: { dir: join(FIXTURES, 'broken', 'reader') },
  });
  const result = await collectContext({ query: '插件', now: 1, config });
  const byId = Object.fromEntries(result.sources.map((source) => [source.id, source]));
  assert.equal(byId.moments.items.length, 0);
  assert.match(byId.moments.error, /瞬间数据无法解析/);
  assert.equal(byId.reader.items.length, 0);
  assert.match(byId.reader.error, /读书笔记无法解析/);
  assert.equal(byId.memory.items.length, 1);
  assert.ok(byId.minutes.items.length > 0);
});

test('a corrupt minutes file is skipped while a good meeting still counts', async () => {
  const home = await scratch();
  await writeJson(join(home, 'meetings', 'good.json'), {
    id: 'good',
    title: '正常会议',
    createdAt: '2024-02-01T00:00:00.000Z',
    minutes: { summary: '这条会议记录是好的。', topics: [] },
  });
  await writeFile(join(home, 'meetings', 'bad.json'), '{ this is not json', 'utf8');
  const result = await collectContext({
    query: '会议',
    now: 1,
    config: {
      profileDir: await scratch(),
      minutes: { homeDir: home },
      memory: { apiKey: 'k', fetch: storageFetch() },
    },
  });
  const minutes = result.sources.find((source) => source.id === 'minutes');
  assert.equal(minutes.items.length, 1);
  assert.match(minutes.items[0].text, /正常会议记录是好的|这条会议记录是好的/);
  assert.equal(minutes.error, undefined);
});

test('minutes fall back to the transcript when no minutes were generated', async () => {
  const home = await scratch();
  await writeJson(join(home, 'meetings', 'tx.json'), {
    id: 'tx',
    title: '只有转录',
    createdAt: '2024-03-01T00:00:00.000Z',
    transcript: '这是原始转录内容，还没有生成会议纪要。',
  });
  const result = await collectContext({
    query: '转录',
    now: 1,
    config: {
      profileDir: await scratch(),
      minutes: { homeDir: home },
      memory: { apiKey: 'k', fetch: storageFetch() },
    },
  });
  const minutes = result.sources.find((source) => source.id === 'minutes');
  assert.equal(minutes.items.length, 1);
  assert.match(minutes.items[0].text, /原始转录内容/);
  assert.equal(minutes.items[0].title, '只有转录');
});

test('reader falls back to book progress when notes.json is absent', async () => {
  const profile = await scratch();
  await writeJson(join(profile, 'reader', 'books', 'bk_now.json'), {
    id: 'bk_now',
    title: '正在读的书',
    author: '作者甲',
    chapters: [{ title: '第一章' }],
    addedAt: 1700000000000,
    progress: { chapterIndex: 0, percent: 0.35, updatedAt: 1700005000000 },
  });
  const result = await collectContext({
    query: '',
    now: 1,
    config: {
      profileDir: profile,
      minutes: { homeDir: await scratch() },
      memory: { apiKey: 'k', fetch: storageFetch() },
    },
  });
  const reader = result.sources.find((source) => source.id === 'reader');
  assert.equal(reader.error, undefined);
  assert.equal(reader.items.length, 1);
  assert.match(reader.items[0].text, /在读书目：《正在读的书》/);
  assert.match(reader.items[0].text, /已读 35%/);
  assert.equal(reader.items[0].title, '正在读的书');
});

test('enforces the 320-character item limit and keeps query context in a long note', async () => {
  const result = await collectContext({
    query: '龙猫',
    now: 1,
    config: {
      profileDir: join(FIXTURES, 'long'),
      minutes: { homeDir: await scratch() },
      memory: { apiKey: 'k', fetch: storageFetch() },
    },
  });
  const moments = result.sources.find((source) => source.id === 'moments');
  assert.equal(moments.items.length, 2);
  const long = moments.items[0];
  assert.ok(long.text.includes('龙猫'), 'the excerpt keeps the query match');
  assert.ok(long.text.length <= 320);
  assert.ok(!/\s{2,}/.test(long.text));
  assert.ok(!long.text.includes('\n'));
});

test('applies every per-source cap', async () => {
  const root = await scratch();
  const profile = join(root, 'profile');
  const notes = [];
  for (let index = 0; index < 10; index += 1) {
    notes.push({
      id: `n${index}`,
      content: `瞬间 ${index}`,
      createdAt: 1700000000000 + index,
      updatedAt: 1700000000000 + index,
      deletedAt: null,
    });
  }
  await writeJson(join(profile, 'moments-notes', 'notes.json'), { version: 1, notes });

  const readerNotes = {};
  for (let index = 0; index < 8; index += 1) {
    readerNotes[`r${index}`] = {
      id: `r${index}`,
      bookId: 'bk_none',
      text: `读书笔记 ${index}`,
      createdAt: 1700000000000 + index,
      updatedAt: 1700000000000 + index,
    };
  }
  await writeJson(join(profile, 'reader', 'notes.json'), readerNotes);

  const minutesHome = join(root, 'minutes');
  for (let index = 0; index < 5; index += 1) {
    await writeJson(join(minutesHome, 'meetings', `m${index}.json`), {
      id: `m${index}`,
      title: `会议 ${index}`,
      createdAt: `2024-01-0${index + 1}T00:00:00.000Z`,
      minutes: { summary: `会议摘要 ${index}` },
    });
  }

  const results = [];
  for (let index = 0; index < 10; index += 1) {
    results.push({ memory: `记忆 ${index}`, similarity: 0.5 + index / 100 });
  }
  // Compose mode reads the list endpoint, which is a different response shape.
  const memories = results.map((entry, index) => ({
    memory: entry.memory,
    system: { createdAt: new Date(1700000000000 + index * 1000).toISOString() },
  }));

  const result = await collectContext({
    query: '',
    now: 1,
    config: {
      profileDir: profile,
      minutes: { homeDir: minutesHome },
      memory: { apiKey: 'k', fetch: storageFetch({ memories }) },
    },
  });
  for (const source of result.sources) {
    assert.equal(source.items.length, CAPS[source.id], `${source.id} should be capped at ${CAPS[source.id]}`);
  }
});

test('trims the lowest-relevance items to the 2400-character budget, keeping one per source', async () => {
  const root = await scratch();
  const profile = join(root, 'profile');
  await writeJson(join(profile, 'moments-notes', 'notes.json'), {
    version: 1,
    notes: Array.from({ length: 5 }, (_, index) => ({
      id: `mom-${index}`,
      content: padded(`瞬间${index}：`),
      createdAt: 15000 + index * 1000,
      updatedAt: 15000 + index * 1000,
      deletedAt: null,
    })),
  });
  await writeJson(
    join(profile, 'reader', 'notes.json'),
    Object.fromEntries(
      Array.from({ length: 4 }, (_, index) => [
        `note-${index}`,
        {
          id: `note-${index}`,
          bookId: 'bk_missing',
          text: padded(`读书笔记${index}：`),
          createdAt: 11000 + index * 1000,
          updatedAt: 11000 + index * 1000,
        },
      ]),
    ),
  );
  const minutesHome = join(root, 'minutes');
  for (let index = 0; index < 3; index += 1) {
    await writeJson(join(minutesHome, 'meetings', `m${index}.json`), {
      id: `m${index}`,
      title: `会议${index}`,
      createdAt: `2024-01-0${index + 1}T00:00:00.000Z`,
      minutes: { summary: padded(`听记${index}：`) },
    });
  }
  const results = Array.from({ length: 7 }, (_, index) => ({
    memory: padded(`记忆${index}：`),
    similarity: 0.9,
    metadata: { temporalEventStartMs: 1000 + index * 1000 },
  }));
  // Compose mode (query '') lists memories instead of searching them.
  const memories = results.map((entry) => ({ memory: entry.memory, metadata: entry.metadata }));

  const result = await collectContext({
    query: '',
    now: 1,
    config: {
      profileDir: profile,
      minutes: { homeDir: minutesHome },
      memory: { apiKey: 'k', fetch: storageFetch({ memories }) },
    },
  });

  assert.ok(result.totalChars <= 2400, `totalChars=${result.totalChars}`);
  assert.equal(
    result.totalChars,
    result.sources.reduce(
      (total, source) => total + source.items.reduce((sum, item) => sum + item.text.length, 0),
      0,
    ),
  );
  for (const source of result.sources) {
    assert.ok(source.items.length >= 1, `${source.id} lost every item`);
  }
  // 15 items before trimming (5x320 memory, 2x200 minutes, 4x320 reader,
  // 4x320 moments = 4560); the weakest 7 go and every store keeps an item.
  const totalItems = result.sources.reduce((sum, source) => sum + source.items.length, 0);
  assert.equal(totalItems, 8, JSON.stringify(result.sources.map((source) => [source.id, source.items.length])));
  assert.equal(result.totalChars, 2320);
  // Newest Moments survive untouched; the oldest memory is the first to go.
  assert.equal(result.sources.find((source) => source.id === 'moments').items.length, 4);
  assert.equal(result.sources.find((source) => source.id === 'memory').items.length, 1);
  assert.equal(result.sources.find((source) => source.id === 'minutes').items.length, 2);
});

test('budget trimming never drops the only query-relevant item', async () => {
  const root = await scratch();
  const profile = join(root, 'profile');
  await writeJson(join(profile, 'moments-notes', 'notes.json'), {
    version: 1,
    notes: [
      { id: 'alpha', content: padded('alpha 关键瞬间：'), createdAt: 1000, updatedAt: 1000, deletedAt: null },
      { id: 'b', content: padded('普通瞬间B：'), createdAt: 2000, updatedAt: 2000, deletedAt: null },
      { id: 'c', content: padded('普通瞬间C：'), createdAt: 3000, updatedAt: 3000, deletedAt: null },
      { id: 'd', content: padded('普通瞬间D：'), createdAt: 4000, updatedAt: 4000, deletedAt: null },
    ],
  });
  await writeJson(
    join(profile, 'reader', 'notes.json'),
    Object.fromEntries(
      Array.from({ length: 2 }, (_, index) => [
        `note-${index}`,
        {
          id: `note-${index}`,
          bookId: 'bk_missing',
          text: padded(`笔记${index}：`),
          createdAt: 5000 + index * 1000,
          updatedAt: 5000 + index * 1000,
        },
      ]),
    ),
  );
  const minutesHome = join(root, 'minutes');
  await writeJson(join(minutesHome, 'meetings', 'm.json'), {
    id: 'm',
    title: '会议',
    createdAt: '2024-01-01T00:00:00.000Z',
    minutes: { summary: padded('听记：') },
  });
  const results = [
    { memory: padded('alpha 记忆：'), similarity: 0.9, metadata: { temporalEventStartMs: 500 } },
  ];

  const result = await collectContext({
    query: 'alpha',
    now: 1,
    config: {
      profileDir: profile,
      minutes: { homeDir: minutesHome },
      memory: { apiKey: 'k', fetch: storageFetch({ results }) },
    },
  });

  assert.ok(result.totalChars <= 2400);
  const memory = result.sources.find((source) => source.id === 'memory');
  const moments = result.sources.find((source) => source.id === 'moments');
  assert.ok(memory.items.some((item) => item.text.includes('alpha')), 'memory match was trimmed');
  assert.ok(moments.items.some((item) => item.text.includes('alpha')), 'moments match was trimmed');
});

test('tolerates garbage config and a throwing fetch without throwing', async () => {
  const emptyProfile = await scratch();
  const result = await collectContext({
    query: 42,
    now: 'not-a-number',
    config: {
      profileDir: emptyProfile,
      minutes: { homeDir: await scratch() },
      memory: null,
      reader: 7,
      moments: [],
      fetch: () => {
        throw new Error('boom');
      },
    },
  });
  assert.equal(result.sources.length, 4);
  assert.deepEqual(result.sources.map((source) => source.id), ['memory', 'minutes', 'reader', 'moments']);
  for (const source of result.sources) assert.ok(Array.isArray(source.items));
  assert.equal(typeof result.totalChars, 'number');
  assert.match(result.sources[0].error, /记忆检索失败/);
});
