import React from "react";
export function Tabs({ items = [], active, onChange, onDark = false, style }) {
  const [hover, setHover] = React.useState(null);
  const line = onDark ? "var(--tint-paper-16)" : "var(--border-hairline)";
  const mut = onDark ? "var(--tint-paper-64)" : "var(--text-muted)";
  const full = onDark ? "var(--paper)" : "var(--ink)";
  return (
    <div role="tablist" style={{ display: "flex", gap: 24, borderBottom: `1px solid ${line}`, fontFamily: "var(--font-text)", ...style }}>
      {items.map((it) => {
        const t = typeof it === "string" ? { id: it, label: it } : it;
        const on = t.id === active;
        return (
          <button key={t.id} role="tab" aria-selected={on} onClick={() => onChange && onChange(t.id)}
            onMouseEnter={() => setHover(t.id)} onMouseLeave={() => setHover(null)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "10px 2px 12px",
              font: `${on ? 500 : 400} 15px/1.3 var(--font-text)`, color: on || hover === t.id ? full : mut,
              boxShadow: on ? `inset 0 -2px 0 0 ${full}` : "none", transition: "color var(--dur-fast) var(--ease-out)" }}>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
