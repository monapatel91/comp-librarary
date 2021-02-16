import React, { ChangeEvent } from 'react';
import {
  rootClassName,
  StyledFormControlLabel,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName as rootRadioButtonClassName,
  StyledRadioButton,
} from './RadioButton.styles';
import { CommonProps } from '../CommonProps';

export type RadioSize = 'medium' | 'small';
export type RadioLabelPlacement = 'bottom' | 'end' | 'start';

export interface RadioButtonBaseProps extends CommonProps {
  /** accessibility label */
  ariaLabel?: string;
  /** if the radio button is selected */
  checked?: boolean;
  /** label placement options available 'bottom' | 'end' | 'start' */
  labelPlacement?: RadioLabelPlacement;
  /** name of radio input */
  name?: string;
  /** controls the size of the radio button 'medium', 'small' */
  size?: RadioSize;
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** unique value for the radio button */
  value?: string;
}

export interface RadioButtonProps extends RadioButtonBaseProps {
  /** if true makes the radio button disabled */
  disabled?: boolean;
  /** text displayed next to the radio buttom */
  label?: string;
}

export function DotRadioButton({
  ariaLabel,
  checked,
  className,
  'data-testid': dataTestId,
  disabled = false,
  label,
  labelPlacement = 'end',
  name,
  onChange,
  size = 'medium',
  value,
}: RadioButtonProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event, event.target.value);
  };

  return (
    <StyledFormControlLabel
      className={rootClasses}
      labelPlacement={labelPlacement}
      value={value}
      control={
        <StyledRadioButton
          classes={{ root: rootRadioButtonClassName }}
          checked={checked}
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
