import React from "react";
export function Checkbox({ label, checked = false, onChange, disabled = false, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-text)", fontSize: 15, ...style }}>
      <span style={{ position: "relative", width: 18, height: 18, flex: "none" }}>
        <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ position: "absolute", inset: 0, opacity: 0, margin: 0, cursor: "inherit" }} />
        <span aria-hidden="true" style={{
          position: "absolute", inset: 0, borderRadius: 5, boxSizing: "border-box",
          background: checked ? "var(--ink)" : "var(--surface)",
          border: `1px solid ${checked ? "var(--ink)" : "var(--border-strong)"}`,
          outline: focus ? "2px solid var(--focus-ring)" : "none", outlineOffset: 2,
          transition: "background var(--dur-fast) var(--ease-out)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {checked && <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.8 4.4 8 9 3" stroke="var(--paper)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </span>
      </span>
      {label}
    </label>
  );
}
