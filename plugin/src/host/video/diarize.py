#!/usr/bin/env python3
"""Video Lens 的说话人分离：sherpa-onnx 的 pyannote 分割 + 声纹嵌入 + 聚类。

为什么是 sherpa-onnx 而不是 pyannote.audio：pyannote 的 3.1 权重在 HuggingFace 上是
gated 的，要 token；sherpa-onnx 的模型公开可下、纯 ONNX、CPU 上够快（7.6 秒音频
0.1 秒跑完），而且不引入 torch 依赖。

用法：
  python3 diarize.py --wav a.wav --out d.json [--models-dir DIR] [--max-speakers N]

输出：
  {"ok": true, "speakers": 2, "segments": [{"start": 0.03, "end": 3.84, "speaker": 2}, ...]}

失败时输出 {"ok": false, "error": "...", "hint": "..."}，退出码 0（调用方按 JSON 判断）。
"""
import argparse
import json
import os
import sys
import time
import wave

DEFAULT_MODELS = os.path.join(os.path.expanduser('~'), '.dsh', 'video-lens', 'models')
SEGMENTATION = os.path.join(DEFAULT_MODELS, 'sherpa-onnx-pyannote-segmentation-3-0', 'model.onnx')
EMBEDDING = os.path.join(DEFAULT_MODELS, 'eres2net.onnx')


def fail(error, hint=''):
    print(json.dumps({"ok": False, "error": str(error), "hint": hint}, ensure_ascii=False))
    return 0


def read_wav(path):
    """读 16-bit 单声道 PCM。ffmpeg 已经把音频转成 16k/mono/s16le，这里不再解码。"""
    import numpy as np

    with wave.open(path, 'rb') as handle:
        if handle.getnchannels() != 1:
            raise ValueError('expected mono wav')
        if handle.getsampwidth() != 2:
            raise ValueError('expected 16-bit wav')
        sample_rate = handle.getframerate()
        frames = handle.readframes(handle.getnframes())
    return sample_rate, np.frombuffer(frames, dtype=np.int16).astype(np.float32) / 32768.0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--wav', required=True)
    parser.add_argument('--out', required=True)
    parser.add_argument('--models-dir', default=DEFAULT_MODELS)
    parser.add_argument('--max-speakers', type=int, default=0)
    parser.add_argument('--threshold', type=float, default=0.5)
    parser.add_argument('--min-on', type=float, default=0.3)
    parser.add_argument('--min-off', type=float, default=0.5)
    parser.add_argument('--threads', type=int, default=4)
    args = parser.parse_args()

    if not os.path.isfile(args.wav):
        return fail('wav not found: %s' % args.wav)
    segmentation = os.path.join(args.models_dir, 'sherpa-onnx-pyannote-segmentation-3-0', 'model.onnx')
    embedding = os.path.join(args.models_dir, 'eres2net.onnx')
    missing = [p for p in (segmentation, embedding) if not os.path.isfile(p)]
    if missing:
        return fail('diarization 模型缺失: %s' % ', '.join(missing),
                    '把模型放到 %s（sherpa-onnx-pyannote-segmentation-3-0/ + eres2net.onnx）' % args.models_dir)

    try:
        import sherpa_onnx
    except Exception as error:  # noqa: BLE001
        return fail('sherpa-onnx 不可用: %s' % error, 'pip install sherpa-onnx')

    started = time.time()
    try:
        sample_rate, samples = read_wav(args.wav)
        if sample_rate != 16000:
            return fail('音频采样率是 %d，需要 16000' % sample_rate)
        config = sherpa_onnx.OfflineSpeakerDiarizationConfig(
            segmentation=sherpa_onnx.OfflineSpeakerSegmentationModelConfig(
                pyannote=sherpa_onnx.OfflineSpeakerSegmentationPyannoteModelConfig(model=segmentation),
                num_threads=args.threads,
            ),
            embedding=sherpa_onnx.SpeakerEmbeddingExtractorConfig(model=embedding, num_threads=args.threads),
            clustering=sherpa_onnx.FastClusteringConfig(
                num_clusters=args.max_speakers if args.max_speakers > 0 else -1,
                threshold=args.threshold,
            ),
            min_duration_on=args.min_on,
            min_duration_off=args.min_off,
        )
        diarizer = sherpa_onnx.OfflineSpeakerDiarization(config)
        result = diarizer.process(samples)
        segments = [
            {'start': round(float(seg.start), 2), 'end': round(float(seg.end), 2), 'speaker': int(seg.speaker)}
            for seg in result.sort_by_start_time()
        ]
        speakers = len({seg['speaker'] for seg in segments})
        payload = {
            'ok': True,
            'speakers': speakers,
            'segments': segments,
            'tookMs': int((time.time() - started) * 1000),
        }
    except Exception as error:  # noqa: BLE001
        return fail('说话人分离失败: %s' % error)

    text = json.dumps(payload, ensure_ascii=False)
    try:
        with open(args.out, 'w', encoding='utf-8') as handle:
            handle.write(text)
    except OSError as error:
        return fail('写结果失败: %s' % error)
    print(text)
    return 0


if __name__ == '__main__':
    sys.exit(main())
