import 'swiper/css';
import Swiper from 'swiper';
import { Keyboard, Pagination } from 'swiper/modules';

let swiperInstance = null;

function initSwiperIfDesktop() {
  const isDesktop = window.innerWidth >= 1190;

  if (isDesktop && !swiperInstance) {
    swiperInstance = new Swiper('[data-swiper-main]', {
      slidesPerView: 1,
      loop: true,
      modules: [Keyboard, Pagination],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (!isDesktop && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}
// Ініціалізуємо при завантаженні
initSwiperIfDesktop();

// Перевіряємо при зміні розміру
window.addEventListener('resize', () => {
  initSwiperIfDesktop();
});

const slider = document.querySelector('[data-swiper-wrapper]');

let startX = 0;
let currentX = 0;
let isSwiping = false;

function reorderSlides(forward = true) {
  if (window.innerWidth >= 1190) return;

  if (forward) {
    const first = slider.firstElementChild;
    slider.appendChild(first);
  } else {
    const last = slider.lastElementChild;
    slider.insertBefore(last, slider.firstElementChild);
  }

  [...slider.children].forEach((slide, i) => {
    slide.style.zIndex = 7 - i;
    slide.style.transition = 'transform 0.3s ease';
    slide.style.transform = `translateY(${-i * 6}px)`;
  });
}

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  isSwiping = true;
}

function handleTouchMove(e) {
  if (!isSwiping) return;
  currentX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (!isSwiping) return;
  const deltaX = currentX - startX;

  if (Math.abs(deltaX) > 50) {
    reorderSlides(deltaX < 0); // ліво — вперед, право — назад
  }

  startX = 0;
  currentX = 0;
  isSwiping = false;
}

function enableSwipe() {
  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchmove', handleTouchMove);
  slider.addEventListener('touchend', handleTouchEnd);
}

function disableSwipe() {
  slider.removeEventListener('touchstart', handleTouchStart);
  slider.removeEventListener('touchmove', handleTouchMove);
  slider.removeEventListener('touchend', handleTouchEnd);
}

// Ініціалізація
function initSlider() {
  if (window.innerWidth < 1200) {
    reorderSlides(); // Початкове розташування
    enableSwipe();
  } else {
    disableSwipe();
  }
}

window.addEventListener('resize', initSlider);
initSlider();
