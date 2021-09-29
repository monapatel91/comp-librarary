import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotIcon } from '../icon/Icon';
import { DotBadge, DotBadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: DotBadge,
} as Meta;

export const Default: Story<DotBadgeProps> = (args) => (
  <DotBadge {...args}>
    <DotIcon iconId="apps" />
  </DotBadge>
);
