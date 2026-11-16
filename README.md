# PENG CHENGXU

Personal homepage for Peng Chengxu. One scrolling page: a featured project well, an about statement, selected works, contact, and a footer. Built with the same form as [Nomo](https://nomo-tabletop.deed.page/): Vite, React, TypeScript, and React Router.

Project site: https://cai7777777cheng.github.io/Personal-Website/

That address starts serving after GitHub Pages is turned on for this repo (Settings → Pages → Build and deployment → GitHub Actions). The workflow is already in `.github/workflows/pages.yml`. Until that switch is on, a temporary preview is at https://genetics-experiences-rico-very.trycloudflare.com/

Photographs and video from the reference layout are not used. The hero loops through Nomo, HapticLink, Coralra, and xBloom Studio. Nomo in the hero and in Selected Works opens https://nomo-tabletop.deed.page/. xBloom Studio stays a gray placeholder.

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
