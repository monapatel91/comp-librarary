import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotInputSelect, InputSelectProps } from './InputSelect';

export default {
  title: 'Components/Input Select',
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
    warning: {defaultValue: false},
    id: {defaultValue: 'custom-text-input'}
  },
} as Meta;

export const Default: Story<InputSelectProps> = (args) => (
  <DotInputSelect {...args} />
);
