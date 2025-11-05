// Smooth scroll + scrollspy para INTEGRA
document.addEventListener("DOMContentLoaded", () => {
  // --- Scroll suave ---
  document.querySelectorAll('a[href^="/#"], a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").replace("/", "");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // --- Scrollspy ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateSection() {
    let scrollPos = window.scrollY + 120; // offset por navbar sticky
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        const id = sec.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(`#${id}`)) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateSection);
});
// Reveal on scroll (sutil)
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
});


document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.steps');
  if(!el) return;
  const obs = new IntersectionObserver(([e]) => {
    if(e.isIntersecting){ el.classList.add('is-visible'); obs.disconnect(); }
  }, {threshold: 0.3});
  obs.observe(el);
});
