import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotInputText } from './InputFormFields';
import { InputTextProps } from './Input-form-fields.foundation';

export default {
  title: 'Components/Input Text',
  component: DotInputText,
  argTypes: {
    fullWidth: { defaultValue: false },
    margin: { defaultValue: 'none' },
    name: { defaultValue: 'Default name' },
    label: { defaultValue: 'Default Label' },
    required: { defaultValue: true },
    warning: { defaultValue: false},
    id: {defaultValue: 'custom-text-input'}
  },
} as Meta;

export const Default: Story<InputTextProps> = (args) => (
  <DotInputText {...args} />
);
