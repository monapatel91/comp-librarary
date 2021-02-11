import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotRadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/Radio Button',
  component: DotRadioButton,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    color: { defaultValue: 'primary' },
    label: { defaultValue: 'Sample Label' },
    name: { defaultValue: 'dot-radio-button' },
    onChange: {
      action: 'clicked',
    },
    value: { defaultValue: 'sample-label' },
    selectedValue: { defaultValue: 'sample-label' },
  },
} as Meta;

export const Default: Story<RadioButtonProps> = (args) => (
  <DotRadioButton {...args} />
);
