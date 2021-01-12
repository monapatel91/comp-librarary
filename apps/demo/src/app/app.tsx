import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  DotAvatar,
  DotAppToolbar,
  DotSidebar,
  NavigationItemProps,
} from '@digital-ai/dot-components';
import DemoProgressionBoard from '../demo-components/DemoProgressionBoard';

import './app.scss';

const topNavItems: Array<NavigationItemProps> = [
  {
    icon: 'notification-bell',
    title: 'Alerts',
    type: 'button',
  },
  {
    icon: 'help',
    title: 'Help',
    type: 'button',
  },
  {
    icon: 'apps',
    title: 'Admin',
    type: 'button',
  },
  {
    icon: 'dark',
    iconSize: 'small',
    onClick: () => console.log('theme clicked'),
    text: 'Theme',
    title: 'Toggle Theme',
    type: 'button',
  },
];

const mainMenuNavItems: Array<NavigationItemProps> = [
  {
    icon: 'process-template',
    text: 'Progressions',
    url: '/progressions',
  },
  {
    icon: 'satellite-group',
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
];

const sideNavItems: Array<NavigationItemProps> = [
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
];

const mainMenu = <DotSidebar navItems={mainMenuNavItems} />;

const userAvatar = (
  <DotAvatar alt="Batman" text="BW" size="small" type="text" />
);

export const App = () => {
  const backItem: Array<NavigationItemProps> = [
    {
      icon: 'back',
      iconBgColor: '#E3E5E8',
      iconType: 'circle',
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
        brand="Continuum"
        items={topNavItems}
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
          <h1>dot-components demo app</h1>
          <DemoProgressionBoard />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
