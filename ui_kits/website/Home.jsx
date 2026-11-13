const dshGet = (n) => window.SignalDesignSystem_167090[n];
const Button = (p) => dshGet("Button")(p), Stat = (p) => dshGet("Stat")(p), Tag = (p) => dshGet("Tag")(p), GradientTile = (p) => dshGet("GradientTile")(p), LineGrid = (p) => dshGet("LineGrid")(p);

const THEME_COPY = [
  ["ember", "Pricing", "Competitive price movements across the shelf, matched with 99% exact-match accuracy."],
  ["depth", "Availability", "In-stock and out-of-stock signals before they become lost sales."],
  ["current", "Signal", "Change detection across the market — surfaced the moment it matters."],
  ["bloom", "Assortment", "Gaps and overlaps in range, mapped against everyone you compete with."],
  ["glow", "Digital shelf", "Search rank, content and share of shelf, seen the way agents see it."],
  ["night", "Decision", "Intelligence routed to the people — and the AI agents — who act on it."],
];

function HomeScreen({ onDemo, setNav }) {
  return (
    <main>
      <LineGrid framing coords="x:000 y:000" style={{ borderBottom: "1px solid var(--border-hairline)" }}>
        <Section innerStyle={{ padding: "104px 32px 88px", display: "flex", flexDirection: "column", gap: 28, alignItems: "flex-start" }}>
          <Tag tone="signal" withDot>Agentic retail</Tag>
          <h1 className="t-display-1" style={{ maxWidth: 820, textWrap: "balance" }}>The intelligence layer powering agentic retail</h1>
          <p className="t-body-lg" style={{ maxWidth: 560, color: "var(--text-muted)" }}>
            Generative-AI traffic to US retail sites is up 4,700% year over year. When agents shop the shelf,
            the future is not won by better AI alone — it is won by better intelligence.</p>
          <div style={{ display: "flex", gap: 12 }}>
            <Button size="lg" onClick={onDemo}>Request a demo</Button>
            <Button size="lg" variant="ghost" onClick={() => setNav("platform")}>Explore the platform</Button>
          </div>
        </Section>
      </LineGrid>
      <Section style={{ borderBottom: "1px solid var(--border-hairline)" }}
        innerStyle={{ padding: "40px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
        <Stat size="sm" value="+4,700%" label="gen-AI traffic to US retail, YoY" source="Adobe Analytics, July 2025" />
        <Stat size="sm" value="34" label="global markets" />
        <Stat size="sm" value="100+" label="languages" />
        <Stat size="sm" value="190,000+" label="brands tracked" />
      </Section>
      <Section innerStyle={{ padding: "88px 32px 96px", display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="t-label" style={{ color: "var(--text-muted)" }}>One layer</span>
            <h2 className="t-display-2" style={{ maxWidth: 560 }}>Six intelligence themes</h2>
          </div>
          <Button variant="ghost" onClick={() => setNav("platform")}>See how it works →</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {THEME_COPY.map(([t, l, c]) => <GradientTile key={t} theme={t} label={l} caption={c} />)}
        </div>
      </Section>
      <section style={{ background: "var(--reef)", color: "var(--paper)" }}>
        <Section innerStyle={{ padding: "88px 32px", display: "flex", flexDirection: "column", gap: 48 }}>
          <h2 className="t-display-2" style={{ maxWidth: 720, textWrap: "balance" }}>See change. Understand impact. Act with confidence.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {[["See change", "Real-time, trusted intelligence across pricing, availability, assortment and the digital shelf."],
              ["Understand impact", "Signals connected to categories, competitors and outcomes — not raw feeds."],
              ["Act with confidence", "Decisions made by your teams and your AI agents on the same verified foundation."]].map(([t, c], i) => (
              <div key={t} style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid var(--tint-paper-16)", paddingTop: 20 }}>
                <span className="t-caption t-data" style={{ color: "var(--tint-paper-64)" }}>0{i + 1}</span>
                <span className="t-title">{t}</span>
                <p className="t-small" style={{ color: "var(--tint-paper-64)" }}>{c}</p>
              </div>))}
          </div>
        </Section>
      </section>
      <section className="sig-grad-night" style={{ color: "var(--paper)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
          <h2 className="t-display-2" style={{ maxWidth: 640, textWrap: "balance" }}>Put the intelligence layer under your decisions</h2>
          <div style={{ display: "flex", gap: 12 }}>
            <Button size="lg" onClick={onDemo}>Request a demo</Button>
            <Button size="lg" variant="ghost" onDark onClick={() => setNav("platform")}>Explore the platform</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
window.HomeScreen = HomeScreen;
