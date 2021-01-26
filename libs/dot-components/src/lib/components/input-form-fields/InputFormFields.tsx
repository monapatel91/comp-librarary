import { InputAdornment } from '@material-ui/core';
import React from 'react';
import DotIcon from '../icon/Icon';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import {
  InputTextProps,
  rootClassName,
  StyletextField,
  warningClassName,
} from './Input-form-fields.foundation';

/**
 * A component for generating an input element of type "text"
 *
 * @experimental This component is still in development
 */
export const DotInputText = ({
  autoFocus,
  className,
  'data-testid': dataTestId,
  adornmentPosition = 'end',
  error = false,
  fullWidth = true,
  helperText,
  helperTextIconId,
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

  const helperTextWithIcon: any = helperTextIconId && helperText ? (
    <>
      <DotIcon className="helper-text-icon" iconId={helperTextIconId} />
      {helperText}
    </>
  ) : (
    helperText
  );

  return (
    <StyletextField
      id={id}
      aria-label={name}
      autoFocus={autoFocus}
      className={`${rootStyles} ${hasWarning}`}
      error={error}
      fullWidth={fullWidth}
      helperTextIconId={helperTextIconId}
      helperText={helperText}
      inputProps={{
        'data-testid': dataTestId
      }}
      InputProps={{
        endAdornment: <InputAdornment position={adornmentPosition}>
        <DotIcon className="helper-text-icon" iconId={helperTextIconId} />
      </InputAdornment>
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
