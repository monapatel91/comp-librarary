import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotAvatar, AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: DotAvatar,
} as Meta;

export const Default: Story<AvatarProps> = (args) => <DotAvatar {...args} />;
