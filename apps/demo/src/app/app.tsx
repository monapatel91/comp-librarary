import React, { useState } from 'react';
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
          <h1>I AM THE NIGHT</h1>
          <p>
            But we’ve met before. That was a long time ago, I was a kid at St.
            Swithin’s, It used to be funded by the Wayne Foundation. It’s an
            orphanage. My mum died when I was small, it was a car accident. I
            don’t remember it. My dad got shot a couple of years later for a
            gambling debt. Oh I remember that one just fine. Not a lot of people
            know what it feels like to be angry in your bones. I mean they
            understand. The fosters parents. Everybody understands, for a while.
            Then they want the angry little kid to do something he knows he
            can’t do, move on. After a while they stop understanding. They send
            the angry kid to a boy’s home, I figured it out too late. Yeah I
            learned to hide the anger, and practice smiling in the mirror. It’s
            like putting on a mask. So you showed up this one day, in a cool
            car, pretty girl on your arm. We were so excited! Bruce Wayne, a
            billionaire orphan? We used to make up stories about you man,
            legends and you know with the other kids, that’s all it was, just
            stories, but right when I saw you, I knew who you really were. I’d
            seen that look on your face before. It’s the same one I taught
            myself. I don’t why you took the fault for Dent’s murder but I’m
            still a believer in the Batman. Even if you’re not…
          </p>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
