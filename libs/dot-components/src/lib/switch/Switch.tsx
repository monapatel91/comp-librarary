import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

export type SwitchColor = 'default' | 'primary' | 'secondary';
export type SwitchSize = 'medium' | 'small';

export interface SwitchProps {
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
  /** controls the size of the switch 'medium', 'small' */
  size?: SwitchSize;
}

export const DotSwitch = ({
  ariaLabel,
  checked = false,
  disabled = false,
  color = 'primary',
  label,
  size = 'medium',
}: SwitchProps) => {
  const [isChecked, updateChecked] = useState(checked);

  const handleChange = () => {
    updateChecked(!isChecked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
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
