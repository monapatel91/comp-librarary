import React, { ChangeEvent } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonFormFieldProps } from '../input-form-fields/InputFormFields.propTypes';
import {
  rootClassName as formControlClassName,
  StyledFormControlLabel,
} from '../form-controls/FormControlLabel.styles';
import {
  StyledCheckbox,
  rootClassName as rootCheckboxClassName,
} from './Checkbox.styles';
import { RadioButtonProps } from '../radio/RadioButton';

export type CheckboxSize = 'medium' | 'small';
export type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';

export interface CheckboxProps extends RadioButtonProps {
  /** accessibility labelled by */
  ariaLabelledby?: string;
  /** If true, the ripple effect will be disabled. */
  disableRipple?: boolean;
  /** if true the checkbox will display with intermediate */
  indeterminate?: boolean;
  /** A function that should be executed when the value of the checkbox buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** value of the input */
  value?: string;
}

export function DotCheckbox({
  ariaLabel,
  ariaLabelledby,
  checked,
  className,
  'data-testid': dataTestId,
  disabled,
  disableRipple,
  id,
  indeterminate,
  inputRef,
  label,
  labelPlacement,
  name,
  onChange,
  required,
  size = 'medium',
  value,
}: CheckboxProps) {
  const rootClasses = useStylesWithRootClass(formControlClassName, className);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event, event.target.value);
  };

  return (
    <StyledFormControlLabel
      className={rootClasses}
      control={
        <StyledCheckbox
          checked={checked}
          classes={{ root: rootCheckboxClassName }}
          color="primary"
          data-testid={dataTestId}
          disableRipple={disableRipple}
          disabled={disabled}
          id={id}
          indeterminate={indeterminate}
          inputProps={{
            'aria-label': ariaLabel ? ariaLabel : label,
            'aria-labelledby': ariaLabelledby,
          }}
          inputRef={inputRef}
          name={name}
          onChange={handleChange}
          required={required}
          size={size}
          value={value}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
}
