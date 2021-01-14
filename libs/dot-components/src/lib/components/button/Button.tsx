import React, { MouseEvent } from 'react';
import { Button, darken, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { DotIcon } from '../icon/Icon';

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

    span.MuiButton-startIcon {
      padding: 0;
    }
  `}
`;

export interface ButtonProps extends CommonProps {
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** The label for the button. Button labels should be in sentence case. */
  label: string;
  /** The icon to display on the button */
  iconId?: string;
  /** Is this a submit button */
  isSubmit?: boolean;
  /** Event callback */
  onClick?: (event: MouseEvent<Element>) => void;
  /** The size of the button */
  size?: ButtonSize;
  /** Help text to be displayed on hover */
  titleTooltip?: string;
  /** The type of button */
  type?: ButtonType;
}

/** This component wraps the Button component from @material-ui. */
export const DotButton = ({
  className,
  'data-testid': dataTestId,
  label,
  disabled = false,
  iconId,
  isSubmit = false,
  onClick = null,
  size = 'medium',
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
      color = label ? 'primary' : 'default';
      variant = 'outlined';
      break;
    case 'text':
      color = label ? 'primary' : 'default';
      variant = 'text';
      break;
  }

  return (
    <StyledButton
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={(event) => onClick && onClick(event)}
      startIcon={
        iconId ? (
          <DotIcon
            data-testid="icon"
            icon={iconId}
            fontSize={size === 'medium' ? 'default' : size}
          />
        ) : undefined
      }
      title={titleTooltip}
      variant={variant}
      size={size}
      type={isSubmit ? 'submit' : 'button'}
    >
      {label}
    </StyledButton>
  );
};

export default DotButton;
