#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'thewpv.org');

// Map WordPress query IDs to pretty paths available in the mirror
const idToPath = new Map(Object.entries({
  20: '/about/mission/',
  22: '/about/community-benefits/', // Best-fit for "Services" section
  24: '/about/service-area/',
  28: '/about/boardandstaff/',
  3397: '/about/transportation/',
  3512: '/newsletters/',
  35: '/media/',
  37: '/events/',
  33: '/join/',
  465: '/friend-application-form/',
  472: '/membership-information-request/',
  403: '/volunteer/',
  2736: '/join/jobs/',
  406: '/donate/',
  3482: '/donate/legacy-circle/',
  41: '/contact/'
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
  // Normalize odd HOME anchors to a simple '#'
  html = html.replace(/href=\"\.\/##\"/gi, 'href="#"');
  html = html.replace(/href=\"\.\/\#\"/gi, 'href="#"');
  html = html.replace(/href=\"\.\.\/www\.thewpv\.org\/index\.html(#[^\"]*)?\"/gi, 'href="#"');

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

  // 5) Avoid any accidental absolute redirect base tags (remove canonical/shortlink leftovers)
  html = html.replace(/<link[^>]+rel=[\"']canonical[\"'][^>]*>/gi, '');
  html = html.replace(/<link[^>]+rel=[\"']shortlink[\"'][^>]*>/gi, '');

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
