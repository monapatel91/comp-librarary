import React from 'react';
import { DotSidebar, SidebarProps } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField } from '@material-ui/core';

export default {
  title: 'Components/Sidebar',
  component: DotSidebar,
  argTypes: {
    backItem: {
      defaultValue: {
        iconId: 'back',
        onClick: () => console.log('go back clicked'),
        text: 'Home',
        title: `Go Back to Home`,
      },
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
    goBack: {
      defaultValue: true,
    },
    navItems: {
      defaultValue: [
        {
          iconId: 'process-template',
          items: [
            {
              iconId: 'process-template',
              text: 'Package Progression',
            },
            {
              iconId: 'process-template',
              text: 'Feature Progression',
            },
          ],
          text: 'Progressions',
        },
        {
          iconId: 'satellite-group',
          items: [
            {
              iconId: 'satellite-group',
              text: 'Groups',
            },
            {
              iconId: 'satellite-group',
              text: 'Instances',
            },
          ],
          text: 'Pipelines',
        },
        {
          iconId: 'dashboard',
          text: 'Insights',
        },
        {
          text: 'Workflow',
          divider: true,
        },
        {
          iconId: 'block',
          text: 'Packages',
        },
        {
          iconId: 'flag',
          text: 'Features',
        },
        {
          iconId: 'collection',
          text: 'Projects',
        },
        {
          divider: true,
        },
        {
          iconId: 'file-lines',
          text: 'Workitems',
        },
        {
          iconId: 'change',
          text: 'Changes',
        },
        {
          iconId: 'square-settings',
          text: 'Artifacts',
        },
        {
          text: 'System',
          divider: true,
        },
        {
          iconId: 'monitor-gears',
          text: 'Tasks',
        },
        {
          iconId: 'archive',
          text: 'Buckets',
        },
        {
          iconId: 'monitor',
          text: 'Environment',
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
