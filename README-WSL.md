WSL Workflow: Mirror + Eleventy + GitHub Pages

Open WSL and go to your workspace
1) Launch Ubuntu (or your distro), then:

   cd /mnt/c/Users/wog40/Build/WestsidePacificVillages

Install tools in WSL
2) Install wget/httrack; install Node via nvm (recommended):

   sudo apt update
   sudo apt install -y wget httrack curl build-essential
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   # reload shell
   export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
   nvm install --lts

Mirror the site
3) Run the bash mirroring script (replace URL if needed):

   ./scripts/mirror-site.sh -u "https://thewpv.org/" -o mirror -s
   # Add -R to ignore robots.txt only if you have permission

Migrate into Eleventy
4) Copy mirrored files into Eleventy src:

   ./scripts/migrate-to-eleventy.sh -s mirror -e site -c

Install and run Eleventy
5) Build and serve locally:

   cd site
   npm install
   npm run serve

Publish to GitHub Pages
6) Push to GitHub (from Windows or WSL). The workflow under .github/workflows/pages.yml deploys on push to main.

Notes
- Work under /mnt/c to operate on your Windows files from WSL.
- Respect robots.txt and the site’s terms; only mirror with authorization.
- Dynamic features (forms, search) may need manual conversion to static alternatives.
