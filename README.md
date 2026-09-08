# benackles.com

Personal site for Ben Ackles. Astro + Tailwind CSS, statically built, deployed to Netlify.

Built from the Figma file [benackles.com](https://www.figma.com/design/CPSoSegSHJmLvIVPRd9Ojl/benackles.com)
(`0:1 — Portfolio Site Mockups`).

## Commands

```bash
npm run dev      # dev server on http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve the build locally
```

## Structure

```
src/
  components/     Header, Footer, Container, PageIntro, Icon
  content/blog/   Markdown posts (the blog collection)
  assets/         Source images, optimised at build time by astro:assets
  icons/          Brand marks not in Lucide (github, linkedin, twitter)
  data/           work.ts, projects.ts, uses.ts — page content as typed modules
  layouts/        BaseLayout.astro — html shell, meta, header/footer
  pages/          index (about), projects, 404, _blog/, _uses.astro
  styles/         global.css — design tokens + Tailwind theme
  consts.ts       site metadata, nav, social links
  content.config.ts
```

## Parked features

Three things are built but switched off, each restorable in one or two edits:

| Feature          | Where it is                                    | To restore                                                       |
| ---------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| "Book a time" CTA | `SHOW_BOOKING_CTA` in `src/consts.ts`           | Set it to `true`; set `SITE.bookingUrl` alongside it              |
| Blog             | `src/pages/_blog/`                             | Rename to `blog/`, uncomment its line in `NAV` (`src/consts.ts`)  |
| Uses             | `src/pages/_uses.astro`                        | Rename to `uses.astro`, uncomment its line in `NAV`               |

Astro skips underscore-prefixed files and folders when building routes, so the
pages stay in the repo, keep type-checking, and generate no URLs. The blog's
markdown and content collection are untouched.

## Header behaviour

Two things in `src/components/Header.astro` are driven by data rather than
hard-coded, so the header adapts as content changes:

- **Nav placement** — with the CTA on, the pill sits centred as in the Figma
  design; with it off, the pill moves to the right corner instead of leaving a
  dead column. Driven by `SHOW_BOOKING_CTA`.
- **Mobile nav** — up to two items stay visible inline; a third collapses them
  behind a hamburger in the right corner. Driven by `NAV.length` against
  `INLINE_NAV_MAX`.

The hamburger is a `<details>` element, so it needs no JavaScript and keeps
keyboard and screen-reader behaviour for free.

## Project dots

Each project card carries a dot in the brand colour of the company the work
was for; the two independent projects keep their own. Values live on `:root`
in `src/styles/global.css` as `--c-dot-*`.

All three brand colours sit at roughly the same hue (~222°), and the navies
are near-invisible on the dark background — Enumerate's `#152650` measures
1.18:1 against `#1a1a1a`. Dark mode therefore lifts them in HSL, keeping hue
and saturation but stepping lightness so the three blues stay distinguishable
from each other rather than all resolving to the same tint.

## Design tokens

`src/styles/global.css` holds the palette from Figma. Raw values live on `:root`
as `--c-*` and are swapped wholesale under `prefers-color-scheme: dark`;
`@theme inline` maps them onto Tailwind utilities (`bg-bg`, `text-ink`,
`border-border`, `text-accent`, …). Adding a colour means adding it in both
blocks plus the `@theme` map — nothing else in the site hard-codes a hex.

Dark mode follows the OS setting. There is no in-page toggle: the Figma header
has a `mode-and-action` container but no toggle control was drawn, so none was
invented.

## Icons

[Lucide](https://lucide.dev), via `@lucide/astro`. `src/components/Icon.astro`
is a thin registry that maps a name string to a Lucide component plus the size
the design calls for, so content can reference icons by name (`icon: "atom"`)
rather than importing components — which is what the Sanity migration will need.

Adding an icon means one line in the `REGISTRY` map. Lucide removed its brand
icons in v1, so `github`, `linkedin` and `twitter` are local SVGs in
`src/icons/` — the glyphs from the Figma file, with `stroke-width` normalised
to Lucide's weight at 16px. If you ever want filled brand logos instead, that
is a `simple-icons` dependency.

## Generated assets

Both are committed, not built on deploy, so Netlify does no extra work.

### Social card

`public/og.jpg`, 1200x630. Rendered by screenshotting the `/og-card` route
with headless Chrome so it uses the real Inter webfont and the real tokens:

```bash
npm run dev   # in one shell
npm run og    # in another
```

[scripts/generate-og.js](scripts/generate-og.js) un-parks
`src/pages/_og-card.astro` for the capture and re-parks it afterwards, so the
card never ships as a public route. Edit that page to change the card.

### Favicons

Generated from `src/assets/avatar.jpg` — face-cropped, circular-masked:

```bash
npm run favicons
```

[scripts/generate-favicons.js](scripts/generate-favicons.js) writes
`favicon.svg` (scalable, JPEG payload in a circular clip), `favicon.ico`
(16/32/48), `favicon-32.png`, and `apple-touch-icon.png` (180px, on the site
background since iOS ignores alpha). Adjust `CROP` in that script if you swap
the photo, then re-run it.

## Content

Page content lives in two places, both intended as the seam for the future
Sanity migration:

- `src/data/*.ts` — work history, projects, uses. Plain typed arrays.
- `src/content/blog/*.md` — posts, via an Astro content collection.

`src/content.config.ts` defines the blog schema. When content moves to Sanity,
swap the `glob()` loader for a Sanity loader and replace the data modules with
queries; the schema there is the contract the pages already code against.

## Deployment

`netlify.toml` sets `npm run build` → `dist` on Node 22 and long-caches
`/_astro/*`. No adapter is needed — the site is fully static.
