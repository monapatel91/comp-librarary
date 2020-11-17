import React from 'react';
import { TextField } from '@material-ui/core';
import './InputFormFields.scss';

export type inputMarginOptions = 'dense' | 'none' | 'normal';
export type inputVariantOptions = 'filled' | 'outlined' | 'standard';

export interface InputTextProps {
  /** This prop helps users to fill forms faster */
  autoFocus?: boolean;
  /** data attribute passed through for testing purposes ONLY */
  'data-testid'?: string;
  /** If true, the label will be displayed in an error state. */
  error?: boolean;
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** The label content. */
  label?: string;
  /** If dense or normal, will adjust vertical spacing of this and contained components. */
  margin?: inputMarginOptions;
  /** The name of input element */
  name: string;
  /** A function that should be executed when the value of the input changes */
  onChange?: (value: string) => void;
  /** If true, the label is displayed as required and the input element` will be required. */
  required: boolean;
  /** The variant to use. */
  variant?: inputVariantOptions;
}

export interface InputSelectProps extends InputTextProps {
  defaultValue?: string;
  options: Array<string>;
}

/** A component for generating an input element of type "text" */
export const DotInputText = ({
  autoFocus,
  'data-testid': dataTestId,
  error = false,
  fullWidth = true,
  helperText,
  label,
  margin = 'dense',
  name,
  onChange,
  required = false,
  variant = 'outlined',
}: InputTextProps) => {
  return (
    <TextField
      aria-label={name}
      autoFocus={autoFocus}
      className="dot-text-field"
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      inputProps={{
        'data-testid': dataTestId,
      }}
      label={label}
      margin={margin}
      multiline={false}
      name={name}
      onChange={(event) => onChange && onChange(event.target.value)}
      required={required}
      type="text"
      variant={variant}
    />
  );
};

export const DotInputSelect = ({
  autoFocus,
  'data-testid': dataTestId,
  error = false,
  fullWidth = true,
  helperText,
  label,
  margin = 'dense',
  name,
  onChange,
  options = [],
  required,
  defaultValue = options[0],
  variant = 'outlined',
}: InputSelectProps) => {
  return (
    <TextField
      autoFocus={autoFocus}
      className="dot-select-field"
      defaultValue={defaultValue}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
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
      variant={variant}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
  );
};
