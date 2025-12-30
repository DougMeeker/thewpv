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
        // Map the folder relative to input dir to the output root
        eleventyConfig.addPassthroughCopy({ [d.name]: '.' });
      }
    }
  }

  // Passthrough-copy the entire src directory to preserve mirrored structure (WordPress assets, etc.)
  eleventyConfig.addPassthroughCopy(srcDir);

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
