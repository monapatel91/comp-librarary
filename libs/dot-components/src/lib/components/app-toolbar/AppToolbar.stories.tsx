import React from 'react';
import { Input } from '@material-ui/core';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotAvatar } from '../avatar/Avatar';
import { DotSidebar } from '../sidebar/Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/AppToolbar',
  component: DotAppToolbar,
  argTypes: {
    avatar: {
      defaultValue: (
        <DotAvatar alt="Batman" text="Bruce Wayne" size="small" type="text" />
      ),
    },
    borderColor: {
      defaultValue: '#1abc9c',
    },
    appName: {
      defaultValue: 'Batman',
    },
    children: {
      defaultValue: <Input type="text" placeholder="search" />,
    },
    items: {
      defaultValue: [
        {
          iconId: 'notification-bell',
          title: 'Alerts',
          type: 'button',
        },
        {
          iconId: 'help',
          title: 'Help',
          type: 'button',
        },
        {
          iconId: 'apps',
          title: 'Admin',
          type: 'button',
        },
        {
          iconId: 'dark',
          iconSize: 'small',
          onClick: () => console.log('theme clicked'),
          text: 'Theme',
          title: 'Toggle Theme',
          type: 'button',
        },
      ],
    },
    mainMenu: {
      defaultValue: (
        <DotSidebar
          navItems={[
            {
              iconId: 'process-template',
              text: 'Progressions',
              url: '/progressions',
            },
            {
              iconId: 'satellite-group',
              text: 'Pipelines',
              url: '/pipelines',
            },
            {
              iconId: 'dashboard',
              text: 'Insights',
              url: '/insights',
            },
            {
              text: 'Workflow',
              type: 'divider',
            },
            {
              iconId: 'block',
              text: 'Packages',
              url: '/packages',
            },
            {
              iconId: 'flag',
              text: 'Features',
              url: '/features',
            },
            {
              iconId: 'collection',
              text: 'Projects',
              url: '/projects',
            },
            {
              iconId: 'file-lines',
              text: 'Workitems',
              url: '/workitems',
            },
            {
              iconId: 'change',
              text: 'Changes',
              url: '/changes',
            },
            {
              iconId: 'square-settings',
              text: 'Artifacts',
              url: '/artifacts',
            },
            {
              text: 'System',
              type: 'divider',
            },
            {
              iconId: 'monitor-gears',
              text: 'Tasks',
              url: '/tasks',
            },
            {
              iconId: 'archive',
              text: 'Buckets',
              url: '/buckets',
            },
            {
              iconId: 'monitor',
              text: 'Environment',
              url: '/environment',
            },
          ]}
        />
      ),
    },
  },
} as Meta;

export const Default: Story<AppToolbarProps> = (args) => (
  <DotAppToolbar {...args} />
);
