import React from "react";
export function Tooltip({ content, side = "top", children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  }[side];
  return (
    <span style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && <span role="tooltip" style={{ position: "absolute", zIndex: 60, whiteSpace: "nowrap", background: "var(--ink)", color: "var(--paper)",
        font: "400 12.5px/1.4 var(--font-text)", padding: "5px 9px", borderRadius: "var(--radius-chip)", boxShadow: "var(--shadow-pop)",
        pointerEvents: "none", ...pos }}>{content}</span>}
    </span>
  );
}
