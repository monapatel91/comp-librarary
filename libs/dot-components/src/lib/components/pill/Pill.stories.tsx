import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotPill, PillProps } from './Pill';

export default {
  title: 'Components/Pill',
  component: DotPill,
  argTypes: {
    label: { defaultValue: 'Pill Component' },
  },
} as Meta;

export const Default: Story<PillProps> = (args) => <DotPill {...args} />;
