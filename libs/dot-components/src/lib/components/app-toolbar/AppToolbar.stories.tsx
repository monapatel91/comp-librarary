import React from 'react';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotAvatar } from '../avatar/Avatar';
import { DotButton } from '../button/Button';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as FedexLogo } from '../../assets/Fedex.svg';
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
              iconId: 'process-template',
              text: 'Progressions',
              href: '/progressions',
            },
            {
              iconId: 'satellite-group',
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
  const logo = logoId === 'Custom' && <FedexLogo title="fedex.logo" />;
  return <DotAppToolbar {...args} customLogo={logo} />;
};
