$.fn.route = function(options) {

	if (this.is("a")) {
		History.pushState($.extend({state: 1}, options), this.attr("title"), this.attr("href"));
	}

	return this;
}