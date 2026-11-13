---
name: signal-design
description: Use this skill to generate well-branded interfaces and assets for Intelligence Node (Signal design system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `readme.md` at the root of this skill first — it is the full design guide (brand context, content fundamentals, visual foundations, iconography, component and template index). Then explore:

- `styles.css` — the only stylesheet to link; it `@import`s everything in `tokens/` (colors, typography, spacing, effects, gradients, icons, fonts, base).
- `fonts/` — self-hosted Neue Haas Grotesk Display Pro OTFs (referenced by `tokens/fonts.css`).
- `assets/` — logo lockups, monograms, `icons/` (151 duotone SVGs + `index.json` manifest), `gradients/` PNG masters for print.
- `components/<group>/` — React primitives (`.jsx` + `.d.ts` props contract + `.prompt.md` usage note). Groups: forms, display, overlay, navigation, brand.
- `guidelines/*.html` — foundation specimen cards (colors, type, spacing, grid, motion, brand, gradients, icons).
- `ui_kits/website/` — full marketing-site recreation composed from the primitives.
- `templates/` — Deck Master v02 (20 sales slide layouts) and Brand Guidelines v02 (14 slides).
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Non-negotiable brand rules: Paper #F2EFE9 is the primary background for every page/screen/slide (Surface #FCFBF8 only for cards, panels and controls sitting on Paper — never as a page background); coral #FF6666 is fill/display only (never small text; IMPORTANT — text on coral fills is WHITE, token --text-on-coral); all buttons are pill-rounded and ghost buttons are brand-white Surface fill with Ink label on every background; section backgrounds may use the six coded gradients (.sig-grad-ember/depth/current/bloom/glow/night in tokens/gradients.css — grain included, never rebuild ad hoc); all UI tints derive from the 8 palette colors via opacity; icons come ONLY from the 151-icon duotone set in assets/icons (96 grid, 3px stroke, ink #4D4F5C + coral accent, NEVER below 48px — no Lucide/Heroicons substitutes, no hand-drawn SVG); Neue Haas Grotesk Display Pro only (self-hosted in fonts/), hierarchy by weight/size; grid lines neutral, never coral; no emoji; only Claims-Register-verified numbers, cited in scope; no customer names or logos.
