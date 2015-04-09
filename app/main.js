// Main file that loads things up.
// Called from require.js

require.config({
	// baseUrl is automatically set to the directory where this main.js file is.
	// Or we can set it in this config:
	baseUrl: "app",
	// This way one can call on jquery and libs directly
	paths: {
		"lib": "../lib",
		"text": "../lib/text",
		"jquery": "../lib/jquery-2.1.3",
		"handlebars": "../lib/handlebars-v3.0.0",
		"template": "./template/template"
		// or the following to load remotely:
		// "jquery": "https://code.jquery.com/jquery-2.1.3.min"
	},
	waitSeconds: 15
});

	// All other modules should be called through here
require(["jquery", "algorithms", "handlebars", "interface", "template"],
	function($, Algorithms, Handlebars, Interface, Template) {
		$(function() {
		// console.log("Page loaded!");
		Interface;
	});
	// console.log("algorithms:", Algorithms);
	// console.log("handlebars:", Handlebars);
	// console.log("interface:", Interface);
	// console.log("template:", Template);
});