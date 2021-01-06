import React from 'react';
import { DotSidebar, SidebarProps } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Experimental/Sidebar',
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
    children: {
      defaultValue: <input type="text" placeholder="search" />,
    },
    collapsable: {
      defaultValue: true,
    },
    goBack: {
      defaultValue: false,
    },
    navItems: {
      defaultValue: [
        {
          icon: 'process-template',
          items: [
            {
              icon: 'process-template',
              text: 'Package Progression',
              url: '/package-progression',
            },
            {
              icon: 'process-template',
              text: 'Feature Progression',
              url: '/feature-progression',
            },
          ],
          text: 'Progressions',
          url: '/progressions',
        },
        {
          icon: 'satellite-group',
          items: [
            {
              icon: 'satellite-group',
              text: 'Groups',
              url: '/pipeline-groups',
            },
            {
              icon: 'satellite-group',
              text: 'Instances',
              url: '/pipeline-instance',
            },
          ],
          text: 'Pipelines',
          url: '/pipelines',
        },
        {
          icon: 'dashboard',
          text: 'Insights',
          url: '/insights',
        },
        {
          text: 'Workflow',
          type: 'divider',
        },
        {
          icon: 'block',
          text: 'Packages',
          url: '/packages',
        },
        {
          icon: 'flag',
          text: 'Features',
          url: '/features',
        },
        {
          icon: 'collection',
          text: 'Projects',
          url: '/projects',
        },
        {
          type: 'divider',
        },
        {
          icon: 'file-lines',
          text: 'Workitems',
          url: '/workitems',
        },
        {
          icon: 'change',
          text: 'Changes',
          url: '/changes',
        },
        {
          icon: 'square-settings',
          text: 'Artifacts',
          url: '/artifacts',
        },
        {
          text: 'System',
          type: 'divider',
        },
        {
          icon: 'monitor-gears',
          text: 'Tasks',
          url: '/tasks',
        },
        {
          icon: 'archive',
          text: 'Buckets',
          url: '/buckets',
        },
        {
          icon: 'monitor',
          text: 'Environment',
          url: '/environment',
        },
      ],
    },
    title: {
      defaultValue: 'Your Company Here',
    },
  },
} as Meta;

export const Default: Story<SidebarProps> = (args) => <DotSidebar {...args} />;
