import React from 'react';
import { WidgetProps } from 'react-jsonschema-form';
import { RadioButtonProps } from '../../radio/RadioButton';

import { DotRadioGroup } from '../../radio/RadioGroup';
import { useProcessRawErrors } from './helpers';

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
  const { error, errorHelperText } = useProcessRawErrors(rawErrors);

  const helperText = errorHelperText || schema.description;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
