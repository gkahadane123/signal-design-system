/** Native select styled to match Input; 1.5px-stroke chevron glyph. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
