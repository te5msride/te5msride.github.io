(function () {
  const grid = document.getElementById("work-grid");
  const search = document.getElementById("work-search");
  const tagWrap = document.getElementById("work-tags");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".work-card"));
  const tagSet = new Set();
  cards.forEach((c) => {
    (c.dataset.tags || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => tagSet.add(t));
  });

  const tags = ["all", ...Array.from(tagSet).sort()];
  let activeTag = "all";

  function renderTags() {
    tagWrap.innerHTML = "";
    tags.forEach((t) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "work-tagbtn" + (t === activeTag ? " is-active" : "");
      btn.textContent = t;
      btn.addEventListener("click", () => {
        activeTag = t;
        renderTags();
        applyFilters();
      });
      tagWrap.appendChild(btn);
    });
  }

  function applyFilters() {
    const q = (search?.value || "").toLowerCase().trim();

    cards.forEach((c) => {
      const title = c.dataset.title || "";
      const tags = c.dataset.tags || "";
      const matchQ = !q || title.includes(q) || tags.includes(q);
      const matchTag =
        activeTag === "all" || tags.split(",").includes(activeTag);
      c.style.display = matchQ && matchTag ? "" : "none";
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

  renderTags();
  applyFilters();
  if (search) search.addEventListener("input", applyFilters);
})();
