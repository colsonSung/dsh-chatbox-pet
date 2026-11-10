#!/usr/bin/env python3
"""Video Lens 的本地转写器：faster-whisper，一次跑完输出 JSON。

为什么单独一个进程而不是在 Node 里做：faster-whisper 是 CTranslate2 + PyAV，
模型加载要几百 MB 内存、几十秒，放在子进程里跑完就释放，宿主侧不会被它拖住，
也不污染 Harness 的依赖树。

用法：
  python3 transcribe.py --audio a.wav --out t.json [--model NAME] [--language zh] [--max-seconds 600]

输出（stdout 与 --out 文件同内容）：
  {"ok": true, "model": ..., "language": ..., "languageProbability": ...,
   "segments": [{"start": 0.0, "end": 2.4, "text": "..."}], "tookMs": 1234}

失败时输出 {"ok": false, "error": "...", "hint": "..."}，退出码仍然为 0：
调用方按 JSON 判断，不靠退出码猜测。
"""
import argparse
import json
import os
import sys
import time


def fail(error, hint=""):
    print(json.dumps({"ok": False, "error": str(error), "hint": hint}, ensure_ascii=False))
    return 0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--audio', required=True)
    parser.add_argument('--out', required=True)
    parser.add_argument('--model', default='mobiuslabsgmbh/faster-whisper-large-v3-turbo')
    parser.add_argument('--language', default=None)
    parser.add_argument('--max-seconds', type=float, default=0)
    parser.add_argument('--threads', type=int, default=0)
    args = parser.parse_args()

    if not os.path.isfile(args.audio):
        return fail("audio file not found: %s" % args.audio)

    try:
        from faster_whisper import WhisperModel
    except Exception as error:  # noqa: BLE001 — 环境缺依赖要报给用户，不是崩栈
        return fail("faster-whisper 不可用: %s" % error,
                    "装到带科学计算库的 python3 里：pip install faster-whisper")

    started = time.time()
    try:
        threads = args.threads if args.threads > 0 else max(4, (os.cpu_count() or 4) // 2)
        model = WhisperModel(args.model, device='cpu', compute_type='int8', cpu_threads=threads)
        segments, info = model.transcribe(
            args.audio,
            language=args.language,
            vad_filter=True,
            beam_size=1,
            condition_on_previous_text=False,
        )
        rows = []
        for segment in segments:
            rows.append({
                'start': round(float(segment.start), 2),
                'end': round(float(segment.end), 2),
                'text': str(segment.text or '').strip(),
            })
            if args.max_seconds and segment.end and segment.end >= args.max_seconds:
                break
        payload = {
            'ok': True,
            'model': args.model,
            'language': getattr(info, 'language', None),
            'languageProbability': round(float(getattr(info, 'language_probability', 0.0) or 0.0), 3),
            'segments': [row for row in rows if row['text']],
            'durationSeconds': round(float(getattr(info, 'duration', 0.0) or 0.0), 1),
            'tookMs': int((time.time() - started) * 1000),
        }
    except Exception as error:  # noqa: BLE001 — 模型加载/解码失败同样是数据，不是崩溃
        return fail("转写失败: %s" % error)

    text = json.dumps(payload, ensure_ascii=False)
    try:
        with open(args.out, 'w', encoding='utf-8') as handle:
            handle.write(text)
    except OSError as error:
        return fail("写结果失败: %s" % error)
    print(text)
    return 0


if __name__ == '__main__':
    sys.exit(main())
