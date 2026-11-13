/**
 * Intelligence Node duotone icon — 151 icons on a 96px grid, 3px stroke, two colors only.
 * Ink inherits via currentColor; coral accent marks the icon's SUBJECT (never decoration).
 * NEVER render below 48px — the 3px stroke breaks up (a 24px tier needs an optical redraw).
 * @startingPoint section="Components" subtitle="Duotone icon set — 151 icons" viewport="700x260"
 */
export interface IconProps {
  /** icon slug, e.g. "shield-check" · see assets/icons/index.json for all 151 */
  name: string;
  /** px or CSS length. 48 (min) · 64 · 96 */
  size?: number | string;
  /** collapse to one color (accent → currentColor) */
  mono?: boolean;
  /** override the accent, e.g. "var(--aqua)" */
  accent?: string;
  /** override the ink; defaults to var(--icon-ink) */
  color?: string;
  /** path to the design system's assets dir (default "../../assets") */
  base?: string;
  /** accessible label; omit for decorative icons */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
