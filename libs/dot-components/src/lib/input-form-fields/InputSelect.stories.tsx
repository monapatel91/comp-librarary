import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotInputSelect, InputSelectProps } from './InputFormFields';

export default {
  title: 'Input Select',
  component: DotInputSelect,
  argTypes: {
    label: { defaultValue: 'Default Label' },
    margin: { defaultValue: 'none' },
    name: { defaultValue: 'Default name' },
    options: {
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
      separator: ',',
    },
    variant: { defaultValue: 'outlined' },
  },
} as Meta;

export const Primary: Story<InputSelectProps> = (args) => (
  <DotInputSelect {...args} />
);
