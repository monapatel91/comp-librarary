import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DotHeader, DotSidebar, NavigationItemProps } from '@digital-ai/dot-components';
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
  const [open, updateOpen] = useState(true);

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

  const toggleItem: Array<NavigationItemProps> = [
    {
      icon: 'chevron-left',
      onClick: () => updateOpen(!open),
      title: 'Toggle Nav',
      url: '/',
    },
  ];

  return (
    <BrowserRouter>
      <DotHeader brand="Continuum" items={topNavItems} />
      <main>
        <DotSidebar
          backItem={backItem}
          primaryItems={sampleSideNavItems}
          navOpen={true}
          title="FedEx"
          toggleItem={toggleItem}
        />
        <section className="main-content">
          <DemoProgressionBoard />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
