import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotInputText } from '../../input-form-fields/InputText';
import { DotIcon } from '../../icon/Icon';

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
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState<string>();

  useEffect(() => {
    const hasError = rawErrors?.length > 0 ? true : false;

    if (hasError) {
      setError(true);
      setHelperText(rawErrors[0]);
    } else {
      setError(false);
      setHelperText(schema.description);
    }
  }, [rawErrors]);

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
