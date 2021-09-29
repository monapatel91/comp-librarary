import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAvatar, AvatarProps } from './Avatar';
import { avatarColors } from '../../theme-provider/ThemeProvider';

const colorOptions = [null].concat(Object.keys(avatarColors));

export default {
  title: 'Components/Avatar',
  component: DotAvatar,
  argTypes: {
    alt: {
      defaultValue: 'Avatar alt text',
    },
    color: { control: { type: 'select', options: colorOptions } },
    imageSrc: {
      defaultValue:
        'https://cdn1-www.superherohype.com/assets/uploads/2013/11/batmane3-1.jpg',
    },
    onClick: {
      action: 'clicked',
    },
    size: {
      defaultValue: 'medium',
    },
    text: {
      defaultValue: 'Bruce Wayne',
    },
    type: {
      defaultValue: 'text',
    },
    variant: {
      defaultValue: 'circular',
    },
  },
} as Meta;

export const Default: Story<AvatarProps> = (args) => <DotAvatar {...args} />;
