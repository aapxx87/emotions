let startX;
const slider = document.getElementById('slider');

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  const touchMoveX = e.touches[0].clientX;
  const diff = startX - touchMoveX;
  if (Math.abs(diff) > 50) { // Свайп на 50px
    if (diff > 0) {
      // Свайп влево
      moveSlider('left');
    } else {
      // Свайп вправо
      moveSlider('right');
    }
    startX = touchMoveX; // Сбросить начальную точку для следующего движения
  }
});

function moveSlider(direction) {
  const slides = document.querySelectorAll('.slide');
  const sliderWidth = slider.offsetWidth;
  const currentTransform = getComputedStyle(slider).transform !== 'none'
    ? parseInt(getComputedStyle(slider).transform.split(',')[4].trim())
    : 0;

  if (direction === 'left' && Math.abs(currentTransform) < sliderWidth * (slides.length - 1)) {
    slider.style.transform = `translateX(${currentTransform - sliderWidth}px)`;
  } else if (direction === 'right' && currentTransform < 0) {
    slider.style.transform = `translateX(${currentTransform + sliderWidth}px)`;
  }
}
