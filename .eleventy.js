module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/");
    
    // Defaults
    eleventyConfig.addGlobalData("favicon", "/static/img/favicon.png");
    eleventyConfig.addGlobalData("org", "Milwaukee YDSA");
    eleventyConfig.addGlobalData("hero.img", "/static/img/hero/index.png");
    eleventyConfig.addGlobalData("hero.color", "red-tint-1");

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};