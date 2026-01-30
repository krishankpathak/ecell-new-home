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
/* ============================================================
   ANIMATION ENGINE (NO LIBRARIES)
============================================================ */

const revealElements = document.querySelectorAll(".reveal");
const staggerElements = document.querySelectorAll(".reveal-stagger");
const timelineItems = document.querySelectorAll(".timeline-item");
const stats = document.querySelectorAll(".stats strong");

/* ---------- INTERSECTION OBSERVER ---------- */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // Emphasize stats once
        if (entry.target.classList.contains("stats")) {
          stats.forEach(stat => {
            stat.classList.add("animate");
            setTimeout(() => stat.classList.remove("animate"), 600);
          });
        }
      }
    });
  },
  { threshold: 0.18 }
);

/* Observe sections */
revealElements.forEach(el => observer.observe(el));
staggerElements.forEach(el => observer.observe(el));

/* Timeline stagger (manual) */
timelineItems.forEach((item, index) => {
  setTimeout(() => observer.observe(item), index * 120);
});

/* ---------- HERO LOAD ---------- */
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("show");
});
