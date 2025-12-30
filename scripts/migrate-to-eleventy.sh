#!/usr/bin/env bash
set -euo pipefail

SRCDIR="mirror"
ELEVENTY_DIR="site"
CLEAN=false

usage() {
  echo "Usage: $0 [-s <srcdir>] [-e <eleventy_dir>] [-c]" >&2
  echo "  -s  Source directory of the mirror (default: mirror)" >&2
  echo "  -e  Eleventy project dir (default: site)" >&2
  echo "  -c  Clean the target src before copy" >&2
}

while getopts ":s:e:c" opt; do
  case "$opt" in
    s) SRCDIR="$OPTARG" ;;
    e) ELEVENTY_DIR="$OPTARG" ;;
    c) CLEAN=true ;;
    :) echo "Option -$OPTARG requires an argument." >&2; usage; exit 2 ;;
    \?) echo "Invalid option -$OPTARG" >&2; usage; exit 2 ;;
  esac
done

SRC_ABS="$SRCDIR"
SITE_SRC="$ELEVENTY_DIR/src"
mkdir -p "$SITE_SRC"

if [[ "$CLEAN" == true ]]; then
  echo "[WARN] Cleaning '$SITE_SRC'"
  rm -rf "$SITE_SRC"/*
fi

echo "[INFO] Copying from '$SRC_ABS' to '$SITE_SRC'"
# Preserve attributes and symlinks if present
cp -a "$SRC_ABS"/. "$SITE_SRC"/

echo "[INFO] Done. You can run Eleventy in '$ELEVENTY_DIR'"
