/**
 * Video Lens 的管线：链接/文件 → 证据包（元数据 + 逐段转写 + 关键帧）。
 *
 * 这里只做「读」和「算」，不改用户任何文件：所有中间产物都落在
 * ~/.dsh/video-lens/<id>/ 下，命名按来源哈希，同一来源重复分析会复用已下好的
 * 副本与已算好的转写。
 *
 * 设计上的三条硬约束：
 *   1. 任何外部命令都用 execFile + 参数数组，绝不拼 shell 字符串；
 *   2. 每个阶段失败都降级成结构化结果，不把异常抛给对话；
 *   3. 超过时长/体积上限时明确拒绝并说明，而不是默默卡住。
 */
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import fsp from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import crypto from 'node:crypto'

const run = promisify(execFile)

/** 工作根目录：所有下载、音频、抽帧、转写都落在这里。 */
export const WORK_ROOT = path.join(os.homedir(), '.dsh', 'video-lens')

/** 链接里能识别出的站点。 */
const PLATFORMS = [
  { id: 'youtube', hosts: ['youtube.com', 'youtu.be', 'youtube-nocookie.com'], name: 'YouTube' },
  { id: 'twitter', hosts: ['x.com', 'twitter.com'], name: 'X / Twitter' },
  { id: 'tiktok', hosts: ['tiktok.com'], name: 'TikTok' },
  { id: 'douyin', hosts: ['douyin.com', 'iesdouyin.com'], name: '抖音' },
  { id: 'bilibili', hosts: ['bilibili.com', 'b23.tv'], name: 'Bilibili' },
  { id: 'vimeo', hosts: ['vimeo.com'], name: 'Vimeo' },
  { id: 'instagram', hosts: ['instagram.com'], name: 'Instagram' },
  { id: 'weixin-channels', hosts: ['channels.weixin.qq.com'], name: '微信视频号' },
  { id: 'weixin-article', hosts: ['mp.weixin.qq.com'], name: '微信公众号' },
]

/** 能直接看懂的媒体容器后缀（其余交给 ffprobe 判断）。 */
const MEDIA_EXT = new Set(['.mp4', '.mov', '.m4v', '.mkv', '.webm', '.avi', '.flv', '.ts', '.wmv'])

/**
 * 判断一个来源是链接还是本地文件。
 * @param {unknown} raw - 用户给的来源。
 * @returns {{kind: 'url'|'file'|'invalid', value: string}} 分类结果。
 */
export function classifySource(raw) {
  const value = typeof raw === 'string' ? raw.trim() : ''
  if (value === '') return { kind: 'invalid', value: '' }
  if (/^https?:\/\//i.test(value)) {
    try {
      new URL(value)
      return { kind: 'url', value }
    } catch {
      return { kind: 'invalid', value }
    }
  }
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) return { kind: 'invalid', value }
  return { kind: 'file', value }
}

/**
 * 认站点。
 * @param {string} url - 链接。
 * @returns {{id: string, name: string}} 站点；认不出时 id 为 'other'。
 */
export function platformOf(url) {
  let host = ''
  try {
    host = new URL(url).hostname.toLowerCase().replace(/^www\./, '')
  } catch {
    return { id: 'other', name: '未知站点' }
  }
  for (const platform of PLATFORMS) {
    if (platform.hosts.some((h) => host === h || host.endsWith('.' + h))) {
      return { id: platform.id, name: platform.name }
    }
  }
  return { id: 'other', name: host }
}

/**
 * 这个站点能不能直接用开源工具取到原始视频。
 * @param {string} platformId - platformOf 的 id。
 * @returns {string|null} 不能时的原因；能时为 null。
 */
export function unsupportedReason(platformId) {
  if (platformId === 'weixin-channels') {
    return '微信视频号没有公开的视频地址，yt-dlp 也没有可用的解析器：链接只能由微信客户端打开，开放源码里没有可靠的取流方案。'
  }
  if (platformId === 'weixin-article') {
    return '这是公众号文章链接，不是视频地址；文章里嵌入的视频同样不提供公开直链。'
  }
  return null
}

/**
 * 抽帧时间点：避开开头结尾各 5%，中间均分。
 * @param {number} duration - 视频时长（秒）。
 * @param {number} count - 想要几张。
 * @returns {number[]} 时间点（秒，保留一位小数）。
 */
export function frameTimes(duration, count) {
  const total = Number(duration)
  const n = Math.max(0, Math.min(16, Math.floor(Number(count) || 0)))
  if (!Number.isFinite(total) || total <= 0 || n === 0) return []
  if (n === 1) return [Math.round(total * 0.5 * 10) / 10]
  const start = total * 0.05
  const end = total * 0.95
  const step = (end - start) / (n - 1)
  return Array.from({ length: n }, (_, i) => Math.round((start + step * i) * 10) / 10)
}

/**
 * 秒 → mm:ss（超过一小时给 h:mm:ss）。
 * @param {number} seconds - 秒。
 * @returns {string} 时间码。
 */
export function formatClock(seconds) {
  const total = Math.max(0, Math.floor(Number(seconds) || 0))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(s).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

/**
 * ffprobe 的 JSON 压成对话里真正用得到的字段。
 * @param {object} probe - ffprobe -show_streams -show_format 的结果。
 * @returns {object} { duration, width, height, fps, videoCodec, audioCodec, hasAudio, bytes }。
 */
export function parseProbe(probe) {
  const streams = Array.isArray(probe?.streams) ? probe.streams : []
  const video = streams.find((s) => s?.codec_type === 'video')
  const audio = streams.find((s) => s?.codec_type === 'audio')
  const rawFps = typeof video?.avg_frame_rate === 'string' ? video.avg_frame_rate : ''
  let fps = null
  if (rawFps.includes('/')) {
    const [num, den] = rawFps.split('/').map(Number)
    if (Number.isFinite(num) && Number.isFinite(den) && den > 0) fps = Math.round((num / den) * 100) / 100
  }
  const duration = Number(probe?.format?.duration ?? video?.duration ?? 0)
  return {
    duration: Number.isFinite(duration) ? duration : 0,
    width: Number(video?.width) || null,
    height: Number(video?.height) || null,
    fps,
    videoCodec: video?.codec_name ?? null,
    audioCodec: audio?.codec_name ?? null,
    hasAudio: Boolean(audio),
    bytes: Number(probe?.format?.size) || null,
  }
}

/**
 * 转写超出预算时截断，并给出明确标记。
 * @param {Array<{start:number,end:number,text:string}>} segments - 逐段结果。
 * @param {number} [maxChars] - 字符上限。
 * @returns {{text: string, truncated: boolean, kept: number, total: number}} 文本与截断标记。
 */
export function summarizeTranscript(segments, maxChars = 8000) {
  const list = Array.isArray(segments) ? segments : []
  const parts = []
  let used = 0
  let kept = 0
  for (const seg of list) {
    const who = seg.speaker === null || seg.speaker === undefined ? '' : `说话人 ${seg.speaker}：`
    const line = `[${formatClock(seg.start)}] ${who}${String(seg.text ?? '').trim()}`
    if (used + line.length > maxChars) break
    parts.push(line)
    used += line.length + 1
    kept += 1
  }
  return { text: parts.join('\n'), truncated: kept < list.length, kept, total: list.length }
}

/** 把家目录换成 ~，回给对话时不泄露完整路径。 */
export function redactHome(input) {
  const home = os.homedir()
  const text = String(input ?? '')
  return home && text.startsWith(home) ? '~' + text.slice(home.length) : text
}

/** 稳定的来源 id：同一个文件/链接反复分析命中同一个目录。 */
export function sourceId(source) {
  return crypto.createHash('sha256').update(String(source)).digest('hex').slice(0, 16)
}

/**
 * 跑一个外部命令，不抛异常。
 * @param {string} file - 可执行文件。
 * @param {string[]} args - 参数。
 * @param {object} [opts] - { timeout, maxBuffer }。
 * @returns {Promise<{ok:boolean, stdout:string, stderr:string, code:number|null}>} 结果。
 */
export async function execOk(file, args, opts = {}) {
  try {
    const result = await run(file, args, {
      timeout: opts.timeout ?? 120000,
      maxBuffer: opts.maxBuffer ?? 16 * 1024 * 1024,
      encoding: 'utf8',
    })
    return { ok: true, stdout: String(result.stdout ?? ''), stderr: String(result.stderr ?? ''), code: 0 }
  } catch (error) {
    return {
      ok: false,
      stdout: String(error?.stdout ?? ''),
      stderr: String(error?.stderr ?? error?.message ?? error),
      code: typeof error?.code === 'number' ? error.code : null,
    }
  }
}

/**
 * 在 PATH + 常见安装位置里找一个可执行文件。
 * @param {string} name - 可执行文件名。
 * @param {string[]} [extra] - 额外候选绝对路径。
 * @returns {Promise<string|null>} 找到的路径。
 */
export async function findExecutable(name, extra = []) {
  const dirs = String(process.env.PATH ?? '').split(path.delimiter).filter(Boolean)
  const candidates = [
    ...extra,
    ...dirs.map((dir) => path.join(dir, name)),
    path.join(os.homedir(), 'miniconda3', 'bin', name),
    path.join(os.homedir(), '.local', 'bin', name),
    '/opt/homebrew/bin/' + name,
    '/usr/local/bin/' + name,
    '/usr/bin/' + name,
  ]
  for (const candidate of candidates) {
    try {
      await fsp.access(candidate, (await import('node:fs')).constants.X_OK)
      return candidate
    } catch {
      // 试下一个
    }
  }
  return null
}

/**
 * 用 ffprobe 读一个媒体文件的规格。
 * @param {string} ffprobe - ffprobe 路径。
 * @param {string} file - 媒体文件。
 * @returns {Promise<object|null>} 规格；读不出时为 null。
 */
export async function probeMedia(ffprobe, file) {
  const result = await execOk(ffprobe, [
    '-v', 'error',
    '-show_streams',
    '-show_format',
    '-of', 'json',
    file,
  ], { timeout: 30000 })
  if (!result.ok) return null
  try {
    return { ...parseProbe(JSON.parse(result.stdout)), raw: JSON.parse(result.stdout) }
  } catch {
    return null
  }
}

/**
 * 用 yt-dlp 取链接的元数据（不下载）。
 * @param {string} ytdlp - yt-dlp 路径。
 * @param {string} url - 链接。
 * @param {string} [platformId] - 站点 id，用于选播放器客户端。
 * @returns {Promise<{ok:boolean, info?:object, message?:string}>} 元数据。
 */
export async function fetchInfo(ytdlp, url, platformId, proxy) {
  const args = ['-J', '--no-playlist', '--no-warnings', '--no-progress']
  if (proxy) args.push('--proxy', proxy)
  if (platformId === 'youtube') args.push('--extractor-args', 'youtube:player_client=android')
  args.push(url)
  const result = await execOk(ytdlp, args, { timeout: 90000 })
  if (!result.ok) {
    return { ok: false, message: firstLine(result.stderr || result.stdout) || 'yt-dlp 取不到元数据' }
  }
  try {
    return { ok: true, info: JSON.parse(result.stdout) }
  } catch {
    return { ok: false, message: 'yt-dlp 的输出不是 JSON' }
  }
}

/**
 * 下载链接对应的视频。只下一路 ≤ 目标高度的版本，避免 4K 把盘吃满。
 * @param {object} deps - { ytdlp, url, platformId, workDir, maxBytes }。
 * @returns {Promise<{ok:boolean, file?:string, message?:string}>} 结果。
 */
export async function downloadVideo({ ytdlp, url, platformId, workDir, maxBytes, timeoutMs, proxy }) {
  const template = path.join(workDir, 'source.%(ext)s')
  const attempts = []
  const format = 'bv*[height<=720]+ba/b[height<=720]/bv*+ba/b'
  const clients = platformId === 'youtube' ? ['android', 'ios', 'web_safari'] : [null]
  for (const client of clients) {
    const args = [
      '--no-playlist', '--no-warnings', '--no-progress',
      '--no-mtime',
      '--max-filesize', String(maxBytes),
      '-f', format,
      '-o', template,
    ]
    if (client) args.push('--extractor-args', `youtube:player_client=${client}`)
    if (proxy) args.push('--proxy', proxy)
    args.push(url)
    const result = await execOk(ytdlp, args, { timeout: timeoutMs ?? 600000 })
    if (result.ok) {
      const found = await pickFirstFile(workDir, /^source\./)
      if (found) return { ok: true, file: found }
      attempts.push('下载完成但没找到文件')
      continue
    }
    attempts.push(firstLine(result.stderr || result.stdout) || 'yt-dlp 失败')
  }
  return { ok: false, message: attempts.join(' / ') || '下载失败' }
}

/** 在目录里找第一个匹配的文件。 */
export async function pickFirstFile(dir, pattern) {
  let entries = []
  try {
    entries = await fsp.readdir(dir)
  } catch {
    return null
  }
  const hit = entries.filter((name) => pattern.test(name)).sort()[0]
  return hit ? path.join(dir, hit) : null
}

/** 只取错误信息的第一行，避免整页日志灌进对话。 */
export function firstLine(text) {
  const line = String(text ?? '').split('\n').map((s) => s.trim()).filter(Boolean)[0] ?? ''
  return line.slice(0, 300)
}
/**
 * 给每条转写按时间重叠分配说话人。
 * @param {Array<{start:number,end:number,text:string}>} segments - 转写段。
 * @param {Array<{start:number,end:number,speaker:number}>} turns - 说话人时间线。
 * @returns {Array<object>} 每段多一个 speaker（没有重叠时为 null）。
 */
export function assignSpeakers(segments, turns) {
  const list = Array.isArray(segments) ? segments : []
  const timeline = Array.isArray(turns) ? turns : []
  return list.map((segment) => {
    const best = { speaker: null, overlap: 0 }
    for (const turn of timeline) {
      const overlap = Math.min(segment.end, turn.end) - Math.max(segment.start, turn.start)
      if (overlap > best.overlap) best.speaker = turn.speaker
      if (overlap > best.overlap) best.overlap = overlap
    }
    return { ...segment, speaker: best.speaker }
  })
}

/** 归一化一行字幕用来比较：去掉空白和标点，只留字母数字与汉字。 */
export function normalizeCaption(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, '')
}

/**
 * 把逐帧 OCR 结果压成字幕行：连续相同文本合并成一段，空白丢掉。
 * @param {Array<{at:number,text:string,conf?:number}>} rows - 每帧的 OCR 结果。
 * @param {object} [options] - { minConfidence, minDuration }。
 * @returns {Array<{start:number,end:number,text:string}>} 字幕行。
 */
export function dedupeSubtitles(rows, options = {}) {
  const minConfidence = Number.isFinite(options.minConfidence) ? options.minConfidence : 0.3
  const list = (Array.isArray(rows) ? rows : [])
    .filter((row) => row && typeof row.text === 'string' && row.text.trim() !== '')
    .filter((row) => row.conf === undefined || row.conf >= minConfidence)
    .sort((a, b) => a.at - b.at)
  const merged = []
  for (const row of list) {
    const text = row.text.trim().replace(/\s+/g, ' ')
    const key = normalizeCaption(text)
    const last = merged[merged.length - 1]
    if (last !== undefined && normalizeCaption(last.text) === key) {
      last.end = row.at
      continue
    }
    merged.push({ start: row.at, end: row.at, text })
  }
  // 每行至少延伸到一个采样间隔，避免 end == start
  const gap = list.length > 1 ? Math.abs(list[1].at - list[0].at) : 1
  return merged.map((line) => ({ ...line, end: Math.max(line.end, line.start + gap) }))
}
/**
 * 合并「说话时间占比很小」的说话人。
 *
 * 声纹嵌入在噪声大、录音质量差的素材上会把同一个人切成好几个（实测一段手机
 * 拍摄的单人视频被分成 4 个说话人）。这里按「总说话时长占比」做一次收口：占比
 * 低于 minShare 的说话人并进占比最大的那个，标签按首次出现顺序重排成 1..N。
 * 这是启发式，不是模型能力；宁可少报一个人，也不要在单人视频里硬编出 4 个人。
 *
 * @param {Array<{start:number,end:number,speaker:number}>} turns - 原始时间线。
 * @param {number} [minShare] - 低于这个占比就并掉，默认 0.12。
 * @returns {{turns: Array<object>, speakers: number}} 收口后的时间线。
 */
export function collapseRareSpeakers(turns, minShare = 0.2) {
  const list = (Array.isArray(turns) ? turns : []).filter(
    (turn) => turn && Number.isFinite(turn.start) && Number.isFinite(turn.end) && turn.end > turn.start,
  )
  if (list.length === 0) return { turns: [], speakers: 0 }
  const totals = new Map()
  for (const turn of list) {
    totals.set(turn.speaker, (totals.get(turn.speaker) ?? 0) + (turn.end - turn.start))
  }
  const total = [...totals.values()].reduce((sum, value) => sum + value, 0)
  if (!(total > 0)) return { turns: list.map((turn) => ({ ...turn, speaker: 1 })), speakers: 1 }
  const dominant = [...totals.entries()].sort((a, b) => b[1] - a[1])[0][0]
  const counts = new Map()
  for (const turn of list) counts.set(turn.speaker, (counts.get(turn.speaker) ?? 0) + 1)
  // 保留条件：占比够，并且要么出现不止一次、要么占比本身很大。
  // 只出现一次又只占一小段的「说话人」在单麦噪声素材里多半是误判。
  const kept = new Set(
    [...totals.entries()]
      .filter(([speaker, duration]) => {
        const share = duration / total
        if (share < minShare) return false
        return (counts.get(speaker) ?? 0) >= 2 || share >= 0.4
      })
      .map(([speaker]) => speaker),
  )
  kept.add(dominant)
  const order = []
  for (const turn of list) {
    const target = kept.has(turn.speaker) ? turn.speaker : dominant
    if (!order.includes(target)) order.push(target)
  }
  const labels = new Map(order.map((speaker, index) => [speaker, index + 1]))
  const next = list.map((turn) => ({
    ...turn,
    speaker: labels.get(kept.has(turn.speaker) ? turn.speaker : dominant) ?? 1,
  }))
  return { turns: next, speakers: order.length }
}
