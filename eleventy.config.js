// https://github.com/kentaroi/eleventy-sass
const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig){
	eleventyConfig.addPlugin(eleventySass);
	// copy images, scripts, styles to _site
	eleventyConfig.addPassthroughCopy("_input/styles");
	eleventyConfig.addPassthroughCopy("_input/images");
	eleventyConfig.addPassthroughCopy("_input/js");
	// set input and output directories
	return {
		dir: {
			input : "_input",
			output: "_output",
			layouts: "_layouts"
		}
	}
};
