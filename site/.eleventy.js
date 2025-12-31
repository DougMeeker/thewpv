const fs = require("fs");
const path = require("path");

// GitHub Pages already serves the project at /thewpv, so we keep the output
// flat (no extra thewpv/ folder) and only prefix links in templates.
const PROJECT_BASE = "";

module.exports = function(eleventyConfig) {
  const srcDir = "src";

  const targetBase = PROJECT_BASE || ".";

  // Passthrough common asset directories to avoid processing. Assets are placed
  // under the target base so they resolve correctly when hosted from a project
  // site path.
  if (fs.existsSync(srcDir)) {
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (const d of entries) {
      if (d.isDirectory() && (d.name.toLowerCase() === "assets" || d.name.endsWith("_files"))) {
        eleventyConfig.addPassthroughCopy({
          [path.join(srcDir, d.name)]: path.join(targetBase, d.name)
        });
      }
    }

    // Flatten domain-like folders (e.g., "thewpv.org") into the project base
    // so all pages and assets live under /thewpv.
    for (const d of entries) {
      if (d.isDirectory() && d.name.includes('.')) {
        const from = path.join(srcDir, d.name);
        if (d.name.startsWith('www.')) {
          eleventyConfig.addPassthroughCopy({ [from]: path.join(targetBase, d.name) });
        } else {
          eleventyConfig.addPassthroughCopy({ [from]: targetBase });
        }
      }
    }
  }

  // Note: we avoid copying the entire src folder to _site/src; instead we copy
  // mirrored domain folders into the project base so paths like
  // /thewpv/wp-content/... resolve correctly when deployed to a project site.

  eleventyConfig.setBrowserSyncConfig({
    open: false,
    port: 8080
  });

  // Simple year filter for templates
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // Only process markdown/Nunjucks if present; exclude raw HTML so it is passthrough-copied.
    templateFormats: ["md", "njk"],
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk"
  };
};
