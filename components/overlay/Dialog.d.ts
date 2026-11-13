/** Modal dialog — Surface panel, 16px radius, deep warm shadow, ink-48% scrim. Esc + scrim-click close. */
export interface DialogProps {
  open: boolean;
  title?: React.ReactNode;
  onClose?: () => void;
  /** action row, right-aligned — put the single primary Button here */
  footer?: React.ReactNode;
  width?: number | string;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
