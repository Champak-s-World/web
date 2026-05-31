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

    function start() { stop(); timer = setInterval(() => show(index + 1), 4500); }
    function stop() { if (timer) clearInterval(timer); }

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
    lightbox.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt="Expanded gallery image"><p></p>`;
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
      img.src = link.getAttribute("href");
      img.alt = link.querySelector("img")?.getAttribute("alt") || "Gallery image";
      caption.textContent = img.alt;
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

function initThemeSelector() {
  const btn = document.querySelector(".theme-toggle");
  const saved = localStorage.getItem("pp-theme") || "light";
  document.documentElement.dataset.theme = saved;
  if (btn) btn.textContent = saved === "dark" ? "🌙" : "☀️";
  if (!btn || btn.dataset.ready) return;
  btn.dataset.ready = "true";
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("pp-theme", next);
    btn.textContent = next === "dark" ? "🌙" : "☀️";
  });
}


function initStableDropdownNav() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const dropdowns = [...document.querySelectorAll(".has-dropdown")];

  if (toggle && nav && !toggle.dataset.ready) {
    toggle.dataset.ready = "true";
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  dropdowns.forEach((item) => {
    if (item.dataset.dropdownReady === "true") return;
    item.dataset.dropdownReady = "true";
    let closeTimer;

    const open = () => {
      clearTimeout(closeTimer);
      dropdowns.forEach((other) => {
        if (other !== item) other.classList.remove("dropdown-open");
      });
      item.classList.add("dropdown-open");
    };

    const close = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => item.classList.remove("dropdown-open"), 260);
    };

    item.addEventListener("mouseenter", open);
    item.addEventListener("mouseleave", close);
    item.addEventListener("focusin", open);
    item.addEventListener("focusout", close);
  });

  if (!document.documentElement.dataset.dropdownOutsideReady) {
    document.documentElement.dataset.dropdownOutsideReady = "true";
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".has-dropdown")) {
        document.querySelectorAll(".has-dropdown.dropdown-open").forEach((item) => item.classList.remove("dropdown-open"));
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.querySelectorAll(".has-dropdown.dropdown-open").forEach((item) => item.classList.remove("dropdown-open"));
      }
    });
  }
}

function initNavSearch() {
  const form = document.querySelector(".nav-search");
  const input = document.getElementById("pp-site-search");
  const box = document.getElementById("pp-search-results");
  if (!form || !input || !box || form.dataset.ready) return;
  form.dataset.ready = "true";

  const pages = window.PP_SEARCH_INDEX || [];
  const base = window.PP_BASE_PATH || "";
  const addBase = (url) => /^(https?:)?\/\//.test(url) ? url : `${base}${url}`;

  function render() {
    const q = input.value.trim().toLowerCase();
    if (!q) { box.classList.remove("open"); box.innerHTML = ""; return; }
    const hits = pages.filter(p => `${p.title} ${p.text} ${p.tags || ""}`.toLowerCase().includes(q)).slice(0, 6);
    box.innerHTML = hits.length
      ? hits.map(p => `<a href="${addBase(p.url)}"><strong>${p.title}</strong><span>${p.text}</span></a>`).join("")
      : `<p>No match found.</p>`;
    box.classList.add("open");
  }

  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  document.addEventListener("click", (event) => { if (!form.contains(event.target)) box.classList.remove("open"); });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const first = box.querySelector("a");
    if (first) location.href = first.href;
  });
}

function initCart() {
  const buttons = [...document.querySelectorAll("[data-add-cart]")];
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  if (!buttons.length && !list) return;

  const read = () => JSON.parse(localStorage.getItem("pp-cart") || "[]");
  const write = (cart) => localStorage.setItem("pp-cart", JSON.stringify(cart));
  const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

  function draw() {
    const cart = read();
    if (list) {
      if (!cart.length) list.innerHTML = `<p>Your cart is empty. Add a course or template pack.</p>`;
      else list.innerHTML = cart.map((item, i) => `<div class="cart-row"><span><strong>${item.title}</strong><small>${money(item.price)}</small></span><button data-remove-cart="${i}" type="button">Remove</button></div>`).join("");
    }
    if (total) total.textContent = money(cart.reduce((sum, item) => sum + Number(item.price || 0), 0));
  }

  buttons.forEach(btn => {
    if (btn.dataset.ready) return;
    btn.dataset.ready = "true";
    btn.addEventListener("click", () => {
      const cart = read();
      cart.push({ title: btn.dataset.title, price: Number(btn.dataset.price || 0) });
      write(cart);
      draw();
      btn.textContent = "Added";
      setTimeout(() => btn.textContent = "Add to Cart", 900);
    });
  });

  document.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-cart]");
    if (!remove) return;
    const cart = read();
    cart.splice(Number(remove.dataset.removeCart), 1);
    write(cart);
    draw();
  });

  draw();
}

function initCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form || form.dataset.ready) return;
  form.dataset.ready = "true";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Demo checkout submitted. Connect this form to your real payment/order system.");
  });
}

function initChatbot() {
  const root = document.getElementById("footer-chatbot");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "true";
  const toggle = root.querySelector(".chatbot-toggle");
  const close = root.querySelector(".chatbot-close");
  const panel = root.querySelector(".chatbot-panel");
  const form = root.querySelector(".chatbot-form");
  const input = root.querySelector("#chatbot-input");
  const messages = root.querySelector("#chatbot-messages");

  function open() { panel.classList.add("open"); toggle.setAttribute("aria-expanded", "true"); input?.focus(); }
  function hide() { panel.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  function answer(q) {
    const text = q.toLowerCase();
    if (text.includes("whatsapp")) return `Use the WhatsApp button or open https://wa.me/919335874326`;
    if (text.includes("cart") || text.includes("checkout")) return `Open Shop → Shopping Cart or Shop → Checkout from the navigation.`;
    if (text.includes("map") || text.includes("location")) return `Open Contact → Open Map to see the embedded map section.`;
    if (text.includes("gallery") || text.includes("photo")) return `Open Gallery → Picture Gallery or Gallery → Carousel Page.`;
    if (text.includes("theme") || text.includes("dark")) return `Use the sun/moon button in the header to switch theme.`;
    return `This is a static demo bot. You can edit its answers inside assets/js/main.js.`;
  }

  toggle?.addEventListener("click", () => panel.classList.contains("open") ? hide() : open());
  close?.addEventListener("click", hide);
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    messages.insertAdjacentHTML("beforeend", `<p class="user-msg">${q.replace(/[<>]/g, "")}</p><p class="bot-msg">${answer(q)}</p>`);
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  });
}

function initPageFeatures() {
  initSlideshow(".hero-slider, .wide-carousel");
  initLightbox();
  initThemeSelector();
  initStableDropdownNav();
  initNavSearch();
  initCart();
  initCheckoutForm();
  initChatbot();
}

document.addEventListener("DOMContentLoaded", initPageFeatures);
document.addEventListener("pp:layout-ready", initPageFeatures);
document.addEventListener("pp:includes-ready", initPageFeatures);