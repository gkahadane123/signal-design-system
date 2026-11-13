/** Underline tabs on a hairline rule — active gets a 2px Ink underline + weight bump (non-color cue). */
export interface TabsProps {
  items: Array<string | { id: string; label: string }>;
  active?: string;
  onChange?: (id: string) => void;
  onDark?: boolean;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
