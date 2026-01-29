// reveal
const items = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

items.forEach(i => obs.observe(i));

// counters
document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count;
  let v = 0;
  const step = Math.ceil(target / 140);

  const tick = () => {
    v += step;
    if (v < target) {
      el.textContent = v;
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
    }
  };
  tick();
});
