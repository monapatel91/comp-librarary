import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotCheckbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Experimental/Checkbox',
  component: DotCheckbox,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    label: { defaultValue: 'Sample Label' },
    name: { defaultValue: 'dot-radio-button' },
    onChange: {
      action: 'clicked',
    },
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <DotCheckbox {...args} />
);
