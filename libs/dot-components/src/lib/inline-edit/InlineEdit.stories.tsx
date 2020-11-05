import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { DotInlineEdit } from './InlineEdit';
import {
  inputMarginOptions,
  inputVariantOptions,
} from '../input-form-fields/InputFormFields';

export default {
  component: DotInlineEdit,
  title: 'Atoms',
};

export const inlineEdit = () => {
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
  const autoFocus = boolean('Auto Focus', true, groupId);
  const disabled = boolean('Disabled', false, groupId);
  const error = boolean('Error', false, groupId);
  const fullWidth = boolean('Full Width', false, groupId);
  const helperText = text('Helper Text', 'Name', groupId);
  const margin = select(
    'Margin',
    sbMarginOptions,
    'none',
    groupId
  ) as inputMarginOptions;
  const name = text('Name', 'Default name', groupId);
  const required = boolean('Required', true, groupId);
  const value = text('Default value', 'Batman rocks', groupId);
  const variant = select(
    'Variant',
    sbVariantOptions,
    'outlined',
    groupId
  ) as inputVariantOptions;

  return (
    <DotInlineEdit
      autoFocus={autoFocus}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      margin={margin}
      name={name}
      required={required}
      value={value}
      variant={variant}
    />
  );
};
