# New Portfolio

Personal portfolio built with Next.js — clean UI, responsive sections, and small decorative "stickers" assets.

- **Status:** UI polish + stickers added
- **Live demo:** (https://example.com)  
- **Repository:** Add your GitHub link here (e.g. https://github.com/username/repo)

![Live Demo](https://img.shields.io/badge/Live-Demo-View-blue)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

## What I changed

- Added decorative SVG stickers under `public/images/stickers` and small CSS helpers to display them.
- Updated `HeroSection` and `AboutSection` to include sticker accents.
- Polished base styles in `src/app/globals.css`.

Files updated:

- [src/app/globals.css](src/app/globals.css)
- [src/sections/HeroSection.tsx](src/sections/HeroSection.tsx)
- [src/sections/AboutSection.tsx](src/sections/AboutSection.tsx)

## Run locally

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Stickers & Design

Two small SVG stickers were added at `public/images/stickers/sticker1.svg` and `sticker2.svg` — these are decorative accents you can replace with your own art. CSS helpers live in `src/app/globals.css` under the "Stickers" section.

If you want me to replace the placeholder live-demo URL and the GitHub repository link with the real ones, send the URLs and I will update the README and badges.

---

Built with Next.js. For deployment, Vercel is recommended.
