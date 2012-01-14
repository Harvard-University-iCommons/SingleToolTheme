


$(document).ready( function() {
	//remove the tray from the DOM; grab everything else inside of the body, and wrap it in a new 'isites-outermost' div

	
	
	// if the tray div exists, we're in design mode.
	if (  $("#isites-tray").get() ) {
		//alert('In design mode.' + mytray);
		//$('body').wrapInner('<div id="isites-outermost />"');
		//$("#isites-tray").css("display","block");
		//var mytray = $("#isites-tray").detach();

		//put the tray back in, before the isites-outermost div
		//$(mytray).prepend('body');

		$("#isites-tray").css("display","block");
		$("#isites-traytoggle").css("display","none");
		$("#isites-outermost").css("margin-right", $("#isites-tray").outerWidth());
		$("#isites-tray").height( $("#isites-tray").height() + 1000 );
		
	}
	else {
		//alert('Not in design mode.');
	}

});
