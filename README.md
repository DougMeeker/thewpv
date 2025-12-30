Website Mirroring + Eleventy (GitHub Pages)

Quick Start
- Mirror the live site with `scripts/mirror-site.ps1`.
- Migrate the mirror into `site/src` with `scripts/migrate-to-eleventy.ps1`.
- Run Eleventy (`npm install` then `npm run serve` in `site`).
- Push to GitHub; the included workflow deploys to GitHub Pages.

Commands (PowerShell)
- Mirror:
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\mirror-site.ps1 -Url "https://example.com" -OutputDir "mirror"
- Migrate:
  powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\migrate-to-eleventy.ps1 -SourceDir "mirror" -EleventyDir "site" -Clean
- Serve:
  cd .\site
  npm install
  npm run serve

Notes
- Requires GNU Wget or HTTrack; Node.js 18+ for Eleventy.
- Respect robots.txt and terms. Mirror only with permission.
