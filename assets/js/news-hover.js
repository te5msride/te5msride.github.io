(function () {
  const items = Array.from(
    document.querySelectorAll(".news-hover-list .recent-news__item"),
  );
  if (!items.length) return;

  // Build a single floating preview element attached to <body>
  const preview = document.createElement("div");
  preview.id = "news-cursor-preview";
  preview.innerHTML =
    '<img id="news-cursor-img" src="" alt="" />' +
    '<video id="news-cursor-video" muted loop playsinline preload="metadata"></video>';
  document.body.appendChild(preview);

  const img = preview.querySelector("#news-cursor-img");
  const vid = preview.querySelector("#news-cursor-video");

  let cursorX = 0;
  let cursorY = 0;
  let active = false;

  function showPreview(item) {
    const imageSrc = item.dataset.newsImage || "";
    const videoSrc = item.dataset.newsVideo || "";

    if (!imageSrc && !videoSrc) {
      hidePreview();
      return;
    }

    active = true;

    if (videoSrc) {
      vid.src = videoSrc;
      vid.poster = imageSrc || "";
      vid.style.display = "block";
      img.style.display = "none";
      vid.play().catch(() => {});
    } else {
      vid.pause();
      vid.removeAttribute("src");
      vid.load();
      vid.style.display = "none";
      img.src = imageSrc;
      img.style.display = "block";
    }

    preview.classList.add("is-visible");
    movePreview();
  }

  function hidePreview() {
    active = false;
    preview.classList.remove("is-visible");
    vid.pause();
  }

  function movePreview() {
    if (!active) return;
    const offset = 18;
    const pw = preview.offsetWidth || 280;
    const ph = preview.offsetHeight || 160;
    let x = cursorX + offset;
    let y = cursorY + offset;
    // Flip horizontally if near right edge
    if (x + pw > window.innerWidth - 12) x = cursorX - pw - offset;
    // Flip vertically if near bottom edge
    if (y + ph > window.innerHeight - 12) y = cursorY - ph - offset;
    preview.style.left = x + window.scrollX + "px";
    preview.style.top = y + window.scrollY + "px";
  }

  // Track cursor globally so position is always current
  document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    if (active) movePreview();
  });

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => showPreview(item));
    item.addEventListener("mouseleave", hidePreview);
  });
})();
