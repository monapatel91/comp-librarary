import React from 'react';
<<<<<<< HEAD
import { InputTextProps } from './InputFormFields.propTypes';
import {
  rootSelectClassName,
  StyledTextField,
  warningClassName,
  adornmentIconClassName,
  StyledAdornment,
} from './InputFormFields.styles';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

export interface InputSelectProps extends InputTextProps {
  options: Array<string>;
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
  margin = 'dense',
  name,
  onChange,
  options = [],
  defaultValue = options[0],
  required,
  startIcon,
  warning,
}: InputSelectProps) => {
  const rootStyles = useStylesWithRootClass(rootSelectClassName, className);

  const hasWarning = !error && warning && warningClassName;

  return (
    <StyledTextField
      autoFocus={autoFocus}
      className={`${rootStyles} ${hasWarning}`}
      defaultValue={defaultValue}
      endIcon={endIcon}
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
      margin={margin}
      multiline={false}
      name={name}
      onChange={(event) => onChange && onChange(event.target.value)}
      required={required}
      select={true}
      SelectProps={{
        native: true,
      }}
      variant="outlined"
      warning={warning}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledTextField>
  );
};
=======
import { TextField } from '@material-ui/core';
import { InputTextProps } from './Input-form-fields.foundation';

export interface InputSelectProps extends InputTextProps {
    defaultValue?: string;
    options: Array<string>;
  }

/**
 * @experimental This component is still in development
 */
export const DotInputSelect = ({
    autoFocus,
    'data-testid': dataTestId,
    error = false,
    fullWidth = true,
    helperText,
    id,
    label,
    margin = 'dense',
    name,
    onChange,
    options = [],
    required,
    defaultValue = options[0],
  }: InputSelectProps) => {
    return (
      <TextField
        autoFocus={autoFocus}
        className="dot-select-field"
        defaultValue={defaultValue}
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
        id={id}
        inputProps={{
          'data-testid': dataTestId,
        }}
        label={label}
        margin={margin}
        multiline={false}
        name={name}
        onChange={(event) => onChange && onChange(event.target.value)}
        required={required}
        select={true}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    );
  };
  
>>>>>>> isse: #107 #108 moved select to separate file
