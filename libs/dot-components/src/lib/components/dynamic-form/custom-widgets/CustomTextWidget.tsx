import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotInputText } from '../../input-form-fields/InputText';
import { DotIcon } from '../../icon/Icon';

export const CustomTextWidget = ({
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
    setError(rawErrors?.length > 0 ? true : false);
    setHelperText(rawErrors?.length > 0 ? rawErrors[0] : null);
  }, [rawErrors]);

  return (
    <DotInputText
      id={id}
      name={id}
      label={label}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      error={error}
      helperText={helperText}
      type={schema.format === 'password' && 'password'}
      endIcon={
        schema.format === 'password' && <DotIcon iconId="visibility-off" />
      }
    />
  );
};
