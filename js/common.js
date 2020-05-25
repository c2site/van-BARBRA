$(document).ready(function () {
	$('.arrivals-slider').slick({
		arrows:true,
		slidesToShow: 5,
  		slidesToScroll: 1,
	});
	$('.top-slider').slick({
		arrows:false,
		slidesToShow: 1,
  		slidesToScroll: 1,
  		fade: true,
  		speed: 800,
  		autoplay: true,
  		autoplaySpeed: 2000,
	});
});