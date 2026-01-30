// ================= THEME TOGGLE =================
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

toggle.addEventListener("click", () => {
  const theme = root.getAttribute("data-theme");
  root.setAttribute("data-theme", theme === "light" ? "dark" : "light");
  toggle.textContent = theme === "light" ? "☾" : "☀︎";
});

// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// ================= COUNT UP =================
document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count;
  let value = 0;
  const step = Math.ceil(target / 120);

  const tick = () => {
    value += step;
    if (value < target) {
      el.textContent = value;
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
    }
  };

  tick();
});
/* ============================================================
   LIGHT / DARK THEME TOGGLE
============================================================ */

const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

// Toggle theme
toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
