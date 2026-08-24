document.addEventListener("DOMContentLoaded", () => {
  // Reliable section navigation with a sticky-navbar offset.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      const nav = document.getElementById("navContent");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }

      const navbar = document.getElementById("mainNav");
      const offset = navbar ? navbar.offsetHeight + 12 : 12;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });

      history.pushState(null, "", hash);
    });
  });

  // Skill filtering.
  const filters = document.querySelectorAll(".skill-filter");
  const items = document.querySelectorAll(".skill-item");

  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(btn => {
        btn.classList.remove("active", "btn-dark");
        btn.classList.add("btn-outline-dark");
      });
      button.classList.add("active", "btn-dark");
      button.classList.remove("btn-outline-dark");

      const filter = button.dataset.filter;
      items.forEach(item => {
        item.classList.toggle("is-hidden", filter !== "all" && !item.classList.contains(filter));
      });
    });
  });

  // Lightweight scroll reveal.
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  // Back to top.
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 600 ? "grid" : "none";
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});
