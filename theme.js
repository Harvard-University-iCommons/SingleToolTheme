
$(document).ready( function() {

	$('.isites-topic-header-menu').css("display","none");
	
	$('.topicMargin').mouseenter( function() {
		$(this).find('.isites-topic-header-menu').fadeIn('fast');
		
	});
	
	$('.topicMargin').mouseleave( function() {
		$(this).find('.isites-topic-header-menu').fadeOut('fast');
	});
	
	
	//This is for top-nav only:
		var subnav = $('li.active').children('ul').detach();
		$('li.active').parent().after(subnav);
		$('li.active').children('ul').css('display','block');
		
});



