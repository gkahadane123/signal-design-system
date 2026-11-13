import React from "react";
const chev = `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="#161418" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}")`;
export function Select({ label, options = [], id, style, selectStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const iid = id || uid;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-text)", ...style }}>
      {label && <label htmlFor={iid} style={{ fontSize: 14, fontWeight: 500 }}>{label}</label>}
      <select id={iid} {...rest}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          font: "400 15px/1.4 var(--font-text)", color: "var(--ink)", background: `var(--surface) ${chev} no-repeat right 12px center`,
          border: `1px solid ${focus ? "var(--tint-ink-48)" : "var(--border-hairline)"}`, borderRadius: "var(--radius-input)",
          padding: "10px 34px 10px 12px", outline: focus ? "2px solid var(--focus-ring)" : "none", outlineOffset: 1,
          appearance: "none", WebkitAppearance: "none", boxSizing: "border-box", width: "100%", cursor: "pointer", ...selectStyle,
        }}>
        {options.map((o) => {
          const v = typeof o === "string" ? { value: o, label: o } : o;
          return <option key={v.value} value={v.value}>{v.label}</option>;
        })}
      </select>
    </div>
  );
}
