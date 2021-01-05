import React from 'react';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/AppToolbar',
  component: DotAppToolbar,
  argTypes: {
    items: {
      defaultValue: [
        {
          icon: 'notification-bell',
          title: 'Alerts',
          url: '/',
        },
        {
          icon: 'help',
          title: 'Help',
          url: '/',
        },
        {
          icon: 'apps',
          title: 'Admin',
          url: '/',
        },
        {
          icon: 'dark',
          onClick: () => console.log('theme btn clicked'),
          title: 'Toggle Theme',
          url: '/',
        },
      ],
    },
  },
} as Meta;

export const Default: Story<AppToolbarProps> = (args) => (
  <DotAppToolbar {...args} />
);
