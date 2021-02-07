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
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string;
  selected?: string;
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
  size = 'medium',
  selected,
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
    radioGroup && checked ? checked : selected === value ? true : false;

  return (
    <StyledFormControlLabel
      className={formRootClassName}
      labelPlacement={labelPlacement}
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
          value={value}
        />
      }
      label={label}
    />
  );
}

export default DotRadioButton;
