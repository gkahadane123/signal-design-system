import React from "react";
export function LineGrid({ pulses = true, framing = false, coords, children, style, contentStyle }) {
  return (
    <div style={{ position: "relative", background: "var(--line-grid)", backgroundColor: "var(--bg)", overflow: "hidden", ...style }}>
      {pulses && <>
        <span aria-hidden="true" style={{ position: "absolute", top: "calc(var(--grid-unit)*3)", left: 0, height: 1, width: 64, background: "linear-gradient(90deg,transparent,var(--aqua))", animation: "sig-pulse-x 8s linear infinite" }}></span>
        <span aria-hidden="true" style={{ position: "absolute", top: "calc(var(--grid-unit)*7)", left: 0, height: 1, width: 64, background: "linear-gradient(90deg,transparent,var(--coral))", animation: "sig-pulse-x 11s linear 4s infinite" }}></span>
        <span aria-hidden="true" style={{ position: "absolute", left: "calc(var(--grid-unit)*9)", top: 0, width: 1, height: 48, background: "linear-gradient(180deg,transparent,var(--aqua))", animation: "sig-pulse-y 9s linear 2s infinite" }}></span>
      </>}
      {framing && <>
        <span aria-hidden="true" style={{ position: "absolute", top: 10, left: 12, font: "400 11px/1 var(--font-text)", fontVariantNumeric: "tabular-nums", color: "var(--text-subtle)", letterSpacing: "0.06em" }}>{coords || "x:032 y:064"}</span>
        <span aria-hidden="true" style={{ position: "absolute", bottom: 10, right: 12, font: "400 11px/1 var(--font-text)", color: "var(--text-subtle)", letterSpacing: "0.06em" }}>grid · 32px</span>
      </>}
      <div style={{ position: "relative", ...contentStyle }}>{children}</div>
    </div>
  );
}
