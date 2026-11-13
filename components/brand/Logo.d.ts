/**
 * Official lockup (dot-density sphere + wordmark). Color on light; white on dark/coral/busy.
 * Never on mid-tone backgrounds; never rebuild the dots.
 */
export interface LogoProps {
  variant?: "color" | "white";
  height?: number;
  /** path to the design system's assets dir from the consuming page (default "../../assets") */
  base?: string;
  /** full src override */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
