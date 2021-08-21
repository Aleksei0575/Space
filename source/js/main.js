// Как-то коряво работает при переключении экранов ент меню на десктоп
// $(function(){
//   $('.header__open-menu').on('click', function () {
//     $(this).toggleClass('header__close-menu');
//     if ($(window).width() < 768) {
//       $('.header__nav').toggle('display', '');
//     }
// 	});
// });

// Слайдер для блока offer
$('.offer-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  prevArrow: '<img class="offer-slider__arrows offer-slider__arrows--left" src="img/sprite/icon-arrow-left.svg" alt="Стрелка влево">',
  nextArrow: '<img class="offer-slider__arrows offer-slider__arrows--right" src="img/sprite/icon-arrow-right.svg" alt="Стрелка вправо">',
  // variableWidth: true,
  focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
          slidesToShow: 1,
          centerMode: true,
          // focusOnSelect: true,
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
          centerMode: true,
          arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
          centerMode: true,
          arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
          centerMode: true,
          arrows: false,
          variableWidth: true,
				}
			},
		]
});
'use strict';
// меню
(function () {
  var navBtn = document.querySelector('.header__open-menu');
  var nav = document.querySelector('.header__nav');

  if (navBtn && nav) {
    navBtn.addEventListener('click', openNav);
  }

  function openNav(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (navBtn.classList.contains('header__close-menu')) {
      navBtn.classList.remove('header__close-menu');
      nav.style.display = '';
    } else {
      navBtn.classList.add('header__close-menu');
      nav.style.display = 'block';
    }
  }
})();
