const dsaGet = (n) => window.SignalDesignSystem_167090[n];
const Button = (p) => dsaGet("Button")(p), Stat = (p) => dsaGet("Stat")(p), Card = (p) => dsaGet("Card")(p);

function AboutScreen({ onDemo }) {
  const ph = { borderRadius: "var(--radius-card-sm)", border: "1px dashed var(--border-strong)", background: "var(--tint-ink-4)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 16 };
  return (
    <main>
      <Section style={{ borderBottom: "1px solid var(--border-hairline)" }} innerStyle={{ padding: "72px 32px 56px", display: "flex", flexDirection: "column", gap: 20 }}>
        <span className="t-label" style={{ color: "var(--text-muted)" }}>About</span>
        <h1 className="t-display-2" style={{ maxWidth: 780, textWrap: "balance" }}>Better decisions require better intelligence</h1>
        <p className="t-body-lg" style={{ maxWidth: 640, color: "var(--text-muted)" }}>
          Since 2012 we have built the intelligence layer at the center of the digital shelf — not a generic AI
          vendor, not a pricing-only tool. Real-time, trusted intelligence for the people and agents who decide.</p>
      </Section>
      <Section innerStyle={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {[["2012", "Founded", "Intelligence Node begins indexing the digital shelf."],
          ["Dec 2024", "Interpublic", "Acquired by Interpublic Group."],
          ["Nov 2025", "Omnicom", "Part of Omnicom following the Interpublic transition."]].map(([y, t, c]) => (
          <Card key={y} padding={22}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-caption t-data" style={{ color: "var(--text-muted)" }}>{y}</span>
              <span className="t-title">{t}</span>
              <p className="t-small" style={{ color: "var(--text-muted)" }}>{c}</p>
            </div>
          </Card>))}
      </Section>
      <Section innerStyle={{ padding: "16px 32px 72px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 24 }}>
        <div style={{ ...ph, minHeight: 260 }}><span className="t-caption">Photography placeholder — buyers and merchandisers in real decision contexts. Documentary, natural light, warm grade.</span></div>
        <div style={ph}><span className="t-caption">Store team, candid</span></div>
        <div style={ph}><span className="t-caption">Ecommerce team, natural light</span></div>
      </Section>
      <section style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <Section innerStyle={{ padding: "72px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
          <Stat onDark size="sm" value="34" label="global markets" />
          <Stat onDark size="sm" value="100+" label="languages" />
          <Stat onDark size="sm" value="190,000+" label="brands tracked" />
          <Stat onDark size="sm" value="+4,700%" label="gen-AI retail traffic, YoY" source="Adobe Analytics, July 2025" />
        </Section>
      </section>
      <Section innerStyle={{ padding: "96px 32px", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
        <h2 className="t-display-2" style={{ maxWidth: 620, textWrap: "balance" }}>Decide with the layer beneath the shelf</h2>
        <Button size="lg" onClick={onDemo}>Request a demo</Button>
      </Section>
    </main>
  );
}
window.AboutScreen = AboutScreen;
