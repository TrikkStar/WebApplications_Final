define(["handlebars","text!../template.handlebars"], function(Handlebars, templ) {
	// We can add Handlebars helpers here
	// Return a compiled template
	return Handlebars.compile(templ);
});