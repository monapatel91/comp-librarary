import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';

import {
  DotHeader,
  DotSidebar,
  NavigationItemProps,
} from '@digital-ai/dot-components';

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

const sideNavItems: Array<NavigationItemProps> = [
  {
    icon: 'block',
    title: 'Home',
    url: '/',
  },
  {
    icon: 'change',
    title: 'Changes',
    url: '/',
  },
];

export const App = () => {
  return (
    <BrowserRouter>
      <DotHeader items={topNavItems} />
      <main>
        <DotSidebar primaryItems={sideNavItems} />
        <section className="main-content">
          <h1>I AM THE NIGHT</h1>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
