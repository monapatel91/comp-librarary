import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotIcon, IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: DotIcon,
  argTypes: {
    icon: { defaultValue: 'script' },
    iconBgColor: {
      defaultValue: '#eee',
      control: 'color',
    },
    fontSize: { defaultValue: 'default' },
    iconType: { defaultValue: 'circle' },
    title: { defaultValue: 'Hello World' },
  },
} as Meta;

export const Primary: Story<IconProps> = (args) => <DotIcon {...args} />;
