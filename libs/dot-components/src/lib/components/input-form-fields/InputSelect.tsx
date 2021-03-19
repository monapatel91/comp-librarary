import React from 'react';
import { InputProps } from './InputFormFields.propTypes';
import {
  rootSelectClassName,
  StyledTextField,
  warningClassName,
  adornmentIconClassName,
  StyledAdornment,
} from './InputFormFields.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface InputSelectProps extends InputProps {
  options: Array<string>;
  value: string;
  defaultValue?: string;
}

export const DotInputSelect = ({
  autoFocus,
  className,
  'data-testid': dataTestId,
  endIcon,
  error = false,
  fullWidth = true,
  helperText,
  id,
  label,
  name,
  onChange,
  options = [],
  defaultValue,
  value,
  required,
  startIcon,
  size = 'small',
  warning = false,
}: InputSelectProps) => {
  const rootStyles = useStylesWithRootClass(rootSelectClassName, className);

  const hasWarning = !error && warning && warningClassName;

  return (
    <StyledTextField
      autoFocus={autoFocus}
      className={`${rootStyles} ${hasWarning}`}
      defaultValue={defaultValue}
      value={value}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={{
        'data-testid': dataTestId,
      }}
      InputProps={{
        startAdornment: startIcon && (
          <StyledAdornment
            className={`${adornmentIconClassName} start`}
            position="start"
          >
            {startIcon}
          </StyledAdornment>
        ),
        endAdornment: endIcon && (
          <StyledAdornment
            className={`${adornmentIconClassName} end`}
            position="end"
          >
            {endIcon}
          </StyledAdornment>
        ),
      }}
      label={label}
      multiline={false}
      name={name}
      onChange={onChange}
      required={required}
      select={true}
      SelectProps={{
        native: true,
      }}
      size={size}
      variant="outlined"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledTextField>
  );
};
