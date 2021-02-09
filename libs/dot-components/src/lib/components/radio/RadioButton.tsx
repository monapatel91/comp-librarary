import React, { useState, ChangeEvent } from 'react';
import {
  rootClassName as formRootClassName,
  StyledFormControlLabel,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledRadioButton } from './RadioButton.styles';
import { useRadioGroup } from '@material-ui/core';
import { CommonProps } from '../CommonProps';

export type RadioSize = 'medium' | 'small';
export type RadioLabelPlacement = 'bottom' | 'end' | 'start';

export interface RadioButtonBaseProps extends CommonProps {
  /** accessibility label */
  ariaLabel?: string;
  /** text displayed next to the radio buttom */
  label?: string;
  /** label placement options available 'bottom' | 'end' | 'start' */
  labelPlacement?: RadioLabelPlacement;
  /** controls the size of the radio button 'medium', 'small' */
  size?: RadioSize;
  /** name of radio input */
  name?: string;
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** unique value for the radio button */
  value: string;
  /** selected value used to compare the again each value */
  selectedValue?: string;
}

export interface RadioButtonProps extends RadioButtonBaseProps {
  /** if true makes the radio button disabled */
  disabled?: boolean;
}

export function DotRadioButton({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  disabled = false,
  label,
  labelPlacement = 'end',
  name,
  onChange,
  selectedValue,
  size = 'medium',
  value,
}: RadioButtonProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const radioGroup = useRadioGroup();
  const [isChecked, setChecked] = useState(
    !radioGroup && selectedValue === value
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!radioGroup) {
      setChecked(!isChecked);
    }
    onChange && onChange(event, event.target.value);
  };

  const groupChecked = radioGroup && selectedValue === value && true;

  return (
    <StyledFormControlLabel
      className={formRootClassName}
      labelPlacement={labelPlacement}
      value={value}
      control={
        <StyledRadioButton
          classes={{ root: rootClasses }}
          checked={isChecked || groupChecked}
          color="primary"
          data-testid={dataTestId}
          disabled={disabled}
          inputProps={{ 'aria-label': ariaLabel ? ariaLabel : label }}
          name={name}
          onChange={handleChange}
          size={size}
        />
      }
      label={label}
    />
  );
}

export default DotRadioButton;
