$(function(){

	console.log("test");

	var x = $(window).scrollTop();
		console.log(x);

	console.log("test");
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 20){
			$('#splash-title-bar').addClass('title-bar-scroll');
			$('#splash-title-bar').removeClass('title-bar-noScroll');
		}else {
			$('#splash-title-bar').removeClass('title-bar-scroll');
			$('#splash-title-bar').addClass('title-bar-noScroll');
		}		
	});
});