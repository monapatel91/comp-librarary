import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotIcon } from '../icon/Icon';
import { DotBadge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: DotBadge,
  argTypes: {
    overlap: {
      defaultValue: 'rectangular',
    },
  },
} as Meta;

export const Default: Story<BadgeProps> = (args) => (
  <DotBadge {...args}>
    <DotIcon iconId="apps" />
  </DotBadge>
);
