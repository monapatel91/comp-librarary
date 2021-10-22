import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotInputSelect } from '../../input-form-fields/InputSelect';

export const CustomSelectWidget = ({
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
    const hasError = rawErrors?.length > 0;

    if (hasError) {
      setError(true);
      setHelperText(rawErrors[0]);
    } else {
      setError(false);
      setHelperText(schema.description);
    }
  }, [rawErrors]);

  const items: any = schema.items;
  const options: string[] = items.enum;

  return (
    <DotInputSelect
      autoFocus={autofocus}
      options={options}
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
