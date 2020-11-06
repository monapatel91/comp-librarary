import React from 'react';
import { array, boolean, select, text } from '@storybook/addon-knobs';
import { DotInputSelect } from './InputFormFields';
import { inputMarginOptions, inputVariantOptions } from './InputFormFields';

export default {
  component: DotInputSelect,
  title: 'Atoms',
};

export const inputSelect = () => {
  const sbMarginOptions = {
    Dense: 'dense',
    None: 'none',
    Normal: 'normal',
  };
  const sbVariantOptions = {
    Filled: 'filled',
    Outlined: 'outlined',
    Standard: 'standard',
  };

  const groupId = 'Options';
  const autoFocus = boolean('Auto Focus', false, groupId);
  const error = boolean('Error', false, groupId);
  const fullWidth = boolean('Full Width', false, groupId);
  const label = text('Label', 'Default Label', groupId);
  const margin = select(
    'Margin',
    sbMarginOptions,
    'none',
    groupId
  ) as inputMarginOptions;
  const name = text('Name', 'Default name', groupId);
  const options = array(
    'Options',
    ['Option 1', 'Option 2', 'Option 3'],
    ',',
    groupId
  );
  const required = boolean('Required', true, groupId);
  const variant = select(
    'Variant',
    sbVariantOptions,
    'outlined',
    groupId
  ) as inputVariantOptions;
  return (
    <DotInputSelect
      autoFocus={autoFocus}
      error={error}
      fullWidth={fullWidth}
      label={label}
      margin={margin}
      name={name}
      options={options}
      required={required}
      variant={variant}
    />
  );
};
