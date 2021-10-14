import React, { useState, useEffect } from 'react';
import { DotInputText } from '@digital-ai/dot-components';
import { WidgetProps } from 'react-jsonschema-form';

export const CustomTextWidget = ({
  id,
  label,
  value,
  disabled,
  onChange,
  required,
  rawErrors,
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
    />
  );
};
