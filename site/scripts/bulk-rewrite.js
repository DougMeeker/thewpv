#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'thewpv.org');

const BASE = '/thewpv/';
const map = {
  'index.html%3Fp=20.html': BASE + 'about/mission/',
  'index.html%3Fp=22.html': BASE + 'about/community-benefits/',
  'index.html%3Fp=24.html': BASE + 'about/service-area/',
  'index.html%3Fp=3397.html': BASE + 'about/transportation/',
  'index.html%3Fp=28.html': BASE + 'about/boardandstaff/',
  'index.html%3Fp=3512.html': BASE + 'newsletters/',
  'index.html%3Fp=35.html': BASE + 'media/',
  'index.html%3Fp=37.html': BASE + 'events/',
  'index.html%3Fp=33.html': BASE + 'join/',
  'index.html%3Fp=465.html': BASE + 'friend-application-form/',
  'index.html%3Fp=472.html': BASE + 'membership-information-request/',
  'index.html%3Fp=403.html': BASE + 'volunteer/',
  'index.html%3Fp=2736.html': BASE + 'join/jobs/',
  'index.html%3Fp=406.html': BASE + 'donate/',
  'index.html%3Fp=3482.html': BASE + 'donate/legacy-circle/',
  'index.html%3Fp=41.html': BASE + 'contact/'
};

const mapParent = Object.fromEntries(Object.entries(map).map(([k,v]) => [`../${k}`, v]));

function walk(dir, out=[]) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.isFile() && /\.html?$/i.test(e.name)) out.push(full);
  }
  return out;
}

function rewrite(html) {
  let out = html;
  for (const [from, to] of Object.entries(map)) {
    out = out.split(from).join(to);
  }
  for (const [from, to] of Object.entries(mapParent)) {
    out = out.split(from).join(to);
  }
  // normalize odd anchors to project base
  out = out.replace(/href=\"\.\/##\"/g, `href=\"${BASE}\"`);
  out = out.replace(/href=\"\.\/\#\"/g, `href=\"${BASE}\"`);
  // root-relative section links
  out = out.replace(/href=\"\/(about|media|events|join|donate|contact|newsletters)(\/[^\"]*)\"/g,
    (m, sect, rest) => `href=\"${BASE}${sect}${rest}\"`);
  // home root
  out = out.replace(/href=([\"'])(\.|\/)\1/g, `href=\"${BASE}\"`);
  return out;
}

if (!fs.existsSync(ROOT)) {
  console.error('[WARN] bulk-rewrite: root missing', ROOT);
  process.exit(0);
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const out = rewrite(html);
  if (out !== html) {
    fs.writeFileSync(f, out, 'utf8');
    changed++;
  }
}
console.log(`[INFO] bulk-rewrite: updated ${changed} file(s)`);
