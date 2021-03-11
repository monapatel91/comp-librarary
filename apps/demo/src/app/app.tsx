import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  DotAvatar,
  DotAppToolbar,
  DotSidebar,
  NavigationItemProps,
} from '@digital-ai/dot-components';
import { Routes } from '../app/routes/Routes';

import './app.scss';

const topNavItems: Array<NavigationItemProps> = [
  {
    iconId: 'notification-bell',
    title: 'Alerts',
    type: 'button',
  },
  {
    iconId: 'help',
    title: 'Help',
    type: 'button',
  },
  {
    iconId: 'apps',
    title: 'Admin',
    type: 'button',
  },
  {
    iconId: 'dark',
    iconSize: 'small',
    onClick: () => console.log('theme clicked'),
    text: 'Theme',
    title: 'Toggle Theme',
    type: 'button',
  },
];

const mainMenuNavItems: Array<NavigationItemProps> = [
  {
    iconId: 'process-template',
    text: 'Progressions',
    url: '/progressions',
  },
  {
    iconId: 'satellite-group',
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
];

const sideNavItems: Array<NavigationItemProps> = [
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
];

const mainMenu = <DotSidebar navItems={mainMenuNavItems} />;

const userAvatar = (
  <DotAvatar alt="Batman" text="BW" size="small" type="text" />
);

export const App = () => {
  const backItem: Array<NavigationItemProps> = [
    {
      iconId: 'back',
      onClick: () => console.log('go back clicked'),
      text: 'Home',
      title: `Go Back to Home`,
      url: '/',
    },
  ];

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
