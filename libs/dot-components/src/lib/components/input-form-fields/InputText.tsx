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
  placeholder?: string;
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
  error = false,
  fullWidth = true,
  helperText,
  endIcon,
  id,
  label,
  multiline = false,
  name,
  onChange,
  placeholder,
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
      autoFocus={autoFocus}
      classes={{ root: rootStyles }}
      defaultValue={defaultValue}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
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
