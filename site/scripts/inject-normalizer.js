#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'thewpv.org');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && /\.html?$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const SCRIPT = `\n<script id="wpv-link-normalizer">\n(function(){\n  function collapse(p){\n    if(!p) return p;\n    // Collapse multiple slashes in path segments\n    p = p.replace(/\\/{2,}/g, '/');\n    // Ensure single slash after project base\n    p = p.replace(/^(\\/thewpv)\\/+/,'$1/');\n    return p;\n  }\n  try {\n    var loc = window.location;\n    var normPath = collapse(loc.pathname);\n    if (normPath !== loc.pathname) {\n      history.replaceState(null, '', normPath + loc.search + loc.hash);\n    }\n  } catch(e) {}\n  function fixHref(a){\n    var href = a.getAttribute('href');\n    if (!href) return;\n    if (/^https?:\\/\\//i.test(href) || /^mailto:/i.test(href) || /^#/i.test(href)) return;\n    if (href.indexOf('/thewpv') === 0) {\n      var nh = collapse(href);\n      if (nh !== href) a.setAttribute('href', nh);\n    }\n  }\n  document.addEventListener('DOMContentLoaded', function(){\n    try {\n      document.querySelectorAll('a[href]').forEach(fixHref);\n    } catch(e) {}\n  });\n  // Intercept clicks to ensure normalized navigation for internal links\n  document.addEventListener('click', function(ev){\n    var a = ev.target.closest && ev.target.closest('a[href]');\n    if (!a) return;\n    var href = a.getAttribute('href');\n    if (!href) return;\n    if (/^https?:\\/\\//i.test(href) || /^mailto:/i.test(href)) return;\n    if (/^#/i.test(href)) return;\n    if (href.indexOf('/thewpv') === 0) {\n      var nh = collapse(href);\n      if (nh !== href) a.setAttribute('href', nh);\n      // Allow default navigation after normalization\n    }\n  }, true);\n  // Observe dynamic DOM changes to re-normalize anchors\n  try {\n    var obs = new MutationObserver(function(muts){\n      muts.forEach(function(m){\n        if (m.type === 'attributes' && m.attributeName === 'href' && m.target && m.target.tagName === 'A') {\n          fixHref(m.target);\n        } else if (m.type === 'childList' && (m.addedNodes && m.addedNodes.length)) {\n          m.addedNodes.forEach(function(n){\n            if (n.querySelectorAll) {\n              n.querySelectorAll('a[href]').forEach(fixHref);\n            }\n          });\n        }\n      });\n    });\n    obs.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['href'] });\n  } catch(e) {}\n})();\n</script>\n`;

if (!fs.existsSync(ROOT)) {
  console.error('[WARN] inject-normalizer: folder not found', ROOT);
  process.exit(0);
}

let changed = 0;
for (const file of walk(ROOT)) {
  let html = fs.readFileSync(file, 'utf8');
  let out = html;
  if (html.includes('id="wpv-link-normalizer"')) {
    // Replace existing normalizer script with updated content
    out = out.replace(/<script[^>]*id=["']wpv-link-normalizer["'][^>]*>[\s\S]*?<\/script>/i, SCRIPT.trim());
  } else if (/(<\/head>)/i.test(out)) {
    out = out.replace(/<\/head>/i, SCRIPT + '<\/head>');
  } else if (/(<\/body>)/i.test(out)) {
    out = out.replace(/<\/body>/i, SCRIPT + '<\/body>');
  } else {
    out = out + SCRIPT;
  }
  if (out !== html) {
    fs.writeFileSync(file, out, 'utf8');
    changed++;
  }
}
console.log(`[INFO] inject-normalizer: injected into ${changed} file(s)`);
