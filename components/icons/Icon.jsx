import React from "react";
const cache = new Map();
export function Icon({ name, size = 48, mono = false, accent, color, base = "../../assets", title, style, className = "", ...rest }) {
  const [svg, setSvg] = React.useState(() => cache.get(name) || null);
  React.useEffect(() => {
    if (!name) return;
    if (cache.has(name)) { setSvg(cache.get(name)); return; }
    let live = true;
    fetch(`${base}/icons/${name}.svg`).then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((t) => { const m = t.replace(/<svg[^>]*>/, "").replace("</svg>", ""); cache.set(name, m); if (live) setSvg(m); })
      .catch(() => { if (live) setSvg(""); });
    return () => { live = false; };
  }, [name, base]);
  const px = typeof size === "number" ? `${size}px` : size;
  return (
    <span className={`icon${className ? " " + className : ""}`} role={title ? "img" : "presentation"} aria-label={title} aria-hidden={title ? undefined : true}
      style={{ width: px, height: px, color: color || "var(--icon-ink)", ...(mono ? { "--icon-accent": "currentColor" } : accent ? { "--icon-accent": accent } : null), ...style }} {...rest}>
      <svg viewBox="0 0 96 96" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: svg || "" }} />
    </span>
  );
}
