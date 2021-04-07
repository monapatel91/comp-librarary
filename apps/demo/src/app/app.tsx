import React from 'react';
import {
  BackItemProps,
  DotAvatar,
  DotAppToolbar,
  DotSidebar,
  ListItemProps,
  IconButtonProps,
} from '@digital-ai/dot-components';
import { Routes } from '../app/routes/Routes';

import './app.scss';

const topNavItems: Array<IconButtonProps> = [
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
];

const sideNavItems: Array<ListItemProps> = [
  {
    iconId: 'home',
    text: 'Home',
    href: '/',
  },
  {
    iconId: 'comment',
    text: 'Demo Form',
    href: '/demo-form',
  },
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
    iconId: 'package',
    text: 'Progression',
    href: '/progression',
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
];

const mainMenu = <DotSidebar navItems={sideNavItems} />;

const userAvatar = (
  <DotAvatar alt="Batman" text="BW" size="small" type="text" />
);

export const App = () => {
  const backItem: BackItemProps = {
    iconId: 'back',
    onClick: () => console.log('go back clicked'),
    text: 'Home',
    title: `Go Back to Home`,
  };

  return (
    <>
      <DotAppToolbar
        avatar={userAvatar}
        appName="Continuum"
        navItems={topNavItems}
        mainMenu={mainMenu}
      />
      <main>
        <DotSidebar
          backItem={backItem}
          brandDesc="Release orchestration powered by"
          collapsable={true}
          navItems={sideNavItems}
          title="FedEx"
        />
        <section className="main-content">
          <Routes />
        </section>
      </main>
    </>
  );
};
