import React, { forwardRef } from 'react';
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
import { Link } from 'react-router-dom';

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
    component: forwardRef((props, ref) => <Link {...props} to="/" ref={ref} />),
  },
  {
    iconId: 'comment',
    text: 'Demo Form',
    component: forwardRef((props, ref) => (
      <Link {...props} to="/demo-form" ref={ref} />
    )),
  },
  {
    iconId: 'visibility-off',
    text: 'Demo Form Uncontrolled',
    component: forwardRef((props, ref) => (
      <Link {...props} to="/demo-form-uncontrolled" ref={ref} />
    )),
  },
  {
    iconId: 'package',
    text: 'Progression',
    component: forwardRef((props, ref) => (
      <Link {...props} to="/progression" ref={ref} />
    )),
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
