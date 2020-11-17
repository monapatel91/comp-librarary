import React from 'react';
import { DotHeader, HeaderProps } from './Header';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Header',
  component: DotHeader,
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

export const Default: Story<HeaderProps> = (args) => <DotHeader {...args} />;
