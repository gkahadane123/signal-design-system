Coded theme gradient (smooth CSS multi-bloom + grain) as a tile; for section backgrounds apply the class directly.

```jsx
<GradientTile theme="ember" label="Pricing" caption="Real-time competitive price intelligence" />
<section className="sig-grad-night">…Paper text, onDark buttons…</section>
```

Names by mood: **ember** (red/yellow, pricing) · **depth** (teal/blue, availability) · **current** (teal/red/blue, signal) · **bloom** (peach/blue/teal, assortment) · **glow** (peach/yellow/pink, digital shelf) · **night** (indigo/red, decision). Dark ones (depth, current, night, ember) take Paper text; light ones (bloom, glow) take Ink. PNG masters in `assets/gradients/` are for print/Figma only.
