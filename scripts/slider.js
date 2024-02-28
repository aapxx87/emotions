const swiper = new Swiper('.swiper-container', {
  // Настройки Swiper
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Включение управления свайпами
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
});
