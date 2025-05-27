document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slideshow img");
  let current = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);
  }

  const targets = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(el => observer.observe(el));
});
