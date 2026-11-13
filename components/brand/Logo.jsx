import React from "react";
export function Logo({ variant = "color", height = 32, base = "../../assets", src, style, alt = "Intelligence Node" }) {
  const url = src || `${base}/header-logo${variant === "white" ? "-white" : ""}.svg`;
  return <img src={url} alt={alt} style={{ height, width: "auto", display: "block", ...style }} />;
}
