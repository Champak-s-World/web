# BluePro Professional Business Template

A professional blue themed static website template for GitHub Pages.

This version uses clean folder-based routes. Every public page lives in its own folder with an `index.html`, so URLs look professional:

```text
/about/
/gallery/
/picture-gallery/
/video-gallery/
/carousel/
/openmap/
/contact/
/shopping-cart/
/checkout/
```

The home page remains the root `index.html`, as required by GitHub Pages.

## Main features

- Shared `partials/header.html` and `partials/footer.html`
- JavaScript include system using `assets/js/include.js`
- Layout generator using `assets/js/layouts.js`
- Professional blue theme
- Dark/light selector
- Stable two-level dropdown navigation
- Navigation search
- Carousel/slideshow
- Picture gallery and video gallery
- Open map page
- WhatsApp link: +91 93358 74326
- Shopping cart with product photos
- Product image magnifier inside cart
- Checkout page with dummy payment gateway
- Footer chatbot
- Footer social media links

## Folder structure

```text
index.html
about/index.html
gallery/index.html
picture-gallery/index.html
video-gallery/index.html
carousel/index.html
openmap/index.html
contact/index.html
cotact/index.html
shopping-cart/index.html
checkout/index.html
partials/header.html
partials/footer.html
assets/css/style.css
assets/js/include.js
assets/js/layouts.js
assets/js/main.js
assets/images/
pages/sample/index.html
```

## Adding a new page

1. Create a folder, for example `services/`.
2. Add `services/index.html`.
3. Set `window.PP_BASE_PATH = "../"` in that page.
4. Add `data-layout="services"` on the main element.
5. Add a `services()` layout in `assets/js/layouts.js`.
6. Add a navigation link in `partials/header.html` with `data-route="services/"`.

## Local testing

Do not double-click the HTML file. Use a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

For GitHub Pages, upload the full folder contents to your repository and enable Pages.
