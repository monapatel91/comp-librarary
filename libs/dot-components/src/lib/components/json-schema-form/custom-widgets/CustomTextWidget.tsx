import React from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotInputText } from '../../input-form-fields/InputText';
import { DotIcon } from '../../icon/Icon';
import { useProcessRawErrors } from './helpers';

export const CustomTextWidget = ({
  autofocus,
  id,
  label,
  value,
  disabled,
  onChange,
  required,
  rawErrors,
  schema,
}: WidgetProps) => {
  const { error, errorHelperText } = useProcessRawErrors(rawErrors);

  const helperText = errorHelperText || schema.description;

  return (
    <DotInputText
      autoFocus={autofocus}
      id={id}
      name={id}
      label={label}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      error={error}
      helperText={helperText}
      type={schema.format === 'password' ? 'password' : 'text'}
      endIcon={
        schema.format === 'password' && <DotIcon iconId="visibility-off" />
      }
    />
  );
};
