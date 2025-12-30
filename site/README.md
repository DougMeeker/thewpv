Westside Pacific Villages – Static Mirror with Eleventy

Overview
This setup mirrors a live site locally, then serves it via the Eleventy static site generator so you can publish on GitHub Pages. It keeps your HTML pages as-is and passes assets through unchanged. You can refactor into templates later.

Prerequisites
- Windows PowerShell 5.1
- One of: GNU Wget (recommended) or HTTrack
- Node.js 18+ (for Eleventy)

Mirror the site
1) In PowerShell, run the mirroring script (replace URL):

   powershell -NoProfile -ExecutionPolicy Bypass -File .\\scripts\\mirror-site.ps1 -Url "https://example.com" -OutputDir "mirror"

   Options:
   - Add `-IncludeSubdomains` if you need subdomains.
   - Add `-IgnoreRobots` only if you have permission to bypass robots.

Migrate into Eleventy
2) Copy mirrored files into the Eleventy `src` folder:

   powershell -NoProfile -ExecutionPolicy Bypass -File .\\scripts\\migrate-to-eleventy.ps1 -SourceDir "mirror" -EleventyDir "site" -Clean

Install and run Eleventy
3) Install dependencies and serve locally:

   cd .\\site
   npm install
   npm run serve

Publish to GitHub Pages
4) Create a GitHub repo; push this folder. The included workflow builds Eleventy and deploys to Pages on each push to `main`.

Notes
- The mirror is a snapshot; dynamic forms or server features won’t work statically.
- Respect the site’s terms and robots.txt. Get permission before mirroring.
