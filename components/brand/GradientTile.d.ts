/**
 * One of the six coded brand gradients (smooth multi-bloom radials + grain, tokens/gradients.css)
 * as a framed tile. For full-bleed section backgrounds use the `.sig-grad-<name>` class directly.
 * Extended gradient hues never leave the gradients. Anchor in the grid, never free-floating.
 */
export interface GradientTileProps {
  /** gradient name: ember, depth, current, bloom, glow, night (legacy theme ids still map) */
  theme?: "ember" | "depth" | "current" | "bloom" | "glow" | "night" | "pricing" | "availability" | "signal" | "assortment" | "digital-shelf" | "decision";
  label?: string;
  caption?: string;
  /** CSS aspect-ratio, default "1" */
  ratio?: string;
  radius?: string;
  /** optional overlay content (e.g. white Logo, Stat onDark) */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function GradientTile(props: GradientTileProps): JSX.Element;
