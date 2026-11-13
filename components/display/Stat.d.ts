/**
 * Verified-claim stat: big NHG Display Pro number + label + mandatory source line.
 * Encodes claims governance — only VERIFIED Claims-Register numbers, cited in scope.
 */
export interface StatProps {
  /** e.g. "+4,700%" — must be a VERIFIED claim */
  value: string;
  label?: string;
  /** exact citation, e.g. "Adobe Analytics, July 2025" */
  source?: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
