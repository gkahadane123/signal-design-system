import React from "react";
export function Dialog({ open, title, onClose, footer, width = 480, children }) {
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{ position: "fixed", inset: 0, background: "var(--tint-ink-48)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }}>
      <div role="dialog" aria-modal="true" style={{ width, maxWidth: "100%", background: "var(--surface)", borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-pop)", fontFamily: "var(--font-text)", color: "var(--ink)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 24px 0" }}>
          <h2 style={{ margin: 0, font: "600 21px/1.25 var(--font-text)" }}>{title}</h2>
          {onClose && <button onClick={onClose} aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 6, display: "flex" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2 2 12" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>}
        </div>
        <div style={{ padding: "12px 24px 20px", fontSize: 15, lineHeight: 1.55 }}>{children}</div>
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, padding: "16px 24px", borderTop: "1px solid var(--border-hairline)", background: "var(--bg)" }}>{footer}</div>}
      </div>
    </div>
  );
}
