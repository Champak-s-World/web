# GitHub Pages Header/Footer Template

This is a static website template for GitHub Pages.

## Files

```text
index.html
about.html
gallery.html
picture-gallery.html
video-gallery.html
contact.html
cotact.html                 # typo-safe redirect to contact.html
partials/header.html
partials/footer.html
assets/css/style.css
assets/js/include.js
assets/js/main.js
assets/images/slides/
assets/images/gallery/
assets/images/og/
pages/sample/index.html     # subfolder example
```

## How the shared header/footer work

Every page has:

```html
<div id="site-header"></div>
...
<div id="site-footer"></div>
<script src="assets/js/include.js"></script>
```

The JavaScript loads:

```text
partials/header.html
partials/footer.html
```

## Subfolder pages

For a page two folders deep, use:

```html
<script>window.PP_BASE_PATH = "../../";</script>
<link rel="stylesheet" href="../../assets/css/style.css">
<script src="../../assets/js/include.js"></script>
```

## GitHub Pages

Upload all files to your repository and enable GitHub Pages from repository settings. Use the root folder as the publishing source.

## Replacing images

Replace SVG files inside:

```text
assets/images/slides/
assets/images/gallery/
assets/images/og/
```

Keep the same filenames, or update the page links.
