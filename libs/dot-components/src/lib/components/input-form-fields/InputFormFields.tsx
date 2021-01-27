import React from 'react';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { InputTextProps } from './InputFormFields.propTypes';
import {
  rootClassName,
  StyledTextField,
  warningClassName,
  adornmentIconClassName,
  StyledAdornment,
} from './InputFormFields.styles';

/**
 * A component for generating an input element of type "text"
 *
 */
export const DotInputText = ({
  autoFocus,
  className,
  defaultValue,
  'data-testid': dataTestId,
  error = false,
  fullWidth = true,
  helperText,
  startIcon,
  endIcon,
  id,
  label,
  margin = 'dense',
  name,
  onChange,
  required = false,
  type = 'text',
  warning = false,
}: InputTextProps) => {
  const rootStyles = useStylesWithRootClass(rootClassName, className);

  const hasWarning = !error && warning ? warningClassName : '';

  return (
    <StyledTextField
      id={id}
      aria-label={name}
      autoFocus={autoFocus}
      className={`${rootStyles} ${hasWarning}`}
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
      margin={margin}
      multiline={false}
      name={name}
      onChange={(event) => onChange && onChange(event.target.value)}
      required={required}
      type={type}
      variant="outlined"
    />
  );
};
