#!/usr/bin/env python3
"""Pull plain text out of a document the reader dropped on the translate page.

    python extract.py --in report.pdf --out text.json

Supported: .pdf (PyMuPDF), .docx (python-docx), .txt/.md/.csv/.json, .html/.htm.
The result is capped so a 300-page PDF cannot turn into a 2 MB translation job
in one request.
"""
import argparse
import json
import os
import re
import sys

MAX_CHARS = 60000


def fail(message):
    print(json.dumps({"ok": False, "error": message}, ensure_ascii=False))
    return 0


def from_pdf(path):
    import fitz  # PyMuPDF

    parts = []
    with fitz.open(path) as doc:
        for index, page in enumerate(doc):
            parts.append(page.get_text())
            if sum(len(part) for part in parts) >= MAX_CHARS:
                break
    return "\n".join(parts), {"pages": len(parts)}


def from_docx(path):
    from docx import Document

    document = Document(path)
    parts = [paragraph.text for paragraph in document.paragraphs]
    for table in document.tables:
        for row in table.rows:
            parts.append("\t".join(cell.text for cell in row.cells))
    return "\n".join(parts), {}


def from_plain(path):
    with open(path, encoding="utf-8", errors="replace") as handle:
        return handle.read(), {}


def from_html(path):
    with open(path, encoding="utf-8", errors="replace") as handle:
        raw = handle.read()
    raw = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", raw)
    raw = re.sub(r"(?s)<[^>]+>", "\n", raw)
    return raw, {}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--in", dest="src", required=True)
    parser.add_argument("--out", dest="dst", required=True)
    args = parser.parse_args()

    if not os.path.isfile(args.src):
        return fail("文件不存在")
    suffix = os.path.splitext(args.src)[1].lower()

    try:
        if suffix == ".pdf":
            text, meta = from_pdf(args.src)
        elif suffix == ".docx":
            text, meta = from_docx(args.src)
        elif suffix in (".html", ".htm"):
            text, meta = from_html(args.src)
        elif suffix in (".txt", ".md", ".markdown", ".csv", ".json", ".srt", ".vtt"):
            text, meta = from_plain(args.src)
        else:
            return fail("暂不支持这个格式：" + (suffix or "未知") + "。支持 PDF / DOCX / TXT / MD / HTML")
    except Exception as error:  # noqa: BLE001 — reported to the reader, not a stack trace
        return fail("解析失败：" + str(error))

    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    if text == "":
        return fail("这个文件里没有可提取的文字（可能是扫描件或图片）")
    truncated = len(text) > MAX_CHARS
    payload = {
        "ok": True,
        "text": text[:MAX_CHARS],
        "chars": len(text[:MAX_CHARS]),
        "truncated": truncated,
        **meta,
    }
    with open(args.dst, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False)
    print(json.dumps(payload, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
