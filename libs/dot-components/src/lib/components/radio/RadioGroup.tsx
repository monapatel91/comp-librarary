import React, { useState, ChangeEvent, ReactNode, useEffect } from 'react';
import { FormHelperText, FormLabel } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonFormFieldProps } from '../input-form-fields/InputFormFields.propTypes';
import {
  endAdornmentClassName,
  groupLabelClassName,
  rootClassName,
  startAdornmentClassName,
  StyledFormControl,
} from '../form-controls/FormControl.styles';
import { DotRadioButton, RadioButtonProps } from './RadioButton';
import { groupClassName, StyledRadioGroup } from './RadioGroup.styles';

export interface RadioGroupBaseProps extends RadioButtonBaseProps {
  /** if true makes all radio buttons disabled */
  disableGroup?: boolean;
  /** Icon placed before the children. */
  endIcon?: ReactNode;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** if true user is required to select an option */
  required?: boolean;
  /** changes layout to be horizontal if true */
  row?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
  /** value of the input */
  value?: string;
}

export const DotRadioGroup = ({
  ariaLabel,
  ariaLabelledby,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disabled,
  endIcon,
  error,
  id,
  inputRef,
  label,
  helperText,
  labelPlacement = 'end',
  name,
  onChange,
  options,
  required,
  row,
  size = 'medium',
  startIcon,
  value,
}: RadioGroupBaseProps) => {
  const groupDisabled = disabled;
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    `dot-${labelPlacement}`,
    className
  );

  const radioValue = value || defaultValue;

  const [selectedValue, setSelectedValue] = useState(radioValue);

  /* This will ensure that value can be updated from the outside */
  useEffect(() => {
    setSelectedValue(radioValue);
  }, [radioValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange && onChange(event, event.target.value);
  };

  const renderOptions = options
    ? options.map(({ label, value, disabled }) => {
        return (
          <DotRadioButton
            checked={selectedValue === value}
            disabled={disabled || disableGroup}
            key={value}
            label={label}
            labelPlacement={labelPlacement}
            size={size}
            value={value}
          />
        );
      })
    : null;

  return (
    <StyledFormControl className={wrapperClassName}>
      <StyledRadioGroup
        classes={{ root: rootClasses }}
        component="fieldset"
        error={error}
        required={required}
      >
        {renderOptions}
      </StyledRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
};
