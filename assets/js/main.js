function initSlideshow(selector) {
  const sliders = [...document.querySelectorAll(selector)];
  sliders.forEach((root) => {
    if (root.dataset.ready === "true") return;
    root.dataset.ready = "true";

    const slides = [...root.querySelectorAll(".slide")];
    const dots = [...root.querySelectorAll(".dot")];
    const previous = root.querySelector(".slide-prev");
    const next = root.querySelector(".slide-next");
    if (!slides.length) return;

    let index = 0;
    let timer;

    function show(newIndex) {
      index = (newIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    function start() {
      stop();
      timer = setInterval(() => show(index + 1), 4500);
    }

    function stop() {
      if (timer) clearInterval(timer);
    }

    previous?.addEventListener("click", () => { show(index - 1); start(); });
    next?.addEventListener("click", () => { show(index + 1); start(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); start(); }));
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    show(0);
    start();
  });
}

function initLightbox() {
  const galleryLinks = [...document.querySelectorAll("[data-lightbox]")];
  if (!galleryLinks.length) return;

  let lightbox = document.querySelector(".lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Close image">×</button>
      <img alt="Expanded gallery image">
      <p></p>
    `;
    document.body.appendChild(lightbox);
  }

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector("p");
  const close = lightbox.querySelector("button");

  galleryLinks.forEach((link) => {
    if (link.dataset.lightboxReady === "true") return;
    link.dataset.lightboxReady = "true";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const source = link.getAttribute("href");
      const text = link.querySelector("img")?.getAttribute("alt") || "Gallery image";
      img.src = source;
      img.alt = text;
      caption.textContent = text;
      lightbox.classList.add("open");
    });
  });

  function hide() { lightbox.classList.remove("open"); }
  if (!lightbox.dataset.closeReady) {
    lightbox.dataset.closeReady = "true";
    close.addEventListener("click", hide);
    lightbox.addEventListener("click", (event) => { if (event.target === lightbox) hide(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") hide(); });
  }
}

function initPageFeatures() {
  initSlideshow(".hero-slider");
  initLightbox();
}

document.addEventListener("DOMContentLoaded", initPageFeatures);
