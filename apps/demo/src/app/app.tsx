import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  DotHeader,
  DotSidebar,
  NavigationItemProps,
} from '@digital-ai/dot-components';
import DemoProgressionBoard from '../demo-components/DemoProgressionBoard';

import './app.scss';

const topNavItems: Array<NavigationItemProps> = [
  {
    icon: 'notification-bell',
    title: 'Alerts',
    url: '/',
  },
  {
    icon: 'help',
    title: 'Help',
    url: '/',
  },
  {
    icon: 'apps',
    title: 'Admin',
    url: '/',
  },
  {
    icon: 'dark',
    onClick: () => console.log('theme clicked'),
    title: 'Toggle Theme',
    url: '',
  },
];

const sampleSideNavItems: Array<NavigationItemProps> = [
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
    divider: true,
    text: 'Workflow',
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
    divider: true,
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
    divider: true,
    text: 'System',
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
      <DotHeader brand="Continuum" items={topNavItems} />
      <main>
        <DotSidebar
          backItem={backItem}
          navItems={sampleSideNavItems}
          company="FedEx"
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
