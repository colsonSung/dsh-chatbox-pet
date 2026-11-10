/**
 * 视频理解：让对话里的模型真正「看」到视频（chatbox-pet 的第三个功能）。
 *
 * 一个宿主侧工具，解决两件事：
 *   1. 用户上传的视频文件（Harness 会把附件存成只读路径交给模型）——
 *      模型拿到路径后调 video_read，得到元数据、逐段转写、关键帧图；
 *   2. 用户贴的视频链接（YouTube / X / TikTok / 抖音 / B站 / Vimeo）——
 *      本地 yt-dlp 取流后走同一条管线。
 *
 * 微信视频号没有可用的开源取流方案，这里明确拒绝并给出替代做法，而不是
 * 假装在解析（见 ./pipeline.js 的 unsupportedReason）。
 *
 * 不做的事：不发消息、不改用户文件、不调用任何云端 ASR；转写全部在本地
 * faster-whisper 上跑。所有中间产物落在 ~/.dsh/video-lens/ 下。
 */
import path from 'node:path'
import fsp from 'node:fs/promises'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

import { serviceOf } from '../service.js'

import {
  WORK_ROOT,
  assignSpeakers,
  classifySource,
  collapseRareSpeakers,
  downloadVideo,
  execOk,
  fetchInfo,
  dedupeSubtitles,
  findExecutable,
  firstLine,
  formatClock,
  frameTimes,
  parseProbe,
  platformOf,
  probeMedia,
  redactHome,
  sourceId,
  summarizeTranscript,
  unsupportedReason,
} from './pipeline.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const TRANSCRIBE_SCRIPT = path.join(HERE, 'transcribe.py')
const DIARIZE_SCRIPT = path.join(HERE, 'diarize.py')
const OCR_SCRIPT = path.join(HERE, 'ocr.py')

/** 默认配置：patch 里的 config 只用来覆盖其中几项。 */
export const DEFAULTS = Object.freeze({
  whisperModel: 'mobiuslabsgmbh/faster-whisper-large-v3-turbo',
  maxSeconds: 1800,
  maxMegabytes: 500,
  frames: 8,
  keepResults: 20,
  transcriptSeconds: 600,
  diarize: true,
  diarizeMaxSpeakers: 0,
  diarizeMinShare: 0.2,
  diarizeMinOn: 0.5,
  ocr: 'subtitles',
  ocrFps: 0.5,
  ocrRoi: 0.35,
  ocrMaxFrames: 300,
  ocrLanguage: '',
  proxy: '',
  pythonPath: '',
  ffmpegPath: '',
  ytDlpPath: '',
})

/** 一次只跑一条管线：ffmpeg + whisper 都是重活，并发只会互相拖慢。 */
let queue = Promise.resolve()

/**
 * 排队执行。
 * @param {() => Promise<any>} task - 任务。
 * @returns {Promise<any>} 任务结果。
 */
function serial(task) {
  const next = queue.then(task, task)
  queue = next.catch(() => {})
  return next
}

/**
 * 合并配置。
 * @param {object} [config] - patch 里的 config。
 * @returns {object} 生效配置。
 */
export function normalizeConfig(config) {
  const out = { ...DEFAULTS }
  if (config && typeof config === 'object') {
    for (const key of Object.keys(DEFAULTS)) {
      const value = config[key]
      if (value === undefined || value === null || value === '') continue
      if (typeof DEFAULTS[key] === 'boolean') {
        out[key] = value === true || value === 'true'
      } else if (typeof DEFAULTS[key] === 'number') {
        const num = Number(value)
        // 0 在 diarizeMaxSpeakers 里是合法值（表示自动判断），其它上限为 0 则忽略
        if (Number.isFinite(num) && (num > 0 || key === 'diarizeMaxSpeakers')) out[key] = num
      } else {
        out[key] = String(value)
      }
    }
  }
  return out
}

/** 外部工具的探测结果只算一次。 */
let toolchainPromise = null

/**
 * 找出需要的可执行文件，并验证 python 侧有 faster-whisper。
 * @param {object} options - 生效配置。
 * @returns {Promise<object>} 工具链。
 */
export function toolchain(options) {
  if (toolchainPromise !== null) return toolchainPromise
  toolchainPromise = (async () => {
    const [ffmpeg, ffprobe, ytdlp] = await Promise.all([
      options.ffmpegPath ? Promise.resolve(options.ffmpegPath) : findExecutable('ffmpeg'),
      findExecutable('ffprobe'),
      options.ytDlpPath ? Promise.resolve(options.ytDlpPath) : findExecutable('yt-dlp'),
    ])
    const pythons = [
      options.pythonPath,
      await findExecutable('python3'),
      path.join(os.homedir(), 'miniconda3', 'bin', 'python3'),
      '/opt/homebrew/bin/python3',
      '/usr/local/bin/python3',
      '/usr/bin/python3',
    ].filter(Boolean)
    let python = null
    for (const candidate of pythons) {
      const probe = await execOk(candidate, ['-c', 'import faster_whisper; print("ok")'], { timeout: 30000 })
      if (probe.ok && probe.stdout.includes('ok')) {
        python = candidate
        break
      }
    }
    return { ffmpeg, ffprobe, ytdlp, python }
  })()
  return toolchainPromise
}

/**
 * 把一次分析的结果写成模型能直接读的文字。
 * @param {object} value - analyze 的返回值。
 * @returns {string} 证据包。
 */
export function renderText(value) {
  if (!value || typeof value !== 'object') return '视频没看成：工具没有返回结果。'
  if (value.ok !== true) {
    const lines = [`视频没看成：${value.message ?? value.code ?? '未知原因'}`]
    if (value.hint) lines.push(`怎么办：${value.hint}`)
    return lines.join('\n')
  }
  const title = value.source?.title || path.basename(value.source?.path ?? '') || '（无标题）'
  const platform = value.source?.platformName ?? (value.source?.kind === 'file' ? '本地文件' : '链接')
  const media = value.media ?? {}
  const spec = [
    media.width && media.height ? `${media.width}×${media.height}` : null,
    media.fps ? `${media.fps}fps` : null,
    [media.videoCodec, media.audioCodec].filter(Boolean).join('/') || null,
    media.bytes ? `${(media.bytes / 1024 / 1024).toFixed(1)} MB` : null,
  ].filter(Boolean).join(' · ')
  const lines = [
    `视频：${title}（${platform} · ${formatClock(media.duration || 0)}）`,
    `规格：${spec || '未读到'}`,
  ]
  if (value.source?.uploader) lines.push(`作者：${value.source.uploader}`)
  if (value.source?.url) lines.push(`链接：${value.source.url}`)
  if (value.source?.path) lines.push(`文件：${redactHome(value.source.path)}`)
  const transcript = value.transcript ?? {}
  if (transcript.available) {
    lines.push(
      `转写（${transcript.language ?? '未知语种'}，${transcript.model ?? '局部模型'}，${transcript.segments?.length ?? 0} 段${transcript.truncated ? '，已截断' : ''}）：`,
    )
    lines.push(transcript.text || (transcript.segments?.length ? '（没有可用的转写文本）' : '（没有检测到语音）'))
  } else {
    lines.push(`转写不可用：${transcript.reason ?? '未知原因'}`)
    if (transcript.hint) lines.push(`  说明：${transcript.hint}`)
  }
  if (value.diarization?.available && value.transcript?.speakers > 1) {
    lines.push(`说话人：识别出 ${value.transcript.speakers} 个人，转写每一行前面标了「说话人 N」。`)
  }
  if (Array.isArray(value.subtitles) && value.subtitles.length > 0) {
    lines.push(`画面字幕（OCR 识别到 ${value.subtitles.length} 行）：`)
    for (const line of value.subtitles) {
      lines.push(`  [${formatClock(line.start)}] ${line.text}`)
    }
  } else if (Array.isArray(value.frameTexts) && value.frameTexts.length > 0) {
    lines.push('关键帧上的文字：')
    for (const row of value.frameTexts) lines.push(`  [${formatClock(row.at)}] ${row.text}`)
  }
  if (Array.isArray(value.frames) && value.frames.length > 0) {
    lines.push(`关键帧（${value.frames.length} 张，已保存）：`)
    for (const frame of value.frames) {
      lines.push(`  [${formatClock(frame.at)}] ${redactHome(frame.path)}`)
    }
    lines.push('要判断画面内容，用 read_image 打开对应帧；不要只看帧的时间点就推断画面。')
  }
  for (const warning of value.warnings ?? []) lines.push(`注意：${warning}`)
  return lines.join('\n')
}

/**
 * 清掉过旧的工作目录。
 * @param {number} keep - 保留多少个。
 * @returns {Promise<void>}
 */
export function isAnalysisDir(name) {
  return /^[0-9a-f]{16}$/.test(String(name ?? ''))
}

async function cleanupOld(keep) {
  let entries = []
  try {
    entries = await fsp.readdir(WORK_ROOT, { withFileTypes: true })
  } catch {
    return
  }
  const dirs = []
  for (const entry of entries) {
    // 只清我们自己按来源哈希建的分析目录；models/ 之类的目录永远不碰。
    if (!entry.isDirectory() || !isAnalysisDir(entry.name)) continue
    const full = path.join(WORK_ROOT, entry.name)
    try {
      const stat = await fsp.stat(full)
      dirs.push({ full, mtime: stat.mtimeMs })
    } catch {
      // 目录刚被删掉就算了
    }
  }
  dirs.sort((a, b) => b.mtime - a.mtime)
  for (const stale of dirs.slice(Math.max(1, keep))) {
    await fsp.rm(stale.full, { recursive: true, force: true }).catch(() => {})
  }
}

/**
 * 抽关键帧。
 * @param {string} ffmpeg - ffmpeg 路径。
 * @param {string} file - 视频文件。
 * @param {string} dir - 输出目录。
 * @param {number[]} times - 时间点。
 * @returns {Promise<Array<{at:number,path:string}>>} 帧。
 */
async function extractFrames(ffmpeg, file, dir, times, prefix = 'frame') {
  const frames = []
  await fsp.mkdir(dir, { recursive: true })
  for (let index = 0; index < times.length; index += 1) {
    const at = times[index]
    const target = path.join(dir, `${prefix}-${String(index + 1).padStart(4, '0')}.png`)
    const result = await execOk(ffmpeg, [
      '-v', 'error',
      '-ss', String(at),
      '-i', file,
      '-frames:v', '1',
      '-vf', "scale='min(1280,iw)':-2",
      '-q:v', '3',
      '-y', target,
    ], { timeout: 60000 })
    if (result.ok) {
      try {
        const stat = await fsp.stat(target)
        if (stat.size > 0) frames.push({ at, path: target })
      } catch {
        // 没产出就不算这一帧
      }
    }
  }
  return frames
}

/**
 * 抽音轨：16k 单声道 wav，faster-whisper 直接能吃。
 * @param {string} ffmpeg - ffmpeg 路径。
 * @param {string} file - 视频文件。
 * @param {string} target - 输出 wav。
 * @returns {Promise<boolean>} 是否成功。
 */
async function extractAudio(ffmpeg, file, target) {
  const result = await execOk(ffmpeg, [
    '-v', 'error', '-i', file, '-vn', '-ac', '1', '-ar', '16000', '-c:a', 'pcm_s16le', '-y', target,
  ], { timeout: 300000 })
  if (!result.ok) return false
  try {
    const stat = await fsp.stat(target)
    return stat.size > 1024
  } catch {
    return false
  }
}

/**
 * 跑转写。失败不抛，降级成 available:false。
 * @param {object} deps - { python, model, wav, out, language, maxSeconds }。
 * @returns {Promise<object>} 转写结果。
 */
async function transcribe({ python, model, wav, out, language, maxSeconds }) {
  if (!python) {
    return {
      available: false,
      reason: '没有找到装了 faster-whisper 的 python3',
      hint: '把 faster-whisper 装进任一 python3（pip install faster-whisper），或在配置里指定 pythonPath。',
    }
  }
  const args = [TRANSCRIBE_SCRIPT, '--audio', wav, '--out', out, '--model', model]
  if (language) args.push('--language', language)
  if (maxSeconds > 0) args.push('--max-seconds', String(maxSeconds))
  const result = await execOk(python, args, { timeout: 30 * 60000, maxBuffer: 64 * 1024 * 1024 })
  let payload = null
  try {
    payload = JSON.parse(result.stdout.trim().split('\n').filter(Boolean).pop())
  } catch {
    try {
      payload = JSON.parse(await fsp.readFile(out, 'utf8'))
    } catch {
      payload = null
    }
  }
  if (!payload || payload.ok !== true) {
    return {
      available: false,
      reason: payload?.error ?? (firstLine(result.stderr) || '转写进程没有返回结果'),
      hint: payload?.hint ?? '',
    }
  }
  return {
    available: true,
    model: payload.model,
    language: payload.language,
    languageProbability: payload.languageProbability,
    segments: payload.segments ?? [],
    durationSeconds: payload.durationSeconds,
  }
}

/**
 * 跑说话人分离。失败不抛，返回 { available:false, reason }。
 * @param {object} deps - { python, wav, out, maxSpeakers }。
 * @returns {Promise<object>} 说话人时间线。
 */
async function diarizeSpeakers({ python, wav, out, maxSpeakers, minOn }) {
  if (!python) {
    return { available: false, reason: '没有找到 python3', hint: '' }
  }
  const args = [DIARIZE_SCRIPT, '--wav', wav, '--out', out]
  if (maxSpeakers > 0) args.push('--max-speakers', String(maxSpeakers))
  if (Number.isFinite(minOn) && minOn > 0) args.push('--min-on', String(minOn))
  const result = await execOk(python, args, { timeout: 10 * 60000, maxBuffer: 32 * 1024 * 1024 })
  let payload = null
  try {
    payload = JSON.parse(result.stdout.trim().split('\n').filter(Boolean).pop())
  } catch {
    try {
      payload = JSON.parse(await fsp.readFile(out, 'utf8'))
    } catch {
      payload = null
    }
  }
  if (!payload || payload.ok !== true) {
    return { available: false, reason: payload?.error ?? (firstLine(result.stderr) || '说话人分离没有返回结果'), hint: payload?.hint ?? '' }
  }
  return { available: true, speakers: payload.speakers ?? 0, turns: payload.segments ?? [] }
}

/**
 * 对一批帧跑 OCR。失败不抛，返回 { available:false, reason }。
 * @param {object} deps - { python, images, out, languages }。
 * @returns {Promise<object>} 每帧的文本。
 */
async function runOcr({ python, images, out, languages }) {
  if (!python) return { available: false, reason: '没有找到 python3' }
  if (images.length === 0) return { available: true, images: [] }
  const manifestPath = out.replace(/\.json$/, '-manifest.json')
  await fsp.writeFile(manifestPath, JSON.stringify({ images, languages }), 'utf8').catch(() => {})
  const result = await execOk(python, [OCR_SCRIPT, '--manifest', manifestPath, '--out', out], { timeout: 20 * 60000, maxBuffer: 64 * 1024 * 1024 })
  let payload = null
  try {
    payload = JSON.parse(result.stdout.trim().split('\n').filter(Boolean).pop())
  } catch {
    try {
      payload = JSON.parse(await fsp.readFile(out, 'utf8'))
    } catch {
      payload = null
    }
  }
  if (!payload || payload.ok !== true) {
    return { available: false, reason: payload?.error ?? (firstLine(result.stderr) || 'OCR 没有返回结果') }
  }
  return { available: true, images: payload.images ?? [] }
}

/**
 * 主流程。
 * @param {object} args - 工具参数。
 * @param {object} options - 生效配置。
 * @param {object} ctx - 插件上下文（只用 logger）。
 * @returns {Promise<object>} 结果。
 */
export async function analyze(args, options, ctx) {
  const started = Date.now()
  // 单次调用可以覆盖配置里的开关，但不改配置文件本身。
  options = { ...options }
  if (args?.speakers === false) options.diarize = false
  if (typeof args?.ocr === 'string' && ['off', 'subtitles', 'frames'].includes(args.ocr)) options.ocr = args.ocr
  const sourceInput = typeof args?.source === 'string' ? args.source.trim() : ''
  const classified = classifySource(sourceInput)
  if (classified.kind === 'invalid') {
    return {
      ok: false,
      code: 'bad-source',
      message: '没有认出这是一个视频文件路径或链接。',
      hint: '给绝对路径（例如 ~/Downloads/a.mp4）或 http(s) 链接。',
    }
  }

  const tools = await toolchain(options)
  if (!tools.ffmpeg || !tools.ffprobe) {
    return {
      ok: false,
      code: 'missing-ffmpeg',
      message: '这台机器上没找到 ffmpeg / ffprobe。',
      hint: 'brew install ffmpeg',
    }
  }

  let platform = { id: 'file', name: '本地文件' }
  let url = null
  let info = null
  if (classified.kind === 'url') {
    platform = platformOf(classified.value)
    url = classified.value
    const reason = unsupportedReason(platform.id)
    if (reason !== null) {
      return {
        ok: false,
        code: 'unsupported-platform',
        message: reason,
        hint: '把视频用客户端导出/录屏成本地文件，或直接上传文件；文件路径也行。',
      }
    }
    if (!tools.ytdlp && platform.id !== 'other') {
      return {
        ok: false,
        code: 'missing-ytdlp',
        message: '这台机器上没找到 yt-dlp。',
        hint: 'brew install yt-dlp，或在配置里指定 ytDlpPath。',
      }
    }
  }

  const id = sourceId(classified.kind === 'url' ? classified.value : path.resolve(classified.value))
  const workDir = path.join(WORK_ROOT, id)
  await fsp.mkdir(workDir, { recursive: true })

  const warnings = []
  let file = null

  // ---- 准备媒体文件 -------------------------------------------------------
  if (classified.kind === 'url') {
    const meta = await fetchInfo(tools.ytdlp, url, platform.id, options.proxy || undefined)
    info = meta.ok ? meta.info : null
    if (!meta.ok && platform.id !== 'other') {
      return {
        ok: false,
        code: 'link-unreadable',
        message: `链接取不到内容：${meta.message}`,
        hint: '确认链接公开可访问；部分 X / Instagram 内容需要登录态，请先下载成本地文件再上传。',
      }
    }
    const duration = Number(info?.duration ?? 0)
    if (duration > options.maxSeconds) {
      return {
        ok: false,
        code: 'too-long',
        message: `视频长 ${formatClock(duration)}，超过上限 ${formatClock(options.maxSeconds)}。`,
        hint: '截取需要的片段后再上传，或把 maxSeconds 调大。',
      }
    }
    const downloaded = await downloadVideo({
      ytdlp: tools.ytdlp,
      url,
      platformId: platform.id,
      workDir,
      maxBytes: options.maxMegabytes * 1024 * 1024,
      timeoutMs: 15 * 60000,
      proxy: options.proxy || undefined,
    })
    if (!downloaded.ok) {
      return {
        ok: false,
        code: 'download-failed',
        message: `下载失败：${downloaded.message}`,
        hint: '链接可能受限或需要登录态；换公开链接，或先下载成本地文件再上传。',
      }
    }
    file = downloaded.file
  } else {
    const expanded = classified.value.replace(/^~(?=\/)/, os.homedir())
    file = path.resolve(expanded)
    let stat = null
    try {
      stat = await fsp.stat(file)
    } catch {
      return {
        ok: false,
        code: 'file-missing',
        message: `找不到这个文件：${redactHome(file)}`,
        hint: '上传附件后把 Harness 给出的路径传进来；路径里的 ~ 也可以写。',
      }
    }
    if (!stat.isFile()) {
      return { ok: false, code: 'not-a-file', message: `这是目录，不是视频文件：${redactHome(file)}` }
    }
    if (stat.size > options.maxMegabytes * 1024 * 1024) {
      return {
        ok: false,
        code: 'too-big',
        message: `文件 ${(stat.size / 1024 / 1024).toFixed(0)} MB，超过上限 ${options.maxMegabytes} MB。`,
        hint: '截短或压缩后再试，或把 maxMegabytes 调大。',
      }
    }
  }

  // ---- 规格 ---------------------------------------------------------------
  const media = await probeMedia(tools.ffprobe, file)
  if (!media || (!media.width && !media.hasAudio)) {
    return {
      ok: false,
      code: 'not-media',
      message: '这个文件不是能读的视频/音频，或编码无法解码。',
      hint: '确认是 mp4 / mov / mkv / webm 等常见容器；必要时先转成 mp4。',
    }
  }
  if (media.duration > options.maxSeconds) {
    return {
      ok: false,
      code: 'too-long',
      message: `视频长 ${formatClock(media.duration)}，超过上限 ${formatClock(options.maxSeconds)}。`,
      hint: '截取需要的片段后再上传，或把 maxSeconds 调大。',
    }
  }

  // ---- 转写 ---------------------------------------------------------------
  const wavPath = path.join(workDir, 'audio.wav')
  const ensureAudio = async () => {
    try {
      const stat = await fsp.stat(wavPath)
      if (stat.size > 1024) return true
    } catch {
      // 还没抽过
    }
    return extractAudio(tools.ffmpeg, file, wavPath)
  }
  let transcript = { available: false, reason: '没有音轨', hint: '' }
  if (media.hasAudio && args?.transcript !== false) {
    const wav = wavPath
    const cacheFile = path.join(workDir, 'transcript.json')
    const sourceKey = `${path.basename(file)}:${media.bytes ?? 0}:${Math.round(media.duration * 1000)}`
    let cached = null
    try {
      const previous = JSON.parse(await fsp.readFile(cacheFile, 'utf8'))
      if (previous?.sourceKey === sourceKey && Array.isArray(previous.segments)) cached = previous
    } catch {
      cached = null
    }
    if (cached !== null) {
      transcript = { ...cached, cached: true }
    } else if (await extractAudio(tools.ffmpeg, file, wav)) {
      const raw = await transcribe({
        python: tools.python,
        model: options.whisperModel,
        wav,
        out: cacheFile,
        language: typeof args?.language === 'string' && args.language !== '' ? args.language : null,
        maxSeconds: Math.min(options.transcriptSeconds, Math.ceil(media.duration)),
      })
      if (raw.available) {
        const summarized = summarizeTranscript(raw.segments)
        if (raw.segments.length === 0) warnings.push('这段音轨里没有检测到语音（可能是纯音乐或只有环境声）。')
        transcript = {
          available: true,
          model: raw.model,
          language: raw.language,
          languageProbability: raw.languageProbability,
          segments: raw.segments,
          text: summarized.text,
          truncated: summarized.truncated || Math.ceil(media.duration) > options.transcriptSeconds,
        }
        await fsp.writeFile(
          cacheFile,
          JSON.stringify({ ...transcript, sourceKey }, null, 2),
          'utf8',
        ).catch(() => {})
        if (transcript.truncated) {
          warnings.push(`只转写了前 ${formatClock(options.transcriptSeconds)}，后面的内容需要就再单独截取。`)
        }
      } else {
        transcript = raw
      }
    } else {
      transcript = { available: false, reason: '音轨抽取失败（可能是编码不支持）', hint: '' }
    }
  } else if (!media.hasAudio) {
    transcript = { available: false, reason: '这段视频没有音轨', hint: '只能靠关键帧看画面。' }
  } else {
    transcript = { available: false, reason: '调用方要求跳过转写', hint: '' }
  }
  if (!transcript.available && transcript.reason && transcript.reason !== '调用方要求跳过转写') {
    warnings.push(`转写缺失：${transcript.reason}`)
  }

  // ---- 说话人分离 ---------------------------------------------------------
  let diarization = { available: false, reason: '未启用' }
  if (!options.diarize) {
    diarization = { available: false, reason: '配置里关掉了' }
  } else if (transcript.available && media.hasAudio && (await ensureAudio())) {
    diarization = await diarizeSpeakers({
      python: tools.python,
      wav: wavPath,
      out: path.join(workDir, 'diarization.json'),
      maxSpeakers: options.diarizeMaxSpeakers,
      minOn: options.diarizeMinOn,
    })
    if (diarization.available) {
      // 声纹在噪声素材上会过分割，先按说话时长占比收口再标注。
      const collapsed = collapseRareSpeakers(diarization.turns, options.diarizeMinShare)
      transcript.segments = assignSpeakers(transcript.segments, collapsed.turns)
      transcript.speakers = collapsed.speakers
      const summarized = summarizeTranscript(transcript.segments)
      transcript.text = summarized.text
      transcript.truncated = transcript.truncated || summarized.truncated
    } else {
      warnings.push(`说话人分离没跑成：${diarization.reason}`)
    }
  } else {
    diarization = { available: false, reason: '没有可用的转写' }
  }

  // ---- 抽帧 ---------------------------------------------------------------
  const wanted = Number.isFinite(Number(args?.frames)) ? Number(args.frames) : options.frames
  const times = frameTimes(media.duration, wanted)
  const frames = await extractFrames(tools.ffmpeg, file, path.join(workDir, 'frames'), times)
  if (frames.length === 0) warnings.push('没能抽出关键帧（视频可能太短或解码失败）。')

  // ---- 字幕识别 / 画面 OCR ------------------------------------------------
  let subtitles = []
  let frameTexts = []
  if (options.ocr === 'subtitles' && media.duration > 1) {
    const step = 1 / Math.max(0.05, options.ocrFps)
    const sampleTimes = []
    for (let t = 0.5; t < media.duration && sampleTimes.length < options.ocrMaxFrames; t += step) {
      sampleTimes.push(Math.round(t * 10) / 10)
    }
    const shots = await extractFrames(tools.ffmpeg, file, path.join(workDir, 'ocr'), sampleTimes, 'ocr')
    const ocr = await runOcr({
      python: tools.python,
      images: shots.map((shot) => ({ path: shot.path, roi: `bottom:${options.ocrRoi}` })),
      out: path.join(workDir, 'ocr.json'),
      languages: options.ocrLanguage ? options.ocrLanguage.split(',').map((s) => s.trim()).filter(Boolean) : null,
    })
    if (ocr.available) {
      const rows = ocr.images.map((image, index) => ({
        at: shots[index]?.at ?? 0,
        text: image.text ?? '',
        conf: image.lines?.[0]?.conf,
      }))
      subtitles = dedupeSubtitles(rows, { minConfidence: 0.3 })
    } else {
      warnings.push(`字幕识别没跑成：${ocr.reason}`)
    }
  } else if (options.ocr === 'frames' && frames.length > 0) {
    const ocr = await runOcr({
      python: tools.python,
      images: frames.map((frame) => ({ path: frame.path, roi: 'full' })),
      out: path.join(workDir, 'ocr-frames.json'),
      languages: options.ocrLanguage ? options.ocrLanguage.split(',').map((s) => s.trim()).filter(Boolean) : null,
    })
    if (ocr.available) {
      frameTexts = frames.map((frame, index) => ({ at: frame.at, text: ocr.images[index]?.text ?? '' })).filter((row) => row.text !== '')
    } else {
      warnings.push(`画面 OCR 没跑成：${ocr.reason}`)
    }
  }

  const result = {
    ok: true,
    source: {
      kind: classified.kind,
      platform: platform.id,
      platformName: platform.name,
      title: info?.title ?? null,
      uploader: info?.uploader ?? info?.channel ?? null,
      url,
      path: classified.kind === 'file' ? file : null,
    },
    media: {
      duration: media.duration,
      width: media.width,
      height: media.height,
      fps: media.fps,
      videoCodec: media.videoCodec,
      audioCodec: media.audioCodec,
      bytes: media.bytes,
    },
    transcript,
    diarization: {
      available: diarization.available === true,
      speakers: transcript.speakers ?? 0,
      ...(diarization.available ? {} : { reason: diarization.reason ?? '未运行' }),
    },
    frames: frames.map((frame) => ({ at: frame.at, path: frame.path })),
    subtitles,
    frameTexts,
    workDir,
    elapsedMs: Date.now() - started,
    warnings,
  }
  await fsp.writeFile(path.join(workDir, 'result.json'), JSON.stringify(result, null, 2), 'utf8').catch(() => {})
  await cleanupOld(options.keepResults)
  try {
    ctx?.logger?.info?.(`[video-lens] ${platform.name} ${formatClock(media.duration)} → ${transcript.available ? 'transcript+' : ''}${frames.length} frames in ${result.elapsedMs}ms`)
  } catch {
    // 日志失败不影响结果
  }
  return result
}

/**
 * 工具定义。
 * @param {object} options - 生效配置。
 * @param {object} ctx - 插件上下文。
 * @returns {object} 工具。
 */
export function createVideoTool(options, ctx) {
  return {
    name: 'video_read',
    description:
      '看视频：给一个本地视频文件路径或视频链接，返回时长/分辨率、逐段带时间码的转写（本地 faster-whisper，不上传云端）、以及若干关键帧图片的本地路径。' +
      '适用：用户上传的视频（附件会给只读路径）、YouTube / X / TikTok / 抖音 / B站 / Vimeo 链接。' +
      '微信视频号链接没有可用取流方案，会明确返回不支持并给出替代做法。' +
      '拿到关键帧路径后用 read_image 逐张看画面；转写里的时间是判断「说到哪」的依据。',
    parameters: {
      type: 'object',
      properties: {
        source: {
          type: 'string',
          description: '本地视频绝对路径（可写 ~）或 http(s) 视频链接。',
        },
        focus: {
          type: 'string',
          description: '可选。这次想知道什么，写在结果里带回来，便于后续回答聚焦。',
        },
        frames: {
          type: 'number',
          description: '可选。抽几张关键帧，0 表示不抽，默认取配置（8）。',
        },
        transcript: {
          type: 'boolean',
          description: '可选。false 表示只要画面和元数据，跳过转写（更快）。',
        },
        speakers: {
          type: 'boolean',
          description: '可选。false 关闭说话人分离（默认开，本地 sherpa-onnx）。',
        },
        ocr: {
          type: 'string',
          enum: ['off', 'subtitles', 'frames'],
          description: '可选。subtitles=逐帧识别画面底部字幕（默认）；frames=只识别关键帧上的文字；off=不做 OCR。',
        },
        language: {
          type: 'string',
          description: '可选。转写语种，如 zh / en；不给则自动识别。',
        },
      },
      required: ['source'],
      additionalProperties: false,
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: renderText(value) }],
    },
    async execute(args) {
      // 工具结果必须是 lossless JSON：undefined / 函数会直接让宿主拒收整个结果，
      // 这里做一次 JSON 往返回收，避免某个可选字段把整条工具调用打掉。
      return serial(async () => JSON.parse(JSON.stringify(await analyze(args ?? {}, options, ctx)))).catch((error) => ({
        ok: false,
        code: 'internal-error',
        message: String(error?.message ?? error),
        hint: '这是插件自身的异常，不是视频的问题；把这条错误贴给维护者。',
      }))
    },
  }
}

/**
 * 把视频工具挂到 chatbox-pet 上。
 *
 * 视频配置放在 chatbox-pet patch 的 `video` 命名空间里，避免和宠物/增强的
 * 开关同名；tools 服务用防御式查找，服务缺失时只警告、不拖垮整个 bundle。
 * @param {object} ctx - 宿主插件上下文。
 * @param {object} [config] - chatbox-pet 的整行 config。
 * @returns {void}
 */
export function registerVideoTool(ctx, config) {
  const options = normalizeConfig(config && typeof config === 'object' ? config.video : undefined)
  const tools = serviceOf(ctx, 'tools')
  if (!tools || typeof tools.register !== 'function') {
    try {
      ctx?.logger?.warn?.('[chatbox-pet/video] tools service 不可用，video_read 未注册')
    } catch {
      // 没有日志就算了
    }
    return
  }
  ctx.effect(() => tools.register(createVideoTool(options, ctx)), 'chatbox-pet: video tool')
}
