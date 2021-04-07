import React from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { InputProps } from './InputFormFields.propTypes';
import {
  rootClassName,
  StyledTextField,
  warningClassName,
  adornmentIconClassName,
  StyledAdornment,
} from './InputFormFields.styles';

export interface InputTextProps extends InputProps {
  /** if multiline it wil render multiple lines */
  multiline?: boolean;
  /** Placeholder text always displayed inside the input field */
  placeholder?: string;
  /** If true, the input will be read-only. */
  readOnly?: boolean;
  /** number of rows for multiline line */
  rows?: number;
  /** max of rows for multiline line */
  rowsMax?: number;
  /** value of the InputText */
  value?: string;
}

export const DotInputText = ({
  autoFocus,
  className,
  defaultValue,
  'data-testid': dataTestId,
  disabled = false,
  error = false,
  fullWidth = true,
  helperText,
  endIcon,
  id,
  inputRef,
  label,
  multiline = false,
  name,
  onChange,
  placeholder,
  readOnly = false,
  required = false,
  rows,
  rowsMax,
  startIcon,
  size = 'small',
  type = 'text',
  value,
  warning = false,
}: InputTextProps) => {
  const hasWarning = !error && warning ? warningClassName : '';
  const rootStyles = useStylesWithRootClass(
    rootClassName,
    className,
    hasWarning
  );

  return (
    <StyledTextField
      id={id}
      aria-label={name}
      autoComplete="off"
      autoFocus={autoFocus}
      classes={{ root: rootStyles }}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      inputProps={{
        'data-testid': dataTestId,
        className: 'dot-input',
        readOnly: readOnly,
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
      multiline={multiline}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={multiline ? rows : null}
      rowsMax={multiline ? rowsMax : null}
      size={size}
      type={type}
      variant="outlined"
      value={value}
    />
  );
};
