#!/usr/bin/env node
/*
Simple local link checker: scans an HTML file for href/src values and
reports missing local files relative to the HTML file location.
Remote (http/https) URLs are skipped.
*/
const fs = require('fs');
const path = require('path');

function usage() {
  console.error('Usage: node scripts/check-local-links.js <path-to-html>');
}

const htmlPath = process.argv[2];
if (!htmlPath) {
  usage();
  process.exit(2);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const dir = path.dirname(htmlPath);
const sep = path.sep;
const marker = sep + '_site';
const idx = dir.lastIndexOf(marker);
const siteRoot = idx >= 0 ? dir.substring(0, idx) + marker : dir;

const urls = new Set();
const attrRegex = /(href|src)=\"([^\"]+)\"/gi;
let m;
while ((m = attrRegex.exec(html)) !== null) {
  urls.add(m[2]);
}

function isRemote(u) {
  return /^https?:\/\//i.test(u);
}
function isAnchor(u) {
  return /^#/.test(u);
}
function shouldSkip(u) {
  if (/^mailto:/i.test(u)) return true;
  if (/wp-json|xmlrpc\.php/i.test(u)) return true; // WordPress APIs not mirrored
  if (/feed|oembed|ical/i.test(u)) return true;    // Feeds and oEmbed endpoints
  if (/[?]|%3F/.test(u)) return true;              // Query param pages often not mirrored
  return false;
}
function normalize(u) {
  if (u.startsWith('/')) {
    // Root-relative URL: map to the Eleventy output root
    return path.join(siteRoot, u.slice(1));
  }
  return path.join(dir, u);
}

let missing = 0;
for (const u of urls) {
  if (isRemote(u) || isAnchor(u) || shouldSkip(u)) continue;
  const target = normalize(u.split('?')[0].split('#')[0]);
  try {
    fs.accessSync(target, fs.constants.R_OK);
  } catch {
    missing++;
    console.log(`[MISS] ${u} -> ${target}`);
  }
}

if (missing === 0) {
  console.log('[OK] No missing local files detected.');
} else {
  console.log(`[WARN] Missing ${missing} local files.`);
  process.exitCode = 1;
}
