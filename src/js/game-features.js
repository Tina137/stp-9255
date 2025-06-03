import 'swiper/css';
import Swiper from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

const previewSwiper = new Swiper('.features-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  allowTouchMove: true,
  centeredSlides: false,
  slideToClickedSlide: true,
  watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.features-swiper-main', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  allowTouchMove: true,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  watchSlidesProgress: true,
});

mainSwiper.controller.control = previewSwiper;
previewSwiper.controller.control = mainSwiper;
