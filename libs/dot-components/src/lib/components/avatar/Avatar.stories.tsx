import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotAvatar, AvatarProps } from './Avatar';
import EmptyState from '../../assets/empty-state.svg';

export default {
  title: 'Components/Avatar',
  component: DotAvatar,
  args: {
    alt: 'Avatar alt text',
  },
} as Meta;

export const Default: Story<AvatarProps> = (args) => <DotAvatar {...args} />;

export const Image: Story<AvatarProps> = ({
  imageSrc = EmptyState,
  ...props
}) => <DotAvatar imageSrc={imageSrc} {...props} />;
