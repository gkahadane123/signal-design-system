import React from "react";
export function Button({ variant = "primary", size = "md", disabled = false, onDark = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = { sm: "6px 16px", md: "10px 22px", lg: "14px 28px" }[size];
  const fs = { sm: 14, md: 15, lg: 16 }[size];
  const overlay = press ? "var(--tint-ink-12)" : hover ? "var(--tint-ink-8)" : "transparent";
  const styles = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    fontFamily: "var(--font-text)", fontWeight: 500, fontSize: fs, lineHeight: 1.2,
    padding: pad, borderRadius: 999, cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    opacity: disabled ? 0.45 : 1, boxSizing: "border-box", textDecoration: "none",
    ...(variant === "primary"
      ? { background: `linear-gradient(${overlay},${overlay}) var(--coral)`, border: "1px solid transparent", color: "var(--text-on-coral, #FFFFFF)" }
      : { background: `linear-gradient(${hover || press ? "var(--tint-ink-4)" : "transparent"},${hover || press ? "var(--tint-ink-4)" : "transparent"}) var(--surface)`,
          border: "1px solid var(--border-strong)", color: "var(--ink)" }),
    ...style,
  };
  return (
    <button style={styles} disabled={disabled} {...rest}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {children}
    </button>
  );
}
