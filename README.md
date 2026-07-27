# 3D Card Hover Effect

An interactive card that tilts in 3D toward the pointer, built with plain
HTML, CSS and JavaScript — no frameworks or build step required.

## Features

- Smooth 3D tilt driven by `requestAnimationFrame` (only runs while hovering).
- Works with mouse, pen and touch via the Pointer Events API.
- Respects the user's `prefers-reduced-motion` setting for accessibility.
- Responsive layout that adapts to small screens.
- Readable content in every state (no hover required to see the card).

## Getting started

Clone the repository and open `index.html` in any modern browser:

```bash
git clone https://github.com/Meroidea/3D-Card-Hover-Effect-using-HTML-CSS-JavaScript.git
cd 3D-Card-Hover-Effect-using-HTML-CSS-JavaScript
```

Then open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server
```

## Project structure

| File         | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `index.html` | Markup for the card.                               |
| `styles.css` | Styling, layout and the 3D perspective.            |
| `script.js`  | Pointer tracking and the tilt animation loop.      |
| `shiva.avif` | Card image asset.                                  |

## How it works

The `.card-container` sets a CSS `perspective`, and the `.card-body` uses
`transform-style: preserve-3d`. As the pointer moves over the card,
`script.js` measures the pointer position relative to the card's centre and
applies a `rotateX` / `rotateY` / `translateZ` transform each animation frame.
On pointer leave the card eases back to its resting position.

## License

Released under the MIT License.
