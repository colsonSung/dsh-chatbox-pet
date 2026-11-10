#!/usr/bin/env python3
"""Video Lens 的 OCR：用 macOS 自带的 Vision 框架（VNRecognizeTextRequest）。

为什么不用 tesseract / PaddleOCR：这台机器是 macOS，Vision 是系统内置、离线、
中英混排识别质量好、不需要额外模型文件；tesseract 要装二进制和语言包、中文质量一般；
PaddleOCR 要下几百 MB 模型。代价是只能在 macOS 上跑，非 macOS 时明确报不可用。

用法：
  python3 ocr.py --manifest m.json --out o.json
  m.json = {"images": [{"path": "/abs/a.png", "roi": "bottom:0.35"}, ...], "languages": ["zh-Hans", "en-US"]}

输出：
  {"ok": true, "images": [{"path": "...", "text": "合并后的文本", "lines": [{"text","conf","x","y"}]}]}

失败时输出 {"ok": false, "error": "...", "hint": "..."}，退出码 0。
"""
import argparse
import json
import os
import sys
import time


def fail(error, hint=''):
    print(json.dumps({"ok": False, "error": str(error), "hint": hint}, ensure_ascii=False))
    return 0


def parse_roi(spec):
    """'bottom:0.35' → Vision 的归一化矩形（原点左下）。空/None 表示整帧。"""
    if not spec:
        return None
    if spec == 'full':
        return None
    if spec.startswith('bottom:'):
        height = float(spec.split(':', 1)[1])
        height = max(0.05, min(1.0, height))
        return (0.0, 0.0, 1.0, height)
    raise ValueError('unsupported roi: %s' % spec)


def recognize(path, languages, roi):
    import Quartz
    import Vision

    url = Quartz.CFURLCreateFromFileSystemRepresentation(None, path.encode('utf-8'), len(path.encode('utf-8')), False)
    source = Quartz.CGImageSourceCreateWithURL(url, None)
    if source is None:
        raise ValueError('cannot read image: %s' % path)
    image = Quartz.CGImageSourceCreateImageAtIndex(source, 0, None)
    if image is None:
        raise ValueError('cannot decode image: %s' % path)

    request = Vision.VNRecognizeTextRequest.alloc().init()
    request.setRecognitionLevel_(Vision.VNRequestTextRecognitionLevelAccurate)
    request.setUsesLanguageCorrection_(True)
    # 自动语种检测和显式语种列表在 Vision 里互斥：同时设会抛 NSInvalidArgumentException。
    if languages:
        request.setRecognitionLanguages_(languages)
    else:
        request.setAutomaticallyDetectsLanguage_(True)
    rect = parse_roi(roi)
    if rect is not None:
        request.setRegionOfInterest_(Quartz.CGRectMake(*rect))

    # options 传 {} 会触发 NSInvalidArgumentException（pyobjc 的空字典桥接问题），必须传 None。
    handler = Vision.VNImageRequestHandler.alloc().initWithCGImage_options_(image, None)
    handler.performRequests_error_([request], None)

    lines = []
    for observation in request.results() or []:
        candidates = observation.topCandidates_(1)
        if not candidates:
            continue
        candidate = candidates[0]
        box = observation.boundingBox()
        lines.append({
            'text': str(candidate.string()),
            'conf': round(float(candidate.confidence()), 3),
            'x': round(float(box.origin.x), 4),
            'y': round(float(box.origin.y), 4),
        })
    # 从上到下、从左到右：Vision 的 y 原点在下，所以取负序
    lines.sort(key=lambda item: (-item['y'], item['x']))
    return lines


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--manifest', required=True)
    parser.add_argument('--out', required=True)
    args = parser.parse_args()

    try:
        with open(args.manifest, encoding='utf-8') as handle:
            manifest = json.load(handle)
    except OSError as error:
        return fail('读 manifest 失败: %s' % error)

    images = manifest.get('images') or []
    if not images:
        return fail('manifest 里没有 images')

    try:
        import Vision  # noqa: F401
    except Exception as error:  # noqa: BLE001
        return fail('macOS Vision 不可用: %s' % error, 'pip install pyobjc-framework-Vision pyobjc-framework-Quartz')

    languages = manifest.get('languages') or ['zh-Hans', 'en-US']
    started = time.time()
    results = []
    try:
        for item in images:
            path = item.get('path')
            if not path or not os.path.isfile(path):
                results.append({'path': path, 'text': '', 'lines': [], 'error': 'missing'})
                continue
            lines = recognize(path, languages, item.get('roi'))
            results.append({'path': path, 'text': ' '.join(line['text'] for line in lines), 'lines': lines})
    except Exception as error:  # noqa: BLE001
        return fail('OCR 失败: %s' % error)

    payload = {'ok': True, 'images': results, 'tookMs': int((time.time() - started) * 1000)}
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
