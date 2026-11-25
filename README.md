# PENG CHENGXU

Personal homepage for Peng Chengxu. One scrolling page: a featured project well, an about statement, selected works, contact, and a footer. Built with the same form as [Nomo](https://cai7777777cheng.github.io/Cai7777777Cheng-table-game-robot-website/): Vite, React, TypeScript, and React Router.

Official public URL: https://cai7777777cheng.github.io/Personal-Website/

GitHub Pages publishes this site from `main` through `.github/workflows/pages.yml`.

Photographs and video from the reference layout are not used. The hero loops through Nomo, HapticLink, Coralra, and xBloom Studio. Nomo in the menu, the hero, and Selected Works opens https://cai7777777cheng.github.io/Cai7777777Cheng-table-game-robot-website/. xBloom Studio stays a gray placeholder.

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

Pushes to `main` and manual runs of the Pages workflow deploy through GitHub Actions. The build copies `index.html` to `404.html` so `/terms` still opens on Pages.
