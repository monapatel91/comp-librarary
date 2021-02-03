import React, { useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName as formRootClassName,
  StyledFormControlLabel,
} from './FormControlLabel.styles';
import { rootClassName, StyledSwitch } from './Switch.styles';

export type SwitchColor = 'default' | 'primary' | 'secondary';
export type SwitchSize = 'medium' | 'small';
export type LabelPlacement = 'bottom' | 'end' | 'start' | 'top';

export interface SwitchProps extends CommonProps {
  /** accessibility label */
  ariaLabel?: string;
  /** determines the default state of the switch */
  checked?: boolean;
  /** color options available 'default', 'primary', 'secondary' */
  color?: SwitchColor;
  /** if true makes the switch disabled */
  disabled?: boolean;
  /** text displayed next to the switch */
  label?: string;
  /** label placement options available 'bottom', 'end', 'start', 'top' */
  labelPlacement?: LabelPlacement;
  /** controls the size of the switch 'medium', 'small' */
  size?: SwitchSize;
}

export const DotSwitch = ({
  ariaLabel,
  checked = false,
  className,
  color = 'primary',
  'data-testid': dataTestId,
  disabled = false,
  label,
  labelPlacement = 'end',
  size = 'medium',
}: SwitchProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [isChecked, updateChecked] = useState(checked);

  const handleChange = () => {
    updateChecked(!isChecked);
  };

  return (
    <StyledFormControlLabel
      className={formRootClassName}
      labelPlacement={labelPlacement}
      control={
        <StyledSwitch
          classes={{ root: rootClasses }}
          checked={isChecked}
          color={color}
          disabled={disabled}
          inputProps={{ 'aria-label': ariaLabel ? ariaLabel : label }}
          onChange={handleChange}
          size={size}
        />
      }
      label={label}
    />
  );
};

export default DotSwitch;
