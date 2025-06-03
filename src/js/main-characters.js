import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper = new Swiper('.mySwiper', {
  loop: true,
  modules: [Keyboard, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
  },
});

const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');

nextButton.onclick = () => swiper.slideNext();
prevButton.onclick = () => swiper.slidePrev();
