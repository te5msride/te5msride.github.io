(function () {
  const grid = document.getElementById("work-grid");
  const search = document.getElementById("work-search");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".work-card"));

  function applyFilters() {
    const q = (search?.value || "").toLowerCase().trim();
    cards.forEach((c) => {
      const title = c.dataset.title || "";
      const tags = c.dataset.tags || "";
      const matchQ = !q || title.includes(q) || tags.includes(q);
      c.style.display = matchQ ? "" : "none";
    });
  }

  // Hover video behavior
  cards.forEach((c) => {
    const v = c.querySelector(".work-card__hover");
    if (!v) return;
    c.addEventListener("mouseenter", () => v.play().catch(() => {}));
    c.addEventListener("mouseleave", () => {
      v.pause();
      v.currentTime = 0;
    });
  });

  applyFilters();
  if (search) search.addEventListener("input", applyFilters);
})();
