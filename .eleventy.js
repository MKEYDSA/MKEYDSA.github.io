module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./admin/");
    eleventyConfig.addPassthroughCopy("./static/");
    eleventyConfig.addPassthroughCopy("./LICENSE");
    eleventyConfig.addPassthroughCopy("./CNAME");
    
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

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};