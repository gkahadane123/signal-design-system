import React from "react";
export function Toast({ message, detail, tone = "neutral", onDismiss, style }) {
  return (
    <div role="status" style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "var(--ink)", color: "var(--paper)",
      borderRadius: "var(--radius-card-sm)", boxShadow: "var(--shadow-pop)", padding: "12px 14px", maxWidth: 420,
      fontFamily: "var(--font-text)", ...style }}>
      <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", marginTop: 6, flex: "none",
        background: tone === "signal" ? "var(--aqua)" : tone === "coral" ? "var(--coral)" : "var(--tint-paper-64)" }}></span>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        <span style={{ fontSize: 14.5, fontWeight: 500, lineHeight: 1.4 }}>{message}</span>
        {detail && <span style={{ fontSize: 12.5, lineHeight: 1.45, color: "var(--tint-paper-64)" }}>{detail}</span>}
      </div>
      {onDismiss && <button onClick={onDismiss} aria-label="Dismiss" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}>
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2 2 10" stroke="var(--paper)" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>}
    </div>
  );
}
