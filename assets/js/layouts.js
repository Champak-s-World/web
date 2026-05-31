(function(){
  const base = () => window.PP_BASE_PATH || '';
  const img = (path) => `${base()}${path}`;
  const products = [
    {id:'starter-site', name:'Starter Business Website', category:'Website', price:4999, oldPrice:8999, image:'assets/images/products/site-blue.svg', desc:'Landing page, about page, gallery, contact, and WhatsApp CTA.'},
    {id:'premium-store', name:'Premium Store Template', category:'Commerce', price:7999, oldPrice:12999, image:'assets/images/products/store-blue.svg', desc:'Cart, checkout, product cards, and dummy payment flow.'},
    {id:'booking-kit', name:'Service Booking Kit', category:'Services', price:5999, oldPrice:9999, image:'assets/images/products/booking-blue.svg', desc:'Lead capture, appointment CTA, map, and contact sections.'},
    {id:'gallery-pack', name:'Portfolio Gallery Pack', category:'Media', price:3499, oldPrice:5499, image:'assets/images/products/gallery-blue.svg', desc:'Picture gallery, video gallery, carousel, and branded cards.'}
  ];
  window.PP_PRODUCTS = products;

  const features = [
    ['⚡','Fast GitHub Pages Setup','Static files only. No server required. Upload and publish.'],
    ['🛒','Realistic Shop Flow','Product cards, local cart, checkout, totals, and dummy gateway.'],
    ['🔍','Built-in Search','Search pages directly from the navigation bar.'],
    ['🌙','Dark/Light Theme','Theme selector persists in local storage.'],
    ['📱','Mobile Ready','Responsive navigation, cards, galleries, and forms.'],
    ['💬','WhatsApp + Chatbot','Instant WhatsApp CTA and footer assistant demo.']
  ];
  const gallery = [
    ['assets/images/gallery/office-blue.svg','Modern Business Office','Professional look for consultants, clinics, institutes, and agencies.'],
    ['assets/images/gallery/analytics-blue.svg','Analytics Dashboard','Perfect for software, coaching, and digital service landing pages.'],
    ['assets/images/gallery/team-blue.svg','Team Showcase','Use this section for staff, doctors, faculty, or team members.'],
    ['assets/images/gallery/class-blue.svg','Learning Programs','Ideal for course, workshop, and training businesses.'],
    ['assets/images/gallery/shop-blue.svg','Product Display','Reusable ecommerce cards and checkout-ready structure.'],
    ['assets/images/gallery/support-blue.svg','Customer Support','Trust building sections for contact, map, chatbot, and WhatsApp.']
  ];

  function productCard(p){return `
    <article class="product-card card">
      <img class="product-img" src="${img(p.image)}" alt="${p.name}" />
      <p class="pill">${p.category}</p>
      <h3>${p.name}</h3><p>${p.desc}</p>
      <div><span class="price">₹${p.price.toLocaleString('en-IN')}</span><span class="old-price">₹${p.oldPrice.toLocaleString('en-IN')}</span></div>
      <div class="product-actions"><button class="small-btn" data-add-cart="${p.id}">Add to cart</button><a class="secondary-btn" href="shopping-cart.html">View cart</a></div>
    </article>`}

  const layouts = {
    home(){ return `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="pill">Professional blue template · GitHub Pages ready</span>
            <h1>Make visitors feel: <span class="gradient-text">I want this site for my business.</span></h1>
            <p class="section-lead">A polished static website starter with reusable header/footer includes, layout engine, slideshow, galleries, map, cart, checkout, dummy payment gateway, chatbot, WhatsApp CTA, and dark-light theme.</p>
            <div class="hero-actions"><a class="primary-btn" href="shopping-cart.html">Explore Shop Demo</a><a class="secondary-btn" href="gallery.html">View Gallery</a></div>
            <div class="trust-row"><div class="trust-card"><strong>10+</strong>Ready pages</div><div class="trust-card"><strong>100%</strong>Static hosting</div><div class="trust-card"><strong>Blue</strong>Premium theme</div></div>
          </div>
          <div class="hero-showcase"><div class="dashboard-card"><div class="dash-head"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="dash-visual"><img src="${img('assets/images/slides/slide-growth.svg')}" alt="Business website dashboard"><div class="float-card"><strong>Premium first impression</strong><br>Polished UI, strong CTAs, and business-ready sections.</div></div></div></div>
        </div>
      </section>
      <section class="section"><div class="logos"><div class="logo-tile">Services</div><div class="logo-tile">Retail</div><div class="logo-tile">Coaching</div><div class="logo-tile">Clinics</div><div class="logo-tile">Portfolio</div></div></section>
      <section class="section"><h2 class="section-title">Everything a business starter needs</h2><p class="section-lead">Use this as a polished base and replace the demo content with your brand.</p><div class="feature-grid">${features.map(f=>`<article class="feature-card card"><div class="feature-icon">${f[0]}</div><h3>${f[1]}</h3><p>${f[2]}</p></article>`).join('')}</div></section>
      <section class="section split"><div><h2 class="section-title">Looks expensive. Runs free.</h2><p class="section-lead">It is pure HTML, CSS, and JavaScript. Host it on GitHub Pages and still show premium features like cart, checkout simulation, search, theme switcher, and galleries.</p><ul class="list-check"><li>Header and footer included by JavaScript</li><li>Layouts generated from layouts.js</li><li>LocalStorage cart</li><li>Dummy payment gateway modal</li><li>Photo magnifier in cart</li></ul></div><div class="blue-panel"><h3>Business-ready CTA stack</h3><p>WhatsApp link, contact form, map page, chatbot, checkout, and social links are already included.</p><a class="primary-btn" href="contact.html">Start Contact Flow</a></div></section>
      <section class="section"><h2 class="section-title">Featured products / packages</h2><div class="product-grid">${products.map(productCard).join('')}</div></section>`},
    about(){return `<section class="section split"><div><span class="pill">About this template</span><h1 class="section-title">A business site that feels finished on day one.</h1><p class="section-lead">BluePro is designed for owners who need an alluring, professional web presence without a backend.</p><ul class="list-check"><li>Reusable partials</li><li>Page layouts from one file</li><li>Professional blue palette</li><li>Modern responsive sections</li></ul></div><div class="blue-panel"><h3>Use it for</h3><p>Institutes, clinics, coaching programs, local stores, agencies, consultants, book launches, portfolios, and digital services.</p></div></section><section class="section"><div class="feature-grid">${features.slice(0,3).map(f=>`<article class="feature-card card"><div class="feature-icon">${f[0]}</div><h3>${f[1]}</h3><p>${f[2]}</p></article>`).join('')}</div></section>`},
    gallery(){return `<section class="section"><span class="pill">Gallery Hub</span><h1 class="section-title">A visual site sells faster.</h1><p class="section-lead">Use photos, service visuals, testimonials, classroom pictures, project screenshots, and business imagery.</p><div class="gallery-grid">${gallery.map(g=>`<article class="gallery-card card"><img src="${img(g[0])}" alt="${g[1]}"><h3>${g[1]}</h3><p>${g[2]}</p></article>`).join('')}</div></section>`},
    pictureGallery(){return layouts.gallery()},
    videoGallery(){return `<section class="section"><span class="pill">Video Gallery</span><h1 class="section-title">Show videos that convert visitors into buyers.</h1><p class="section-lead">Replace these embeds with YouTube videos, testimonials, demos, or walkthroughs.</p><div class="video-grid">${['Business intro','Product demo','Client story'].map((t,i)=>`<article class="video-card card"><iframe class="video-frame" src="https://www.youtube.com/embed/n8kdzZBb6lk" title="${t}" allowfullscreen></iframe><h3>${t}</h3><p>Use this area for video descriptions, call-to-actions, or lesson summaries.</p></article>`).join('')}</div></section>`},
    carousel(){return `<section class="section"><span class="pill">Carousel showcase</span><h1 class="section-title">Elegant slideshow for hero banners and promotions.</h1><div class="slideshow" data-carousel><article class="slide is-active"><div class="slide-content"><h2>Launch your business site</h2><p>Premium blue theme, strong hero, and direct call-to-action sections.</p><a class="primary-btn" href="contact.html">Contact Now</a></div><img src="${img('assets/images/slides/slide-growth.svg')}" alt="Business growth"></article><article class="slide"><div class="slide-content"><h2>Sell packages online</h2><p>Use the cart and dummy checkout flow to show a complete purchase experience.</p><a class="primary-btn" href="shopping-cart.html">Try Cart</a></div><img src="${img('assets/images/slides/slide-commerce.svg')}" alt="Commerce"></article><article class="slide"><div class="slide-content"><h2>Build instant trust</h2><p>Gallery, social links, map, chatbot, and WhatsApp make the site feel alive.</p><a class="primary-btn" href="gallery.html">View Gallery</a></div><img src="${img('assets/images/slides/slide-trust.svg')}" alt="Trust"></article><div class="carousel-controls"><button data-carousel-prev>‹</button><button data-carousel-next>›</button></div></div><div class="thumb-row" data-carousel-thumbs></div></section>`},
    openmap(){return `<section class="section"><span class="pill">Open Map</span><h1 class="section-title">Map and directions page</h1><p class="section-lead">Replace the map location with your own business address.</p><iframe class="map-embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Varanasi%2C%20India&output=embed"></iframe><div class="contact-cards section"><article class="card feature-card"><h3>Call / WhatsApp</h3><p><a href="https://wa.me/919335874326">+91 93358 74326</a></p></article><article class="card feature-card"><h3>Service Area</h3><p>Replace with your city, office, branch, or coverage area.</p></article><article class="card feature-card"><h3>Office Hours</h3><p>Mon-Sat, 10 AM to 7 PM. Customize as needed.</p></article></div></section>`},
    contact(){return `<section class="section"><span class="pill">Contact</span><h1 class="section-title">Make inquiry easy.</h1><p class="section-lead">Visitors can use the form, WhatsApp, map, or chatbot.</p><div class="checkout-grid"><form class="card feature-card" id="contact-form"><div class="form-grid"><div class="field"><label>Name</label><input required placeholder="Your name"></div><div class="field"><label>Phone</label><input required placeholder="Phone number"></div><div class="field full"><label>Email</label><input type="email" placeholder="email@example.com"></div><div class="field full"><label>Requirement</label><textarea rows="5" placeholder="Tell us what you need"></textarea></div></div><button class="primary-btn" type="submit">Send Demo Inquiry</button></form><div class="blue-panel"><h3>Prefer WhatsApp?</h3><p>Use the direct link for quick business inquiry.</p><a class="primary-btn" href="https://wa.me/919335874326" target="_blank" rel="noopener">Message on WhatsApp</a></div></div></section>`},
    cart(){return `<section class="section"><span class="pill">Shopping Cart</span><h1 class="section-title">Professional cart with product photos and magnifier.</h1><p class="section-lead">Add products from the home page or use the demo preload button below.</p><button class="secondary-btn" data-load-demo-cart>Load Demo Cart</button><div class="cart-layout section"><div class="card" id="cart-items"></div><aside class="summary-card card" id="cart-summary"></aside></div></section>`},
    checkout(){return `<section class="section"><span class="pill">Checkout</span><h1 class="section-title">Dummy payment gateway included.</h1><p class="section-lead">This simulates a payment experience for demo purposes only. No real money is collected.</p><div class="checkout-grid"><form class="card feature-card" id="checkout-form"><h2>Billing Details</h2><div class="form-grid"><div class="field"><label>Full Name</label><input name="name" required placeholder="Customer name"></div><div class="field"><label>Phone</label><input name="phone" required placeholder="Mobile number"></div><div class="field full"><label>Email</label><input name="email" type="email" required placeholder="email@example.com"></div><div class="field full"><label>Address</label><textarea name="address" rows="4" required placeholder="Full address"></textarea></div><div class="field"><label>City</label><input name="city" required placeholder="City"></div><div class="field"><label>PIN Code</label><input name="pin" required placeholder="PIN"></div></div></form><aside class="payment-box card"><h2>Order Summary</h2><div id="checkout-summary"></div><div class="gateway-panel"><h3>Dummy Gateway</h3><div class="payment-options"><label class="pay-option"><input type="radio" name="pay" checked> UPI Demo</label><label class="pay-option"><input type="radio" name="pay"> Card Demo</label><label class="pay-option"><input type="radio" name="pay"> NetBanking Demo</label></div><button class="primary-btn" id="pay-now" type="button">Pay Securely Demo</button><p class="notice">Demo only. Replace with Razorpay, Cashfree, Stripe, PayPal, or your preferred gateway later.</p></div></aside></div></section>`},
    sample(){return `<section class="section"><span class="pill">Subfolder sample</span><h1 class="section-title">This page uses PP_BASE_PATH.</h1><p class="section-lead">It proves the same header, footer, CSS, JS, and layouts work from nested folders on GitHub Pages.</p></section>`}
  };
  window.PP_LAYOUTS = layouts;
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('[data-layout]');
    if(!main) return;
    const name = main.dataset.layout;
    main.innerHTML = layouts[name] ? layouts[name]() : `<section class="section"><h1>Layout not found</h1><p>Add <strong>${name}</strong> inside assets/js/layouts.js.</p></section>`;
    document.dispatchEvent(new CustomEvent('pp:layout-ready', {detail:{layout:name}}));
  });
})();
