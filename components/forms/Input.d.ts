/**
 * Text input with label, hint, and error. Error pairs an icon with text —
 * never color alone (accessibility rule). Focus ring is 2px Aqua.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** muted helper line below */
  hint?: string;
  /** replaces hint; icon + Ink text, coral used only as the icon fill cue */
  error?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
