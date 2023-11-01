// https://github.com/kentaroi/eleventy-sass
const eleventySass = require("eleventy-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){
	eleventyConfig.addPlugin(eleventySass);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	// copy images, scripts, styles to _site
	// eleventyConfig.addPassthroughCopy("_input/styles");
	eleventyConfig.addPassthroughCopy("_input/images");
	eleventyConfig.addPassthroughCopy("_input/js");
	eleventyConfig.addPassthroughCopy("_input/.htaccess");
	// set input and output directories
	return {
		dir: {
			input : "_input",
			output: "_output",
			layouts: "_layouts"
		}
	}
};
