#!/bin/bash
# Regenerate the seamless idle loop for chatbox-pet — in both formats.
#
# The pack's idle clips are action clips whose last frame differs from the
# first, so looping them shows a visible snap. Frames 35..139 of idle-breathe
# are the turned-pose look-around whose last frame matches its first
# (verified: seam mean|diff| ≈ 5 across RGBA at 24fps).
#
# Alpha discipline (the pack pipeline's own rules): force libvpx-vp9 on
# DECODE or ffmpeg silently drops the alpha plane; encode as yuva420p with
# -auto-alt-ref 0, which libvpx requires to keep alpha.
#
# Two outputs, because the two engine families need different containers:
#   idle-breathe-loop.webm — VP9-alpha, for Chromium/Firefox;
#   idle-breathe-loop.mov  — HEVC-with-Alpha, for WebKit (Safari and every
#                            iOS browser), where the webm's alpha is dropped
#                            and the pet would paint a black box.
# The mov step reuses pet-github's native encoder; if that repo (or swiftc) is
# missing, the webm is still produced and the mov falls back to the pack's
# idle-breathe.mov at serve time.
#
# Usage: bash chatbox-pet/tools/make-idle-loop.sh
set -euo pipefail

SRC="$HOME/.dsh/dsh-pet/pet/pokemon-animation/idle-breathe.webm"
OUT_DIR="$HOME/.dsh/profiles/desktop/chatbox-pet/derived"
OUT="$OUT_DIR/idle-breathe-loop.webm"
OUT_MOV="$OUT_DIR/idle-breathe-loop.mov"

mkdir -p "$OUT_DIR"
ffmpeg -y -loglevel error \
  -c:v libvpx-vp9 -i "$SRC" \
  -vf "select='between(n\,35\,139)'" -vsync 0 \
  -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 0 -crf 32 \
  "$OUT"

echo "wrote $OUT"

# ---- WebKit form: webm → HEVC-with-Alpha mov -------------------------------
HERE=$(cd "$(dirname "$0")" && pwd)
WORKSPACE=$(cd "$HERE/../.." && pwd)
ENCODER="$WORKSPACE/pet-github/scripts/encode_hevc_alpha.sh"
if [[ -x /usr/bin/xcrun ]] && command -v zsh >/dev/null 2>&1 && [[ -f "$ENCODER" ]]; then
  STAGE=$(mktemp -d /tmp/cbp-loop.XXXXXX)
  trap 'rm -rf "$STAGE"' EXIT
  cp "$OUT" "$STAGE/"
  zsh "$ENCODER" "$STAGE" "$OUT_DIR" >/dev/null
  rm -rf "$STAGE"
  trap - EXIT
  echo "wrote $OUT_MOV"
else
  echo "skipped $OUT_MOV (needs zsh + xcrun + pet-github/scripts/encode_hevc_alpha.sh)"
fi
