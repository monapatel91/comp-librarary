import React from 'react';
import { DotSidebar, SidebarProps } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField } from '@material-ui/core';

export default {
  title: 'Components/Sidebar',
  component: DotSidebar,
  argTypes: {
    backItem: {
      defaultValue: [
        {
          iconId: 'back',
          onClick: () => console.log('go back clicked'),
          text: 'Home',
          title: `Go Back to Home`,
          url: '/',
        },
      ],
    },
    brandDesc: {
      defaultValue: 'Release orchestration powered by',
    },
    children: {
      defaultValue: <TextField placeholder="search" variant="outlined" />,
    },
    collapsable: {
      defaultValue: true,
    },
    displayBrand: {
      defaultValue: true,
    },
    goBack: {
      defaultValue: false,
    },
    navItems: {
      defaultValue: [
        {
          iconId: 'process-template',
          items: [
            {
              iconId: 'process-template',
              text: 'Package Progression',
              url: '/package-progression',
            },
            {
              iconId: 'process-template',
              text: 'Feature Progression',
              url: '/feature-progression',
            },
          ],
          text: 'Progressions',
          url: '/progressions',
        },
        {
          iconId: 'satellite-group',
          items: [
            {
              iconId: 'satellite-group',
              text: 'Groups',
              url: '/pipeline-groups',
            },
            {
              iconId: 'satellite-group',
              text: 'Instances',
              url: '/pipeline-instance',
            },
          ],
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
          type: 'divider',
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
      ],
    },
    title: {
      defaultValue: 'Title Goes Here',
    },
    titleAvatarProps: {
      defaultValue: {
        alt: 'Avatar goes here',
        iconId: 'user',
        type: 'icon',
      },
    },
  },
} as Meta;

export const Default: Story<SidebarProps> = (args) => <DotSidebar {...args} />;
