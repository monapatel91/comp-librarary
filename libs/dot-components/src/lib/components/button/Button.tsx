import React, { MouseEvent } from 'react';
import { Button, createStyles, Theme } from '@material-ui/core';
import { DotIcon } from '../icon/Icon';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

export type ButtonType = 'destructive' | 'primary' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

const styles = (theme: Theme) =>
  createStyles({
    containedSecondary: {
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error['800'],
      },
      '&:active': {
        backgroundColor: theme.palette.error['800'],
      },
    },
    startIcon: {
      '& span': {
        padding: 0,
      },
    },
  });

export interface ButtonProps extends CommonProps {
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /**
   * The label for the button. Button labels should be in sentence case.
   */
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
  const classes = useStylesWithRootClass('dot-button', styles, className);

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
    <Button
      classes={{ ...classes }}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={(event) => onClick && onClick(event)}
      startIcon={
        iconId ? (
          <DotIcon
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
    </Button>
  );
};

export default DotButton;
