import React from 'react';
import { TextField } from '@material-ui/core';
import { InputTextProps } from './InputFormFields';

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
  