Duotone icon from the 151-icon Intelligence Node set (`assets/icons/<slug>.svg`).

```jsx
<Icon name="shield-check" title="Verified" />        // 48px, ink + coral accent
<Icon name="realtime-clock" size={64} />
<Icon name="package-scan" mono />                    // single color
<Icon name="growth-arrow" accent="var(--aqua)" />    // signal accent
```

**Hard floor: 48px.** Sizes are 48 / 64 / 96. Ink comes from `currentColor` (`--icon-ink`, flips in dark mode); accent is coral and stays put. Never add a third color. Set `base` (like `Logo`) when consuming from another project. Slugs, categories and tags live in `assets/icons/index.json`; slugs are provisional pending sign-off of the source review sheet.
