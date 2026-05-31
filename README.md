# Programmers Picnic GitHub Pages Full Template

This static template is ready for GitHub Pages.

## Main features

- `partials/header.html` loaded by JavaScript
- `partials/footer.html` loaded by JavaScript
- `assets/js/layouts.js` generates different page layouts
- Two-level dropdown navigation
- Navigation search box
- Dark/light theme selector in the header
- Footer chatbot demo
- WhatsApp link: `https://wa.me/919335874326`
- Carousel page
- Open map page
- Picture gallery and video gallery
- Shopping cart and checkout demo using `localStorage`
- Subfolder support using `window.PP_BASE_PATH`

## Important files

```text
partials/header.html
partials/footer.html
assets/css/style.css
assets/js/include.js
assets/js/layouts.js
assets/js/main.js
```

## Pages

```text
index.html
about.html
gallery.html
picture-gallery.html
video-gallery.html
carousel.html
openmap.html
contact.html
cotact.html
shopping-cart.html
checkout.html
pages/sample/index.html
```

## How to add a page

1. Copy any root HTML page.
2. Change `data-layout="home"` to your new layout name.
3. Add that layout in `assets/js/layouts.js`.
4. Add a navigation link in `partials/header.html` if needed.

## GitHub Pages

Upload these files to a GitHub repository and enable GitHub Pages from the repository settings.


## Latest update

- Dropdown navigation has been stabilized with a hover bridge, delayed closing, keyboard focus support, and Escape-to-close behavior.
- Footer now includes social media links. Replace the `#` placeholders for Facebook, Instagram, and LinkedIn with your real URLs.
