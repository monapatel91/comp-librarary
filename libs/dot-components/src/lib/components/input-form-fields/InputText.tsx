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

interface InputTextState {
  changeEvent?: ChangeEvent<HTMLInputElement>;
  inputValue: string;
}

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

const getInitialState = (value: string): InputTextState => ({
  inputValue: value || '',
});

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

  // This state is used only with debounce feature enabled
  const [inputTextState, setInputTextState] = useState<InputTextState>(
    hasDebounce && getInitialState(value)
  );

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

  // Used to control text value from the consumer component
  // when debounce feature is enabled
  useEffect(() => {
    if (hasDebounce && value !== inputTextState.inputValue) {
      setInputTextState(getInitialState(value));
    }
  }, [value]);

  // Improve performance by avoiding callback execution
  // on each keystroke (if debounce feature is active)
  useEffect(() => {
    // Do not proceed if debounce feature is turned
    // off or there is no event defined
    if (
      !hasDebounce ||
      !inputTextState ||
      !inputTextState.changeEvent ||
      !onChange
    )
      return;
    const handler = setTimeout(() => {
      onChange(inputTextState.changeEvent);
    }, DELAY_MS);
    return () => clearTimeout(handler);
  }, [inputTextState]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // We need to have control over change event and input value separately
    // so that we can set initial state via 'value' prop (if needed)
    hasDebounce
      ? setInputTextState({
          changeEvent: e,
          inputValue: e.target.value,
        })
      : onChange?.(e);
  };

  const inputTextValue = hasDebounce ? inputTextState.inputValue : value;
  // Don't use default value when debounce feature is enabled because
  // in that case component is controlled
  const defaultInputValue = hasDebounce ? undefined : defaultValue;

  return (
    <StyledTextField
      id={id}
      aria-label={name}
      autoComplete="off"
      autoFocus={autoFocus}
      classes={{ root: rootStyles }}
      defaultValue={defaultInputValue}
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
      value={inputTextValue}
    />
  );
};
