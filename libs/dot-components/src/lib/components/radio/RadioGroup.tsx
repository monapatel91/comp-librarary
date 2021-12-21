import React, { useState, ChangeEvent, ReactNode, useEffect } from 'react';
import { FormHelperText, FormLabel } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  endAdornmentClassName,
  groupLabelClassName,
  rootClassName as formGroupClassName,
  startAdornmentClassName,
  StyledFormControl,
} from '../form-controls/FormControl.styles';
import {
  DotRadioButton,
  RadioButtonBaseProps,
  RadioButtonProps,
} from './RadioButton';
import {
  rootClassName,
  StyledRadioGroup,
  StyledRadioGroupWrapper,
  wrapperClassName,
} from './RadioGroup.styles';

export interface RadioGroupBaseProps extends RadioButtonBaseProps {
  /** Icon placed before the children. */
  endIcon?: ReactNode;
  /** If true, the label should be displayed in an error state. */
  error?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** changes layout to be horizontal if true */
  row?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
}

export interface RadioGroupProps extends RadioGroupBaseProps {
  /** The default input element value. Use when the component is not controlled or has a value. */
  defaultValue?: string;
  /** A function that should be executed when the value of the radio button changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Array of RadioButtonProps used to create the radio buttons */
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
            ariaLabelledby={ariaLabelledby}
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
    <StyledRadioGroupWrapper className={wrapperClassName}>
      <StyledFormControl
        classes={{ root: formGroupClassName }}
        component="fieldset"
        error={error}
        required={required}
      >
        {label && (
          <FormLabel component="legend">
            {startIcon && (
              <span className={startAdornmentClassName}>{startIcon}</span>
            )}
            <span className={groupLabelClassName}>{label}</span>
            {endIcon && (
              <span className={endAdornmentClassName}>{endIcon}</span>
            )}
          </FormLabel>
        )}
        <StyledRadioGroup
          aria-label={ariaLabel}
          className={rootClasses}
          data-testid={dataTestId}
          defaultValue={defaultValue}
          name={name}
          onChange={handleChange}
          row={row}
          value={selectedValue}
        >
          {renderOptions}
        </StyledRadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    </StyledRadioGroupWrapper>
  );
};
