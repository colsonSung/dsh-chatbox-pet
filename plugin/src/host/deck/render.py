#!/usr/bin/env python3
"""Render a deck outline into a 16:9 PowerPoint file.

    python render.py --in outline.json --out deck.pptx

The outline is intentionally tiny — the model writes prose, this script owns the
layout:

    {"title": "...", "subtitle": "...", "footer": "...", "sections": [
        {"heading": "...", "summary": "...", "bullets": ["...", "..."], "notes": "speaker notes"}
    ]}

Design: a quiet consulting deck. One accent colour, hairline rules instead of
boxes, one idea per slide, speaker notes carried through. Every shape is drawn
— no template placeholders — so the file opens the same in Keynote, PowerPoint
and Google Slides.
"""
import argparse
import json
import os
import sys

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.oxml.ns import qn
from pptx.util import Inches, Pt

INK = RGBColor(0x0F, 0x11, 0x15)
BODY = RGBColor(0x41, 0x46, 0x4E)
MUTED = RGBColor(0x8A, 0x8F, 0x98)
ACCENT = RGBColor(0x63, 0x5B, 0xFF)
LINE = RGBColor(0xE6, 0xE8, 0xEC)
PAPER = RGBColor(0xFF, 0xFF, 0xFF)
WASH = RGBColor(0xF6, 0xF7, 0xF9)

FONT = "PingFang SC"
W, H = 13.333, 7.5
MARGIN = 0.95
CONTENT_W = W - MARGIN * 2


def set_font(run, size, *, bold=False, color=INK, font=FONT):
    """Give one run a size, weight, colour and a CJK-capable typeface."""
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = color
    run.font.name = font
    # python-pptx does not expose the East-Asian typeface; PowerPoint falls back
    # to a different face for CJK runs unless <a:ea> is set explicitly.
    rpr = run.font._rPr
    for tag in ("a:ea", "a:cs"):
        node = rpr.find(qn(tag))
        if node is None:
            node = rpr.makeelement(qn(tag), {})
            rpr.append(node)
        node.set("typeface", font)


def textbox(slide, left, top, width, height, *, anchor=MSO_ANCHOR.TOP):
    """An empty textbox: wrapped, no autosize, zero insets."""
    box = slide.shapes.add_textbox(Inches(left), Inches(top), Inches(width), Inches(height))
    frame = box.text_frame
    frame.word_wrap = True
    frame.vertical_anchor = anchor
    frame.margin_left = 0
    frame.margin_right = 0
    frame.margin_top = 0
    frame.margin_bottom = 0
    return frame


def para(frame, text, size, *, bold=False, color=INK, space_before=0, space_after=0,
         first=False, align=PP_ALIGN.LEFT, line=None):
    """Write one paragraph into a frame."""
    p = frame.paragraphs[0] if first else frame.add_paragraph()
    p.alignment = align
    if space_before:
        p.space_before = Pt(space_before)
    if space_after:
        p.space_after = Pt(space_after)
    if line is not None:
        p.line_spacing = line
    run = p.add_run()
    run.text = text
    set_font(run, size, bold=bold, color=color)
    return p


def rule(slide, left, top, width, color=LINE, weight=0.75):
    """A hairline, used instead of a full border."""
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(top), Inches(width), Pt(weight))
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


def block(slide, left, top, width, height, color=WASH):
    """A flat wash block, the only filled surface in the deck."""
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(left), Inches(top), Inches(width), Inches(height))
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


def canvas(prs):
    """A blank 16:9 slide on a paper colour."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    fill = slide.background.fill
    fill.solid()
    fill.fore_color.rgb = PAPER
    return slide


def footer(slide, text, index=None, total=None):
    """The quiet line every content slide carries."""
    if text:
        frame = textbox(slide, MARGIN, H - 0.72, 8.0, 0.32)
        para(frame, text, 9.5, color=MUTED, first=True)
    if index is not None and total is not None:
        frame = textbox(slide, W - MARGIN - 1.2, H - 0.72, 1.2, 0.32)
        para(frame, f"{index:02d} / {total:02d}", 9.5, color=MUTED, first=True, align=PP_ALIGN.RIGHT)


def cover(prs, outline):
    slide = canvas(prs)
    # A single accent bar anchors the title block; no logo, no decoration.
    title = str(outline.get("title", ""))
    # A long title wraps to two lines; the type steps down so it never runs into
    # the subtitle, which keeps a fixed slot below the title block.
    size = 42 if len(title) <= 16 else 35 if len(title) <= 26 else 29
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(MARGIN), Inches(2.06), Inches(0.055), Inches(2.16))
    bar.fill.solid()
    bar.fill.fore_color.rgb = ACCENT
    bar.line.fill.background()

    frame = textbox(slide, MARGIN + 0.42, 2.00, 10.9, 1.95)
    para(frame, title, size, bold=True, first=True, line=1.16)
    if outline.get("subtitle"):
        sub = textbox(slide, MARGIN + 0.42, 4.24, 10.9, 0.7)
        para(sub, outline["subtitle"], 16, color=MUTED, first=True, line=1.4)

    rule(slide, MARGIN, H - 1.32, CONTENT_W)
    if outline.get("footer"):
        foot = textbox(slide, MARGIN, H - 1.02, 10.5, 0.34)
        para(foot, outline["footer"], 10.5, color=MUTED, first=True)


def agenda(prs, outline, sections):
    slide = canvas(prs)
    label = textbox(slide, MARGIN, 0.78, 4.0, 0.34)
    para(label, "CONTENTS", 10, bold=True, color=ACCENT, first=True)
    head = textbox(slide, MARGIN, 1.16, 10.0, 0.7)
    para(head, "内容概览", 30, bold=True, first=True)

    single = len(sections) <= 6
    rows = len(sections) if single else (len(sections) + 1) // 2
    row_h = min(0.92, 4.1 / max(rows, 1))
    for index, section in enumerate(sections):
        col = 0 if single or index < rows else 1
        row = index if col == 0 else index - rows
        left = MARGIN + col * (CONTENT_W / 2 + 0.2)
        width = CONTENT_W if single else CONTENT_W / 2 - 0.2
        top = 2.42 + row * row_h
        num = textbox(slide, left, top + 0.02, 0.6, 0.4)
        para(num, f"{index + 1:02d}", 12.5, bold=True, color=ACCENT, first=True)
        item = textbox(slide, left + 0.66, top - 0.04, width - 0.7, 0.8)
        para(item, section.get("heading", ""), 15.5, bold=True, first=True)
        if section.get("summary"):
            para(item, section["summary"], 11, color=MUTED, space_before=2)
        if row < rows - 1:
            rule(slide, left, top + row_h - 0.18, width, color=LINE)
    footer(slide, outline.get("footer"))
    return slide


def section_slide(prs, index, section, total, footer_text):
    slide = canvas(prs)
    number = textbox(slide, MARGIN, 0.78, 2.0, 0.34)
    para(number, f"{index + 1:02d} / {total:02d}", 10, bold=True, color=ACCENT, first=True)

    head = textbox(slide, MARGIN, 1.16, CONTENT_W - 1.0, 1.0)
    para(head, section.get("heading", ""), 27, bold=True, first=True, line=1.2)
    if section.get("summary"):
        para(head, section["summary"], 12.5, color=MUTED, space_before=4)

    bullets = [str(b) for b in section.get("bullets", []) if str(b).strip()]
    top = 2.62
    room = 5.62 - top
    step = min(1.06, room / max(len(bullets), 1))
    for i, bullet in enumerate(bullets):
        y = top + i * step
        # Accent index number instead of a bullet glyph: it reads as structure.
        mark = textbox(slide, MARGIN, y + 0.03, 0.36, 0.32)
        para(mark, f"{i + 1}", 10.5, bold=True, color=ACCENT, first=True)
        body = textbox(slide, MARGIN + 0.42, y - 0.02, CONTENT_W - 0.5, step - 0.1)
        para(body, bullet, 15, color=BODY, first=True, line=1.4)
        if i < len(bullets) - 1:
            rule(slide, MARGIN, y + step - 0.16, CONTENT_W - 0.2)

    if section.get("notes"):
        slide.notes_slide.notes_text_frame.text = section["notes"]
    footer(slide, footer_text, index + 1, total)
    return slide


def closing(prs, outline):
    slide = canvas(prs)
    accent = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(W / 2 - 0.35), Inches(2.86), Inches(0.7), Pt(3))
    accent.fill.solid()
    accent.fill.fore_color.rgb = ACCENT
    accent.line.fill.background()

    frame = textbox(slide, MARGIN, 3.12, CONTENT_W, 0.9)
    para(frame, "谢谢", 32, bold=True, first=True, align=PP_ALIGN.CENTER)
    if outline.get("footer"):
        sub = textbox(slide, MARGIN, 4.02, CONTENT_W, 0.5)
        para(sub, outline["footer"], 12, color=MUTED, first=True, align=PP_ALIGN.CENTER)
    return slide


def main():
    parser = argparse.ArgumentParser(description="Render an outline JSON into a .pptx")
    parser.add_argument("--in", dest="src", required=True)
    parser.add_argument("--out", dest="dst", required=True)
    args = parser.parse_args()

    try:
        with open(args.src, encoding="utf-8") as handle:
            outline = json.load(handle)
    except Exception as error:  # noqa: BLE001 - reported to the caller verbatim
        print(json.dumps({"ok": False, "error": f"outline unreadable: {error}"}, ensure_ascii=False))
        return 1

    sections = [s for s in outline.get("sections", []) if isinstance(s, dict) and s.get("heading")]
    if not sections:
        print(json.dumps({"ok": False, "error": "outline has no sections"}, ensure_ascii=False))
        return 1

    prs = Presentation()
    prs.slide_width = Inches(W)
    prs.slide_height = Inches(H)

    cover(prs, outline)
    agenda(prs, outline, sections)
    for index, section in enumerate(sections):
        section_slide(prs, index, section, len(sections), outline.get("footer", ""))
    closing(prs, outline)

    os.makedirs(os.path.dirname(os.path.abspath(args.dst)) or ".", exist_ok=True)
    prs.save(args.dst)
    total = len(prs.slides._sldIdLst)  # noqa: SLF001 - the public count is the same number
    print(json.dumps({"ok": True, "slides": total, "out": args.dst}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
