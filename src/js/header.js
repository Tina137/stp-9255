const header = document.querySelector('[data-header-scroll]');
const heroSection = document.querySelector('[data-hero-section]');

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-500px 0px 0px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.setAttribute('data-scrolled', 'true');
    } else {
      header.setAttribute('data-scrolled', 'false');
    }
  });
}, observerOptions);

if (heroSection) {
  observer.observe(heroSection);
}
