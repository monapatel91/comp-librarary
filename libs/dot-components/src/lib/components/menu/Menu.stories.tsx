import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotMenu, MenuProps } from './Menu';

export default {
  title: 'Components/Menu',
  component: DotMenu,
  argTypes: {
    buttonContent: {
      defaultValue: 'Toggle Menu',
    },
    id: {
      defaultValue: 'foobar',
    },
    menuItems: {
      defaultValue: [
        { text: 'Batman' },
        { text: 'Robin' },
        { text: 'Bat Girl' },
      ],
      name: 'Menu Items',
    },
    menuPlacement: {
      name: 'Menu Placement',
    },
  },
} as Meta;

export const Default: Story<MenuProps> = (args) => {
  return <DotMenu {...args} />;
};
