import React from "react";
export function Tag({ tone = "neutral", withDot = false, children, style }) {
  const looks = {
    neutral: { background: "var(--tint-ink-6)", color: "var(--ink)" },
    outline: { background: "transparent", color: "var(--ink)", border: "1px solid var(--border-strong)" },
    signal: { background: "var(--tint-aqua-16)", color: "var(--ink)" },
    coral: { background: "var(--tint-coral-12)", color: "var(--ink)" },
    dark: { background: "var(--tint-paper-16)", color: "var(--paper)" },
  }[tone];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: "var(--radius-chip)",
      padding: "3px 9px", font: "500 12.5px/1.4 var(--font-text)", whiteSpace: "nowrap", ...looks, ...style }}>
      {withDot && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", flex: "none",
        background: tone === "signal" ? "var(--aqua)" : tone === "coral" ? "var(--coral)" : "currentColor" }}></span>}
      {children}
    </span>
  );
}
