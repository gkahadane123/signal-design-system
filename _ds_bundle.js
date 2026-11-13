/* @ds-bundle: {"format":4,"namespace":"SignalDesignSystem_167090","components":[{"name":"GradientTile","sourcePath":"components/brand/GradientTile.jsx"},{"name":"LineGrid","sourcePath":"components/brand/LineGrid.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/brand/GradientTile.jsx":"af816e83323b","components/brand/LineGrid.jsx":"94338bf87c19","components/brand/Logo.jsx":"836dec4cdd40","components/display/Card.jsx":"e546e499543e","components/display/Stat.jsx":"5e74d59f5994","components/display/Tag.jsx":"1287d6d96499","components/forms/Button.jsx":"67c1680136ae","components/forms/Checkbox.jsx":"bef6e1223b0c","components/forms/Input.jsx":"a5c20be6439f","components/forms/Radio.jsx":"06b664ea5e0b","components/forms/Select.jsx":"72840c665d5c","components/forms/Switch.jsx":"efe4faffee90","components/icons/Icon.jsx":"2c1060f97664","components/navigation/Tabs.jsx":"943cf9d700cc","components/overlay/Dialog.jsx":"08535e94e037","components/overlay/Toast.jsx":"3b330e73d09e","components/overlay/Tooltip.jsx":"2fcfdca7cc91","ui_kits/website/About.jsx":"3ea9728337f6","ui_kits/website/Home.jsx":"2451d6826eb7","ui_kits/website/Platform.jsx":"9d4a3df380d4","ui_kits/website/Shared.jsx":"c4c12f54b09d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SignalDesignSystem_167090 = window.SignalDesignSystem_167090 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GradientTile.jsx
try { (() => {
const NAMES = ["ember", "depth", "current", "bloom", "glow", "night"];
const LEGACY = {
  pricing: "ember",
  availability: "depth",
  signal: "current",
  assortment: "bloom",
  "digital-shelf": "glow",
  decision: "night"
};
function GradientTile({
  theme = "current",
  label,
  caption,
  ratio = "1",
  radius = "var(--radius-card-sm)",
  children,
  style
}) {
  const t = NAMES.includes(theme) ? theme : LEGACY[theme] || "current";
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "var(--font-text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `sig-grad-${t}`,
    style: {
      position: "relative",
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: "hidden"
    }
  }, children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      padding: 20
    }
  }, children)), (label || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: "var(--ink)"
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--tint-ink-64)",
      lineHeight: 1.45
    }
  }, caption)));
}
Object.assign(__ds_scope, { GradientTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/LineGrid.jsx
try { (() => {
function LineGrid({
  pulses = true,
  framing = false,
  coords,
  children,
  style,
  contentStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--line-grid)",
      backgroundColor: "var(--bg)",
      overflow: "hidden",
      ...style
    }
  }, pulses && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "calc(var(--grid-unit)*3)",
      left: 0,
      height: 1,
      width: 64,
      background: "linear-gradient(90deg,transparent,var(--aqua))",
      animation: "sig-pulse-x 8s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "calc(var(--grid-unit)*7)",
      left: 0,
      height: 1,
      width: 64,
      background: "linear-gradient(90deg,transparent,var(--coral))",
      animation: "sig-pulse-x 11s linear 4s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "calc(var(--grid-unit)*9)",
      top: 0,
      width: 1,
      height: 48,
      background: "linear-gradient(180deg,transparent,var(--aqua))",
      animation: "sig-pulse-y 9s linear 2s infinite"
    }
  })), framing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 10,
      left: 12,
      font: "400 11px/1 var(--font-text)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-subtle)",
      letterSpacing: "0.06em"
    }
  }, coords || "x:032 y:064"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: 10,
      right: 12,
      font: "400 11px/1 var(--font-text)",
      color: "var(--text-subtle)",
      letterSpacing: "0.06em"
    }
  }, "grid \xB7 32px")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...contentStyle
    }
  }, children));
}
Object.assign(__ds_scope, { LineGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LineGrid.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = "color",
  height = 32,
  base = "../../assets",
  src,
  style,
  alt = "Intelligence Node"
}) {
  const url = src || `${base}/header-logo${variant === "white" ? "-white" : ""}.svg`;
  return /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "surface",
  padding = 24,
  radius = "var(--radius-card)",
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const looks = {
    surface: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-card)"
    },
    paper: {
      background: "var(--bg)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-body)"
    },
    dark: {
      background: "var(--ink)",
      border: "1px solid transparent",
      color: "var(--paper)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: radius,
      padding,
      boxSizing: "border-box",
      fontFamily: "var(--font-text)",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...looks,
      ...(interactive && hover ? {
        border: "1px solid var(--border-strong)",
        boxShadow: "var(--shadow-pop)",
        cursor: "pointer"
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  source,
  size = "md",
  onDark = false,
  style
}) {
  const vs = {
    sm: 30,
    md: 44,
    lg: 64
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      fontFamily: "var(--font-text)",
      color: onDark ? "var(--paper)" : "var(--ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${vs}px/1.02 var(--font-display)`,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.4
    }
  }, label), source && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.4,
      color: onDark ? "var(--tint-paper-64)" : "var(--text-muted)"
    }
  }, source));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  tone = "neutral",
  withDot = false,
  children,
  style
}) {
  const looks = {
    neutral: {
      background: "var(--tint-ink-6)",
      color: "var(--ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--border-strong)"
    },
    signal: {
      background: "var(--tint-aqua-16)",
      color: "var(--ink)"
    },
    coral: {
      background: "var(--tint-coral-12)",
      color: "var(--ink)"
    },
    dark: {
      background: "var(--tint-paper-16)",
      color: "var(--paper)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--radius-chip)",
      padding: "3px 9px",
      font: "500 12.5px/1.4 var(--font-text)",
      whiteSpace: "nowrap",
      ...looks,
      ...style
    }
  }, withDot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      flex: "none",
      background: tone === "signal" ? "var(--aqua)" : tone === "coral" ? "var(--coral)" : "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onDark = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = {
    sm: "6px 16px",
    md: "10px 22px",
    lg: "14px 28px"
  }[size];
  const fs = {
    sm: 14,
    md: 15,
    lg: 16
  }[size];
  const overlay = press ? "var(--tint-ink-12)" : hover ? "var(--tint-ink-8)" : "transparent";
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-text)",
    fontWeight: 500,
    fontSize: fs,
    lineHeight: 1.2,
    padding: pad,
    borderRadius: 999,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    opacity: disabled ? 0.45 : 1,
    boxSizing: "border-box",
    textDecoration: "none",
    ...(variant === "primary" ? {
      background: `linear-gradient(${overlay},${overlay}) var(--coral)`,
      border: "1px solid transparent",
      color: "var(--text-on-coral, #FFFFFF)"
    } : {
      background: `linear-gradient(${hover || press ? "var(--tint-ink-4)" : "transparent"},${hover || press ? "var(--tint-ink-4)" : "transparent"}) var(--surface)`,
      border: "1px solid var(--border-strong)",
      color: "var(--ink)"
    }),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: styles,
    disabled: disabled
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 5,
      boxSizing: "border-box",
      background: checked ? "var(--ink)" : "var(--surface)",
      border: `1px solid ${checked ? "var(--ink)" : "var(--border-strong)"}`,
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 2,
      transition: "background var(--dur-fast) var(--ease-out)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5.8 4.4 8 9 3",
    stroke: "var(--paper)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const iid = id || uid;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-text)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: iid
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      font: "400 15px/1.4 var(--font-text)",
      color: "var(--ink)",
      background: "var(--surface)",
      border: `1px solid ${error ? "var(--border-strong)" : focus ? "var(--tint-ink-48)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-input)",
      padding: "10px 12px",
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 1,
      transition: "border-color var(--dur-fast) var(--ease-out)",
      boxSizing: "border-box",
      width: "100%",
      ...inputStyle
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12.5,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 1.5 11 10.5H1L6 1.5Z",
    stroke: "var(--coral)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 5v2.4",
    stroke: "var(--ink)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "9",
    r: ".7",
    fill: "var(--ink)"
  })), error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      boxSizing: "border-box",
      background: "var(--surface)",
      border: `1px solid ${checked ? "var(--ink)" : "var(--border-strong)"}`,
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--ink)",
      transform: checked ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }))), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const chev = `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="#161418" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}")`;
function Select({
  label,
  options = [],
  id,
  style,
  selectStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const iid = id || uid;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-text)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: iid
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      font: "400 15px/1.4 var(--font-text)",
      color: "var(--ink)",
      background: `var(--surface) ${chev} no-repeat right 12px center`,
      border: `1px solid ${focus ? "var(--tint-ink-48)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-input)",
      padding: "10px 34px 10px 12px",
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 1,
      appearance: "none",
      WebkitAppearance: "none",
      boxSizing: "border-box",
      width: "100%",
      cursor: "pointer",
      ...selectStyle
    }
  }), options.map(o => {
    const v = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 999,
      boxSizing: "border-box",
      background: checked ? "var(--ink)" : "var(--tint-ink-12)",
      border: "1px solid " + (checked ? "var(--ink)" : "var(--border-strong)"),
      outline: focus ? "2px solid var(--focus-ring)" : "none",
      outlineOffset: 2,
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 19 : 3,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: checked ? "var(--paper)" : "var(--surface)",
      boxShadow: "0 1px 2px rgb(22 20 24/.2)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cache = new Map();
function Icon({
  name,
  size = 48,
  mono = false,
  accent,
  color,
  base = "../../assets",
  title,
  style,
  className = "",
  ...rest
}) {
  const [svg, setSvg] = React.useState(() => cache.get(name) || null);
  React.useEffect(() => {
    if (!name) return;
    if (cache.has(name)) {
      setSvg(cache.get(name));
      return;
    }
    let live = true;
    fetch(`${base}/icons/${name}.svg`).then(r => r.ok ? r.text() : Promise.reject(r.status)).then(t => {
      const m = t.replace(/<svg[^>]*>/, "").replace("</svg>", "");
      cache.set(name, m);
      if (live) setSvg(m);
    }).catch(() => {
      if (live) setSvg("");
    });
    return () => {
      live = false;
    };
  }, [name, base]);
  const px = typeof size === "number" ? `${size}px` : size;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `icon${className ? " " + className : ""}`,
    role: title ? "img" : "presentation",
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      width: px,
      height: px,
      color: color || "var(--icon-ink)",
      ...(mono ? {
        "--icon-accent": "currentColor"
      } : accent ? {
        "--icon-accent": accent
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 96 96",
    width: "100%",
    height: "100%",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: svg || ""
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange,
  onDark = false,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const line = onDark ? "var(--tint-paper-16)" : "var(--border-hairline)";
  const mut = onDark ? "var(--tint-paper-64)" : "var(--text-muted)";
  const full = onDark ? "var(--paper)" : "var(--ink)";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 24,
      borderBottom: `1px solid ${line}`,
      fontFamily: "var(--font-text)",
      ...style
    }
  }, items.map(it => {
    const t = typeof it === "string" ? {
      id: it,
      label: it
    } : it;
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.id),
      onMouseEnter: () => setHover(t.id),
      onMouseLeave: () => setHover(null),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "10px 2px 12px",
        font: `${on ? 500 : 400} 15px/1.3 var(--font-text)`,
        color: on || hover === t.id ? full : mut,
        boxShadow: on ? `inset 0 -2px 0 0 ${full}` : "none",
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  footer,
  width = 480,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--tint-ink-48)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-pop)",
      fontFamily: "var(--font-text)",
      color: "var(--ink)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "20px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "600 21px/1.25 var(--font-text)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 6,
      borderRadius: 6,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l10 10M12 2 2 12",
    stroke: "var(--ink)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 24px 20px",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "16px 24px",
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--bg)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
function Toast({
  message,
  detail,
  tone = "neutral",
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      background: "var(--ink)",
      color: "var(--paper)",
      borderRadius: "var(--radius-card-sm)",
      boxShadow: "var(--shadow-pop)",
      padding: "12px 14px",
      maxWidth: 420,
      fontFamily: "var(--font-text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      marginTop: 6,
      flex: "none",
      background: tone === "signal" ? "var(--aqua)" : tone === "coral" ? "var(--coral)" : "var(--tint-paper-64)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, message), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.45,
      color: "var(--tint-paper-64)"
    }
  }, detail)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l8 8M10 2 2 10",
    stroke: "var(--paper)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = "top",
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 60,
      whiteSpace: "nowrap",
      background: "var(--ink)",
      color: "var(--paper)",
      font: "400 12.5px/1.4 var(--font-text)",
      padding: "5px 9px",
      borderRadius: "var(--radius-chip)",
      boxShadow: "var(--shadow-pop)",
      pointerEvents: "none",
      ...pos
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const dsaGet = n => window.SignalDesignSystem_167090[n];
const Button = p => dsaGet("Button")(p),
  Stat = p => dsaGet("Stat")(p),
  Card = p => dsaGet("Card")(p);
function AboutScreen({
  onDemo
}) {
  const ph = {
    borderRadius: "var(--radius-card-sm)",
    border: "1px dashed var(--border-strong)",
    background: "var(--tint-ink-4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 16
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    },
    innerStyle: {
      padding: "72px 32px 56px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--text-muted)"
    }
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-2",
    style: {
      maxWidth: 780,
      textWrap: "balance"
    }
  }, "Better decisions require better intelligence"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      maxWidth: 640,
      color: "var(--text-muted)"
    }
  }, "Since 2012 we have built the intelligence layer at the center of the digital shelf \u2014 not a generic AI vendor, not a pricing-only tool. Real-time, trusted intelligence for the people and agents who decide.")), /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "64px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, [["2012", "Founded", "Intelligence Node begins indexing the digital shelf."], ["Dec 2024", "Interpublic", "Acquired by Interpublic Group."], ["Nov 2025", "Omnicom", "Part of Omnicom following the Interpublic transition."]].map(([y, t, c]) => /*#__PURE__*/React.createElement(Card, {
    key: y,
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-caption t-data",
    style: {
      color: "var(--text-muted)"
    }
  }, y), /*#__PURE__*/React.createElement("span", {
    className: "t-title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "t-small",
    style: {
      color: "var(--text-muted)"
    }
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "16px 32px 72px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ph,
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-caption"
  }, "Photography placeholder \u2014 buyers and merchandisers in real decision contexts. Documentary, natural light, warm grade.")), /*#__PURE__*/React.createElement("div", {
    style: ph
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-caption"
  }, "Store team, candid")), /*#__PURE__*/React.createElement("div", {
    style: ph
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-caption"
  }, "Ecommerce team, natural light"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "72px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    size: "sm",
    value: "34",
    label: "global markets"
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    size: "sm",
    value: "100+",
    label: "languages"
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    size: "sm",
    value: "190,000+",
    label: "brands tracked"
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    size: "sm",
    value: "+4,700%",
    label: "gen-AI retail traffic, YoY",
    source: "Adobe Analytics, July 2025"
  }))), /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "96px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-display-2",
    style: {
      maxWidth: 620,
      textWrap: "balance"
    }
  }, "Decide with the layer beneath the shelf"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onDemo
  }, "Request a demo")));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const dshGet = n => window.SignalDesignSystem_167090[n];
const Button = p => dshGet("Button")(p),
  Stat = p => dshGet("Stat")(p),
  Tag = p => dshGet("Tag")(p),
  GradientTile = p => dshGet("GradientTile")(p),
  LineGrid = p => dshGet("LineGrid")(p);
const THEME_COPY = [["ember", "Pricing", "Competitive price movements across the shelf, matched with 99% exact-match accuracy."], ["depth", "Availability", "In-stock and out-of-stock signals before they become lost sales."], ["current", "Signal", "Change detection across the market — surfaced the moment it matters."], ["bloom", "Assortment", "Gaps and overlaps in range, mapped against everyone you compete with."], ["glow", "Digital shelf", "Search rank, content and share of shelf, seen the way agents see it."], ["night", "Decision", "Intelligence routed to the people — and the AI agents — who act on it."]];
function HomeScreen({
  onDemo,
  setNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(LineGrid, {
    framing: true,
    coords: "x:000 y:000",
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "104px 32px 88px",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "signal",
    withDot: true
  }, "Agentic retail"), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-1",
    style: {
      maxWidth: 820,
      textWrap: "balance"
    }
  }, "The intelligence layer powering agentic retail"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      maxWidth: 560,
      color: "var(--text-muted)"
    }
  }, "Generative-AI traffic to US retail sites is up 4,700% year over year. When agents shop the shelf, the future is not won by better AI alone \u2014 it is won by better intelligence."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onDemo
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: () => setNav("platform")
  }, "Explore the platform")))), /*#__PURE__*/React.createElement(Section, {
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    },
    innerStyle: {
      padding: "40px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "+4,700%",
    label: "gen-AI traffic to US retail, YoY",
    source: "Adobe Analytics, July 2025"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "34",
    label: "global markets"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "100+",
    label: "languages"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "190,000+",
    label: "brands tracked"
  })), /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "88px 32px 96px",
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--text-muted)"
    }
  }, "One layer"), /*#__PURE__*/React.createElement("h2", {
    className: "t-display-2",
    style: {
      maxWidth: 560
    }
  }, "Six intelligence themes")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setNav("platform")
  }, "See how it works \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, THEME_COPY.map(([t, l, c]) => /*#__PURE__*/React.createElement(GradientTile, {
    key: t,
    theme: t,
    label: l,
    caption: c
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--reef)",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "88px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-display-2",
    style: {
      maxWidth: 720,
      textWrap: "balance"
    }
  }, "See change. Understand impact. Act with confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 32
    }
  }, [["See change", "Real-time, trusted intelligence across pricing, availability, assortment and the digital shelf."], ["Understand impact", "Signals connected to categories, competitors and outcomes — not raw feeds."], ["Act with confidence", "Decisions made by your teams and your AI agents on the same verified foundation."]].map(([t, c], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      borderTop: "1px solid var(--tint-paper-16)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-caption t-data",
    style: {
      color: "var(--tint-paper-64)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "t-title"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "t-small",
    style: {
      color: "var(--tint-paper-64)"
    }
  }, c)))))), /*#__PURE__*/React.createElement("section", {
    className: "sig-grad-night",
    style: {
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "96px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-display-2",
    style: {
      maxWidth: 640,
      textWrap: "balance"
    }
  }, "Put the intelligence layer under your decisions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onDemo
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onDark: true,
    onClick: () => setNav("platform")
  }, "Explore the platform")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Platform.jsx
try { (() => {
const dspGet = n => window.SignalDesignSystem_167090[n];
const Button = p => dspGet("Button")(p),
  Stat = p => dspGet("Stat")(p),
  Tag = p => dspGet("Tag")(p),
  GradientTile = p => dspGet("GradientTile")(p),
  Tabs = p => dspGet("Tabs")(p);
const PLATFORM = {
  Pricing: {
    theme: "ember",
    copy: "Track competitive price movements across 190,000+ brands. Exact matches at 99% accuracy (exact-match false positives), refreshed continuously.",
    tags: ["Price index", "Promotions", "MAP"]
  },
  Availability: {
    theme: "depth",
    copy: "In-stock, out-of-stock and fulfillment signals across markets — before they show up in lost sales.",
    tags: ["OOS alerts", "Regional coverage"]
  },
  Signal: {
    theme: "current",
    copy: "Change detection across the market. The layer watches so your teams and agents respond to what matters.",
    tags: ["Alerts", "Anomalies"]
  },
  Assortment: {
    theme: "bloom",
    copy: "Range gaps and overlaps mapped against every competitor, in 34 markets and 100+ languages.",
    tags: ["Gap analysis", "Range depth"]
  },
  "Digital shelf": {
    theme: "glow",
    copy: "Search rank, content quality and share of shelf — seen the way shoppers and AI agents see it.",
    tags: ["Share of search", "Content"]
  },
  Decision: {
    theme: "night",
    copy: "Verified intelligence routed into workflows, BI and agent frameworks, so actions inherit the evidence.",
    tags: ["API", "Exports", "Agents"]
  }
};
function PlatformScreen({
  onDemo
}) {
  const [tab, setTab] = React.useState("Pricing");
  const d = PLATFORM[tab];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    },
    innerStyle: {
      padding: "72px 32px 56px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--text-muted)"
    }
  }, "Platform"), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-2",
    style: {
      maxWidth: 760,
      textWrap: "balance"
    }
  }, "Real-time, trusted intelligence for human and AI decisions"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      maxWidth: 620,
      color: "var(--text-muted)"
    }
  }, "One integrated layer at the center of the digital shelf. Six themes, one foundation of evidence.")), /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "48px 32px 88px",
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(PLATFORM),
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "380px 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(GradientTile, {
    theme: d.theme,
    radius: "var(--radius-card)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-heading"
  }, tab), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg",
    style: {
      maxWidth: 560
    }
  }, d.copy), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, d.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onDemo
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Read the methodology"))))), /*#__PURE__*/React.createElement("section", {
    className: "sig-grad-depth",
    style: {
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--tint-paper-64)"
    }
  }, "Why it holds"), /*#__PURE__*/React.createElement("h2", {
    className: "t-display-2",
    style: {
      textWrap: "balance"
    }
  }, "Precise over promotional"), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      color: "var(--tint-paper-64)",
      maxWidth: 480
    }
  }, "Every external number is verified and cited in scope. Accuracy claims are scoped to exact-match false positives; refresh rates are dataset-specific. The authority is the data's, not ours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: "99%",
    label: "exact-match accuracy",
    source: "exact-match false positives only"
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: "10s",
    label: "refresh",
    source: "dataset-specific"
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: "34",
    label: "markets"
  }), /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: "2012",
    label: "operating since"
  })))), /*#__PURE__*/React.createElement(Section, {
    innerStyle: {
      padding: "96px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-display-2",
    style: {
      maxWidth: 620,
      textWrap: "balance"
    }
  }, "See it on your categories"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onDemo
  }, "Request a demo")));
}
window.PlatformScreen = PlatformScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Platform.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dsGet = n => window.SignalDesignSystem_167090[n];
const Button = p => dsGet("Button")(p),
  Logo = p => dsGet("Logo")(p),
  Input = p => dsGet("Input")(p),
  Select = p => dsGet("Select")(p),
  Dialog = p => dsGet("Dialog")(p);
function Section({
  width = 1200,
  style,
  innerStyle,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: "0 auto",
      padding: "0 32px",
      ...innerStyle
    }
  }, children));
}
function NavLink({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      font: `${active ? 500 : 400} 15px/1 var(--font-text)`,
      color: active || h ? "var(--ink)" : "var(--text-muted)",
      textDecoration: "none",
      padding: "8px 2px",
      boxShadow: active ? "inset 0 -2px 0 0 var(--ink)" : "none"
    }
  }, label);
}
function SiteHeader({
  nav,
  setNav,
  onDemo
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 32px",
      height: 68,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setNav("home");
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 34,
    base: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    label: "Platform",
    active: nav === "platform",
    onClick: () => setNav("platform")
  }), /*#__PURE__*/React.createElement(NavLink, {
    label: "About",
    active: nav === "about",
    onClick: () => setNav("about")
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setNav("platform")
  }, "Explore the platform"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onDemo
  }, "Request a demo")));
}
function SiteFooter({
  setNav
}) {
  const col = {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-start"
  };
  const lk = {
    font: "400 14px/1 var(--font-text)",
    color: "var(--tint-paper-64)",
    textDecoration: "none",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "64px 32px 40px",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 30,
    base: "../../assets"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/1.55 var(--font-text)",
      color: "var(--tint-paper-64)",
      maxWidth: 360
    }
  }, "The intelligence layer powering agentic retail. Founded 2012. Part of Omnicom since November 2025.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--tint-paper-64)"
    }
  }, "Platform"), ["Pricing", "Availability", "Assortment", "Digital shelf"].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    style: lk,
    onClick: () => setNav("platform")
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--tint-paper-64)"
    }
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    style: lk,
    onClick: () => setNav("about")
  }, "About"), /*#__PURE__*/React.createElement("a", {
    style: lk,
    onClick: () => setNav("about")
  }, "Newsroom"), /*#__PURE__*/React.createElement("a", {
    style: lk,
    onClick: () => setNav("about")
  }, "Careers"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--tint-paper-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "18px 32px",
      display: "flex",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12.5px/1.4 var(--font-text)",
      color: "var(--tint-paper-64)"
    }
  }, "\xA9 2026 Intelligence Node. 34 markets \xB7 100+ languages \xB7 190,000+ brands."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12.5px/1.4 var(--font-text)",
      color: "var(--tint-paper-64)"
    }
  }, "Privacy \xB7 Terms"))));
}
function DemoDialog({
  open,
  onClose,
  onSent
}) {
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Request a demo",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: onSent
    }, "Send request"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: "var(--text-muted)"
    }
  }, "See the intelligence layer on your own categories. We reply within one business day."), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Primary market",
    options: ["United States", "United Kingdom", "India", "Other"]
  })));
}
Object.assign(window, {
  Section,
  SiteHeader,
  SiteFooter,
  DemoDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GradientTile = __ds_scope.GradientTile;

__ds_ns.LineGrid = __ds_scope.LineGrid;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
