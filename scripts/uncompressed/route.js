var timestamps = []; // Array of unique timestamps.

$.fn.route = function(options) {

	if (this.is("a")) {

        var title = this.attr('title'),
            appendTitle = $.joomla.appendTitle;

        if (appendTitle==="before") {
            title = $.joomla.sitename + ((title) ? " - " + title : "");
        }

        if (appendTitle==="after") {
            title = ((title) ? title + " - " : "") + $.joomla.sitename;
        }

        // Creating a unique timestamp that will be associated with the state.
        var t = new Date().getTime();
        timestamps[t] = t;

		History.pushState($.extend({timestamp: t, refresh: true}, options), title , this.attr("href"));
	}

	return this;
}

History.Adapter.bind(window,'statechange',function(){

    var state = History.getState();

    // Fixed back button not refreshing when
    // state is in the first state in navigation history.
    if (state.id===History.savedStates[0].id) {
        window.location = state.url;
    }

    if(state.data.timestamp in timestamps) {
        // Deleting the unique timestamp associated with the state
        delete timestamps[state.data.timestamp];
    }
    else{
    	if (state.data.refresh) {
    		window.location = state.url;
    	}
    }
});