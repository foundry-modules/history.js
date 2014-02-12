var timestamps = []; // Array of unique timestamps.

$.fn.route = function(options) {

	if (this.is("a")) {

        var title   = this.attr( 'title' );

        if( $.joomla.appendTitle == 'before')
        {
            title   = $.joomla.sitename + ' - ' + title;
        }

        if( $.joomla.appendTitle == 'after' )
        {
            title   = $.joomla.sitename + ' - ' + title;
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