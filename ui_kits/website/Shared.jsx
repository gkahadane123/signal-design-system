const dsGet = (n) => window.SignalDesignSystem_167090[n];
const Button = (p) => dsGet("Button")(p), Logo = (p) => dsGet("Logo")(p), Input = (p) => dsGet("Input")(p), Select = (p) => dsGet("Select")(p), Dialog = (p) => dsGet("Dialog")(p);

function Section({ width = 1200, style, innerStyle, children, ...rest }) {
  return <section style={style} {...rest}><div style={{ maxWidth: width, margin: "0 auto", padding: "0 32px", ...innerStyle }}>{children}</div></section>;
}

function NavLink({ label, active, onClick }) {
  const [h, setH] = React.useState(false);
  return <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }}
    onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ font: `${active ? 500 : 400} 15px/1 var(--font-text)`, color: active || h ? "var(--ink)" : "var(--text-muted)",
      textDecoration: "none", padding: "8px 2px", boxShadow: active ? "inset 0 -2px 0 0 var(--ink)" : "none" }}>{label}</a>;
}

function SiteHeader({ nav, setNav, onDemo }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--bg)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", gap: 32 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setNav("home"); }} style={{ display: "flex" }}><Logo height={34} base="../../assets" /></a>
        <nav style={{ display: "flex", gap: 24, flex: 1 }}>
          <NavLink label="Platform" active={nav === "platform"} onClick={() => setNav("platform")} />
          <NavLink label="About" active={nav === "about"} onClick={() => setNav("about")} />
        </nav>
        <Button variant="ghost" size="sm" onClick={() => setNav("platform")}>Explore the platform</Button>
        <Button size="sm" onClick={onDemo}>Request a demo</Button>
      </div>
    </header>
  );
}

function SiteFooter({ setNav }) {
  const col = { display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" };
  const lk = { font: "400 14px/1 var(--font-text)", color: "var(--tint-paper-64)", textDecoration: "none", cursor: "pointer" };
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", marginTop: 0 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48 }}>
        <div style={{ ...col, gap: 16 }}>
          <Logo variant="white" height={30} base="../../assets" />
          <p style={{ font: "400 14px/1.55 var(--font-text)", color: "var(--tint-paper-64)", maxWidth: 360 }}>
            The intelligence layer powering agentic retail. Founded 2012. Part of Omnicom since November 2025.</p>
        </div>
        <div style={col}><span className="t-label" style={{ color: "var(--tint-paper-64)" }}>Platform</span>
          {["Pricing", "Availability", "Assortment", "Digital shelf"].map((x) => <a key={x} style={lk} onClick={() => setNav("platform")}>{x}</a>)}</div>
        <div style={col}><span className="t-label" style={{ color: "var(--tint-paper-64)" }}>Company</span>
          <a style={lk} onClick={() => setNav("about")}>About</a><a style={lk} onClick={() => setNav("about")}>Newsroom</a><a style={lk} onClick={() => setNav("about")}>Careers</a></div>
      </div>
      <div style={{ borderTop: "1px solid var(--tint-paper-16)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 32px", display: "flex", justifyContent: "space-between", gap: 16 }}>
          <span style={{ font: "400 12.5px/1.4 var(--font-text)", color: "var(--tint-paper-64)" }}>© 2026 Intelligence Node. 34 markets · 100+ languages · 190,000+ brands.</span>
          <span style={{ font: "400 12.5px/1.4 var(--font-text)", color: "var(--tint-paper-64)" }}>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

function DemoDialog({ open, onClose, onSent }) {
  return (
    <Dialog open={open} title="Request a demo" onClose={onClose}
      footer={<><Button variant="ghost" onClick={onClose}>Cancel</Button><Button onClick={onSent}>Send request</Button></>}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={{ margin: 0, fontSize: 14.5, color: "var(--text-muted)" }}>See the intelligence layer on your own categories. We reply within one business day.</p>
        <Input label="Work email" placeholder="you@company.com" />
        <Select label="Primary market" options={["United States", "United Kingdom", "India", "Other"]} />
      </div>
    </Dialog>
  );
}

Object.assign(window, { Section, SiteHeader, SiteFooter, DemoDialog });
