import React, { ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButtonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledButton } from './Button.styles';

export interface ButtonProps extends BaseButtonProps {
  /** The text for the button. Button text should be in sentence case. */
  children: ReactNode;
  /** Icon placed after the children. */
  endIcon?: ReactNode;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
}

/** This component wraps the Button component from @material-ui. */
export const DotButton = ({
  ariaLabel,
  autoFocus = false,
  children,
  className,
  'data-testid': dataTestId,
  disabled = false,
  disableRipple = false,
  endIcon,
  fullWidth = false,
  isSubmit = false,
  onClick,
  size = 'medium',
  startIcon,
  titleTooltip,
  type = 'primary',
}: ButtonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  let color: 'primary' | 'secondary' | 'default';
  let variant: 'contained' | 'outlined' | 'text';
  switch (type) {
    case 'destructive':
      color = disabled ? 'default' : 'secondary';
      variant = 'contained';
      break;
    case 'primary':
      color = 'primary';
      variant = 'contained';
      break;
    case 'outlined':
      color = 'default';
      variant = 'outlined';
      break;
    case 'text':
      color = 'default';
      variant = 'text';
      break;
  }

  return (
    <StyledButton
      aria-label={ariaLabel}
      autoFocus={autoFocus}
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      disableRipple={disableRipple}
      endIcon={endIcon}
      fullWidth={fullWidth}
      onClick={(event) => onClick && onClick(event)}
      title={titleTooltip}
      variant={variant}
      size={size}
      startIcon={startIcon}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </StyledButton>
  );
};
