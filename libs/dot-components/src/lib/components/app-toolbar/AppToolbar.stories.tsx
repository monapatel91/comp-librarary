import React from 'react';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotAvatar } from '../avatar/Avatar';
import { DotButton } from '../button/Button';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as TestLogo } from '../../assets/test_logo.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

const logoOptions = ['Default', 'Custom'];
let menuOpen = false;

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
    mainMenuItems: {
      defaultValue: [
        {
          startIconId: 'process-template',
          text: 'Progressions',
          href: '#',
          onClick: () => {
            console.log(`menuOpen is currently ${menuOpen}`);
            menuOpen = true;
            console.log(`menuOpen now ${menuOpen}`);
          },
        },
        {
          startIconId: 'satellite-group',
          text: 'Pipelines',
          href: '#',
        },
        {
          startIconId: 'dashboard',
          text: 'Insights',
          href: '#',
        },
        {
          text: 'Workflow',
          divider: true,
        },
        {
          startIconId: 'block',
          text: 'Packages',
          href: '#',
        },
        {
          startIconId: 'flag',
          text: 'Features',
          href: '#',
        },
        {
          startIconId: 'collection',
          text: 'Projects',
          href: '#',
        },
        {
          startIconId: 'file-lines',
          text: 'Workitems',
          href: '#',
        },
        {
          startIconId: 'change',
          text: 'Changes',
          href: '#',
        },
        {
          startIconId: 'square-settings',
          text: 'Artifacts',
          href: '#',
        },
        {
          text: 'System',
          divider: true,
        },
        {
          startIconId: 'monitor-gears',
          text: 'Tasks',
          href: '#',
        },
        {
          startIconId: 'archive',
          text: 'Buckets',
          href: '#',
        },
        {
          startIconId: 'monitor',
          text: 'Environment',
          href: '#',
        },
      ],
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
  return <DotAppToolbar {...args} customLogo={logo} mainMenuOpen={menuOpen} />;
};
