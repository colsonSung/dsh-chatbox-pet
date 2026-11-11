/**
 * Word and sentence pronunciation, rendered on this machine.
 *
 * macOS `say` is the one speech engine guaranteed to exist here, and its
 * en-US / en-GB voices are the "professional" ones a dictionary expects. The
 * clip is converted to m4a (browsers do not play AIFF) and cached by
 * voice+text, so pressing the speaker twice is instant.
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

const run = promisify(execFile);

/** Where the generated clips live. */
export const TTS_DIR = path.join(os.homedir(), '.dsh', 'chatbox-pet', 'tts');

/** The voices offered by the dictionary card. */
export const VOICES = {
  'en-US': 'Samantha',
  'en-GB': 'Daniel',
  'zh-CN': 'Tingting',
};

/** Spoken text is capped: this is a word or a sentence, not a podcast. */
const MAX_CHARS = 400;

/**
 * Pick the voice for one accent.
 * @param {string} accent - en-US | en-GB | zh-CN.
 * @returns {string} the system voice name.
 */
function voiceFor(accent) {
  return VOICES[accent] ?? VOICES['en-US'];
}

/**
 * Speak one text and return an m4a file path (cached).
 * @param {object} input - the request.
 * @param {string} input.text - what to say.
 * @param {string} [input.accent] - en-US | en-GB | zh-CN.
 * @returns {Promise<{path: string, accent: string, voice: string, cached: boolean}>} the clip.
 */
export async function speak({ text, accent = 'en-US' }) {
  const value = typeof text === 'string' ? text.trim() : '';
  if (value === '') throw aiError('没有要朗读的内容');
  if (value.length > MAX_CHARS) throw aiError(`一次最多朗读 ${MAX_CHARS} 个字符`);
  const voice = voiceFor(accent);
  const key = createHash('sha1').update(`${accent}\u0000${voice}\u0000${value}`).digest('hex').slice(0, 20);
  const target = path.join(TTS_DIR, `${key}.m4a`);
  if (existsSync(target)) return { path: target, accent, voice, cached: true };

  await fsp.mkdir(TTS_DIR, { recursive: true });
  const aiff = path.join(os.tmpdir(), `cbp-say-${key}.aiff`);
  try {
    try {
      await run('say', ['-v', voice, '-o', aiff, value], { timeout: 20_000 });
    } catch (error) {
      throw aiError(`系统语音 ${voice} 不可用`, error);
    }
    await run(ffmpegPath(), ['-v', 'error', '-y', '-i', aiff, '-c:a', 'aac', '-b:a', '64k', target], { timeout: 20_000 });
    return { path: target, accent, voice, cached: false };
  } catch (error) {
    if (error?.code === 'chatbox-pet/ai-failed') throw error;
    throw aiError('生成发音失败：' + String(error?.message ?? error), error);
  } finally {
    await fsp.rm(aiff, { force: true });
  }
}
