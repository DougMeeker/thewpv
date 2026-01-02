#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Temporarily rename WordPress snapshot pages that are replaced by Eleventy templates
// This prevents them from being copied by passthrough while keeping them in git
const pagesToRename = [
  'src/thewpv.org/index.html',
  'src/thewpv.org/about/mission/index.html',
  'src/thewpv.org/join/index.html',
  'src/thewpv.org/volunteer/index.html',
  'src/thewpv.org/donate/index.html',
  'src/thewpv.org/contact/index.html',
  'src/thewpv.org/events/index.html',
  'src/thewpv.org/membership-information-request/index.html'
];

let renamed = 0;
for (const page of pagesToRename) {
  const pagePath = path.join(__dirname, '..', page);
  const backupPath = pagePath + '.wpbackup';
  
  if (fs.existsSync(pagePath)) {
    // Rename to .wpbackup extension
    fs.renameSync(pagePath, backupPath);
    renamed++;
  }
}

console.log(`[INFO] sanitize: renamed ${renamed} WordPress snapshot page(s) to avoid passthrough copy`);


