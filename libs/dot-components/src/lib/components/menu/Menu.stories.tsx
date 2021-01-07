import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotMenu, MenuProps } from './Menu';

export default {
  title: 'Experimental/Menu',
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
        { children: <span>Batman</span> },
        { children: <span>Robin</span> },
        { children: <span>Bat Girl</span> },
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
