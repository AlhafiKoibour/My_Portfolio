// Animation des barres au scroll
const bars = document.querySelectorAll('.progress-fill[data-width]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.width = entry.target.dataset.width;
      }, 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

bars.forEach(bar => observer.observe(bar));

// Animation des barres dans le carousel
const carousel = document.getElementById('skillsCarousel');
carousel.addEventListener('slid.bs.carousel', () => {
  const activeBars = carousel.querySelectorAll('.carousel-item.active .progress-fill');
  activeBars.forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});
