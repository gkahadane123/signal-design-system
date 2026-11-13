import React from "react";
const NAMES = ["ember", "depth", "current", "bloom", "glow", "night"];
const LEGACY = { pricing: "ember", availability: "depth", signal: "current", assortment: "bloom", "digital-shelf": "glow", decision: "night" };
export function GradientTile({ theme = "current", label, caption, ratio = "1", radius = "var(--radius-card-sm)", children, style }) {
  const t = NAMES.includes(theme) ? theme : (LEGACY[theme] || "current");
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-text)", ...style }}>
      <div className={`sig-grad-${t}`} style={{ position: "relative", aspectRatio: ratio, borderRadius: radius, overflow: "hidden" }}>
        {children && <div style={{ position: "absolute", inset: 0, display: "flex", padding: 20 }}>{children}</div>}
      </div>
      {(label || caption) && <figcaption style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {label && <span style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)" }}>{label}</span>}
        {caption && <span style={{ fontSize: 12.5, color: "var(--tint-ink-64)", lineHeight: 1.45 }}>{caption}</span>}
      </figcaption>}
    </figure>
  );
}
