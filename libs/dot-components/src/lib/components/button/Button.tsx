import React, { MouseEvent } from 'react';
import { Button } from '@material-ui/core';
import { DotIcon } from '../icon/Icon';

import './Button.scss';

export type ButtonType = 'destructive' | 'primary' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /** Space delimited CSS classes to be attributed to the button. */
  classes?: string;
  /** data attribute passed through for testing purposes ONLY */
  'data-testid'?: string;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** Button label */
  displayText: string;
  /** Give the button focus */
  focused?: boolean;
  /** The icon to display on the button */
  iconId?: string;
  /** Is this a submit button */
  isSubmit?: boolean;
  /** Event callback */
  onClick: (event: MouseEvent<Element>) => void;
  /** The size of the button */
  size?: ButtonSize;
  /** Help text to be displayed on hover */
  titleTooltip?: string;
  /** The type of button */
  type: ButtonType;
}

/** This component wraps the Button component from @material-ui. */
export const DotButton = ({
  classes,
  'data-testid': dataTestId,
  displayText,
  disabled = false,
  focused = false,
  iconId,
  isSubmit = false,
  onClick,
  size = 'medium',
  titleTooltip,
  type,
}: ButtonProps) => {
  let color: 'primary' | 'secondary' | 'default';
  let variant: 'contained' | 'outlined' | 'text';
  switch (type) {
    case 'destructive':
      color = 'secondary';
      variant = 'contained';
      break;
    case 'primary':
      color = 'primary';
      variant = 'contained';
      break;
    case 'outlined':
      color = displayText ? 'primary' : 'default';
      variant = 'outlined';
      break;
    case 'text':
      color = displayText ? 'primary' : 'default';
      variant = 'text';
      break;
  }

  return (
    <Button
      autoFocus={focused}
      className={`dot-btn ${classes}`}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={(event) => onClick && onClick(event)}
      startIcon={iconId ? <DotIcon icon={iconId} /> : undefined}
      title={titleTooltip}
      variant={variant}
      size={size}
      type={isSubmit ? 'submit' : 'button'}
    >
      {displayText}
    </Button>
  );
};

export default DotButton;
