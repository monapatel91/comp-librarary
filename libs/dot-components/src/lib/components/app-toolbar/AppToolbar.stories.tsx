import React from 'react';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotAvatar } from '../avatar/Avatar';
import { DotButton } from '../button/Button';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as TestLogo } from '../../assets/test_logo.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

const logoOptions = ['Default', 'Custom'];

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
      defaultValue: <DotButton>Activate Bat Signal</DotButton>,
    },
    customLogo: {
      control: { type: 'select', options: logoOptions },
      defaultValue: 'Default',
    },
    mainMenu: {
      defaultValue: (
        <DotSidebar
          navItems={[
            {
              startIconId: 'process-template',
              text: 'Progressions',
              href: '/progressions',
            },
            {
              startIconId: 'satellite-group',
              text: 'Pipelines',
              href: '/pipelines',
            },
            {
              startIconId: 'dashboard',
              text: 'Insights',
              href: '/insights',
            },
            {
              text: 'Workflow',
              divider: true,
            },
            {
              startIconId: 'block',
              text: 'Packages',
              href: '/packages',
            },
            {
              startIconId: 'flag',
              text: 'Features',
              href: '/features',
            },
            {
              startIconId: 'collection',
              text: 'Projects',
              href: '/projects',
            },
            {
              startIconId: 'file-lines',
              text: 'Workitems',
              href: '/workitems',
            },
            {
              startIconId: 'change',
              text: 'Changes',
              href: '/changes',
            },
            {
              startIconId: 'square-settings',
              text: 'Artifacts',
              href: '/artifacts',
            },
            {
              text: 'System',
              divider: true,
            },
            {
              startIconId: 'monitor-gears',
              text: 'Tasks',
              href: '/tasks',
            },
            {
              startIconId: 'archive',
              text: 'Buckets',
              href: '/buckets',
            },
            {
              startIconId: 'monitor',
              text: 'Environment',
              href: '/environment',
            },
          ]}
        />
      ),
    },
    navItems: {
      defaultValue: [
        {
          iconId: 'notification-bell',
          titleTooltip: 'Alerts',
        },
        {
          iconId: 'help',
          titleTooltip: 'Help',
        },
        {
          iconId: 'apps',
          titleTooltip: 'Admin',
        },
        {
          iconId: 'dark',
          onClick: () => console.log('theme clicked'),
          size: 'small',
          titleTooltip: 'Toggle Theme',
        },
      ],
    },
  },
} as Meta;

export const Default: Story<AppToolbarProps> = (args) => {
  const { customLogo: logoId } = args;
  const logo = logoId === 'Custom' && <TestLogo title="test.logo" />;
  return <DotAppToolbar {...args} customLogo={logo} />;
};
