import React from "react";
export function Card({ variant = "surface", padding = 24, radius = "var(--radius-card)", interactive = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const looks = {
    surface: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--text-body)", boxShadow: "var(--shadow-card)" },
    paper: { background: "var(--bg)", border: "1px solid var(--border-hairline)", color: "var(--text-body)" },
    dark: { background: "var(--ink)", border: "1px solid transparent", color: "var(--paper)" },
  }[variant];
  return (
    <div {...rest}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ borderRadius: radius, padding, boxSizing: "border-box", fontFamily: "var(--font-text)",
        transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...looks,
        ...(interactive && hover ? { border: "1px solid var(--border-strong)", boxShadow: "var(--shadow-pop)", cursor: "pointer" } : null),
        ...style }}>
      {children}
    </div>
  );
}
