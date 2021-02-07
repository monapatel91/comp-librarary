import React, { useState, ChangeEvent } from 'react';
import {
  rootClassName as formRootClassName,
  StyledFormControlLabel,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledRadioButton } from './RadioButton.styles';
import { SwitchProps } from '../switch/Switch';
import { useRadioGroup } from '@material-ui/core';

export interface RadioButtonProps extends SwitchProps {
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** unique value for the radio button */
  value: string;
  /** selected value used to compare the again each value */
  selectedValue?: string;
}

export function DotRadioButton({
  ariaLabel,
  checked,
  className,
  color = 'primary',
  'data-testid': dataTestId,
  disabled = false,
  label,
  labelPlacement = 'end',
  onChange,
  selectedValue,
  size = 'medium',
  value,
}: RadioButtonProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [isChecked, setChecked] = useState(checked);
  const radioGroup = useRadioGroup();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!radioGroup) {
      setChecked(!isChecked);
    }
    onChange && onChange(event, event.target.value);
  };

  const groupChecked =
    radioGroup && checked ? checked : selectedValue === value ? true : false;

  return (
    <StyledFormControlLabel
      className={formRootClassName}
      labelPlacement={labelPlacement}
      value={value}
      control={
        <StyledRadioButton
          classes={{ root: rootClasses }}
          checked={isChecked || groupChecked}
          color={color}
          data-testid={dataTestId}
          disabled={disabled}
          inputProps={{ 'aria-label': ariaLabel ? ariaLabel : label }}
          onChange={handleChange}
          size={size}
        />
      }
      label={label}
    />
  );
}

export default DotRadioButton;
