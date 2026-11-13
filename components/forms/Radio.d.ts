/** Radio — Ink dot when selected; group via shared `name`, report via onChange(value). */
export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (value: string) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
