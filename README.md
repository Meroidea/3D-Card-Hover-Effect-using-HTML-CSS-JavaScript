# 3D Card Hover Effect

A gallery of interactive cards, each featuring a Hindu god or goddess, that
tilt in 3D toward the pointer. Built with plain HTML, CSS and JavaScript — no
frameworks or build step required.

## Features

- Smooth 3D tilt driven by `requestAnimationFrame` (only runs while hovering).
- Works with mouse, pen and touch via the Pointer Events API.
- Respects the user's `prefers-reduced-motion` setting for accessibility.
- Responsive grid that adapts from a single column to multiple columns.
- Uses live image links from Wikimedia Commons — no local image assets.

## Getting started

Clone the repository:

```bash
git clone https://github.com/Meroidea/3D-Card-Hover-Effect-using-HTML-CSS-JavaScript.git
cd 3D-Card-Hover-Effect-using-HTML-CSS-JavaScript
```

Then open `index.html` directly, or serve the folder locally (recommended, so
the remote images load reliably):

```bash
python3 -m http.server
```

## Project structure

| File         | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `index.html` | Markup for the card gallery.                       |
| `styles.css` | Styling, responsive grid and the 3D perspective.   |
| `script.js`  | Pointer tracking and the tilt animation loop.      |

## How it works

The `.card-grid` sets a CSS `perspective`, and each `.card-body` uses
`transform-style: preserve-3d`. As the pointer moves over a card, `script.js`
measures the pointer position relative to that card's centre and applies a
`rotateX` / `rotateY` / `translateZ` transform each animation frame. On pointer
leave the card eases back to its resting position.

## Image credits

All deity images are served from
[Wikimedia Commons](https://commons.wikimedia.org/) and remain the property of
their respective authors under their original licenses.

## License

Released under the MIT License. See [`LICENSE`](LICENSE).
