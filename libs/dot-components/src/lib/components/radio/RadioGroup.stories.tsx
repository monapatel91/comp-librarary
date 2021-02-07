import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotRadioGroup, RadioGroupProps } from './RadioGroup';

export default {
  title: 'Experimental/Radio Group',
  component: DotRadioGroup,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    defaultValue: { defaultValue: 'item-2' },
    name: { defaultValue: 'Dot Radio Grapup' },
    label: { defaultValue: 'Sample Label' },
    onChange: {
      action: 'clicked',
    },
    value: { defaultValue: 'item-1' },
    groupLabel: { defaultValue: 'Group of items' },
    radioButtons: {
      defaultValue: [
        { label: 'item 1', value: 'item-1' },
        { label: 'item 2', value: 'item-2' },
        { label: 'item 3', value: 'item-3' },
        { label: 'item 4', value: 'item-4' },
      ],
    },
  },
} as Meta;

export const Default: Story<RadioGroupProps> = (args) => (
  <DotRadioGroup {...args} />
);
