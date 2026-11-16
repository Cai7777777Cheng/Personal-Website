# YUAN HONG

Personal homepage for Yuan Hong. One scrolling page: a featured project well, an about statement, selected works, contact, and a footer. Built with the same form as [Nomo](https://nomo-tabletop.deed.page/): Vite, React, TypeScript, and React Router.

Live site: https://cai7777777cheng.github.io/Personal-Website/

Photographs and video from the reference layout are not used. Every media frame is a flat gray placeholder. The Nomo card opens the live product site: https://nomo-tabletop.deed.page/

## Run locally

```bash
npm install
npm run dev
```

The dev server is at http://127.0.0.1:4732.

```bash
npm run build
npm run preview
```

## GitHub Pages

The project site base path is `/Personal-Website/`.

```bash
VITE_BASE_PATH=/Personal-Website/ npm run build
```

Pushes to `main` deploy through GitHub Actions. The build copies `index.html` to `404.html` so `/terms` still opens on Pages.
