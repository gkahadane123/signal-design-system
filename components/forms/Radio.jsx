import React from "react";
export function Radio({ label, checked = false, onChange, name, value, disabled = false, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-text)", fontSize: 15, ...style }}>
      <span style={{ position: "relative", width: 18, height: 18, flex: "none" }}>
        <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={() => onChange && onChange(value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ position: "absolute", inset: 0, opacity: 0, margin: 0, cursor: "inherit" }} />
        <span aria-hidden="true" style={{
          position: "absolute", inset: 0, borderRadius: "50%", boxSizing: "border-box", background: "var(--surface)",
          border: `1px solid ${checked ? "var(--ink)" : "var(--border-strong)"}`,
          outline: focus ? "2px solid var(--focus-ring)" : "none", outlineOffset: 2,
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ink)", transform: checked ? "scale(1)" : "scale(0)", transition: "transform var(--dur-fast) var(--ease-out)" }}></span>
        </span>
      </span>
      {label}
    </label>
  );
}
