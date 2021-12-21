import React, { useState, ChangeEvent, ReactNode, useEffect } from 'react';
import { FormHelperText, FormLabel } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName,
  StyledFormControl,
} from '../form-controls/FormControl.styles';
import {
  DotRadioButton,
  RadioButtonBaseProps,
  RadioButtonProps,
} from './RadioButton';
import {
  endAdornmentClassName,
  groupLabelClassName,
  startAdornmentClassName,
  StyledRadioGroup,
  wrapperClassName,
} from './RadioGroup.styles';

export interface RadioGroupBaseProps extends RadioButtonBaseProps {
  /** Icon placed before the children. */
  endIcon?: ReactNode;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The label of the radio button group. */
  groupLabel?: string;
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

export interface RadioGroupProps extends RadioGroupBaseProps {
  /** Array of CheckboxProps to set by default */
  defaultValue?: RadioButtonProps[];
  /** A function that should be executed when the value of the radio buttom changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Array of CheckboxProps used to create the checkboxes */
  options: RadioButtonProps[];
}

export const DotRadioGroup = ({
  ariaLabel,
  ariaLabelledby,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disabled = false,
  endIcon,
  error,
  id,
  inputRef,
  label,
  groupLabel,
  helperText,
  labelPlacement = 'end',
  name,
  onChange,
  options,
  required,
  size = 'medium',
  startIcon,
  value,
}: RadioGroupProps) => {
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
    ? options.map((option) => {
        return (
          <DotRadioButton
            checked={selectedValue === option.value}
            disabled={option.disabled || groupDisabled}
            key={option.value}
            label={option.label}
            labelPlacement={labelPlacement}
            size={size}
            value={option.value}
          />
        );
      })
    : null;

  return (
    <StyledFormControl className={wrapperClassName}>
      {groupLabel && (
        <FormLabel component="legend">
          {startIcon && (
            <span className={startAdornmentClassName}>{startIcon}</span>
          )}
          <span className={groupLabelClassName}>{groupLabel}</span>
          {endIcon && <span className={endAdornmentClassName}>{endIcon}</span>}
        </FormLabel>
      )}
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
