// Как-то коряво работает при переключении экранов ент меню на десктоп
// $(function(){
//   $('.header__open-menu').on('click', function () {
//     $(this).toggleClass('header__close-menu');
//     if ($(window).width() < 768) {
//       $('.header__nav').toggle('display', '');
//     }
// 	});
// });
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
