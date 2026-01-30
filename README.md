# ecell-new-home
## 🚀 Project Overview

This is new design idea for E-Cell FoET website & is built as a **clean, narrative-driven, and visually authoritative platform** that communicates:

- Who we are
- What we do
- Our journey & milestones
- Our impact
- The culture of entrepreneurship at FoET

The site intentionally avoids flashy UI gimmicks and instead follows **editorial / founder-brand design principles** inspired by high-end professional websites.

---

## 🎯 Key Objectives

- Represent E-Cell as a **serious institutional body**, not a fest page
- Maintain **high Lighthouse scores** (Performance, Accessibility, SEO)
- Be **future-proof** and easy to extend (events, team, gallery, CMS)
- Provide **smooth, meaningful animations** without harming performance
- Support **Light & Dark themes** with user preference persistence

---

## 🧩 Features Implemented

### 1️⃣ Editorial Hero Section
- Full-screen hero with strong typographic hierarchy
- High-contrast overlay for readability
- Clear positioning of E-Cell FoET as an entrepreneurship authority

---

### 2️⃣ Image Mosaic Section
- Editorial-style image mosaic showcasing:
  - Events
  - Workshops
  - Collaboration moments
- Responsive CSS grid (no JS dependency)
- Subtle hover zoom and overlay (premium feel, not flashy)

---

### 3️⃣ Event Timeline (Journey)
- Vertical timeline narrating the evolution of E-Cell FoET
- Clear milestones (foundation → bootcamps → talks → future goals)
- Strong storytelling element for:
  - Faculty
  - Sponsors
  - Judges
- No JavaScript required (CSS-first design)

---

### 4️⃣ Impact / Statistics Section
- Animated counters (students impacted, startups, events, collaborations)
- Animation triggers only once (performance-safe)
- Clear quantitative credibility

---

### 5️⃣ Light / Dark Theme System 🌗
- CSS variable–based theme system
- No duplicated styles
- User preference saved via `localStorage`
- Accessible toggle with smooth transitions
- Dark mode optimized for hero, stats, and imagery

---

### 6️⃣ Animation Polish (Professional Motion)
- IntersectionObserver-based reveal animations
- Staggered entrances for grids and timelines
- Subtle micro-interactions on hover
- Motion respects `prefers-reduced-motion`

> Animations enhance **hierarchy and flow**, not decoration.

---

### 7️⃣ Performance & Lighthouse Optimization ⚡
- Lazy loading for images
- Async decoding for images
- Font preloading to reduce CLS & LCP
- Single IntersectionObserver (low main-thread cost)
- GPU-accelerated transforms
- Reduced expensive effects on mobile

---

## 📊 Lighthouse Performance Targets

| Category         | Expected Score |
|------------------|---------------|
| Performance      | 90 – 97       |
| Accessibility    | 95 – 100      |
| Best Practices   | 95 – 100      |
| SEO              | 95 – 100      |

Optimizations include:
- Semantic HTML structure
- Optimized images
- Reduced layout shifts
- Minimal JavaScript execution

---

## 🛠️ Tech Stack

- **HTML5** – semantic, accessible structure  
- **CSS3** – custom design system, no frameworks  
- **Vanilla JavaScript** – minimal, performance-focused  
- **No external UI libraries** – full control & maintainability  

---

## 📁 Project Structure

/
├── index.html # Main website markup
├── style.css # Complete design system & themes
├── script.js # Animations, counters, theme logic
├── assets/ # Logos & local assets (if any)
└── README.md # Project documentation

---

## 🧠 Design Philosophy

This website follows:

- **Editorial design** → clarity, spacing, hierarchy  
- **Founder-brand aesthetics** → confidence & authority  
- **Institution-safe visuals** → faculty & sponsor friendly  
- **Performance-first mindset** → fast, accessible, scalable  

No unnecessary animations.  
No heavy frameworks.  
No visual noise.

---

## 🔮 Future Enhancements (Planned)

- Mentor / Speaker testimonial section
- Upcoming events calendar
- Team profiles with roles
- CMS or admin panel integration
- SEO schema for events & organization
- React / Next.js migration (optional)

---

## 🤝 Contribution Guidelines

This repository is currently maintained by the E-Cell FoET core team.

Future contributors should:
- Maintain performance standards
- Follow existing design tokens & CSS structure
- Avoid heavy dependencies unless necessary

---

## 📜 License

This project is intended for **official use by the Entrepreneurship Cell,  
Faculty of Engineering & Technology, University of Lucknow**.

---

## 🏁 Final Note

This website is not just a digital presence —  
it is a **representation of the entrepreneurial ecosystem** at FoET.

Built with intention, discipline, and long-term vision.
