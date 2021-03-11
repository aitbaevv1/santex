$(document).ready(function() {
	$(".header-burger").click(function(event) {
		$(".header-mobile, .header-burger, body, .header-logo,.header-right__phone").toggleClass("active");
	});


	$(".question-item").click(function(event) {
		$(this).toggleClass("active");
		// $(".question-item__text").toggleClass("active");
	});

	let headerInner = $(".header-inner");
	let header = $(".header");
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerH) {
			headerInner.addClass("fixed");
		} else {
			headerInner.removeClass("fixed");
		}
	});

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		$(".header-mobile, .header-burger, body, .header-logo,.header-right__phone").removeClass("active");
		$("html, body").animate({

			scrollTop: elementOffset - 50

		},1000);
		console.log(elementOffset);
		console.log(elementID);
	});

	$(".slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,

		responsive:[

			// {
			// 	breakpoint:500,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll:1,
			// 	}
			// },
			{
				breakpoint:768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$(".price-inner").slick({
		slidesToShow: 3,
		arrows: false,

		responsive:[
			{
				breakpoint:900,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});

	$(".example-slider").slick({
		dots: true,
	});

	$(".reviews-slider").slick({
		infinite: false,
		dots: true,

		responsive:[
			{
				breakpoint: 500,
				settings: {
					arrows: false,
					autoplay: true,
					// Задает скорость автопроигрывателя по умолчанию 3 сек
					// autoplaySpeed: 1000,
					// Паузы слайда
					// Пауза при фокусе
					pauseOnFocus: true,
					// Пауза при наведении
					pauseOnHover: true,
					// Пауза при наведении на точки
					pauseOnDotsHover: true,
				}
			}
		]
	});

 		
});