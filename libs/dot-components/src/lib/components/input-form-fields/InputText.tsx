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
  multiline?: boolean;
  rows?: number;
  rowsMax?: number;
}

/**
 * @experimental This component is still in development
 */
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
  margin = 'dense',
  multiline = false,
  name,
  onChange,
  required = false,
  rows,
  rowsMax,
  startIcon,
  size = 'small',
  type = 'text',
  warning = false,
}: InputTextProps) => {
  const hasWarning = !error && warning ? warningClassName : '';
  const rootStyles = useStylesWithRootClass(
    rootClassName,
    className,
    hasWarning
  );

  let _rows = null;
  let _rowsMax = null;

  if (multiline) {
    _rows = rows;
    _rowsMax = rowsMax;
  }

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
      margin={margin}
      multiline={multiline}
      name={name}
      onChange={(event) => onChange && onChange(event.target.value)}
      required={required}
      rows={_rows}
      rowsMax={_rowsMax}
      size={size}
      type={type}
      variant="outlined"
    />
  );
};
