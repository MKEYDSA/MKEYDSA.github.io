module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/");
    
    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};