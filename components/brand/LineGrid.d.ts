/**
 * The 32px hairline coordinate grid — the brand's structural substrate — with optional
 * light pulses traveling along the lines (slow, sparse) and technical corner readouts.
 * Grid lines are neutral, never coral. Pulses honor prefers-reduced-motion.
 */
export interface LineGridProps {
  pulses?: boolean;
  /** corner coordinate readouts / tick labels */
  framing?: boolean;
  /** custom top-left readout text */
  coords?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}
export declare function LineGrid(props: LineGridProps): JSX.Element;
