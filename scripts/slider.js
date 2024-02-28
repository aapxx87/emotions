let startX, movedX;
let currentIndex = 0; // Текущий индекс слайда
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length; // Общее количество слайдов

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  movedX = 0; // Сбросить смещение при начале касания
});

slider.addEventListener('touchmove', (e) => {
  const touchMoveX = e.touches[0].clientX;
  movedX = startX - touchMoveX;
});

slider.addEventListener('touchend', () => {
  // Проверяем, было ли движение достаточно значительным, чтобы считаться свайпом
  if (Math.abs(movedX) > 50) { // Свайп на 50px
    if (movedX > 0 && currentIndex < totalSlides - 1) {
      // Свайп влево и проверка, что это не последний слайд
      currentIndex++;
      moveSlider(-currentIndex * slider.offsetWidth);
    } else if (movedX < 0 && currentIndex > 0) {
      // Свайп вправо и проверка, что это не первый слайд
      currentIndex--;
      moveSlider(-currentIndex * slider.offsetWidth);
    }
  }
});

function moveSlider(offset) {
  slider.style.transform = `translateX(${offset}px)`;
}
