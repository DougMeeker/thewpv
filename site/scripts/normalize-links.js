#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'thewpv.org');
const BASE = '/thewpv/';

// Map WordPress query IDs to pretty paths available in the mirror
const idToPath = new Map(Object.entries({
  20: BASE + 'about/mission/',
  22: BASE + 'about/community-benefits/',
  24: BASE + 'about/service-area/',
  28: BASE + 'about/boardandstaff/',
  3397: BASE + 'about/transportation/',
  3512: BASE + 'newsletters/',
  35: BASE + 'media/',
  37: BASE + 'events/',
  33: BASE + 'join/',
  465: BASE + 'friend-application-form/',
  472: BASE + 'membership-information-request/',
  403: BASE + 'volunteer/',
  2736: BASE + 'join/jobs/',
  406: BASE + 'donate/',
  3482: BASE + 'donate/legacy-circle/',
  41: BASE + 'contact/'
}));

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && /\.html?$/i.test(entry.name)) files.push(full);
  }
  return files;
}

function normalizeContent(html, fileDir) {
  // 1) Fix HOME and menu links that point to mirrored www root
  // Normalize odd HOME anchors
  html = html.replace(/href=\"\.\/##\"/gi, `href="${BASE}"`);
  html = html.replace(/href=\"\.\/\#\"/gi, `href="${BASE}"`);
  html = html.replace(/href=\"\.\.\/www\.thewpv\.org\/index\.html(#[^\"]*)?\"/gi, `href="${BASE}"`);

  // 2) Rewrite encoded WP query links index.html%3Fp=ID(.html)?
  // Attribute-level rewrite for encoded query links
  html = html.replace(/(href=)(["'])([^\2]*?)index\.html%3Fp=(\d+)(?:\.html)?\2/gi, (m, attr, q, pre, id) => {
    const p = idToPath.get(parseInt(id, 10));
    return p ? `${attr}${q}${p}${q}` : m;
  });

  // 3) Rewrite plain WP query links index.html?p=ID
  // Attribute-level rewrite for plain query links
  html = html.replace(/(href=)(["'])([^\2]*?)index\.html\?p=(\d+)\2/gi, (m, attr, q, pre, id) => {
    const p = idToPath.get(parseInt(id, 10));
    return p ? `${attr}${q}${p}${q}` : m;
  });

  // 4) Rewrite parent-relative versions ../index.html%3Fp=ID(.html)?
  // Parent-relative encoded links
  html = html.replace(/(href=)(["'])([^\2]*?)\.\.\/index\.html%3Fp=(\d+)(?:\.html)?\2/gi, (m, attr, q, pre, id) => {
    const p = idToPath.get(parseInt(id, 10));
    return p ? `${attr}${q}${p}${q}` : m;
  });

  // Rewrite root-relative section links to include BASE
  html = html.replace(/(href=)([\"'])(\/)(about|media|events|join|donate|contact|newsletters)(\/[^\"']*)\2/gi,
    (m, attr, q, slash, section, rest) => `${attr}${q}${BASE}${section}${rest}${q}`);

  // Rewrite homepage root link variants to BASE
  html = html.replace(/href=([\"'])(\.|\/)\1/gi, `href="${BASE}"`);

  // 5) Avoid any accidental absolute redirect base tags (remove canonical/shortlink leftovers)
  html = html.replace(/<link[^>]+rel=[\"']canonical[\"'][^>]*>/gi, '');
  html = html.replace(/<link[^>]+rel=[\"']shortlink[\"'][^>]*>/gi, '');

  // 6) Collapse duplicate slashes after BASE for href/src attributes
  // Keep protocols like https:// intact by only targeting paths that start with BASE
  for (const attr of ['href', 'src']) {
    const re = new RegExp(`(${attr}=)(["'])${BASE.replace(/\//g, '\\/')}(.*?)\\2`, 'gi');
    html = html.replace(re, (m, a, q, rest) => {
      const normalized = String(rest).replace(/\/{2,}/g, '/');
      return `${a}${q}${BASE}${normalized}${q}`;
    });
  }

  return html;
}

if (!fs.existsSync(ROOT)) {
  console.error('[WARN] normalize: folder not found', ROOT);
  process.exit(0);
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  let html = fs.readFileSync(f, 'utf8');
  const out = normalizeContent(html, path.dirname(f));
  if (out !== html) {
    fs.writeFileSync(f, out, 'utf8');
    changed++;
  }
}
console.log(`[INFO] normalize: updated ${changed} file(s)`);
