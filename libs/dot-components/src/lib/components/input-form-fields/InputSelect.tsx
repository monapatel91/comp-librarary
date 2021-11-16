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
  /** default value of select field */
  defaultValue?: string;
  /** options of select dropdown */
  options: Array<string>;
  /** value of input field */
  value?: string;
}

export const DotInputSelect = ({
  ariaLabel,
  autoFocus,
  className,
  'data-testid': dataTestId,
  defaultValue,
  disabled = false,
  endIcon,
  error = false,
  fullWidth = true,
  helperText,
  id,
  inputRef,
  label,
  name,
  onChange,
  options = [],
  required,
  size = 'small',
  startIcon,
  value,
  warning = false,
}: InputSelectProps) => {
  const rootStyles = useStylesWithRootClass(rootSelectClassName, className);
  const hasWarning = !error && warning && warningClassName;

  return (
    <StyledTextField
      autoFocus={autoFocus}
      className={`${rootStyles} ${hasWarning}`}
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={{
        'aria-label': ariaLabel,
        'data-testid': dataTestId,
        className: 'dot-select',
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
      inputRef={inputRef}
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
        <option className="dot-option" key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledTextField>
  );
};
