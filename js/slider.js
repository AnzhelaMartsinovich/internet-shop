$('.popular-goods-items').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	// autoplay: true,
	arrows: true,
	// autoplaySpeed: 2000,
	prevArrow: '<button class="btn-popular btn-popular__left" type="button"><</button>',
	nextArrow: '<button class="btn-popular btn-popular__right" type="button">></button>'
});


$('.discounted-goods-items').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button class="btn-discounted btn-discounted__left" type="button"><</button>',
	nextArrow: '<button class="btn-discounted btn-discounted__right" type="button">></button>'
});