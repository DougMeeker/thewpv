#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'thewpv.org');

const map = {
  'index.html%3Fp=20.html': '/about/mission/',
  'index.html%3Fp=22.html': '/about/community-benefits/',
  'index.html%3Fp=24.html': '/about/service-area/',
  'index.html%3Fp=3397.html': '/about/transportation/',
  'index.html%3Fp=28.html': '/about/boardandstaff/',
  'index.html%3Fp=3512.html': '/newsletters/',
  'index.html%3Fp=35.html': '/media/',
  'index.html%3Fp=37.html': '/events/',
  'index.html%3Fp=33.html': '/join/',
  'index.html%3Fp=465.html': '/friend-application-form/',
  'index.html%3Fp=472.html': '/membership-information-request/',
  'index.html%3Fp=403.html': '/volunteer/',
  'index.html%3Fp=2736.html': '/join/jobs/',
  'index.html%3Fp=406.html': '/donate/',
  'index.html%3Fp=3482.html': '/donate/legacy-circle/',
  'index.html%3Fp=41.html': '/contact/'
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
  // normalize odd anchors
  out = out.replace(/href=\"\.\/##\"/g, 'href="#"');
  out = out.replace(/href=\"\.\/\#\"/g, 'href="#"');
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
