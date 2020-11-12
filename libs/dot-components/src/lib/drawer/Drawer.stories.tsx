import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotDrawer, DrawerProps } from './Drawer';

export default {
  title: 'Drawer',
  component: DotDrawer,
  argTypes: {
    open: { defaultValue: true },
    children: { defaultValue: 'I am Batman' },
  },
} as Meta;

export const Primary: Story<DrawerProps> = (args) => <DotDrawer {...args} />;
