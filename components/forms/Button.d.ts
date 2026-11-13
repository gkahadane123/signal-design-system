/**
 * Signal button. Pill-rounded (fully rounded corners — brand rule).
 * Primary = coral fill with WHITE label (--text-on-coral — important brand rule).
 * Ghost = brand-white Surface #FCFBF8 fill with Ink label, on light AND dark (brand rule).
 * Coral is reserved for the primary action.
 * @startingPoint section="Components" subtitle="Primary & ghost actions" viewport="700x170"
 */
export interface ButtonProps {
  /** "primary" (coral fill, one per view) or "ghost" (brand-white fill) */
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** deprecated — ghost is brand-white on every background now; kept for compatibility */
  onDark?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
