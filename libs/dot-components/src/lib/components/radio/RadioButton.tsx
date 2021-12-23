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
import { CommonFormFieldProps } from '../input-form-fields/InputFormFields.propTypes';

// TO-DO: make sure form control label is still good
// https://next.material-ui.com/guides/migration-v4/#formcontrollabel
export type RadioSize = 'medium' | 'small';
export type RadioLabelPlacement = 'bottom' | 'end' | 'start';

export interface RadioButtonBaseProps extends CommonFormFieldProps {
  /** controls the size of the radio button 'medium', 'small' */
  size?: RadioSize;
  /** unique value for the radio button */
  value?: string;
}

export interface RadioButtonProps extends RadioButtonBaseProps {
  /** if the radio button is selected */
  checked?: boolean;
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export function DotRadioButton({
  ariaLabel,
  ariaLabelledby,
  checked,
  className,
  'data-testid': dataTestId,
  disabled,
  id,
  inputRef,
  label,
  labelPlacement = 'end',
  name,
  onChange,
  required,
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
      control={
        <StyledRadioButton
          aria-label={ariaLabel}
          checked={checked}
          classes={{ root: rootRadioButtonClassName }}
          color="primary"
          data-testid={dataTestId}
          disabled={disabled}
          id={id}
          inputProps={{
            'aria-label': ariaLabel ? ariaLabel : label,
            'aria-labelledby': ariaLabelledby,
          }}
          inputRef={inputRef}
          name={name}
          onChange={handleChange}
          required={required}
          size={size}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
      value={value}
    />
  );
}
