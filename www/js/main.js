
// **************************************
// jQuery to collapse the navbar on scroll
// **************************************

$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});


$(window).resize(function(){
	if ($(window).width() < 976){	
		$('.navbar-collapse a').click(function (e) {
			$('.navbar-collapse').collapse('toggle');
		});
	}	
});

// ****************************************************************
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ****************************************************************

$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});


// ***********************************
// totop
// ***********************************

$(document).ready(function(){
	$().UItoTop({ easingType: 'easeOutQuart' });
});	


// ***********************************
// pageloader
// ***********************************
$(window).load(function(){
	if($(".preloader").length > 0){
		$('.preloader').fadeOut(1000); // set duration in brackets
	}
});

	
// ***********************************
// Backstretch - Slider on Background
//
//  Note :  make sure  use this  http://bootstrapwizard.info/Theme/Fullscreen/images/bg4.jpg"  when on server  but you can simply use  "images/bg1.jpg"  if you are on localhost
//
// ***********************************								  
			 
$(".backstretch").backstretch([
   "images/bg1.jpg",
//   "images/bg2.jpg",
//   "images/bg3.jpg"
//     "images/bg5.jpg"
], {duration: 5000, fade: 1000});


// ****************************************************************
// wow - for animation together with animate.css
// ****************************************************************	
	
$(document).ready(function(){
	wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       150
	  }
	);
	wow.init();
});
		


