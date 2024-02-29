// ? Инициализация первого слайдера

const swiperFirst = new Swiper('.swiper-container-first', {
  // Указываем горизонтальное направление прокрутки слайдов
  direction: 'horizontal',

  // Включаем бесконечную прокрутку слайдера
  loop: true,

  // Настройки для навигационных кнопок слайдера
  navigation: {
    nextEl: '.swiper-button-next-first', // Кнопка "Следующий слайд" для первого слайдера
    prevEl: '.swiper-button-prev-first', // Кнопка "Предыдущий слайд" для первого слайдера
  },

  // Включение возможности управления слайдером с помощью жестов касания
  simulateTouch: true,
  touchRatio: 1, // Соотношение скорости свайпа к скорости движения пальца
  touchAngle: 45, // Угол, в пределах которого должен начаться свайп
  grabCursor: true, // Изменение курсора на "захват" при наведении на слайдер
  slideToClickedSlide: true, // Переключение на слайд при клике по нему
  // Добавление обработчика событий
  on: {
    slideChange: function () {
      const currentSlideText = this.slides[this.realIndex].textContent.trim();

      display_nerochemical_boxes_external_events(currentSlideText)

    }
  }

});



// ? Инициализация второго слайдера

const swiperSecond = new Swiper('.swiper-container-second', {
  // Параметры аналогичны первому слайдеру, но могут быть настроены индивидуально
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-second', // Кнопка "Следующий слайд" для второго слайдера
    prevEl: '.swiper-button-prev-second', // Кнопка "Предыдущий слайд" для второго слайдера
  },
  // Дополнительные настройки могут отличаться в зависимости от желаемого поведения второго слайдера
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  on: {
    slideChange: function () {
      const currentSlideText = this.slides[this.realIndex].textContent.trim();
      display_nerochemical_boxes_emotional_states(currentSlideText)
    }
  }
});
