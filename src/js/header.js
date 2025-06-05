const header = document.querySelector('[data-header-scroll]');
const heroSection = document.querySelector('[data-hero-section]');
const sections = document.querySelectorAll('[data-section]');
const navLinks = document.querySelectorAll('[data-link]');

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

function onScroll() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.dataset.section;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.dataset.link === currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll);
