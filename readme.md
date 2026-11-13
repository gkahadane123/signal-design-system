# Signal — the Intelligence Node design system

**Signal** is the design system for **Intelligence Node**, built for the 2028 "future ready" brand refresh (post Interpublic → Omnicom transition). Intelligence Node is the *intelligence layer* at the center of the digital shelf — real-time, trusted retail intelligence powering human and AI decisions. Not a generic AI vendor, not a pricing-only tool.

- **Core idea:** *The future will not be won by better AI alone. It will be won by better intelligence.*
- **Functional promise:** See change. Understand impact. Act with confidence.
- **Positioning (provisional-primary, per governance docs):** "The Intelligence Layer Powering Agentic Retail." The live site currently says "Real-Time Retail Decisions with AI" with Brand / Retailer / Data Intelligence™ product framing — an open item; this system follows the governance framing.
- Six intelligence themes carried by the gradient set: Pricing, Availability, Signal, Assortment, Digital shelf, Decision.

## Sources
- `uploads/signal_design_system.md` — the brand decision record (v2.0, final palette locked). Ground truth for every value here.
- `uploads/header-logo.svg`, `uploads/header-logo-white.svg` — official logo lockups (processed into `assets/`, see Iconography).
- `uploads/*_square.png` — the six official gradient PNGs (copied to `assets/gradients/`).
- Referenced but **not provided**: `intelligence-node-brand-guidelines.html`, `intelligence-node-home.html` (the living styleguide and homepage). The website UI kit here is composed from the decision record's art direction, not a recreation of those files.

## Content fundamentals
Voice: **confident and precise, never hype**. Speak with the authority of the data, not like a vendor chasing a trend. Empathy balanced with candor.

1. **Lead with the shift, not the sell** — frame the market reality first, then position Intelligence Node as the foundation. The urgency is real; don't inflate it.
2. **Precise over promotional** — specific, verified figures beat adjectives. Every external number must be VERIFIED in the Claims Register (MKTG-GOV-004) and cited in scope.
3. **Intelligence is the through-line** — every message ladders back to the core idea.

Mechanics: sentence case everywhere, including headlines and buttons (only tiny eyebrow labels are uppercase). Second person "you" for the customer; "we" sparingly. No emoji. No exclamation marks. Short declarative sentences: *"See change. Understand impact. Act with confidence."*

Vocabulary — use consistently: *agentic retail; intelligence layer; real-time, trusted intelligence; human and AI decisions.* Use with context: *agentic commerce; autonomous recommendations; AI agents; ACO.* Avoid: generic "data provider"/"pricing tool" framing; four-unrelated-products framing; buzzword stacks; unverified numbers; categorical superiority claims.

**Verified claims (usable, in scope):** +4,700% YoY growth in gen-AI traffic to US retail sites (*cite exactly: Adobe Analytics, July 2025*) · founded 2012 · 34 global markets · 100+ languages · 190,000+ brands · Interpublic Dec 2024, part of Omnicom Nov 2025 (boilerplate wording). **Conditional:** 99% accuracy (exact-match false positives only) · 10-second refresh (dataset-specific). **Hold — do not publish:** LLM research stats, 2030 projections, 1.6T+ price observations, ROI multiples, customer outcomes. **No customer names or logos** — none are permission-cleared.

## Visual foundations
- **Color:** 8 colors, 3 tiers — Coral `#FF6666` (primary; fill/display ONLY, never small text), Blush `#F5C4B3` / Astronaut `#28336F` / Reef `#123D3A` / Aqua `#3DE0C8` (secondary, marketing collateral; Aqua doubles as the semantic "signal"), Paper `#F2EFE9` / Surface `#FCFBF8` / Ink `#161418` (regular). **All UI tints derive from these eight via opacity** — borders, muted text, hovers; no other named colors exist. Warm neutrals throughout; cold white/pure black rejected as too clinical.
- **Contrast rules:** body text is Ink. **IMPORTANT: text on coral `#FF6666` fills is WHITE** (`--text-on-coral`) — brand owner's standing rule (supersedes the decision record's Ink-on-coral note; white-on-coral is 2.9:1, so keep coral-fill labels ≥14px medium and never body-length). Coral text on Paper fails (2.49:1) — fill only. Paper on Astronaut/Reef is AAA.
- **Gradients:** six coded gradients named by mood — **Ember** (red/yellow · pricing), **Depth** (teal/blue · availability), **Current** (teal/red/blue · signal), **Bloom** (peach/blue/teal · assortment), **Glow** (peach/yellow/pink · digital shelf), **Night** (indigo/red · decision) — smooth layered radial blooms (wide 75–90% falloffs, no hard edges) + feTurbulence grain (mandatory, ~40% of the premium read) in `tokens/gradients.css`, applied via `.sig-grad-<name>` classes and **used as full-bleed section backgrounds** (dark ones — ember, depth, current, night — take Paper text; bloom/glow take Ink). Legacy `.sig-grad-<theme>` ids still resolve. Extended hue set lives *only* inside gradients (`#E8443C #B83229 #F7EB46 #FF42BE #4B77FF #17B3A0 #FF8F6B #FFC9A8`) — never as standalone swatches, UI, or text. The 2400px sRGB PNG masters in `assets/gradients/` remain for print/Figma image fills. Anchor gradients inside the grid (framed figures, tiles, washes, sections) — never free-floating blobs.
- **Type:** **Neue Haas Grotesk Display Pro is the only typeface** (family `NHG Display Pro`); hierarchy from weight + size alone — 600 for headings ≥28px, 400 for body. **Inter remains only as a stack fallback** (see Caveats). No serif, no mono, no secondary faces.
- **Backgrounds:** **Paper is the primary background everywhere** — every page, screen, and slide canvas sits on Paper; Surface is reserved for elevated things ON Paper (cards, panels, inputs, dialogs) and is never a page or band background. Full-bleed alternatives: the 32px hairline **line-grid** on Paper — the brand's structural substrate, with technical framing (ticks, coordinate readouts, crosshairs) — or dark bands in Ink, Astronaut, or Reef with Paper text. Grid lines are neutral only, never coral.
- **Motion:** light pulses travel *along* grid lines — slow, sparse, purposeful. Floating particle-mesh backgrounds are explicitly rejected. Honor `prefers-reduced-motion` (static grid remains). Easing `--ease-out cubic-bezier(.2,.6,.2,1)`, durations 120/240/480ms.
- **Hover/press:** non-color cues where possible; hovers via opacity-derived tints (ink 4–8% washes, underline thickens); primary button darkens via an ink 8% overlay, press 12%; ghost buttons darken their brand-white fill the same way. Focus ring is 2px Aqua, offset 2px.
- **Borders & shadows:** hairline borders (`ink 12%`) everywhere; coral reserved for the primary action. Shadows warm and subtle: cards `0 1px 2px ink/4% + 0 8px 24px ink/6%`; popovers deeper. No inner shadows.
- **Radii:** buttons are fully rounded pills (`--radius-btn:999px`); inputs 8px, 12–16px cards, 6px chips/tags.
- **Layout:** 1200px container (760px narrow), 8px spacing rhythm, 32px grid unit. Content and gradients align to grid columns.
- **Imagery:** real human photography — buyers, merchandisers, store/ecommerce teams in real decision contexts. Documentary, candid, natural light, subtle warm grade to sit with Paper. No vector illustration, no rendered people, no staged stock. Align photos to grid columns. (No licensed photos shipped — use labeled placeholders.)
- **Transparency/blur:** none as a motif; tints are flat opacity washes. Header may sit on Paper with hairline border, no glassmorphism.
- **Dark mode:** secondary and in refinement — Ink background, Paper text, paper-opacity tints. Light is primary and stable.

## Iconography
- **Logo:** the official mark is a dot-density sphere — coral dots aggregating into a signal — plus wordmark. `assets/header-logo.svg` (color lockup), `assets/header-logo-white.svg` (white lockup), `assets/monogram.svg` (sphere alone, coral/blush, for light backgrounds), `assets/monogram-white.svg` (sphere alone, white, for dark/gradient backgrounds). Colors are baked as per-path fills (recolored `#F16667`→`#FF6666` per spec §15.5). On slides, the monogram sits top-left of content slides; full lockups bookend covers/closings. Never rebuild the dots; clear space = dot-cluster radius; never on mid-tone backgrounds.
- **Icon set:** the brand ships a **151-icon duotone line set** (`assets/icons/*.svg`, index in `assets/icons/index.json`), extracted from `icons_product page.ai`. **96px grid, 3px stroke, round cap/join, 2px content margin, accent dot r=7.5px (5× stroke).** Two colors only: ink `#4D4F5C` (emitted as `currentColor`, flips to `#E8E9ED` in dark mode) carries structure, coral `#FF6666` (`--icon-accent`) marks the icon's *subject* — the thing it's about, never decoration. Never a third color; `mono` collapses accent to `currentColor`. **Hard floor: 48px** — sizes 48 / 64 / 96; a 3px stroke on a 96 grid renders 0.75px at 24px and disintegrates, so a small tier needs an optical 2px redraw, not a scale-down. 13 categories: Commerce & Retail 25 · Status & Markers 19 · Analytics 17 · Finance 13 · Actions & Navigation 12 · Logistics 12 · People & Support 11 · Media & Files 10 · Data 9 · Shapes & Layout 9 · Time 6 · Devices 5 · Developer 3. Use via the `Icon` component (`<Icon name="shield-check" />`). The brand's other graphic vocabulary remains *technical framing*: hairline ticks, crosshairs, coordinate readouts, and signal dots echoing the logo. No CDN icon set is used — do not substitute Lucide or similar.
- No emoji, ever. Unicode arrows (→) are used in links/CTAs.

## Components
`components/` — React primitives, styled entirely from tokens. Spec-defined: Button (primary coral fill + white label; ghost hairline), Input, Card, Tag/chip. Standard set authored around them (no component source existed): Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip.

**Intentional additions** (brand-specific, one-line reasons):
- `Logo` — correct-variant lockup picker (color/white) from `assets/`.
- `LineGrid` — the 32px grid substrate w/ optional pulses + technical framing; core brand motif.
- `GradientTile` — places the six official gradient PNGs as image fills with theme label (spec forbids CSS rebuilds).
- `Stat` — big verified number + mandatory source line; encodes claims governance.

## Index
- `styles.css` — global entry; imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `gradients.css`, `icons.css`, `fonts.css`, `base.css`.
- `assets/` — logo SVGs (+ monograms), `gradients/*.png` (six themes, print masters), `icons/` (151 duotone SVGs + `index.json`).
- `guidelines/` — foundation specimen cards (Design System tab).
- `components/forms/` — Button, Input, Select, Checkbox, Radio, Switch.
- `components/display/` — Card, Tag, Stat.
- `components/overlay/` — Dialog, Toast, Tooltip.
- `components/navigation/` — Tabs.
- `components/brand/` — Logo, LineGrid, GradientTile.
- `components/icons/` — Icon (151-icon duotone set).
- `ui_kits/website/` — marketing-site kit: Home, Platform, About (click-through).
- `templates/brand-guidelines-v02/` — Brand Guidelines v02 deck (14 slides, Signal edition of the v01 PPTX).
- `templates/deck-master-v02/` — Deck Master v02 (13 reusable slide layouts restyled from the v01 PPTX).
- `notes/` — text extractions of the two v01 PPTX decks.
- `SKILL.md` — agent-skill entry point.

## Caveats
- **Icon caveats:** icon slugs are **provisional** — inferred from artwork, not read from the source file (sign off `uploads/icon-library/REVIEW-184-icons.csv` to freeze them). Stroke weight can be *increased* on all icons but *decreased* on only 82 of 151 (the rest have outlines expanded in Illustrator); `assets/icons/index.json` carries `parametric` and `minStroke` per icon. Four "Illustrations" entries from the source were mockups, not icons — excluded. Ink `#000000` (the source's competing theme, 65 icons) is retired in favor of `#4D4F5C`; legacy accents `#FE7774 #FD7474 #FF6562` are retired in favor of `#FF6666`.
- **Fonts:** the family is **NHG Display Pro** — licensed Display Pro OTFs self-hosted in `fonts/` (35 XLt → 200, 45 Lt → 300, 55 Rg → 400, 65 Md → 500–600, 75 Bd → 700, 95 Blk → 800–900). The TX Pro TTFs also in `fonts/` are unused spares. Inter remains only as a stack fallback.
- Homepage/guidelines HTML referenced in the spec were not attached; the website kit is spec-derived, not a pixel recreation.
- Dark mode tokens exist but are provisional (spec: "in refinement").
- No error/warning colors exist in the palette by design; pair Ink text + icon for validation states.
