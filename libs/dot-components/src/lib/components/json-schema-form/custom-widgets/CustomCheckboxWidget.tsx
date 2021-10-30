import React from 'react';
import { WidgetProps } from 'react-jsonschema-form';

import { DotSwitch } from '../../switch/Switch';

export const CustomCheckboxWidget = ({
  id,
  label,
  value,
  disabled,
  onChange,
}: WidgetProps) => {
  return (
    <DotSwitch
      id={id}
      label={label}
      checked={value}
      disabled={disabled}
      onChange={(event) => onChange(event.target.checked)}
    />
  );
};
