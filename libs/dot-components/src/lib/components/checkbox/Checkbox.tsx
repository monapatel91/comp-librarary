import React, { ChangeEvent } from 'react';
import { CommonProps } from '../CommonProps';
import {
  StyledFormControlLabel,
  rootClassName as formRootClassName,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

import { StyledCheckbox, rootClassName } from './Checkbox.styles';
import { RadioButtonProps } from '../radio/RadioButton';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';

/* eslint-disable-next-line */
export interface CheckboxProps extends RadioButtonProps {
  ariaLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  indeterminate?: boolean;
  label?: string;
  labelPlacement?: CheckboxLabelPlacement;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  required?: boolean;
  size?: CheckboxSize;
  value: string;
}

export function DotCheckbox({
  ariaLabel,
  checked,
  className,
  'data-testid': dataTestId,
  disabled,
  id,
  indeterminate,
  label,
  labelPlacement,
  name,
  onChange,
  required,
  size = 'medium',
  value,
}: CheckboxProps) {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    formRootClassName,
    className
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event, event.target.value);
  };

  return (
    <StyledFormControlLabel
      className={rootClasses}
      labelPlacement={labelPlacement}
      control={
        <StyledCheckbox
          classes={{ root: rootClasses }}
          checked={checked}
          color="primary"
          data-testid={dataTestId}
          disabled={disabled}
          id={id}
          indeterminate={indeterminate}
          inputProps={{ 'aria-label': ariaLabel ? ariaLabel : label }}
          name={name}
          onChange={handleChange}
          required={required}
          size={size}
          value={value}
        />
      }
      label={label}
    />
  );
}

export default DotCheckbox;
