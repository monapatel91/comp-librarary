import React, { ForwardedRef, ReactNode, useEffect } from 'react';
import { BaseButtonProps } from '../BaseButtonProps';
import { DotTooltip } from '../tooltip/Tooltip';
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
export const DotButton = React.forwardRef(
  (
    {
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
      /** The use of `titleTooltip` is deprecated and will be removed in the next major release */
      titleTooltip,
      tooltip,
      type = 'primary',
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const rootClasses = useStylesWithRootClass(rootClassName, className);

    let color:
      | 'primary'
      | 'secondary'
      | 'inherit'
      | 'success'
      | 'error'
      | 'info'
      | 'warning';
    let variant: 'contained' | 'outlined' | 'text';
    switch (type) {
      case 'destructive':
        color = disabled ? 'inherit' : 'secondary';
        variant = 'contained';
        break;
      case 'primary':
        color = 'primary';
        variant = 'contained';
        break;
      case 'outlined':
        color = 'inherit';
        variant = 'outlined';
        break;
      case 'text':
        color = 'inherit';
        variant = 'text';
        break;
    }
    useEffect(() => {
      // deprecation warning
      if (titleTooltip) {
        console.warn(
          'The use of `titleTooltip` is deprecated and will be removed in the next major release, please use `tooltip` isntead.'
        );
      }
    }, []);
    return (
      <DotTooltip title={tooltip}>
        <StyledButton
          aria-label={ariaLabel}
          autoFocus={autoFocus}
          classes={{ root: rootClasses }}
          color={color}
          data-testid={dataTestId}
          disableRipple={disableRipple}
          disabled={disabled}
          endIcon={endIcon}
          fullWidth={fullWidth}
          onClick={(event) => onClick && onClick(event)}
          ref={ref}
          size={size}
          startIcon={startIcon}
          type={isSubmit ? 'submit' : 'button'}
          variant={variant}
        >
          {children}
        </StyledButton>
      </DotTooltip>
    );
  }
);
