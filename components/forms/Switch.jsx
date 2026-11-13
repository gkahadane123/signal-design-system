import React from "react";
export function Switch({ label, checked = false, onChange, disabled = false, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-text)", fontSize: 15, ...style }}>
      <span style={{ position: "relative", width: 36, height: 20, flex: "none" }}>
        <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ position: "absolute", inset: 0, opacity: 0, margin: 0, cursor: "inherit" }} />
        <span aria-hidden="true" style={{
          position: "absolute", inset: 0, borderRadius: 999, boxSizing: "border-box",
          background: checked ? "var(--ink)" : "var(--tint-ink-12)", border: "1px solid " + (checked ? "var(--ink)" : "var(--border-strong)"),
          outline: focus ? "2px solid var(--focus-ring)" : "none", outlineOffset: 2,
          transition: "background var(--dur-base) var(--ease-out)" }}></span>
        <span aria-hidden="true" style={{
          position: "absolute", top: 3, left: checked ? 19 : 3, width: 14, height: 14, borderRadius: "50%",
          background: checked ? "var(--paper)" : "var(--surface)", boxShadow: "0 1px 2px rgb(22 20 24/.2)",
          transition: "left var(--dur-base) var(--ease-out)" }}></span>
      </span>
      {label}
    </label>
  );
}
