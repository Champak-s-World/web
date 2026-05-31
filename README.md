# Programmers Picnic GitHub Pages Full Template

This is a static GitHub Pages-ready website template.

## Main idea

The website uses three reusable systems:

1. `partials/header.html` for the common header.
2. `partials/footer.html` for the common footer.
3. `assets/js/layouts.js` for generating different page layouts from one central JavaScript file.

No backend and no build step are required.

## Pages included

- `index.html`
- `about.html`
- `gallery.html`
- `contact.html`
- `cotact.html` redirects to `contact.html`
- `video-gallery.html`
- `picture-gallery.html`
- `pages/sample/index.html`

## Organized folders

```text
partials/
  header.html
  footer.html

assets/
  css/style.css
  js/include.js
  js/layouts.js
  js/main.js
  images/slides/
  images/gallery/
  images/og/
  videos/
```

## How the layout system works

Each page has a small `<main>` tag:

```html
<main id="main-content" class="container" data-layout="home"></main>
```

The value of `data-layout` selects an object from `assets/js/layouts.js`:

```js
window.PP_LAYOUTS = {
  home: {
    title: "Home Page Title",
    sections: [
      { type: "pageHero", title: "Hello" }
    ]
  }
};
```

To make a new page:

1. Copy any existing page.
2. Change `data-layout="home"` to a new layout name, for example `data-layout="courses"`.
3. Add a `courses` object inside `assets/js/layouts.js`.

## Subfolder pages

For pages inside folders, set `PP_BASE_PATH` before loading scripts:

```html
<script>window.PP_BASE_PATH = "../../";</script>
<script src="../../assets/js/include.js"></script>
<script src="../../assets/js/layouts.js"></script>
<script src="../../assets/js/main.js"></script>
```

The included sample is here:

```text
pages/sample/index.html
```

## GitHub Pages

Upload the whole folder to your repository and enable GitHub Pages from repository settings.
