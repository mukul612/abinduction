const heroMedia = document.querySelector('.hero-media');
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach((el) => revealObserver.observe(el));

window.addEventListener('scroll', () => {
  const range = Math.min(window.scrollY / (window.innerHeight * 0.9), 1);
  heroMedia.style.opacity = `${1 - range}`;
  heroMedia.style.transform = `scale(${1.05 - (range * 0.05)})`;
});
