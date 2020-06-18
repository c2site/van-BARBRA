$(document).ready(function () {
	$('.arrivals-slider').slick({
		arrows:true,
		slidesToShow: 5,
  		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
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
	$('.product-slider').slick({
		arrows:false,
		slidesToShow: 4,
  		slidesToScroll: 1,
  		vertical: true,
  		verticalSwiping: true,
  		asNavFor: '.product-center',
  		focusOnSelect: true
	});
	$('.product-center').slick({
		arrows:false,
		slidesToShow: 1,
  		slidesToScroll: 1,
  		asNavFor: '.product-slider',

	});

	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.header .header-bottom').addClass('active');
		$('.header').append('<div class="shadow"></div>');
	});
	$(document).mouseup(function (e){
		var div = $(".header .header-bottom");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header .header-bottom').removeClass('active');
			$('.shadow').remove();
		}
	});
});