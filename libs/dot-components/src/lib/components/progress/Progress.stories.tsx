import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotProgress, ProgressProps } from './Progress';

export default {
  title: 'Components/Progress',
  component: DotProgress,
  argTypes: {
    color: { defaultValue: 'primary' },
    size: {
      defaultValue: 40,
      control: { type: 'range', min: 15, max: 100, step: 1 },
    },
    thickness: {
      defaultValue: 3.6,
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
    },
    title: {
      defaultValue: 'Loading Data...',
    },
    variant: {
      defaultValue: 'indeterminate',
    },
    value: {
      defaultValue: 20,
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} as Meta;

export const Default: Story<ProgressProps> = (args) => (
  <DotProgress {...args} />
);
