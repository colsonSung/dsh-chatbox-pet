/**
 * 纯函数层的测试：来源分类、站点识别、抽帧时间点、ffprobe 解析、转写截断。
 *
 * 这些是「看错视频」最容易出错的地方（把链接当成本地文件、把 4K 当 720、
 * 把小时当分钟），所以每条都钉死具体输入输出。
 */
import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  assignSpeakers,
  classifySource,
  collapseRareSpeakers,
  firstLine,
  formatClock,
  frameTimes,
  parseProbe,
  platformOf,
  redactHome,
  dedupeSubtitles,
  normalizeCaption,
  sourceId,
  summarizeTranscript,
  unsupportedReason,
} from '../src/host/video/pipeline.js'

test('classifySource: url / file / invalid 三分', () => {
  assert.equal(classifySource('https://www.youtube.com/watch?v=abc').kind, 'url')
  assert.equal(classifySource('http://x.com/u/status/1').kind, 'url')
  assert.equal(classifySource('~/Downloads/a.mp4').kind, 'file')
  assert.equal(classifySource('/tmp/a.mp4').kind, 'file')
  assert.equal(classifySource('').kind, 'invalid')
  assert.equal(classifySource('ftp://host/a.mp4').kind, 'invalid')
  assert.equal(classifySource('https://').kind, 'invalid')
})

test('platformOf: 认站点、去 www、子域也算', () => {
  assert.equal(platformOf('https://youtu.be/abc').id, 'youtube')
  assert.equal(platformOf('https://m.youtube.com/watch?v=1').id, 'youtube')
  assert.equal(platformOf('https://www.x.com/u/status/1').id, 'twitter')
  assert.equal(platformOf('https://twitter.com/u/status/1').id, 'twitter')
  assert.equal(platformOf('https://v.douyin.com/abc/').id, 'douyin')
  assert.equal(platformOf('https://www.bilibili.com/video/BV1').id, 'bilibili')
  assert.equal(platformOf('https://channels.weixin.qq.com/web/pages/feed').id, 'weixin-channels')
  assert.equal(platformOf('https://example.com/a.mp4').id, 'other')
  assert.equal(platformOf('not a url').id, 'other')
})

test('unsupportedReason: 视频号与公众号明确不支持，其它不拦', () => {
  assert.match(unsupportedReason('weixin-channels'), /视频号/)
  assert.match(unsupportedReason('weixin-article'), /公众号/)
  assert.equal(unsupportedReason('youtube'), null)
  assert.equal(unsupportedReason('douyin'), null)
  assert.equal(unsupportedReason('other'), null)
})

test('frameTimes: 避开首尾 5%，数量和时长都对得上', () => {
  assert.deepEqual(frameTimes(0, 8), [])
  assert.deepEqual(frameTimes(19, 0), [])
  const one = frameTimes(19, 1)
  assert.equal(one.length, 1)
  assert.ok(Math.abs(one[0] - 9.5) < 0.2)
  const many = frameTimes(100, 5)
  assert.equal(many.length, 5)
  assert.ok(many[0] >= 4 && many[0] <= 6, 'first frame after the 5% edge')
  assert.ok(many[4] >= 94 && many[4] <= 96, 'last frame before the 95% edge')
  assert.equal(frameTimes(100, 99).length, 16, 'count is capped at 16')
})

test('formatClock: mm:ss 与 h:mm:ss', () => {
  assert.equal(formatClock(0), '00:00')
  assert.equal(formatClock(9.9), '00:09')
  assert.equal(formatClock(75), '01:15')
  assert.equal(formatClock(3675), '1:01:15')
  assert.equal(formatClock(-5), '00:00')
})

test('parseProbe: 分清视频/音频流、算 fps、读时长', () => {
  const media = parseProbe({
    format: { duration: '19.5', size: '629172' },
    streams: [
      { codec_type: 'video', codec_name: 'h264', width: 640, height: 360, avg_frame_rate: '30/1' },
      { codec_type: 'audio', codec_name: 'aac' },
    ],
  })
  assert.equal(media.duration, 19.5)
  assert.equal(media.width, 640)
  assert.equal(media.height, 360)
  assert.equal(media.fps, 30)
  assert.equal(media.videoCodec, 'h264')
  assert.equal(media.audioCodec, 'aac')
  assert.equal(media.hasAudio, true)
  assert.equal(media.bytes, 629172)
  const silent = parseProbe({ format: { duration: '5' }, streams: [{ codec_type: 'video', width: 100, height: 50 }] })
  assert.equal(silent.hasAudio, false)
  assert.equal(silent.fps, null)
})

test('summarizeTranscript: 按预算截断并标记', () => {
  const segments = [
    { start: 0, end: 2, text: '第一句' },
    { start: 2, end: 4, text: '第二句' },
    { start: 4, end: 6, text: '第三句' },
  ]
  const full = summarizeTranscript(segments, 1000)
  assert.equal(full.total, 3)
  assert.equal(full.kept, 3)
  assert.equal(full.truncated, false)
  assert.match(full.text, /\[00:00\] 第一句/)
  const cut = summarizeTranscript(segments, 12)
  assert.equal(cut.truncated, true)
  assert.ok(cut.kept < 3)
})

test('redactHome: 家目录换成 ~', () => {
  const home = process.env.HOME
  assert.equal(redactHome(home + '/Downloads/a.mp4'), '~/Downloads/a.mp4')
  assert.equal(redactHome('/opt/x'), '/opt/x')
})

test('sourceId: 同来源同 id，不同来源不同 id', () => {
  assert.equal(sourceId('abc'), sourceId('abc'))
  assert.notEqual(sourceId('abc'), sourceId('abd'))
  assert.match(sourceId('abc'), /^[0-9a-f]{16}$/)
})

test('firstLine: 只留第一行并截断', () => {
  assert.equal(firstLine('a\nb\nc'), 'a')
  assert.equal(firstLine('   '), '')
  assert.equal(firstLine('x'.repeat(500)).length, 300)
})
test('assignSpeakers: 按时间重叠分配，没重叠的给 null', () => {
  const segments = [
    { start: 0, end: 2, text: 'a' },
    { start: 2, end: 4, text: 'b' },
    { start: 9, end: 10, text: 'c' },
  ]
  const turns = [
    { start: 0.1, end: 1.9, speaker: 1 },
    { start: 2.1, end: 4.2, speaker: 2 },
  ]
  const merged = assignSpeakers(segments, turns)
  assert.equal(merged[0].speaker, 1)
  assert.equal(merged[1].speaker, 2)
  assert.equal(merged[2].speaker, null, 'no overlap → null, not a guess')
  assert.equal(merged[0].text, 'a', 'text untouched')
})

test('assignSpeakers: 跨两个说话人时取重叠更长的那个', () => {
  const merged = assignSpeakers(
    [{ start: 0, end: 10, text: 'long' }],
    [
      { start: 0, end: 4, speaker: 1 },
      { start: 4, end: 10, speaker: 2 },
    ],
  )
  assert.equal(merged[0].speaker, 2)
})

test('normalizeCaption: 忽略空白/标点/大小写', () => {
  assert.equal(normalizeCaption(' Hello, World! '), normalizeCaption('helloworld'))
  assert.equal(normalizeCaption('这条消息，明天发出'), normalizeCaption('这条消息 明天发出'))
})

test('dedupeSubtitles: 连续相同合并，低置信度丢弃，end 不早于 start', () => {
  const rows = [
    { at: 1, text: 'HELLO', conf: 0.9 },
    { at: 2, text: 'hello', conf: 0.8 },
    { at: 3, text: 'HELLO!', conf: 0.7 },
    { at: 4, text: 'NEXT LINE', conf: 0.9 },
    { at: 5, text: 'noise', conf: 0.1 },
    { at: 6, text: '   ', conf: 0.9 },
  ]
  const lines = dedupeSubtitles(rows, { minConfidence: 0.3 })
  assert.equal(lines.length, 2)
  assert.equal(lines[0].text, 'HELLO')
  assert.equal(lines[0].start, 1)
  assert.equal(lines[0].end, 3)
  assert.equal(lines[1].text, 'NEXT LINE')
  for (const line of lines) assert.ok(line.end > line.start)
})

test('dedupeSubtitles: 空输入返回空数组', () => {
  assert.deepEqual(dedupeSubtitles([]), [])
  assert.deepEqual(dedupeSubtitles(undefined), [])
})
test('collapseRareSpeakers: 单人噪声素材里的碎片说话人被并掉', () => {
  const noisy = [
    { start: 0, end: 2.1, speaker: 0 },
    { start: 2.1, end: 3.4, speaker: 1 },
    { start: 3.4, end: 5.2, speaker: 0 },
    { start: 5.2, end: 6.9, speaker: 2 },
    { start: 6.9, end: 16.5, speaker: 0 },
  ]
  const result = collapseRareSpeakers(noisy)
  assert.equal(result.speakers, 1, 'single narrator collapses to one speaker')
  assert.ok(result.turns.every((turn) => turn.speaker === 1))
})

test('collapseRareSpeakers: 两个都占一半的说话人保留，标签重排成 1..N', () => {
  const two = [
    { start: 0, end: 3.9, speaker: 7 },
    { start: 4, end: 7.6, speaker: 3 },
  ]
  const result = collapseRareSpeakers(two)
  assert.equal(result.speakers, 2)
  assert.deepEqual(result.turns.map((turn) => turn.speaker), [1, 2])
})

test('collapseRareSpeakers: 空输入', () => {
  assert.deepEqual(collapseRareSpeakers([]), { turns: [], speakers: 0 })
})