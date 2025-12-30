#!/usr/bin/env bash
set -euo pipefail

URL=""
OUTDIR="mirror"
INCLUDE_SUBDOMAINS=false
IGNORE_ROBOTS=false
USER_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121 Safari/537.36"

usage() {
  echo "Usage: $0 -u <url> [-o <outdir>] [-s] [-R] [-A <user-agent>]" >&2
  echo "  -u  Site URL to mirror (required)" >&2
  echo "  -o  Output directory (default: mirror)" >&2
  echo "  -s  Include subdomains of the host" >&2
  echo "  -R  Ignore robots.txt (use only with permission)" >&2
  echo "  -A  User-Agent string" >&2
}

while getopts ":u:o:sRA:" opt; do
  case "$opt" in
    u) URL="$OPTARG" ;;
    o) OUTDIR="$OPTARG" ;;
    s) INCLUDE_SUBDOMAINS=true ;;
    R) IGNORE_ROBOTS=true ;;
    A) USER_AGENT="$OPTARG" ;;
    :) echo "Option -$OPTARG requires an argument." >&2; usage; exit 2 ;;
    \?) echo "Invalid option -$OPTARG" >&2; usage; exit 2 ;;
  esac
done

if [[ -z "$URL" ]]; then
  usage
  exit 2
fi

mkdir -p "$OUTDIR"
HOST_DOMAIN=$(echo "$URL" | sed -E 's%^https?://([^/]+).*$%\1%')

have_cmd() { command -v "$1" >/dev/null 2>&1; }

if have_cmd wget; then
  args=(
    "--mirror"
    "--convert-links"
    "--adjust-extension"
    "--page-requisites"
    "--no-parent"
    "--directory-prefix=$OUTDIR"
    "--user-agent=$USER_AGENT"
  )
  if [[ "$INCLUDE_SUBDOMAINS" == true ]]; then
    args+=("--span-hosts" "--domains=$HOST_DOMAIN")
  fi
  if [[ "$IGNORE_ROBOTS" == true ]]; then
    args+=("--execute=robots=off")
  fi
  echo "[INFO] Mirroring '$URL' to '$OUTDIR' with wget"
  wget "${args[@]}" "$URL"
elif have_cmd httrack; then
  ht_args=("$URL" "-O" "$OUTDIR" "-%v" "-F" "$USER_AGENT")
  if [[ "$INCLUDE_SUBDOMAINS" == true ]]; then
    ht_args+=("+*.$HOST_DOMAIN/*")
  fi
  if [[ "$IGNORE_ROBOTS" == true ]]; then
    ht_args+=("-s0")
  fi
  echo "[INFO] Mirroring '$URL' to '$OUTDIR' with httrack"
  httrack "${ht_args[@]}"
else
  echo "[ERR ] Neither 'wget' nor 'httrack' found in PATH inside WSL." >&2
  echo "[HINT] Install with: sudo apt update && sudo apt install -y wget httrack" >&2
  exit 1
fi
