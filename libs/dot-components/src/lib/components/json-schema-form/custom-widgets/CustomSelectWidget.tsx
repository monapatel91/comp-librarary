import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotInputSelect } from '../../input-form-fields/InputSelect';
import { useProcessRawErrors } from './helpers';

export const CustomSelectWidget = ({
  autofocus,
  disabled,
  id,
  label,
  onChange,
  rawErrors,
  required,
  schema,
  value,
}: WidgetProps) => {
  const { error, errorHelperText } = useProcessRawErrors(rawErrors);

  const helperText = errorHelperText || schema.description;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
