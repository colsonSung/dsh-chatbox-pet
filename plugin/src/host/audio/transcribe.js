/**
 * Local audio transcription for the quick-actions "录音转写" shortcut.
 *
 * The browser records a clip (or the reader drops one in), this module turns it
 * into 16 kHz mono wav with ffmpeg and runs the same faster-whisper script the
 * video tool uses — one model, one code path, nothing leaves the machine.
 */
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import { aiError } from '../llm.js';
import { pythonPath } from '../deck/generate.js';

const run = promisify(execFile);

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TRANSCRIBE_SCRIPT = path.join(HERE, '..', 'video', 'transcribe.py');

/** Uploaded clips are capped: a two-hour recording is not what this is for. */
export const MAX_BYTES = 120 * 1024 * 1024;
/** Whisper is asked to stop here; longer recordings report 已截断. */
const MAX_SECONDS = 1800;

/**
 * Find ffmpeg.
 * @returns {string} an absolute path or the bare command.
 */
export function ffmpegPath() {
  const candidates = ['/opt/homebrew/bin/ffmpeg', '/usr/local/bin/ffmpeg', '/usr/bin/ffmpeg'];
  return candidates.find((candidate) => existsSync(candidate)) ?? 'ffmpeg';
}

/**
 * Turn any audio container into the wav shape whisper wants.
 * @param {string} from - source path.
 * @param {string} to - destination path.
 * @returns {Promise<void>} resolves when done.
 * @throws {Error} with a reader-facing message.
 */
async function toWav(from, to) {
  try {
    // -vn drops video streams: screen recordings carried into this route still work.
    await run(ffmpegPath(), ['-v', 'error', '-y', '-i', from, '-vn', '-ac', '1', '-ar', '16000', '-c:a', 'pcm_s16le', to], {
      timeout: 180_000,
      maxBuffer: 8 * 1024 * 1024,
    });
  } catch (error) {
    throw aiError('音频解码失败：文件可能不是音频，或 ffmpeg 未安装', error);
  }
}

/**
 * Transcribe one audio buffer.
 * @param {object} input - the request.
 * @param {Buffer|Uint8Array} input.bytes - the audio payload.
 * @param {string} [input.name] - original file name, used only for the suffix.
 * @param {string} [input.language] - forced language, or undefined for auto.
 * @param {string} [input.model] - whisper model id.
 * @returns {Promise<object>} `{ text, segments, language, durationSeconds, tookMs, truncated }`.
 */
export async function transcribeAudio({ bytes, name, language, model }) {
  const buffer = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes ?? []);
  if (buffer.length === 0) throw aiError('没有收到音频数据');
  if (buffer.length > MAX_BYTES) throw aiError('录音太大（超过 120 MB），请分段转写');
  if (!existsSync(TRANSCRIBE_SCRIPT)) throw aiError('转写脚本缺失，请重装插件');

  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'cbp-audio-'));
  const ext = path.extname(String(name ?? '')).replace(/[^.a-z0-9]/gi, '').slice(0, 6) || '.webm';
  const source = path.join(dir, `input${ext}`);
  const wav = path.join(dir, 'audio.wav');
  const out = path.join(dir, 'transcript.json');
  try {
    await fsp.writeFile(source, buffer);
    await toWav(source, wav);
    const args = [TRANSCRIBE_SCRIPT, '--audio', wav, '--out', out, '--max-seconds', String(MAX_SECONDS)];
    if (typeof model === 'string' && model.trim() !== '') args.push('--model', model.trim());
    if (language === 'zh' || language === 'en') args.push('--language', language);
    const { stdout } = await run(pythonPath(), args, { timeout: 1_800_000, maxBuffer: 16 * 1024 * 1024 });
    const last = String(stdout).trim().split('\n').filter(Boolean).pop() ?? '{}';
    let parsed;
    try {
      parsed = JSON.parse(last);
    } catch (error) {
      throw aiError('转写脚本返回了无法解析的结果', error);
    }
    if (parsed?.ok !== true) throw aiError(String(parsed?.error ?? '转写失败'));
    const segments = Array.isArray(parsed.segments) ? parsed.segments : [];
    // Join with a space so English sentences do not run together ("9.Please"),
    // then take the space back out where both sides are CJK.
    const joined = segments
      .map((segment) => String(segment.text ?? '').trim())
      .filter((line) => line !== '')
      .join(' ');
    const text = joined
      .replace(/\s+(?=[\u3000-\u9fff\uff00-\uffef])/g, '')
      .replace(/(?<=[\u3000-\u9fff\uff00-\uffef])\s+/g, ' ')
      .trim();
    return {
      text,
      segments,
      language: parsed.language ?? null,
      durationSeconds: parsed.durationSeconds ?? null,
      tookMs: parsed.tookMs ?? null,
      truncated: Number(parsed.durationSeconds) > MAX_SECONDS,
    };
  } finally {
    await fsp.rm(dir, { recursive: true, force: true });
  }
}
