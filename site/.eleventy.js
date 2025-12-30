const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  const srcDir = "src";

  // Passthrough common asset directories to avoid processing
  if (fs.existsSync(srcDir)) {
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (const d of entries) {
      if (d.isDirectory() && (d.name.toLowerCase() === "assets" || d.name.endsWith("_files"))) {
        eleventyConfig.addPassthroughCopy(path.join(srcDir, d.name));
      }
    }

    // Flatten domain-like folders (e.g., "thewpv.org") to the output root
    for (const d of entries) {
      if (d.isDirectory() && d.name.includes('.')) {
        // Map the folder under input dir to the output
        const from = path.join(srcDir, d.name);
        if (d.name.startsWith('www.')) {
          // Avoid collision with the main domain's index.html: place www.* under its own subfolder
          eleventyConfig.addPassthroughCopy({ [from]: d.name });
        } else {
          // Non-www domain goes to output root
          eleventyConfig.addPassthroughCopy({ [from]: '.' });
        }
      }
    }
  }

  // Note: we avoid copying the entire src folder to _site/src; instead we
  // place domain-named folders at the output root so paths like
  // /wp-content/... resolve correctly under GitHub Pages project site base.

  eleventyConfig.setBrowserSyncConfig({
    open: false,
    port: 8080
  });

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
