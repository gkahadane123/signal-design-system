import React from "react";
export function Stat({ value, label, source, size = "md", onDark = false, style }) {
  const vs = { sm: 30, md: 44, lg: 64 }[size];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, fontFamily: "var(--font-text)", color: onDark ? "var(--paper)" : "var(--ink)", ...style }}>
      <span style={{ font: `600 ${vs}px/1.02 var(--font-display)`, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{value}</span>
      {label && <span style={{ fontSize: 15, lineHeight: 1.4 }}>{label}</span>}
      {source && <span style={{ fontSize: 12.5, lineHeight: 1.4, color: onDark ? "var(--tint-paper-64)" : "var(--text-muted)" }}>{source}</span>}
    </div>
  );
}
