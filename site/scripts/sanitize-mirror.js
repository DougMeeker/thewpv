#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'src', 'thewpv.org', 'index.html');
if (!fs.existsSync(target)) {
  console.error('[WARN] sanitize: index not found at', target);
  process.exit(0);
}

let html = fs.readFileSync(target, 'utf8');

// Remove canonical and shortlink tags (avoid SEO redirects or confused crawlers)
html = html.replace(/<link[^>]+rel=[\"']canonical[\"'][^>]*>/gi, '');
html = html.replace(/<link[^>]+rel=[\"']shortlink[\"'][^>]*>/gi, '');

// Neutralize Divi resource fallback to absolute domain
html = html.replace(/var\s+et_site_url\s*=\s*['\"]https:\/\/thewpv\.org['\"]/i, "var et_site_url=''");

// Fix menu links pointing to www.thewpv.org index
html = html.replace(/href=\"\.\.\/www\.thewpv\.org\/index\.html\#\#\"/gi, 'href="./##"');
html = html.replace(/href=\"\.\.\/www\.thewpv\.org\/index\.html\#/gi, 'href="./#');
html = html.replace(/href=\"\.\.\/www\.thewpv\.org\/index\.html\"/gi, 'href="./"');

fs.writeFileSync(target, html, 'utf8');
console.log('[INFO] sanitize: updated', target);
