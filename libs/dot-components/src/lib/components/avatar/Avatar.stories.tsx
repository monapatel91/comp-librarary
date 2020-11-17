import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotAvatar, AvatarProps } from './Avatar';

export default {
  title: 'Avatar',
  component: DotAvatar,
} as Meta;

export const Primary: Story<AvatarProps> = (args) => <DotAvatar {...args} />;
