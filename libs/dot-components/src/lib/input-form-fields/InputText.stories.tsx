import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { DotInputText } from './InputFormFields';
import { inputMarginOptions, inputVariantOptions } from './InputFormFields';

export default {
  component: DotInputText,
  title: 'DotInputText',
};

export const inputText = () => {
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
  const margin = select(
    'Margin',
    sbMarginOptions,
    'none',
    groupId
  ) as inputMarginOptions;
  const name = text('Name', 'Default name', groupId);
  const label = text('Label', 'Default Label', groupId);
  const required = boolean('Required', true, groupId);
  const variant = select(
    'Variant',
    sbVariantOptions,
    'outlined',
    groupId
  ) as inputVariantOptions;
  return (
    <DotInputText
      autoFocus={autoFocus}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      name={name}
      label={label}
      required={required}
      variant={variant}
    />
  );
};
