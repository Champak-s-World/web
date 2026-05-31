# BluePro GitHub Pages Business Template

A professional blue themed static website template with shared `header.html` and `footer.html`, JavaScript includes, a `layouts.js` layout system, galleries, carousel, map, cart, checkout, dummy payment gateway, footer chatbot, WhatsApp CTA, and dark/light theme selector.

## Pages included

- `index.html`
- `about.html`
- `gallery.html`
- `picture-gallery.html`
- `video-gallery.html`
- `carousel.html`
- `openmap.html`
- `contact.html`
- `cotact.html` for typo compatibility
- `shopping-cart.html`
- `checkout.html`
- `pages/sample/index.html`

## Main editable files

- `partials/header.html` — navigation, search, theme selector
- `partials/footer.html` — footer, chatbot, social links, WhatsApp
- `assets/js/layouts.js` — page content and products
- `assets/js/main.js` — dropdowns, search, theme, cart, magnifier, checkout, payment demo, chatbot
- `assets/css/style.css` — professional blue theme

## GitHub Pages

Upload the folder contents to your repository and enable GitHub Pages. Because the project uses `fetch()` to include partials, test it through GitHub Pages or a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Cart and payment

The cart uses browser `localStorage`. The payment gateway is a dummy modal for demonstration. Replace it with Razorpay, Stripe, PayPal, Cashfree, or your preferred provider when going live.
