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
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
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
      SelectProps={{
        native: true,
      }}
      autoFocus={autoFocus}
      className={`${rootStyles} ${hasWarning}`}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={{
        'aria-label': ariaLabel,
        'data-testid': dataTestId,
        className: 'dot-select',
      }}
      inputRef={inputRef}
      label={label}
      multiline={false}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      required={required}
      select={true}
      size={size}
      value={value}
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
