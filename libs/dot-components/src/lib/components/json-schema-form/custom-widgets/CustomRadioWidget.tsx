import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';
import { RadioButtonProps } from '../../radio/RadioButton';

import { DotRadioGroup } from '../../radio/RadioGroup';

export const CustomRadioWidget = ({
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
  const options: RadioButtonProps[] = items.enum.map((item: string) => ({
    label: item,
    value: item,
  }));

  return (
    <DotRadioGroup
      options={options}
      id={id}
      name={id}
      groupLabel={label}
      value={value}
      disableGroup={disabled}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      error={error}
      helperText={helperText}
    />
  );
};
