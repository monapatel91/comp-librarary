import React, { ChangeEvent, useEffect, useState } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { InputProps } from './InputFormFields.propTypes';
import { DotIcon } from '../icon/Icon';
import {
  rootClassName,
  StyledTextField,
  warningClassName,
  adornmentIconClassName,
  StyledAdornment,
} from './InputFormFields.styles';

export const DELAY_MS = 300;

export interface InputTextProps extends InputProps {
  /** If true, the input will use debounce functionality. **/
  hasDebounce?: boolean;
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
  hasDebounce,
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

  const [changeEvent, setChangeEvent] =
    useState<ChangeEvent<HTMLInputElement>>(null);

  const rootStyles = useStylesWithRootClass(
    rootClassName,
    className,
    hasWarning
  );
  const endAdornmentIcon =
    endIcon ||
    (error && (
      <DotIcon
        data-testid={dataTestId && `${dataTestId}-error-icon`}
        iconId="error-solid"
      />
    )) ||
    (warning && (
      <DotIcon
        data-testid={dataTestId && `${dataTestId}-warning-icon`}
        iconId="warning-solid"
      />
    ));

  // Improve performance by avoiding callback execution
  // on each keystroke (if debounce feature is active)
  useEffect(() => {
    if (!hasDebounce || changeEvent === null) return;
    const handler = setTimeout(() => {
      onChange(changeEvent);
    }, DELAY_MS);
    return () => clearTimeout(handler);
  }, [changeEvent]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setChangeEvent(e);

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
        endAdornment: endAdornmentIcon && (
          <StyledAdornment
            className={`${adornmentIconClassName} end`}
            position="end"
          >
            {endAdornmentIcon}
          </StyledAdornment>
        ),
      }}
      inputRef={inputRef}
      label={label}
      multiline={multiline}
      name={name}
      onChange={hasDebounce ? handleChange : onChange}
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
