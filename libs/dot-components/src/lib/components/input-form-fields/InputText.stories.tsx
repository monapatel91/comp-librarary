import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotInputText, InputTextProps } from './InputFormFields';

export default {
  title: 'Experimental/Input Text',
  component: DotInputText,
  argTypes: {
    fullWidth: { defaultValue: false },
    margin: { defaultValue: 'none' },
    name: { defaultValue: 'Default name' },
    label: { defaultValue: 'Default Label' },
    required: { defaultValue: true },
  },
} as Meta;

export const Default: Story<InputTextProps> = (args) => (
  <DotInputText {...args} />
);
