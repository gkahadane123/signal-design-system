import React from "react";
export function Input({ label, hint, error, id, style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const iid = id || uid;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-text)", ...style }}>
      {label && <label htmlFor={iid} style={{ fontSize: 14, fontWeight: 500 }}>{label}</label>}
      <input id={iid} {...rest}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          font: "400 15px/1.4 var(--font-text)", color: "var(--ink)", background: "var(--surface)",
          border: `1px solid ${error ? "var(--border-strong)" : focus ? "var(--tint-ink-48)" : "var(--border-hairline)"}`,
          borderRadius: "var(--radius-input)", padding: "10px 12px", outline: focus ? "2px solid var(--focus-ring)" : "none",
          outlineOffset: 1, transition: "border-color var(--dur-fast) var(--ease-out)", boxSizing: "border-box", width: "100%", ...inputStyle,
        }} />
      {error ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--ink)" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 1.5 11 10.5H1L6 1.5Z" stroke="var(--coral)" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 5v2.4" stroke="var(--ink)" strokeWidth="1.5"/><circle cx="6" cy="9" r=".7" fill="var(--ink)"/></svg>
          {error}
        </span>
      ) : hint ? <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{hint}</span> : null}
    </div>
  );
}
