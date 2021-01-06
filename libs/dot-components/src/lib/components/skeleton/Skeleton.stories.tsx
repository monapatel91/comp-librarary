import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotSkeleton, SkeletonProps } from './Skeleton';

export default {
  title: 'Experimental/Skeleton',
  component: DotSkeleton,
} as Meta;

export const Default: Story<SkeletonProps> = (args) => (
  <DotSkeleton {...args} />
);
