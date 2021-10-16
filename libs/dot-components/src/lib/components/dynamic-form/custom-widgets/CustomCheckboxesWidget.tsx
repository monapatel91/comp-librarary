import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { CheckboxProps } from '../../checkbox/Checkbox';
import { DotCheckboxGroup } from '../../checkbox/CheckboxGroup';

export const CustomCheckboxesWidget = ({
  id,
  value,
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

  const items = schema.items as { enum: Array<string> };
  const options: CheckboxProps[] = items.enum.map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <DotCheckboxGroup
      options={options}
      id={id}
      name={id}
      groupLabel={schema.title}
      value={value}
      // disabled={disabled}
      onChange={(_event, value) => onChange(value.map((item) => item.value))}
      required={required}
      error={error}
      helperText={helperText}
    />
  );
};
