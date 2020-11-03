import React, { MouseEvent } from 'react';
import { Button, Icon } from '@material-ui/core';

import './Button.scss';

export type ButtonType =
  | 'destructive'
  | 'primary'
  | 'secondary'
  | 'transparent';

export const sbButtonTypeOptions = {
  Destructive: 'destructive',
  Primary: 'primary',
  Secondary: 'secondary',
  Transparent: 'transparent',
};

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
  /** Event callback */
  onClick: (event: MouseEvent<Element>) => void;
  /** The icon to display on the button */
  iconId?: string;
  /** Help text to be displayed on hover */
  titleTooltip?: string;
  /** primary, destructive, secondary, or transparent. */
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
  onClick,
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
    case 'secondary':
      color = displayText ? 'primary' : 'default';
      variant = 'outlined';
      break;
    case 'transparent':
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
      startIcon={iconId ? <Icon>{iconId}</Icon> : undefined}
      title={titleTooltip}
      variant={variant}
    >
      {displayText}
    </Button>
  );
};

export default DotButton;
