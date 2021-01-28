import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAvatar, AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: DotAvatar,
  argTypes: {
    alt: {
      defaultValue: 'Avatar alt text',
    },
    imageSrc: {
      defaultValue:
        'https://cdn1-www.superherohype.com/assets/uploads/2013/11/batmane3-1.jpg',
    },
    onClick: {
      action: 'clicked',
    },
    text: {
      defaultValue: 'Bruce Wayne',
    },
    type: {
      defaultValue: 'text',
    },
  },
} as Meta;

export const Default: Story<AvatarProps> = (args) => <DotAvatar {...args} />;
