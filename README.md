# Saqlain Mostak — Developer Portfolio

A responsive portfolio built with Next.js App Router, React, CSS and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` before deployment.

## Included

- Professional portrait and downloadable one-page resume at `/resume.pdf`
- Responsive header, hero, about, skills, education, project cards and contact sections
- Four case study pages: `/projects/sportnest`, `/projects/arthub`, `/projects/forma`, `/projects/keenkeeper`
- Real GitHub repository and live links where provided by the repository metadata
- SEO metadata and social preview asset

## Publishing

Push this directory to a new GitHub repository and import it into Vercel using the Next.js framework preset. No environment variables are required for the portfolio itself.

## Final checks

- Confirm email, phone and WhatsApp are current in `data/site.js`.
- Project artwork in `public/projects/` is a custom illustration, **not a screenshot of the live project**. You can replace each SVG with an actual screenshot later and update the corresponding `image` paths in `data/site.js`.
- Confirm all externally deployed demos still work and check functionality on mobile; a successful local build does not verify third-party apps.
- No paid work experience is claimed.

## Latest assets
- `public/saqlain-profile.webp` is the user-provided black-and-white portrait.
- `public/resume.pdf` is derived from the user-provided `resume (2).docx` (first content page; redundant footer-only page removed).
- Contact email reflects the latest resume: `saklainmostak.learner@gmail.com`.


## Final visual audit (October 2026)
- Responsive spacing, type scaling, accessibility skip link and Autoprefixer warnings refined.
- The red Next.js issue badge visible in previous local screenshots is a **development overlay**, not part of the deployed UI.
- A Chrome extension can inject `cz-shortcut-listen`, causing a hydration mismatch. Test in an extension-free Incognito window; `suppressHydrationWarning` only suppresses the root attribute warning.
- The four project illustrations are conceptual placeholders, NOT screenshots of deployed sites. Replace `/public/projects/*.svg` with real screenshots before submitting. Update image paths in `data/site.js`.
- Run `npm install`, `npm run build`, then check mobile (360px), tablet (768px), desktop (1440px), contact links, project pages and resume download.
- Production build not tested in artifact creation environment.
