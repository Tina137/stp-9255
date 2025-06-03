import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper = new Swiper('[data-name="swiper"]', {
  loop: true,
  modules: [Keyboard, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '[data-name="next"]',
    prevEl: '[data-name="prev"]',
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '[data-name="pag"]',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
  },
});

const nextButton = document.querySelector('[data-name="next"]');
const prevButton = document.querySelector('[data-name="prev"]');

nextButton.onclick = () => swiper.slideNext();
prevButton.onclick = () => swiper.slidePrev();
