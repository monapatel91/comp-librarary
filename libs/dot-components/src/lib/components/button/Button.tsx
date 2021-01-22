import React, { MouseEvent } from 'react';
import { Button, darken, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

export type ButtonType = 'destructive' | 'primary' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

const StyledButton = styled(Button)`
  ${({ theme }: { theme: Theme }) => css`
    &.MuiButton-containedSecondary {
      background-color: ${theme.palette.error.main};

      &:hover,
      &:active {
        background-color: ${darken(theme.palette.error.main, 0.2)};
      }
    }

    span.dot-icon {
      padding: 0;
    }
  `}
`;

export interface ButtonProps extends CommonProps {
  /** The text for the button. Button text should be in sentence case. */
  children: JSX.Element | string;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** If true, the ripple effect will be disabled. */
  disableRipple?: boolean;
  /** Icon placed after the children. */
  endIcon?: JSX.Element;
  /** If true, the button will take up the full width of its container.  */
  fullWidth?: boolean;
  /** Is this a submit button */
  isSubmit?: boolean;
  /** Event callback */
  onClick?: (event: MouseEvent<Element>) => void;
  /** The size of the button */
  size?: ButtonSize;
  /** Icon placed before the children. */
  startIcon?: JSX.Element;
  /** Help text to be displayed on hover */
  titleTooltip?: string;
  /** The type of button */
  type?: ButtonType;
}

/** This component wraps the Button component from @material-ui. */
export const DotButton = ({
  children,
  className,
  'data-testid': dataTestId,
  disabled = false,
  disableRipple = false,
  endIcon = null,
  fullWidth = false,
  isSubmit = false,
  onClick = null,
  size = 'medium',
  startIcon = null,
  titleTooltip,
  type = 'primary',
}: ButtonProps) => {
  const rootClasses = useStylesWithRootClass('dot-button', className);

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

export default DotButton;
