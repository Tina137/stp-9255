import 'swiper/css';
import Swiper from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative'; // 🔹 Додано
import 'swiper/css/thumbs';

const mainSwiper = new Swiper('.features-swiper-main', {
  direction: 'horizontal',
  spaceBetween: 8,
  loop: true,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  watchSlidesProgress: true,

  breakpoints: {
    // Mobile
    320: {
      slidesPerView: 'auto',
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: [0, 0, -20],
          opacity: 0.5,
        },
        next: {
          translate: [0, 0, -40],
          opacity: 0.3,
        },
      },
    },

    // Desktop
    1190: {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    },
  },
});
