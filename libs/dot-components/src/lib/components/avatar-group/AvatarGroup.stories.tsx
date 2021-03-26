import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAvatarGroup, AvatarGroupProps } from './AvatarGroup';
import { sampleAvatars } from './AvatarGroup.stories.data';

export default {
  title: 'Components/AvatarGroup',
  component: DotAvatarGroup,
  argTypes: {
    avatars: {
      defaultValue: sampleAvatars,
    },
  },
} as Meta;

export const Default: Story<AvatarGroupProps> = (args) => (
  <DotAvatarGroup {...args} />
);
