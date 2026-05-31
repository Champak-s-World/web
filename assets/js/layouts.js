/*
  layouts.js
  Central layout generator for all pages.
  Use <main id="main-content" class="container" data-layout="home"></main>.
*/

window.PP_SEARCH_INDEX = [
  { title: "Home", url: "index.html", text: "Landing page, slideshow and features", tags: "start template" },
  { title: "About", url: "about.html", text: "Story, teaching method and reusable system", tags: "method story" },
  { title: "Gallery", url: "gallery.html", text: "Mixed gallery page", tags: "photos videos" },
  { title: "Picture Gallery", url: "picture-gallery.html", text: "Image gallery with lightbox", tags: "photo images" },
  { title: "Video Gallery", url: "video-gallery.html", text: "Embedded video page", tags: "youtube video" },
  { title: "Carousel", url: "carousel.html", text: "Large slideshow and carousel page", tags: "slider slides" },
  { title: "Open Map", url: "openmap.html", text: "Map and location page", tags: "location office" },
  { title: "Contact", url: "contact.html", text: "Contact form and WhatsApp", tags: "phone email whatsapp" },
  { title: "Shopping Cart", url: "shopping-cart.html", text: "Static cart demo with localStorage", tags: "shop products" },
  { title: "Checkout", url: "checkout.html", text: "Static checkout demo", tags: "payment order" }
];

const sharedSlides = [
  { image: "assets/images/slides/slide-learning.svg", alt: "Learning slideshow graphic", title: "Learn with Joy", text: "Build lessons, landing pages and course websites." },
  { image: "assets/images/slides/slide-code.svg", alt: "Coding slideshow graphic", title: "Build Projects", text: "Use static files that work smoothly on GitHub Pages." },
  { image: "assets/images/slides/slide-community.svg", alt: "Community slideshow graphic", title: "Grow Together", text: "Add photos, videos, maps, carts and updates." }
];

const galleryItems = [
  { image: "assets/images/gallery/classroom.svg", alt: "Classroom session", title: "Classroom Sessions", text: "Learning moments and workshop photographs." },
  { image: "assets/images/gallery/coding.svg", alt: "Coding practice", title: "Coding Practice", text: "Hands-on code, projects and experiments." },
  { image: "assets/images/gallery/project.svg", alt: "Project work", title: "Project Work", text: "Student projects and demo pages." },
  { image: "assets/images/gallery/students.svg", alt: "Student community", title: "Students", text: "Community and learning groups." },
  { image: "assets/images/gallery/workshop.svg", alt: "Workshop", title: "Workshops", text: "Live workshops and focused sessions." },
  { image: "assets/images/gallery/certificate.svg", alt: "Certificate", title: "Certificates", text: "Achievement and completion moments." }
];

window.PP_LAYOUTS = {
  home: {
    title: "Programmers Picnic GitHub Pages Template",
    description: "A GitHub Pages-ready website template with two-level navigation, search, theme selector, chatbot, galleries, map, cart and checkout pages.",
    sections: [
      { type: "heroSlider", eyebrow: "GitHub Pages Ready", title: "One template. Many pages. Clean folders.", text: "This site uses header.html, footer.html, include.js and layouts.js. It now includes two-level navigation, search, dark-light theme, chatbot, WhatsApp, map, carousel, cart and checkout demos.", actions: [ { label: "View Carousel", href: "carousel.html", style: "primary" }, { label: "Open Shop", href: "shopping-cart.html", style: "secondary" } ], slides: sharedSlides },
      { type: "features", columns: 3, items: [
        { icon: "🔎", title: "Search in Nav", text: "The header has a small static search system powered by PP_SEARCH_INDEX inside layouts.js." },
        { icon: "☀️", title: "Theme Selector", text: "The header button switches light and dark themes and remembers the choice in localStorage." },
        { icon: "💬", title: "Footer Chatbot", text: "A small static chatbot is included in footer.html and controlled by main.js." }
      ]},
      { type: "cards", title: "New pages included", columns: 3, items: [
        { title: "Carousel Page", text: "A separate page for a large slideshow presentation." },
        { title: "Open Map Page", text: "A location/map page with an embedded OpenStreetMap iframe." },
        { title: "Cart + Checkout", text: "A static localStorage shopping cart and checkout demo." }
      ]}
    ]
  },
  about: {
    title: "About Programmers Picnic",
    description: "About page generated through layouts.js.",
    sections: [
      { type: "pageHero", id: "story", eyebrow: "About", title: "A static website system for lessons, courses and portfolios.", text: "Use this page to explain your brand, your teaching method, your team, or your project." },
      { type: "split", id: "method", title: "Why this template?", text: "GitHub Pages does not run server-side includes. This template uses JavaScript fetch includes for header and footer, plus layouts.js for page-specific content.", image: "assets/images/gallery/classroom.svg", alt: "Classroom illustration" },
      { type: "features", columns: 3, items: [
        { icon: "⚡", title: "Fast to edit", text: "Edit one object in layouts.js and the page layout changes." },
        { icon: "🔁", title: "Reusable", text: "Use it for lessons, galleries, newsletters or landing pages." },
        { icon: "🌐", title: "GitHub Pages Friendly", text: "No backend, no build step, no database required." }
      ]}
    ]
  },
  gallery: { title: "Gallery", description: "Mixed gallery page.", sections: [ { type: "pageHero", eyebrow: "Gallery", title: "Photos, videos and highlights in one place.", text: "This mixed gallery can point users to picture galleries, video galleries, event albums and course highlights." }, { type: "gallery", items: galleryItems } ] },
  pictureGallery: { title: "Picture Gallery", description: "Picture gallery with lightbox.", sections: [ { type: "pageHero", eyebrow: "Pictures", title: "Picture gallery with lightbox.", text: "Click any image to open it in a clean lightbox view." }, { type: "gallery", lightbox: true, items: galleryItems } ] },
  videoGallery: { title: "Video Gallery", description: "Video gallery page.", sections: [ { type: "pageHero", eyebrow: "Videos", title: "Video gallery for lessons and demos.", text: "Replace these embedded examples with your YouTube videos or course recordings." }, { type: "videos", items: [ { title: "Sample Lesson Video", text: "Replace the YouTube URL with your own video.", embed: "https://www.youtube.com/embed/n8kdzZBb6lk" }, { title: "Sample Java Lesson", text: "Another video slot for a playlist, class or demo.", embed: "https://www.youtube.com/embed/DYONvJOruqw" } ] } ] },
  carousel: { title: "Carousel Page", description: "Large carousel page.", sections: [ { type: "pageHero", eyebrow: "Carousel", title: "A dedicated carousel page.", text: "Use this page for banners, events, featured lessons, products or testimonials." }, { type: "wideCarousel", slides: sharedSlides.concat([{ image: "assets/images/gallery/project.svg", alt: "Project showcase", title: "Project Showcase", text: "Highlight work, courses and events." }]) } ] },
  openmap: { title: "Open Map", description: "Open map and location page.", sections: [ { type: "pageHero", eyebrow: "Map", title: "Open map page.", text: "Replace the embedded map with your exact location. This demo uses OpenStreetMap." }, { type: "map", title: "Find us on map", text: "This is a static iframe map. Update the iframe URL and address in layouts.js.", address: "Varanasi / Lucknow, India", embed: "https://www.openstreetmap.org/export/embed.html?bbox=80.85%2C26.75%2C81.05%2C26.95&layer=mapnik" } ] },
  contact: { title: "Contact", description: "Contact page.", sections: [ { type: "pageHero", eyebrow: "Contact", title: "Let learners reach you easily.", text: "Use this page for WhatsApp, email, Zoom, office address, enquiry links or course admissions." }, { type: "contact", details: [ { label: "WhatsApp", value: "+91 93358 74326", link: "https://wa.me/919335874326" }, { label: "Website", value: "learnwithchampak.live" }, { label: "Brand", value: "Programmers Picnic AI-ML Classes by Champak Roy" } ] } ] },
  cart: { title: "Shopping Cart", description: "Static cart demo.", sections: [ { type: "pageHero", eyebrow: "Shop", title: "Shopping cart demo.", text: "This static cart uses localStorage. Replace demo products with your own courses, books or services." }, { type: "products", items: [ { title: "Python Starter Course", price: 999, text: "Beginner-friendly Python course pack." }, { title: "AI-ML Lesson Bundle", price: 1499, text: "Template-ready AI and Machine Learning lessons." }, { title: "Website Template Pack", price: 799, text: "Reusable GitHub Pages layouts and assets." } ] }, { type: "cart" } ] },
  checkout: { title: "Checkout", description: "Static checkout demo.", sections: [ { type: "pageHero", eyebrow: "Checkout", title: "Checkout page demo.", text: "This is a front-end-only checkout form. Connect it to your real payment/order system later." }, { type: "checkout" } ] },
  sample: { title: "Sample Subfolder Page", description: "Subfolder page using PP_BASE_PATH.", sections: [ { type: "pageHero", eyebrow: "Subfolder Demo", title: "This page lives inside pages/sample/.", text: "It uses window.PP_BASE_PATH = '../../' so it can load shared files from the root." }, { type: "features", columns: 2, items: [ { icon: "↩️", title: "Base path support", text: "Subfolder pages can still use the same shared layout files." }, { icon: "🧱", title: "Same layout engine", text: "This page is generated from the sample layout inside layouts.js." } ] } ] }
};

function ppEscape(value = "") { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }
function ppAsset(path = "") { if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path; return `${window.PP_BASE_PATH || ""}${path}`; }
function ppButton(action) { return `<a class="btn ${ppEscape(action.style || "secondary")}" href="${ppAsset(action.href || "#")}">${ppEscape(action.label || "Open")}</a>`; }

const PP_RENDERERS = {
  pageHero(section) { return `<section class="page-hero" ${section.id ? `id="${ppEscape(section.id)}"` : ""}>${section.eyebrow ? `<p class="eyebrow">${ppEscape(section.eyebrow)}</p>` : ""}<h1>${ppEscape(section.title)}</h1>${section.text ? `<p class="lead">${ppEscape(section.text)}</p>` : ""}</section>`; },
  heroSlider(section) { return `<section class="hero"><div class="hero-card">${section.eyebrow ? `<p class="eyebrow">${ppEscape(section.eyebrow)}</p>` : ""}<h1>${ppEscape(section.title)}</h1>${section.text ? `<p class="lead">${ppEscape(section.text)}</p>` : ""}${(section.actions || []).length ? `<div class="actions">${section.actions.map(ppButton).join("")}</div>` : ""}</div>${PP_RENDERERS.slider({ slides: section.slides, className: "hero-slider" })}</section>`; },
  slider(section) { const slides = section.slides || []; return `<div class="${ppEscape(section.className || "hero-slider")}" aria-label="Featured slideshow">${slides.map((slide, index) => `<article class="slide ${index === 0 ? "active" : ""}"><img src="${ppAsset(slide.image)}" alt="${ppEscape(slide.alt || slide.title)}"><div class="slide-caption"><strong>${ppEscape(slide.title)}</strong><br>${ppEscape(slide.text || "")}</div></article>`).join("")}<div class="slider-controls"><button class="slide-prev" type="button" aria-label="Previous slide">‹</button><button class="slide-next" type="button" aria-label="Next slide">›</button></div><div class="dots" aria-label="Slide dots">${slides.map((_, index) => `<button class="dot ${index === 0 ? "active" : ""}" type="button" aria-label="Slide ${index + 1}"></button>`).join("")}</div></div>`; },
  wideCarousel(section) { return `<section class="section">${PP_RENDERERS.slider({ slides: section.slides, className: "wide-carousel" })}</section>`; },
  features(section) { return `<section class="section grid-${section.columns || 3}">${(section.items || []).map(item => `<div class="feature"><div class="feature-icon">${ppEscape(item.icon || "")}</div><h2>${ppEscape(item.title)}</h2><p>${ppEscape(item.text || "")}</p></div>`).join("")}</section>`; },
  cards(section) { return `<section class="section">${section.title ? `<h2>${ppEscape(section.title)}</h2>` : ""}<div class="grid-${section.columns || 3}">${(section.items || []).map(item => `<article class="card"><h3>${ppEscape(item.title)}</h3><p>${ppEscape(item.text || "")}</p></article>`).join("")}</div></section>`; },
  split(section) { return `<section class="section grid-2 split-section" ${section.id ? `id="${ppEscape(section.id)}"` : ""}><div class="card"><h2>${ppEscape(section.title)}</h2><p>${ppEscape(section.text || "")}</p></div><div class="card image-card"><img src="${ppAsset(section.image)}" alt="${ppEscape(section.alt || section.title)}"></div></section>`; },
  gallery(section) { return `<section class="section gallery-grid">${(section.items || []).map(item => { const tag = section.lightbox ? "a" : "article"; const attrs = section.lightbox ? `href="${ppAsset(item.image)}" data-lightbox` : ""; return `<${tag} class="gallery-card" ${attrs}><img src="${ppAsset(item.image)}" alt="${ppEscape(item.alt || item.title)}"><div><h3>${ppEscape(item.title)}</h3>${item.text ? `<p>${ppEscape(item.text)}</p>` : ""}</div></${tag}>`; }).join("")}</section>`; },
  videos(section) { return `<section class="section video-grid">${(section.items || []).map(item => `<article class="video-card"><div class="video-frame"><iframe src="${ppEscape(item.embed)}" title="${ppEscape(item.title)}" loading="lazy" allowfullscreen></iframe></div><h3>${ppEscape(item.title)}</h3><p>${ppEscape(item.text || "")}</p></article>`).join("")}</section>`; },
  map(section) { return `<section class="section grid-2"><div class="card"><h2>${ppEscape(section.title)}</h2><p>${ppEscape(section.text)}</p><p><strong>Address:</strong> ${ppEscape(section.address)}</p><a class="btn primary" target="_blank" rel="noopener" href="https://www.openstreetmap.org/">Open full map</a></div><div class="map-frame"><iframe src="${ppEscape(section.embed)}" loading="lazy" title="Open map"></iframe></div></section>`; },
  products(section) { return `<section class="section grid-3">${(section.items || []).map(item => `<article class="card product-card"><h3>${ppEscape(item.title)}</h3><p>${ppEscape(item.text)}</p><strong>₹${Number(item.price).toLocaleString("en-IN")}</strong><button class="btn primary" type="button" data-add-cart data-title="${ppEscape(item.title)}" data-price="${ppEscape(item.price)}">Add to Cart</button></article>`).join("")}</section>`; },
  cart() { return `<section class="section cart-box"><h2>Your Cart</h2><div id="cart-items"></div><p class="cart-total">Total: <strong id="cart-total">₹0</strong></p><a class="btn primary" href="${ppAsset("checkout.html")}">Proceed to Checkout</a></section>`; },
  checkout() { return `<section class="section checkout-grid"><div class="cart-box"><h2>Order Summary</h2><div id="cart-items"></div><p class="cart-total">Total: <strong id="cart-total">₹0</strong></p></div><form class="contact-card" id="checkout-form"><div class="form-row"><label>Name</label><input required name="name"></div><div class="form-row"><label>Email</label><input type="email" required name="email"></div><div class="form-row"><label>Phone</label><input required name="phone"></div><div class="form-row"><label>Notes</label><textarea name="notes"></textarea></div><button class="btn primary" type="submit">Place Demo Order</button></form></section>`; },
  contact(section) { return `<section class="section contact-grid"><div class="contact-card"><h2>Contact Details</h2>${(section.details || []).map(item => `<p><strong>${ppEscape(item.label)}:</strong> ${item.link ? `<a href="${ppEscape(item.link)}" target="_blank" rel="noopener">${ppEscape(item.value)}</a>` : ppEscape(item.value)}</p>`).join("")}</div><form class="contact-card" onsubmit="event.preventDefault(); alert('Demo form only. Connect it to Formspree, Google Forms or your own endpoint.');"><div class="form-row"><label>Name</label><input name="name" required></div><div class="form-row"><label>Email</label><input type="email" name="email" required></div><div class="form-row"><label>Message</label><textarea name="message" required></textarea></div><button class="btn primary" type="submit">Send Demo Message</button></form></section>`; }
};

function applyPageMeta(layout) { if (!layout) return; if (layout.title) document.title = layout.title; if (layout.description) { let meta = document.querySelector('meta[name="description"]'); if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); } meta.content = layout.description; } }
function renderPPLayout() { const target = document.querySelector("[data-layout]"); if (!target) return; const name = target.dataset.layout; const layout = window.PP_LAYOUTS[name]; if (!layout) { target.innerHTML = `<section class="page-hero"><h1>Layout not found</h1><p class="lead">No layout named <strong>${ppEscape(name)}</strong> was found in assets/js/layouts.js.</p></section>`; return; } applyPageMeta(layout); target.innerHTML = (layout.sections || []).map(section => { const renderer = PP_RENDERERS[section.type]; return renderer ? renderer(section) : `<section class="card"><h2>Unknown section: ${ppEscape(section.type)}</h2></section>`; }).join("\n"); document.dispatchEvent(new CustomEvent("pp:layout-ready")); }
document.addEventListener("DOMContentLoaded", renderPPLayout);