import React, { ChangeEvent } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { RadioButtonProps } from '../radio/RadioButton';
import {
  rootClassName,
  StyledFormControlLabel,
} from '../form-controls/FormControlLabel.styles';
import {
  StyledCheckbox,
  rootClassName as rootCheckboxClassName,
} from './Checkbox.styles';

// TO-DO: make sure form control label is still good
// https://next.material-ui.com/guides/migration-v4/#formcontrollabel
export type CheckboxSize = 'medium' | 'small';
export type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';

export interface CheckboxProps extends RadioButtonProps {
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
  'data-testid': dataTestId,
  disabled,
  disableRipple,
  id,
  indeterminate,
  inputRef,
  label = '',
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
