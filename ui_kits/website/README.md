# Website UI kit

Spec-derived marketing site for Intelligence Node (the referenced `intelligence-node-home.html` was not attached, so this composes the decision record's art direction: line-grid hero with pulses, six gradient themes anchored in the grid, verified claims only, governance positioning).

- `index.html` — interactive shell; header nav switches Home / Platform / About; demo-request dialog + toast.
- `Shared.jsx` — SiteHeader, SiteFooter, Section, DemoDialog.
- `Home.jsx`, `Platform.jsx`, `About.jsx` — screens.

All primitives come from the compiled bundle (`window.SignalDesignSystem_167090`); nothing is re-implemented.
