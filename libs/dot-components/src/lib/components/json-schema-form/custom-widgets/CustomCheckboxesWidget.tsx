import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { CheckboxProps } from '../../checkbox/Checkbox';
import { DotCheckboxGroup } from '../../checkbox/CheckboxGroup';
import { getOptionsFromSchema } from './helpers';

export const CustomCheckboxesWidget = ({
  id,
  value,
  onChange,
  required,
  rawErrors,
  schema,
  disabled,
  options: optionsObj,
}: WidgetProps) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState<string>();

  useEffect(() => {
    setError(rawErrors?.length > 0);
    setHelperText(rawErrors?.length > 0 ? rawErrors[0] : null);
  }, [rawErrors]);

  const options: Array<CheckboxProps> = getOptionsFromSchema(optionsObj);

  return (
    <DotCheckboxGroup
      options={options}
      id={id}
      name={id}
      groupLabel={schema.title}
      disableGroup={disabled}
      value={value}
      onChange={(_event, value) => onChange(value.map((item) => item.value))}
      required={required}
      error={error}
      helperText={helperText}
    />
  );
};
