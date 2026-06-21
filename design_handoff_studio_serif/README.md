# Handoff: Siteup — "Studio Serif" Website Redesign

## Overview

This package hands off the new **Studio Serif** brand direction for **Siteup** (a tech development studio serving local businesses — websites, online-presence setup, custom apps, workflow automation, AI agents). The goal of the implementation task is to **rebuild the existing live marketing site** (`www.siteup.com.au`, a single static `index.html` deployed via GitHub Pages from the `Abdulloh-123/Siteup` repo) in this new light, warm, editorial direction — then commit and push.

The current production site uses a dark "blueprint" look. This redesign keeps the same content and structure but moves to: **warm cream paper surfaces, editorial Newsreader serif headlines, Hanken Grotesk body, IBM Plex Mono technical labels, a terracotta (clay) accent with deep pine for trust, soft corners, warm shadows, and the "[S]" bracket logo.**

## About the design files

The files in `design_files/` are **design references created in HTML** — a prototype showing the intended look, layout, and behavior. They are **not** meant to be copied to production verbatim. The task is to **recreate this design in the live `index.html`** using its existing vanilla HTML/CSS/JS structure (the site is a hand-written single file, no framework), preserving its existing content map (including the trilingual EN/RU/UZ switching if present) while replacing the visual layer.

If you prefer, you may refactor the production site to pull the design tokens from a shared `styles.css` (provided here) rather than inlining everything — but matching the existing single-file deployment model is fine and lowest-risk for GitHub Pages.

## Fidelity

**High-fidelity (hifi).** Colors, typography, spacing, radii, shadows, and interactions below are final. Recreate the UI pixel-accurately. Where the live site has sections not shown in the prototype, apply the same token system and component patterns to style them consistently.

## Design tokens

All values are also in `design_files/styles.css` → `tokens/*.css` as CSS custom properties (link `styles.css` and use the variables directly).

### Color
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F3EFE6` | Page — warm cream paper |
| `--bg-2` | `#FBF8F2` | Raised card / panel |
| `--bg-3` | `#ECE7DB` | Sunken inset / subtle fill |
| `--paper` | `#FFFFFF` | Pure white — product mock screens |
| `--ink` | `#1A1714` | Primary text — warm near-black |
| `--dim` | `#4D463F` | Secondary text |
| `--faint` | `#948C80` | Tertiary / mono captions |
| `--clay` | `#C9482E` | **Primary accent** (terracotta) |
| `--clay-deep` | `#A93A22` | Hover / pressed |
| `--pine` | `#14564B` | Secondary — trust / "done" / success |
| `--ochre` | `#B3792A` | Sequence accent |
| `--slate` | `#3E5C72` | Sequence accent |
| `--on-accent` | `#FBF6EE` | Text on clay/ink fills |
| `--hair` | `rgba(26,23,20,0.10)` | Hairline border |
| `--hair-strong` | `rgba(26,23,20,0.17)` | Stronger hairline |
| `--clay-dim` | `rgba(201,72,46,0.10)` | Tinted clay fill |
| `--pine-dim` | `rgba(20,86,75,0.10)` | Tinted pine fill |

Signature gradients (use sparingly): `--grad` = `linear-gradient(118deg,#cf4e30,#b53c22)` (clay fill); `--grad-text` = `linear-gradient(100deg,#14564b,#c9482e)` (pine→clay, background-clip:text on 1–2 words).

### Typography
- **Display / headings:** `Newsreader`, serif. Weight **500**, line-height **1.04–1.12**, letter-spacing **-0.01em**. Sizes: hero `clamp(2.6rem,6.4vw,5rem)`, section h2 `clamp(1.9rem,4vw,2.9rem)`. One or two emphasis words may be *italic* in `--pine`.
- **Body / UI:** `Hanken Grotesk`, sans. Weights 300–700. Body 400 at `1rem`, line-height **1.6**. Buttons/UI medium **500**, sentence case.
- **Labels / meta / console:** `IBM Plex Mono`. UPPERCASE, letter-spacing **0.06–0.16em**. Sizes `0.66–0.72rem`.
- Load via Google Fonts:
  `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Hanken+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap`

### Spacing & layout
- 8px-based scale: 4, 8, 12, 16, 20, 28, 34, 44, 60, 90, 130 px (`--sp-1`…`--sp-11`).
- Content max-width **1200px**, page gutter **28px**, section vertical rhythm **~130px**.

### Radii
- `--radius-sm 2px` (buttons, inputs, tags) · `--radius-md 6px` (cards, panels, mock screens) · `--radius-lg 10px` (large surfaces) · `--radius-pill 999px` (dots, pills, avatars). Hairline panel grids stay at `0`.

### Shadows (warm)
- `--shadow-card: 0 1px 2px rgba(26,23,20,.05), 0 14px 30px -18px rgba(26,23,20,.22)` (resting card)
- `--shadow-raise: 0 2px 4px rgba(26,23,20,.06), 0 22px 44px -22px rgba(26,23,20,.3)` (card hover)
- `--shadow-panel: 0 24px 60px -28px rgba(26,23,20,.4)` (hero console)
- `--shadow-btn: 0 12px 26px -10px rgba(201,72,46,.5)` (primary button hover glow)

### Motion
- One easing curve: `--ease: cubic-bezier(0.22, 1, 0.36, 1)`. Durations 0.25–0.35s.
- Signature hover: **2px lift** (`translateY(-2px)`). Solid buttons deepen to `--clay-deep` + clay glow; line buttons fill `--clay-dim` + clay border/text. Cards raise from `--bg-2` to `--paper`. Links grow a clay underline from the left. Service rows slide right + grow a clay gradient underline.
- Respect `prefers-reduced-motion`. No bounces, no infinite decorative loops (except the live-status dot + console typing).

## Screens / views

The site is **one long single-page** marketing site with a sticky header and these sections, in order. (See `design_files/website/index.html` for the exact, interactive reference.)

### Header (sticky)
- **Layout:** 1200px max, 18×28px padding, flex space-between. Transparent at top; on scroll gains `--glass-header` (`rgba(243,239,230,0.8)`) + 14px backdrop-blur + bottom hairline.
- **Logo (left):** the `[S]` bracket mark (inline SVG, see Assets) + `Siteup` wordmark in Newsreader 500 with a clay full-stop `.`.
- **Nav (center/right):** Services · Packages · Projects · Contact — Hanken 0.93rem, `--dim`, hover → `--ink` with a clay underline growing from the left.
- **Right:** language switch (EN/RU/UZ) as a hairline-bordered mono segmented control (clay-dim active state), then a primary CTA "Request Consultation" — ink fill, cream text, 2px radius, hover → clay fill + 1px lift.

### Hero
- **Layout:** 1200px, ~110px top padding. Crosshair "tick" details in the top corners. Headline block + a two-column row (sub/CTAs left, nothing right) leading into a full-width console panel.
- **Headline:** Newsreader 500, `clamp(2.7rem,6.6vw,5.1rem)`, e.g. *"Websites and digital systems for local business."* with "local business" optionally italic in pine.
- **Sub:** Hanken 400, `--dim`, ~480px max.
- **CTAs:** primary "Request Free Consultation" (clay solid) + secondary "View Packages" (line) + a mono "call" chip.
- **Console (Terminal):** white panel, 6px radius, `--shadow-panel`, top hairline light line. Window chrome (3 hairline dots) + title + a pine "Live" status dot. Body is IBM Plex Mono, types out launch lines on load (`→` results, `✓` in pine). Reduced-motion shows final state.
- **Stat strip:** 4-up grid, hairline top/bottom + left dividers. Each: serif value (`2rem`, color-coded clay/pine/ochre/slate) + mono uppercase caption.

### Services
- Numbered **ledger**: hairline-separated rows, grid `80px 1.1fr 1.6fr 48px`. Each row: mono number `/01`, Hanken-medium title, `--dim` description, a diagonal ↗ arrow. Hover: row slides right 18px, title → clay, arrow translates, a clay gradient underline grows full-width. Click opens a **detail modal**.
- **Modal:** centered, ink+blur backdrop, white dialog (6px radius, `--shadow-modal`, clay corner-glow), serif title, mono `//` aside, bulleted clay-square list, CTA.

### Why Siteup
- Feature grid (3 cols, 1px-gap panel grid). One **lead cell** spans 2 rows with a pine gradient fill (`--pine`→`--pine-deep`), cream text, and a small Telegram-style chat demo. Other cells: `--bg-2`, mono "Reason / 0X" eyebrow, Hanken-medium title, `--dim` body; hover → `--paper`.

### Packages
- 3-up pricing (1px-gap grid). Featured card gets a clay corner-glow + white surface. Each: mono name, serif price (`3.4rem`, clay currency mark), `--dim` "for whom", `+`-bulleted feature list, fine-print with a clay left-border, CTA. (Launch / Growth / Premium.)

### Custom pricing
- Full-bleed band with clay+pine radial washes, top/bottom hairlines. Left: serif headline + body. Right: 1px-gap list of items (mono index chip + title + body). Footer row with CTA.

### Projects
- Grouped by **Websites / Apps / Automations**, each group a hairline header (serif title + mono count + rule). Cards in 1px-gap grids. Featured cards use real media (`<video>`/`<img>` from `assets/projects/`); others use a warm browser-frame placeholder. Card: mono category, Hanken-medium title, `--dim` desc, a pine mono result line, tag pills, a clay mono link.
- **Real client projects:** Turon Roofing, Black Star Roofing (websites), One Page Gift (web app), Lead Monitor (automation). Media files are in the original repo's `V/` folder (`.mov`/`.mp4`/`.png`).

### Contact
- 2-col (1px-gap). Left: clay-glow inset, serif heading, clay phone link, pitch, mono meta list (`—` prefixed). Right: form on `--bg-2` — underline `Field`/`Select` inputs (bottom-border only, clay on focus), mono note, validated submit with mono status (pine ok / red error).

### Footer
- Top hairline. Oversized serif `Siteup.` wordmark in `rgba(26,23,20,0.1)` (clay dot at 0.55). Mono uppercase link columns (hover → clay). Bottom hairline row with mono copyright/meta.

## Interactions & behavior
- **Sticky header** toggles `.scrolled` (glass + blur + hairline) past ~10px scroll.
- **Smooth scroll** nav with ~70px offset for the sticky header.
- **Services modal:** open on row click, close on ✕ / backdrop / Esc; fade 0.28s.
- **Console:** type-on-load line sequence; gate behind `prefers-reduced-motion`.
- **Language switch:** EN/RU/UZ swaps copy (preserve the existing site's mechanism + strings).
- **Contact form:** require name + (phone OR email); inline mono status; no real backend needed for the static site (wire to the existing handler / mailto / form service).
- **Hover/press:** 2px lift everywhere; no shrink-on-press; focus shows a clay outline.
- **Responsive:** single-column below ~1000px; nav collapses; stat/why/package grids reflow (see the prototype's `@media` block).

## Assets
- **Logo** (`design_files/assets/`): `logo-lockup.svg` (mark + wordmark), `logo-mark.svg` ([S] bracket), `logo-mark-reversed.svg` (cream S for dark), `logo-wordmark.svg`, `favicon.svg` (ink app-chip). These set the *S* as live Newsreader text — **convert to outlines** before generating a `.ico` or any non-web use. Inline the bracket SVG in the header for crisp `currentColor`-style control (see prototype).
- **Project media:** reuse the originals from the repo `V/` folder.
- **Fonts:** Google Fonts (link above). No self-hosted binaries required for GitHub Pages.
- **Icons:** none beyond mono glyphs (`✓ → × // + —`) and the diagonal arrow / select chevron drawn as simple inline SVG (1.5–1.8px stroke, `currentColor`). Do **not** add an icon library.

## Files in this package
- `design_files/website/index.html` — full interactive prototype (the primary reference; component code is inlined as `text/babel` blocks).
- `design_files/website/README.md` — kit notes.
- `design_files/styles.css` + `design_files/tokens/*.css` — the token system (link `styles.css`, use the variables).
- `design_files/assets/*.svg` — logo + favicon.
- `design_files/logo-spec.html` — logo lockup, clear space, colorways, sizing, do/don't.
- `design_files/business-card.html` — stationery (front/back, print spec) — bonus, not part of the site.
- The full design system (components, foundation cards, guidelines) lives in the parent project and is summarized in its root `README.md` + `SKILL.md` — point Claude Code at those for the complete brand reference.

## Suggested implementation steps (GitHub Pages, single file)
1. In the `Abdulloh-123/Siteup` repo, branch off `main` (e.g. `redesign/studio-serif`).
2. Add the Google Fonts `<link>` and set the page base styles (cream bg, ink text, Hanken body).
3. Port the token values (colors/type/spacing/radii/shadows/motion) into a `:root` block (or link the provided `styles.css`).
4. Replace section-by-section, top to bottom, matching the prototype: header → hero+console → services(+modal) → why → packages → custom → projects → contact → footer. Keep existing copy + language strings.
5. Swap the favicon + inline the `[S]` header logo.
6. Verify responsive breakpoints + `prefers-reduced-motion`; test the language switch and contact form still work.
7. Commit, open a PR, review the diff, merge → GitHub Pages redeploys `www.siteup.com.au`.
