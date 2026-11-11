/**
 * Voice input for the translate page: record, send to the Host, get the text.
 *
 * The transcription itself runs in the Host (faster-whisper), so the browser
 * only needs to produce a blob.
 */

/**
 * Transcribe one recorded clip.
 * @param {Blob} blob - the recording.
 * @returns {Promise<string>} the transcript.
 */
export async function transcribe(blob) {
  const response = await fetch('/api/chatbox-pet/transcribe?name=voice.webm', {
    method: 'POST',
    headers: { 'content-type': blob.type || 'audio/webm' },
    body: blob,
  });
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error(`转写服务没有返回 JSON（HTTP ${response.status}）`);
  }
  if (payload?.ok !== true) throw new Error(payload?.error?.message ?? '转写失败');
  const text = payload.result?.text ?? '';
  if (text.trim() === '') throw new Error('没有识别到语音，请再说一次');
  return text;
}
