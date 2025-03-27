const externalLinks = require('eleventy-plugin-external-links');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./admin/");
    eleventyConfig.addPassthroughCopy("./static/");
    eleventyConfig.addPassthroughCopy("./LICENSE");
    eleventyConfig.addPassthroughCopy("./CNAME");
    eleventyConfig.addPassthroughCopy({ '/src/robots.txt': '/robots.txt' });
    
    // Defaults
    eleventyConfig.addGlobalData( "favicon-32", "/static/img/icon/favicon-32.ico");
    eleventyConfig.addGlobalData("favicon-192", "/static/img/icon/favicon-192.ico");
    eleventyConfig.addGlobalData(        "org", "Milwaukee YDSA");
    eleventyConfig.addGlobalData(  "shortcode", "mke");
    eleventyConfig.addGlobalData(       "logo", "/static/img/icon/logo.svg")
    eleventyConfig.addGlobalData(   "hero.img", "/static/img/hero/index.png");
    eleventyConfig.addGlobalData( "hero.color", "red-tint-1");

    // Shortcodes
    eleventyConfig.addShortcode(
        "sectitle",
        (title) =>
          `<h2>${title}</h2>
            <hr>`
    );

    eleventyConfig.addPlugin(externalLinks, {
        // Plugin defaults:
        name: 'external-links',         // Plugin name
        regex: /\bhttps?:\/\/(?!([a-z]+\.)?mkeydsa\.org)[^\s\/]+(?:\/[^\s\/]+)*\/?/i,  // Regex that test if href is external
        target: "_blank",               // 'target' attribute for external links
        rel: "noopener",                // 'rel' attribute for external links
        extensions: [".html"],          // Extensions to apply transform to
        includeDoctype: true,           // Default to include '<!DOCTYPE html>' at the beginning of the file
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};