$(function(){

	$('#index-create-button').click(function(){
		window.location = "stat_selection.html";
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 20){
			$('#splash-title-bar').addClass('title-bar-scroll');
			$('#splash-title-bar').removeClass('title-bar-noScroll');
			$('#index-create-button').addClass('create-button-scroll');
			$('#index-create-button').removeClass('create-button');
		}else {
			$('#splash-title-bar').removeClass('title-bar-scroll');
			$('#splash-title-bar').addClass('title-bar-noScroll');
			$('#index-create-button').removeClass('create-button-scroll');
			$('#index-create-button').addClass('create-button');
		}		
	});



});