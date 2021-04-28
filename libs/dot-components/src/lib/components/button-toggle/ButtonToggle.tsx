import React, { MouseEvent, useState } from 'react';
import { ToggleButton } from '@material-ui/lab';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { DotIcon } from '../icon/Icon';
import { rootClassName, StyledToggleButtonGroup } from './ButtonToggle.styles';
import { DotTypography } from '../typography/Typography';

export type ButtonToggleSize = 'small' | 'medium' | 'large';
export type ButtonToggleOrientation = 'horizontal' | 'vertical';
type ButtonToggleValue = string | number | boolean;

export interface ButtonToggleProps extends CommonProps {
  /** accessibility label */
  ariaLabel: string;
  /** button props for each toggle button options*/
  buttonOptions: {
    ariaLabel: string;
    disabled?: boolean;
    value: ButtonToggleValue;
    text?: string;
    iconId?: string;
  }[];
  /** If true, the keyboard focus ripple will be disabled */
  disableFocusRipple?: boolean;
  /** If true, the ripple effect will be disabled. */
  disableRipple?: boolean;
  onChange: (event: MouseEvent, value: ButtonToggleValue) => void;
  /** The group orientation (layout flow direction)*/
  orientation?: ButtonToggleOrientation;
  /** The size of the buttons.*/
  size?: ButtonToggleSize;
  /** The value to associate with the button when selected in a ToggleButtonGroup */
  value: ButtonToggleValue;
}
export const DotButtonToggle = ({
  ariaLabel,
  buttonOptions,
  className,
  'data-testid': dataTestId = 'dot-toggle',
  disableFocusRipple = false,
  disableRipple = false,
  onChange,
  orientation = 'horizontal',
  size = 'medium',
  value,
}: ButtonToggleProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledToggleButtonGroup
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      exclusive
      onChange={onChange}
      orientation={orientation}
      size={size}
      value={value}
    >
      {buttonOptions.map((option, key) => (
        <ToggleButton
          aria-label={option.ariaLabel}
          disabled={option.disabled}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          key={key}
          value={option.value}
        >
          {option.iconId && (
            <DotIcon className="dot-toggle-icon" iconId={option.iconId} />
          )}
          {option.text && <DotTypography>{option.text}</DotTypography>}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
