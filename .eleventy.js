module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/");
    eleventyConfig.addPassthroughCopy("./LICENSE");
    
    // Defaults
    eleventyConfig.addGlobalData("favicon", "/static/img/favicon.ico");
    eleventyConfig.addGlobalData("org", "Milwaukee YDSA");
    eleventyConfig.addGlobalData("logo", "/static/img/logo.jpg")
    eleventyConfig.addGlobalData("hero.img", "/static/img/hero/index.png");
    eleventyConfig.addGlobalData("hero.color", "red-tint-1");

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};