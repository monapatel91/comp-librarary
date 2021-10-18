import React from 'react';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotAvatar } from '../avatar/Avatar';
import { DotButton } from '../button/Button';
import { DotLink } from '../link/Link';
import { DotTooltip } from '../tooltip/Tooltip';
import { ReactComponent as DemoLogo } from '../../assets/demo-logo.svg';
import { ReactComponent as DemoLogoSmall } from '../../assets/demo-logo-small.svg';
import { ReactComponent as TestLogo } from '../../assets/test_logo.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

const logoOptions = ['Default', 'Custom'];

export default {
  title: 'Components/AppToolbar',
  component: DotAppToolbar,
  argTypes: {
    appLogo: {
      defaultValue: <DemoLogo title="demo app logo" />,
    },
    appLogoSmall: {
      defaultValue: <DemoLogoSmall title="demo app logo small" />,
    },
    avatar: {
      defaultValue: (
        <DotAvatar
          alt="Batman"
          text="Bruce Wayne"
          size="small"
          type="text"
          tooltip="Bruce Wayne"
        />
      ),
    },
    borderColor: {
      defaultValue: '#33d389',
    },
    children: {
      defaultValue: <DotButton>Activate Bat Signal</DotButton>,
    },
    customLogo: {
      control: { type: 'select', options: logoOptions },
      defaultValue: 'Default',
    },
    dense: {
      defaultValue: true,
    },
    mainMenu: {
      defaultValue: <DotLink>Just a regular link</DotLink>,
    },
    mainMenuItems: {
      defaultValue: [
        {
          startIconId: 'process-template',
          text: 'Progressions',
          href: '#',
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
          tooltip: 'Alerts',
        },
        {
          iconId: 'help',
          tooltip: 'Help',
        },
        {
          iconId: 'apps',
          tooltip: 'Admin',
        },
        {
          iconId: 'dark',
          onClick: () => console.log('theme clicked'),
          tooltip: 'Toggle Theme',
        },
      ],
    },
  },
} as Meta;

export const Default: Story<AppToolbarProps> = (args) => {
  const { customLogo: logoId } = args;
  const logo = logoId === 'Custom' && (
    <DotTooltip title="test.logo">
      <TestLogo />
    </DotTooltip>
  );
  return <DotAppToolbar {...args} customLogo={logo} />;
};
