# Siteup — Website UI Kit

A faithful, interactive recreation of the Siteup single-page marketing site, composed entirely from the design system's primitives.

## Run it
Open `index.html`. It loads `../../styles.css` (tokens + fonts) and `../../_ds_bundle.js` (compiled components), then mounts the React app. The component code is inlined as `text/babel` blocks inside `index.html` (one per section group) so the kit renders self-contained — including inside the Design System tab's sandboxed card preview, which can't fetch external `.jsx` files.

## Sections (inline `text/babel` blocks in `index.html`)
| Block | Renders |
|---|---|
| Chrome | `Header` (sticky nav, language switch, CTA), `Footer` (oversized serif wordmark), `BgFields` (warm grid + glow) |
| Hero | Hero headline + CTAs, the **animated Terminal** launch sequence, and the 4-up stat strip |
| Sections | `Services` (numbered ledger + detail modal), `WhySiteup` (feature grid with Telegram demo), `Packages` (Launch/Growth/Premium), `CustomPricing`, `Projects` (websites / apps / automations), `Contact` (validated form) |

## What's interactive
- **Service rows** open a detail modal (click any row).
- **Contact form** validates (name + business + type + need required; phone *or* email required) and shows a sent state.
- **Nav links & CTAs** smooth-scroll to sections.
- **Terminal** types its launch log line-by-line when scrolled into view.

## Composition notes
The kit re-uses DS components rather than re-implementing them: `Button`, `Kicker`, `SectionHeading`, `Card`, `Badge`, `Tag`, `Stat`, `Terminal`, `Field`, `Select`. Layout-specific styling (hero grid, package grid, ledger rows) lives in the `<style>` block of `index.html` and references only design tokens.

## Asset notes
- `One Page Gift` (mp4) and the automation lead-monitor (png) use the real project media copied into `assets/projects/`.
- The two roofing site walkthroughs ship as `.mov` files that exceeded the import size limit, so those two cards use a warm browser-frame placeholder. Drop the real videos into `assets/projects/` and swap the `PvFrame` for a `<video>` to restore them.
