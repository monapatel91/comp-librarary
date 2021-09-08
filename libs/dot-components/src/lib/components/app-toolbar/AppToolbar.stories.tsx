import React from 'react';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotAvatar } from '../avatar/Avatar';
import { DotButton } from '../button/Button';
import { ReactComponent as TestLogo } from '../../assets/test_logo.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

const logoOptions = ['Default', 'Custom'];
let menuOpen = false;

const handleClick = () => {
  console.log(`handleClick, menuOpen: ${menuOpen}`);
  menuOpen = false;
};

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
          onClick: () => handleClick(),
        },
        {
          startIconId: 'satellite-group',
          text: 'Pipelines',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'dashboard',
          text: 'Insights',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          text: 'Workflow',
          divider: true,
        },
        {
          startIconId: 'block',
          text: 'Packages',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'flag',
          text: 'Features',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'collection',
          text: 'Projects',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'file-lines',
          text: 'Workitems',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'change',
          text: 'Changes',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'square-settings',
          text: 'Artifacts',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          text: 'System',
          divider: true,
        },
        {
          startIconId: 'monitor-gears',
          text: 'Tasks',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'archive',
          text: 'Buckets',
          href: '#',
          onClick: () => handleClick(),
        },
        {
          startIconId: 'monitor',
          text: 'Environment',
          href: '#',
          onClick: () => handleClick(),
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
