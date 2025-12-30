#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'thewpv.org');
const EXTS = ['.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.woff', '.woff2', '.ttf'];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function stripVersionSuffix(name) {
  // If name contains a known extension followed by any "ver" suffix, trim to the first extension.
  let pos = -1, ext = '';
  for (const e of EXTS) {
    const i = name.indexOf(e);
    if (i !== -1 && (pos === -1 || i < pos)) { pos = i; ext = e; }
  }
  if (pos === -1) return null; // no extension
  const base = name.slice(0, pos) + ext;
  if (base !== name && /ver=/i.test(name)) return base;
  // Also handle percent-encoded or odd characters preceding version
  if (/%3Fver=|\?ver=|ver=/i.test(name)) return base;
  // Some mirrors used unusual characters before 'ver='; if any 'ver=' exists, still strip
  if (/ver=/i.test(name)) return base;
  return null;
}

function renameAssets() {
  if (!fs.existsSync(ROOT)) return { renamed: 0 };
  const files = walk(ROOT);
  let renamed = 0;
  for (const f of files) {
    const dir = path.dirname(f);
    const name = path.basename(f);
    const newName = stripVersionSuffix(name);
    if (newName && newName !== name) {
      const dest = path.join(dir, newName);
      try {
        if (!fs.existsSync(dest)) {
          fs.renameSync(f, dest);
          renamed++;
        } else {
          // If destination exists, delete the redundant source
          fs.unlinkSync(f);
        }
      } catch (e) {
        // continue on errors
      }
    }
  }
  return { renamed };
}

function rewriteHtml() {
  const htmlFiles = walk(ROOT).filter(f => /\.html?$/i.test(f));
  let changed = 0;
  for (const f of htmlFiles) {
    let html = fs.readFileSync(f, 'utf8');
    const before = html;
    // Remove any %3Fver=... or ?ver=... followed by optional extra extension (double and single quotes)
    html = html.replace(/(href|src)=([\"'])([^\"']+?)(%3F|\?)ver=[^\"'#]+(\.[a-z0-9]+)?\2/gi, (m, attr, q, pathPart) => `${attr}=${q}${pathPart}${q}`);
    if (html !== before) {
      fs.writeFileSync(f, html, 'utf8');
      changed++;
    }
  }
  return { changed };
}

const r = renameAssets();
const w = rewriteHtml();
console.log(`[INFO] fix-assets: renamed ${r.renamed} file(s), updated ${w.changed} HTML file(s)`);
