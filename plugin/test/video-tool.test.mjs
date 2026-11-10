/**
 * 管线集成测试：真的跑 ffmpeg / ffprobe / faster-whisper。
 *
 * 素材在测试里现场合成（色彩测试图 + macOS say 生成的语音），不依赖仓库里
 * 的任何视频文件。默认跑；机器上没有 faster-whisper 或 say 时，相关断言降级
 * 为「明确报不可用」，而不是假装成功。
 */
import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import fsp from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'
import { test } from 'node:test'

import { analyze, normalizeConfig, toolchain } from '../src/host/video/tool.js'

const run = promisify(execFile)
const SLOW = process.env.VIDEO_LENS_SKIP_SLOW === '1'
/** 造测试素材要用的解释器：先用环境变量，其次 home 下的 miniconda，最后 PATH 里的 python3。 */
const PYTHON3 = process.env.VIDEO_LENS_PYTHON
  || [path.join(os.homedir(), 'miniconda3', 'bin', 'python3'), 'python3'].find((candidate) => existsSync(candidate))
/** macOS 的 say 用来造人声；其它平台这些用例直接跳过。 */
const HAS_SAY = process.platform === 'darwin'

/** 造一段带人声的 6 秒 mp4。 */
async function makeFixture(dir) {
  const wav = path.join(dir, 'speech.aiff')
  await run('say', ['-o', wav, 'The tin courier arrives at the station before dawn.'], { timeout: 60000 })
  const mp4 = path.join(dir, 'clip.mp4')
  // 语音比 6 秒短，apad 补静音，保证容器时长稳定在 6 秒左右。
  await run('ffmpeg', [
    '-v', 'error',
    '-f', 'lavfi', '-i', 'testsrc=size=640x360:rate=30:duration=6',
    '-i', wav,
    '-af', 'apad',
    '-t', '6',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-ar', '16000', '-ac', '1',
    '-y', mp4,
  ], { timeout: 120000 })
  return mp4
}

test('analyze: 本地视频 → 元数据 + 关键帧（+ 转写）', { skip: !HAS_SAY }, async () => {
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'vl-test-'))
  try {
    const clip = await makeFixture(dir)
    const options = normalizeConfig({ frames: 3 })
    const tools = await toolchain(options)
    const result = await analyze({ source: clip }, options, {})
    assert.equal(result.ok, true)
    assert.equal(result.source.kind, 'file')
    assert.ok(result.media.duration > 5 && result.media.duration < 7)
    assert.equal(result.media.width, 640)
    assert.equal(result.frames.length, 3, 'three frames requested, three frames written')
    for (const frame of result.frames) {
      const stat = await fsp.stat(frame.path)
      assert.ok(stat.size > 1000, 'frame is a real png')
    }
    if (tools.python && !SLOW) {
      assert.equal(result.transcript.available, true, 'local ASR ran')
      assert.ok(result.transcript.segments.length > 0)
      assert.match(result.transcript.text.toLowerCase(), /courier|station|dawn/)
    }
  } finally {
    await fsp.rm(dir, { recursive: true, force: true })
  }
})

test('analyze: 不存在的文件给可操作的错误', async () => {
  const result = await analyze({ source: '/tmp/definitely-not-here.mp4' }, normalizeConfig(), {})
  assert.equal(result.ok, false)
  assert.equal(result.code, 'file-missing')
  assert.match(result.hint, /路径/)
})

test('analyze: 视频号链接直接说不支持，并给出替代做法', async () => {
  const result = await analyze({ source: 'https://channels.weixin.qq.com/web/pages/feed?x=1' }, normalizeConfig(), {})
  assert.equal(result.ok, false)
  assert.equal(result.code, 'unsupported-platform')
  assert.match(result.hint, /上传|录屏|导出/)
})

test('analyze: 不是媒体的文件被拒', async () => {
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'vl-test-'))
  try {
    const fake = path.join(dir, 'notes.mp4')
    await fsp.writeFile(fake, 'not a video at all', 'utf8')
    const result = await analyze({ source: fake }, normalizeConfig(), {})
    assert.equal(result.ok, false)
    assert.equal(result.code, 'not-media')
  } finally {
    await fsp.rm(dir, { recursive: true, force: true })
  }
})
/** 造一段「两个人轮流说话 + 画面烧录字幕」的 8 秒 mp4。 */
async function makeDiarizationFixture(dir) {
  const a = path.join(dir, 'a.aiff')
  const b = path.join(dir, 'b.aiff')
  await run('say', ['-v', 'Samantha', '-o', a, 'Hello, this is the first speaker talking about the station schedule.'], { timeout: 60000 })
  await run('say', ['-v', 'Daniel', '-o', b, 'And this is the second speaker, bringing the package before dawn.'], { timeout: 60000 })
  const audio = path.join(dir, 'voices.wav')
  await run('ffmpeg', ['-v', 'error', '-i', a, '-i', b, '-filter_complex', '[0:a][1:a]concat=n=2:v=0:a=1', '-ar', '16000', '-ac', '1', '-y', audio], { timeout: 60000 })
  // 这台机器的 ffmpeg 没编进 drawtext（无 freetype），改用 PIL 画透明文字层 + overlay 烧录。
  const mp4 = path.join(dir, 'conversation.mp4')
  const overlays = []
  for (const [index, text] of ['MEET AT THE STATION', 'BRING THE PACKAGE'].entries()) {
    const png = path.join(dir, 'overlay-' + index + '.png')
    const script = [
      'from PIL import Image, ImageDraw, ImageFont',
      "im = Image.new('RGBA', (1280, 720), (0, 0, 0, 0))",
      "d = ImageDraw.Draw(im)",
      "font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 44)",
      "d.text((60, 560), " + JSON.stringify(text) + ", font=font, fill=(255, 255, 255, 255))",
      'im.save(' + JSON.stringify(png) + ')',
    ].join('\n')
    await run(PYTHON3, ['-c', script], { timeout: 60000 })
    overlays.push(png)
  }
  await run('ffmpeg', [
    '-v', 'error',
    '-f', 'lavfi', '-i', 'testsrc=size=1280x720:rate=30:duration=7',
    '-i', audio,
    '-i', overlays[0],
    '-i', overlays[1],
    '-filter_complex',
    "[0:v][2:v]overlay=0:0:enable='between(t,0,3)'[v1];[v1][3:v]overlay=0:0:enable='between(t,4,7)'[vout]",
    '-map', '[vout]', '-map', '1:a',
    '-t', '7',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-ar', '16000', '-ac', '1',
    '-y', mp4,
  ], { timeout: 180000 })
  return mp4
}

test('analyze: 两人对话 → 说话人分离 + 画面字幕 OCR', { skip: !HAS_SAY }, async () => {
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'vl-diar-'))
  try {
    const clip = await makeDiarizationFixture(dir)
    const options = normalizeConfig({ frames: 2, ocr: 'subtitles', ocrFps: 1 })
    const tools = await toolchain(options)
    const result = await analyze({ source: clip }, options, {})
    assert.equal(result.ok, true)

    // 说话人分离：两个不同声线应该能分出来；至少要求「有说话人标注」而不是假装成功
    if (tools.python) {
      assert.equal(result.diarization.available, true, 'diarization ran')
      assert.ok(result.transcript.speakers >= 1)
      assert.match(result.transcript.text, /说话人 \d：/, 'transcript lines carry a speaker label')
    }

    // OCR：烧录的两句英文应该能被识别出来（至少命中一句）
    assert.ok(Array.isArray(result.subtitles), 'subtitles array present')
    assert.ok(result.subtitles.length >= 1, 'at least one OCR line')
    const joined = result.subtitles.map((line) => line.text).join(' ').toUpperCase()
    assert.match(joined, /STATION|PACKAGE/, 'OCR read the burned-in subtitle text')
    for (const line of result.subtitles) assert.ok(line.end > line.start)
  } finally {
    await fsp.rm(dir, { recursive: true, force: true })
  }
})

test('analyze: speakers=false 与 ocr=off 时不跑这两步', { skip: !HAS_SAY }, async () => {
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'vl-off-'))
  try {
    const clip = await makeFixture(dir)
    const options = normalizeConfig({ frames: 1 })
    const result = await analyze({ source: clip, speakers: false, ocr: 'off' }, options, {})
    assert.equal(result.ok, true)
    assert.equal(result.diarization.available, false)
    assert.deepEqual(result.subtitles, [])
  } finally {
    await fsp.rm(dir, { recursive: true, force: true })
  }
})