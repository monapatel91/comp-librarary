import { MouseEvent, KeyboardEvent } from 'react';
import { CommonProps } from './CommonProps';

export type ButtonType = 'destructive' | 'primary' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface BaseButtonProps extends CommonProps {
  /** If true, the button will be focused **/
  autoFocus?: boolean;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** If true, the ripple effect will be disabled. */
  disableRipple?: boolean;
  /** If true, the button will take up the full width of its container.  */
  fullWidth?: boolean;
  /** Is this a submit button */
  isSubmit?: boolean;
  /** Event callback */
  onClick?: (event: MouseEvent<Element> | KeyboardEvent<Element>) => void;
  /** The size of the button */
  size?: ButtonSize;
  /** Help text to be displayed on hover */
  titleTooltip?: string;
  /** The type of button */
  type?: ButtonType;
}
