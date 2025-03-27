const pluginRss = require("@11ty/eleventy-plugin-rss");
const externalLinks = require('eleventy-plugin-external-links');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./admin/");
    eleventyConfig.addPassthroughCopy("./static/");
    eleventyConfig.addPassthroughCopy("./LICENSE");
    eleventyConfig.addPassthroughCopy("./CNAME");
    eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy({ './src/ai.txt': '/ai.txt' });
    
    // Global Variables
    eleventyConfig.addGlobalData("baseurl", "https://mkeydsa.org");
    eleventyConfig.addGlobalData("chapters", [
        {
            "name": "University of Wisconsin-Milwaukee",
            "shortcode": "uwm",
            "link": "https://uwm.mkeydsa.org",
            "interest": "https://uwm.mkeydsa.org/join"
        },
        {
            "name": "Milwaukee School of Engineering",
            "shortcode": "msoe",
            "link": "https://www.instagram.com/msoe_ydsa/",
        },
        {
            "name": "Marquette University",
            "shortcode": "marquette",
            "link": "https://www.instagram.com/ydsa.marquette/",
            "interest": "https://forms.gle/F3gaq7CgMpRnoy8J8"
        }
    ]);

    // Shortcodes
    eleventyConfig.addShortcode(
        "sectitle",
        (title) =>
          `<h2>${title}</h2>
            <hr>`
    );

    // Plugin config
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addPlugin(externalLinks, {
        name: 'external-links',
        regex: /\bhttps?:\/\/(?!([a-z]+\.)?mkeydsa\.org)[^\s\/]+(?:\/[^\s\/]+)*\/?/i,  // Regex that test if href is external
        target: "_blank",               // 'target' attribute for external links
        rel: "noopener",                // 'rel' attribute for external links
        extensions: [".html"],          // Extensions to apply transform to
        includeDoctype: true,           // Default to include '<!DOCTYPE html>' at the beginning of the file
    });

    // thank you Martin Gunnarsson
    // https://www.martingunnarsson.com/posts/eleventy-excerpts/
    eleventyConfig.addFilter("excerpt", function (content, length) {
        if (length <= 0) length = 200;

        let excerptParagraphs = [];
        let currentLength = 0;
        const paragraphs = content.match(/<p>.*?<\/p>/gs) || [];

        for (let paragraph of paragraphs) {
            // Strip HTML from the paragraph
            const text = paragraph.replace(/(<([^>]+)>)/gi, "");

            if (currentLength > 0 && currentLength + text.length > length) {
                break;
            }

            excerptParagraphs.push(text);
            currentLength += text.length;
        }

        return excerptParagraphs.join(" ");
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};