const dspGet = (n) => window.SignalDesignSystem_167090[n];
const Button = (p) => dspGet("Button")(p), Stat = (p) => dspGet("Stat")(p), Tag = (p) => dspGet("Tag")(p), GradientTile = (p) => dspGet("GradientTile")(p), Tabs = (p) => dspGet("Tabs")(p);

const PLATFORM = {
  Pricing: { theme: "ember", copy: "Track competitive price movements across 190,000+ brands. Exact matches at 99% accuracy (exact-match false positives), refreshed continuously.", tags: ["Price index", "Promotions", "MAP"] },
  Availability: { theme: "depth", copy: "In-stock, out-of-stock and fulfillment signals across markets — before they show up in lost sales.", tags: ["OOS alerts", "Regional coverage"] },
  Signal: { theme: "current", copy: "Change detection across the market. The layer watches so your teams and agents respond to what matters.", tags: ["Alerts", "Anomalies"] },
  Assortment: { theme: "bloom", copy: "Range gaps and overlaps mapped against every competitor, in 34 markets and 100+ languages.", tags: ["Gap analysis", "Range depth"] },
  "Digital shelf": { theme: "glow", copy: "Search rank, content quality and share of shelf — seen the way shoppers and AI agents see it.", tags: ["Share of search", "Content"] },
  Decision: { theme: "night", copy: "Verified intelligence routed into workflows, BI and agent frameworks, so actions inherit the evidence.", tags: ["API", "Exports", "Agents"] },
};

function PlatformScreen({ onDemo }) {
  const [tab, setTab] = React.useState("Pricing");
  const d = PLATFORM[tab];
  return (
    <main>
      <Section style={{ borderBottom: "1px solid var(--border-hairline)" }} innerStyle={{ padding: "72px 32px 56px", display: "flex", flexDirection: "column", gap: 20 }}>
        <span className="t-label" style={{ color: "var(--text-muted)" }}>Platform</span>
        <h1 className="t-display-2" style={{ maxWidth: 760, textWrap: "balance" }}>Real-time, trusted intelligence for human and AI decisions</h1>
        <p className="t-body-lg" style={{ maxWidth: 620, color: "var(--text-muted)" }}>One integrated layer at the center of the digital shelf. Six themes, one foundation of evidence.</p>
      </Section>
      <Section innerStyle={{ padding: "48px 32px 88px", display: "flex", flexDirection: "column", gap: 32 }}>
        <Tabs items={Object.keys(PLATFORM)} active={tab} onChange={setTab} />
        <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 40, alignItems: "start" }}>
          <GradientTile theme={d.theme} radius="var(--radius-card)" />
          <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 8 }}>
            <h2 className="t-heading">{tab}</h2>
            <p className="t-body-lg" style={{ maxWidth: 560 }}>{d.copy}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{d.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <Button onClick={onDemo}>Request a demo</Button>
              <Button variant="ghost">Read the methodology</Button>
            </div>
          </div>
        </div>
      </Section>
      <section className="sig-grad-depth" style={{ color: "var(--paper)" }}>
        <Section innerStyle={{ padding: "80px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="t-label" style={{ color: "var(--tint-paper-64)" }}>Why it holds</span>
            <h2 className="t-display-2" style={{ textWrap: "balance" }}>Precise over promotional</h2>
            <p className="t-body" style={{ color: "var(--tint-paper-64)", maxWidth: 480 }}>
              Every external number is verified and cited in scope. Accuracy claims are scoped to exact-match
              false positives; refresh rates are dataset-specific. The authority is the data's, not ours.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <Stat onDark value="99%" label="exact-match accuracy" source="exact-match false positives only" />
            <Stat onDark value="10s" label="refresh" source="dataset-specific" />
            <Stat onDark value="34" label="markets" />
            <Stat onDark value="2012" label="operating since" />
          </div>
        </Section>
      </section>
      <Section innerStyle={{ padding: "96px 32px", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
        <h2 className="t-display-2" style={{ maxWidth: 620, textWrap: "balance" }}>See it on your categories</h2>
        <Button size="lg" onClick={onDemo}>Request a demo</Button>
      </Section>
    </main>
  );
}
window.PlatformScreen = PlatformScreen;
