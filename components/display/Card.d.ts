/**
 * Surface container — 16px radius, hairline border, warm subtle shadow.
 * @startingPoint section="Components" subtitle="Surface, paper & dark cards" viewport="700x210"
 */
export interface CardProps {
  /** "surface" (default card), "paper" (flush inset), "dark" (Ink band) */
  variant?: "surface" | "paper" | "dark";
  padding?: number | string;
  radius?: string;
  /** hover lifts border + shadow (non-color cue) */
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
