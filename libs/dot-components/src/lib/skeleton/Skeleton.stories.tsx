import React from 'react';
import { text, boolean, radios } from '@storybook/addon-knobs';
import { DotAvatar } from '../avatar/Avatar';
import { DotSkeleton, SkeletonVariantType } from './Skeleton';

export default {
  component: DotSkeleton,
  title: 'Skeleton',
};

export const skeleton = () => {
  const groupId = 'Options';
  const displayChild = boolean('Display Child?', false, groupId);
  const height = text('Height', '50px', groupId);
  const width = text('Width', '50px', groupId);
  const variant = radios(
    'Variant',
    { Circle: 'circle', Rect: 'rect', Text: 'text' },
    'circle',
    groupId
  ) as SkeletonVariantType;

  return (
    <DotSkeleton height={height} width={width} variant={variant}>
      {displayChild ? <DotAvatar /> : undefined}
    </DotSkeleton>
  );
};
