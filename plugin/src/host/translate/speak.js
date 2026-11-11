/**
 * Word and sentence pronunciation, rendered on this machine.
 *
 * Order:
 *
 *   kokoro  the studio-quality local model the Reader already installed
 *           (~/.dsh/reader/tts-venv). A narrator, not a robot.
 *   say     macOS speech synthesis, always present. Used for Chinese and when
 *           the local model is missing.
 *
 * The clip is converted to m4a (browsers do not play WAV/AIFF everywhere) and
 * cached by voice+text, so pressing the speaker twice is instant.
 */
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';

import { aiError } from '../llm.js';
import { ffmpegPath } from '../audio/transcribe.js';
import { isKokoroInstalled, KOKORO_VOICES, kokoroSupports, synthesize as kokoroSynthesize } from './kokoro.js';

const run = promisify(execFile);

/** Where the generated clips live. */
export const TTS_DIR = path.join(os.homedir(), '.dsh', 'chatbox-pet', 'tts');

/** The system voices, used for Chinese and as the fallback. */
export const VOICES = {
  'en-US': 'Samantha',
  'en-GB': 'Daniel',
  'zh-CN': 'Tingting',
};

/** Spoken text is capped: this is a word or a sentence, not a podcast. */
const MAX_CHARS = 400;

/**
 * Pick the system voice for one accent.
 * @param {string} accent - en-US | en-GB | zh-CN.
 * @returns {string} the system voice name.
 */
function voiceFor(accent) {
  return VOICES[accent] ?? VOICES['en-US'];
}

/**
 * Convert a WAV buffer to a cached m4a file.
 * @param {Buffer} wav - the WAV bytes.
 * @param {string} target - the destination path.
 * @returns {Promise<void>} resolves when the file is written.
 */
async function wavToM4a(wav, target) {
  const temp = path.join(os.tmpdir(), `cbp-tts-${process.pid}-${Date.now()}.wav`);
  try {
    await fsp.writeFile(temp, wav);
    await run(ffmpegPath(), ['-v', 'error', '-y', '-i', temp, '-c:a', 'aac', '-b:a', '96k', target], { timeout: 20_000 });
  } finally {
    await fsp.rm(temp, { force: true });
  }
}

/**
 * Speak one text and return an m4a file path (cached).
 * @param {object} input - the request.
 * @param {string} input.text - what to say.
 * @param {string} [input.accent] - en-US | en-GB | zh-CN.
 * @returns {Promise<{path: string, accent: string, voice: string, engine: string, cached: boolean}>} the clip.
 */
export async function speak({ text, accent = 'en-US' }) {
  const value = typeof text === 'string' ? text.trim() : '';
  if (value === '') throw aiError('没有要朗读的内容');
  if (value.length > MAX_CHARS) throw aiError(`一次最多朗读 ${MAX_CHARS} 个字符`);
  const engine = isKokoroInstalled() && kokoroSupports(accent) ? 'kokoro' : 'say';
  // The voice name is what the page shows: af_heart / bf_emma for the studio
  // model, the system voice name otherwise.
  const voice = engine === 'kokoro' ? (KOKORO_VOICES[accent] ?? KOKORO_VOICES['en-US']) : voiceFor(accent);
  const key = createHash('sha1').update(`${engine}\u0000${voice}\u0000${value}`).digest('hex').slice(0, 20);
  const target = path.join(TTS_DIR, `${key}.m4a`);
  if (existsSync(target)) return { path: target, accent, voice, engine, cached: true };

  await fsp.mkdir(TTS_DIR, { recursive: true });

  // Studio voice first; a missing model is not an error, just a downgrade.
  if (engine === 'kokoro') {
    try {
      const wav = await kokoroSynthesize({ text: value, accent });
      await wavToM4a(wav, target);
      return { path: target, accent, voice, engine, cached: false };
    } catch {
      // fall through to the system voice
    }
  }

  const aiff = path.join(os.tmpdir(), `cbp-say-${key}.aiff`);
  try {
    try {
      await run('say', ['-v', voiceFor(accent), '-o', aiff, value], { timeout: 20_000 });
    } catch (error) {
      throw aiError(`系统语音 ${voiceFor(accent)} 不可用`, error);
    }
    await run(ffmpegPath(), ['-v', 'error', '-y', '-i', aiff, '-c:a', 'aac', '-b:a', '64k', target], { timeout: 20_000 });
    return { path: target, accent, voice: voiceFor(accent), engine: 'say', cached: false };
  } catch (error) {
    if (error?.code === 'chatbox-pet/ai-failed') throw error;
    throw aiError('生成发音失败：' + String(error?.message ?? error), error);
  } finally {
    await fsp.rm(aiff, { force: true });
  }
}
