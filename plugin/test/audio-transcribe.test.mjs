/**
 * Local transcription, end to end: a real audio file through ffmpeg and the
 * whisper script. Skipped off macOS, where the fixtures cannot be generated.
 */
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import fsp from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { test } from 'node:test';

import { transcribeAudio } from '../src/host/audio/transcribe.js';

const run = promisify(execFile);
const SLOW = process.env.VIDEO_LENS_SKIP_SLOW === '1';
const HAS_SAY = process.platform === 'darwin';

test('transcribeAudio: 一段真实音频返回文本与时间码', { skip: !HAS_SAY || SLOW }, async () => {
  const dir = await fsp.mkdtemp(path.join(os.tmpdir(), 'cbp-tts-'));
  const aiff = path.join(dir, 'line.aiff');
  const m4a = path.join(dir, 'line.m4a');
  try {
    await run('say', ['-v', 'Samantha', '-o', aiff, 'The quarterly review starts on Monday at nine.']);
    // m4a is not wav: this also exercises the ffmpeg conversion leg.
    await run('ffmpeg', ['-v', 'error', '-y', '-i', aiff, '-c:a', 'aac', m4a]);
    const bytes = await fsp.readFile(m4a);
    const result = await transcribeAudio({ bytes, name: 'line.m4a', language: 'en' });
    assert.ok(result.text.length > 0, 'a transcript comes back');
    assert.match(result.text.toLowerCase(), /quarterly|review|monday|nine/);
    assert.ok(Array.isArray(result.segments) && result.segments.length > 0, 'segments carry timestamps');
    assert.equal(typeof result.segments[0].start, 'number');
    assert.ok(result.durationSeconds > 0);
  } finally {
    await fsp.rm(dir, { recursive: true, force: true });
  }
});

test('transcribeAudio: 空数据直接拒绝', async () => {
  await assert.rejects(() => transcribeAudio({ bytes: Buffer.alloc(0), name: 'x.webm' }), /没有收到音频数据/);
});
