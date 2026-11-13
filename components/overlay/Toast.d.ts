/** Toast — Ink panel, Paper text, leading signal dot (aqua = live/positive; dot is never the only cue). */
export interface ToastProps {
  message: React.ReactNode;
  detail?: React.ReactNode;
  tone?: "neutral" | "signal" | "coral";
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
