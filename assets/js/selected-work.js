(function () {
  document.querySelectorAll(".selected-card").forEach((card) => {
    const v = card.querySelector(".selected-card__hover");
    if (!v) return;
    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => {
      v.pause();
      v.currentTime = 0;
    });
  });
})();
