import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotCheckbox } from '../../checkbox/Checkbox';

export const CustomCheckboxWidget = ({
  id,
  label,
  value,
  disabled,
  onChange,
  required,
  rawErrors,
}: WidgetProps) => {
  // const [error, setError] = useState(false);
  // const [helperText, setHelperText] = useState<string>();

  // useEffect(() => {
  //   setError(rawErrors?.length > 0 ? true : false);
  //   setHelperText(rawErrors?.length > 0 ? rawErrors[0] : null);
  // }, [rawErrors]);

  return (
    <DotCheckbox
      id={id}
      name={id}
      label={label}
      value={value}
      disabled={disabled}
      onChange={(_event, value) => onChange(value)}
      required={required}
      // error={error}
      // helperText={helperText}
    />
  );
};
