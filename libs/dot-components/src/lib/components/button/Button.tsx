import React, { MouseEvent } from 'react';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';

import { DotIcon } from '../icon/Icon';
import { CommonProps } from '../CommonProps';

export type ButtonType = 'destructive' | 'primary' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        textTransform: 'inherit',
        padding: (props: { type: ButtonType }) =>
          `6px ${
            props.type === 'outlined' ? theme.spacing(2) - 1 : theme.spacing(2)
          }px`,
      },
    }),
  { name: 'dot-button' }
);

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
  label,
  disabled = false,
  iconId,
  isSubmit = false,
  onClick,
  size = 'medium',
  titleTooltip,
  type,
}: ButtonProps) => {
  const btnClasses = useStyles({ type });

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
      className={`dot-button ${classes} ${btnClasses.root}`}
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
      {label}
    </Button>
  );
};

export default DotButton;
