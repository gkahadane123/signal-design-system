/** Chip/tag — 6px radius, opacity-tint fills, always Ink (or Paper) text. */
export interface TagProps {
  tone?: "neutral" | "outline" | "signal" | "coral" | "dark";
  /** leading signal dot (logo-echo motif) */
  withDot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
