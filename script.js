document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count;
  let v = 0;
  const step = Math.ceil(target / 100);

  const run = () => {
    v += step;
    if (v < target) {
      el.textContent = v;
      requestAnimationFrame(run);
    } else {
      el.textContent = target;
    }
  };
  run();
});
