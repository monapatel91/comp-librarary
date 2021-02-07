import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotRadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Experimental/Radio Button',
  component: DotRadioButton,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    color: { defaultValue: 'primary' },
    label: { defaultValue: 'Sample Label' },
    onChange: {
      action: 'clicked',
    },
    value: { defaultValue: '' },
    selected: { defaultValue: 'test' },
  },
} as Meta;

export const Default: Story<RadioButtonProps> = (args) => (
  <DotRadioButton {...args} />
);
