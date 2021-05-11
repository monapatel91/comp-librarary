import React, { ChangeEvent } from 'react';
import {
  StyledFormControlLabel,
  rootClassName,
} from '../form-controls/FormControlLabel.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

import {
  StyledCheckbox,
  rootClassName as rootCheckboxClassName,
} from './Checkbox.styles';
import { RadioButtonProps } from '../radio/RadioButton';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';

export interface CheckboxProps extends RadioButtonProps {
  /** accessibility label */
  ariaLabel?: string;
  /** accessibility labelled by */
  ariaLabelledby?: string;
  /** If true, the ripple effect will be disabled. */
  disableRipple?: boolean;
  /** if true the checkbox will display with intermediate */
  indeterminate?: boolean;
}

export function DotCheckbox({
  ariaLabel,
  ariaLabelledby,
  checked,
  className,
  disableRipple,
  'data-testid': dataTestId,
  disabled,
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
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event, event.target.value);
  };

  return (
    <StyledFormControlLabel
      className={rootClasses}
      labelPlacement={labelPlacement}
      control={
        <StyledCheckbox
          classes={{ root: rootCheckboxClassName }}
          checked={checked}
          color="primary"
          data-testid={dataTestId}
          disabled={disabled}
          disableRipple={disableRipple}
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
    />
  );
}
