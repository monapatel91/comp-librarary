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
              href: '/package-progression',
            },
            {
              iconId: 'process-template',
              text: 'Feature Progression',
              href: '/feature-progression',
            },
          ],
          text: 'Progressions',
          href: '/progressions',
        },
        {
          iconId: 'satellite-group',
          items: [
            {
              iconId: 'satellite-group',
              text: 'Groups',
              href: '/pipeline-groups',
            },
            {
              iconId: 'satellite-group',
              text: 'Instances',
              href: '/pipeline-instance',
            },
          ],
          text: 'Pipelines',
          href: '/pipelines',
        },
        {
          iconId: 'dashboard',
          text: 'Insights',
          href: '/insights',
        },
        {
          text: 'Workflow',
          divider: true,
        },
        {
          iconId: 'block',
          text: 'Packages',
          href: '/packages',
        },
        {
          iconId: 'flag',
          text: 'Features',
          href: '/features',
        },
        {
          iconId: 'collection',
          text: 'Projects',
          href: '/projects',
        },
        {
          divider: true,
        },
        {
          iconId: 'file-lines',
          text: 'Workitems',
          href: '/workitems',
        },
        {
          iconId: 'change',
          text: 'Changes',
          href: '/changes',
        },
        {
          iconId: 'square-settings',
          text: 'Artifacts',
          href: '/artifacts',
        },
        {
          text: 'System',
          divider: true,
        },
        {
          iconId: 'monitor-gears',
          text: 'Tasks',
          href: '/tasks',
        },
        {
          iconId: 'archive',
          text: 'Buckets',
          href: '/buckets',
        },
        {
          iconId: 'monitor',
          text: 'Environment',
          href: '/environment',
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
