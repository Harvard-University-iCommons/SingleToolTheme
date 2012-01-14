/* 
 * theme-specific js stuff here... 
 * 
 */
 
		$(document).ready(function() {
		   $("#googleapps-temp-pw").hide();
		 });
				
	
		function togglepw() {
			/* get the password span, figure out if it's visible or not */
			if ( $("#googleapps-temp-pw").is(":visible") ) {
				$("#googleapps-temp-pw").hide();
				$("#googleapps-toggle-pw").attr("value","Click here to display your password")
			}
			else {
				$("#googleapps-temp-pw").show();
				$("#googleapps-toggle-pw").attr("value","Hide password")
			}
		}
