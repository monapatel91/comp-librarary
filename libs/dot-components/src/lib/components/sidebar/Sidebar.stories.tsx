import React from 'react';
import { DotSidebar, SidebarProps } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Sidebar',
  component: DotSidebar,
  argTypes: {
    backItem: {
      defaultValue: [
        {
          icon: 'back',
          iconBgColor: '#E3E5E8',
          iconType: 'circle',
          onClick: () => console.log('go back clicked'),
          text: 'Home',
          title: `Go Back to Home`,
          url: '/',
        },
      ],
    },
    primaryItems: {
      defaultValue: [
        {
          icon: 'block',
          title: 'Home',
          url: '/',
        },
        {
          icon: 'change',
          title: 'Changes',
          url: '/',
        },
      ],
    },
    toggleItem: {
      defaultValue: [
        {
          icon: 'chevron-left',
          onClick: () => console.log('toggle side bar'),
          title: 'Toggle Nav',
          url: '/',
        },
      ],
    },
  },
} as Meta;

export const Default: Story<SidebarProps> = (args) => <DotSidebar {...args} />;
