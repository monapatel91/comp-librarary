import React, { useState, useEffect } from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotSwitch } from '../../switch/Switch';

export const CustomCheckboxWidget = ({
  id,
  label,
  value,
  disabled,
  onChange,
  required,
}: WidgetProps) => {
  // const [error, setError] = useState(false);
  // const [helperText, setHelperText] = useState<string>();

  // useEffect(() => {
  //   setError(rawErrors?.length > 0 ? true : false);
  //   setHelperText(rawErrors?.length > 0 ? rawErrors[0] : null);
  // }, [rawErrors]);

  return (
    <DotSwitch
      id={id}
      label={label}
      checked={value}
      disabled={disabled}
      onChange={(event) => onChange(event.target.checked)}
      // required={required}
      // error={error}
      // helperText={helperText}
    />
  );
};
