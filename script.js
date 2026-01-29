/* Reveal on scroll */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));

/* Counter animation */
const numbers = document.querySelectorAll(".number");

numbers.forEach(num => {
  const target = +num.dataset.target;
  let current = 0;

  const increment = Math.ceil(target / 120);

  const update = () => {
    current += increment;
    if (current < target) {
      num.textContent = current;
      requestAnimationFrame(update);
    } else {
      num.textContent = target;
    }
  };

  update();
});
