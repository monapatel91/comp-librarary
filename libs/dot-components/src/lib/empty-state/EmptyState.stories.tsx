import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotEmptyState, EmptyStateProps } from './EmptyState';

export default {
  title: 'Empty State',
  component: DotEmptyState,
} as Meta;

export const Primary: Story<EmptyStateProps> = (args) => (
  <DotEmptyState {...args} />
);
