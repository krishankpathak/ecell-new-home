const counters = document.querySelectorAll("[data-count]");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = +el.dataset.count;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 120));

    const update = () => {
      current += step;
      if (current < target) {
        el.textContent = current;
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };

    update();
    observer.unobserve(el);
  });
}, { threshold: 0.6 });

counters.forEach(c => observer.observe(c));

/* Reveal animation */
document.querySelectorAll(".reveal").forEach(el => {
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      obs.disconnect();
    }
  }, { threshold: 0.15 }).observe(el);
});
