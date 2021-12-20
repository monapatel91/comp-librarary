import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
  DotAvatar,
  DotAppToolbar,
  DotSidebar,
  BackItemProps,
  IconButtonProps,
  ListItemProps,
} from '@digital-ai/dot-components';
import { NavRoutes } from '../app/routes/Routes';

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

const customMainMenu = (
  <a style={{ paddingBottom: 50 }} href="/">
    Batman was here
  </a>
);

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

  const sideNavItems: Array<ListItemProps> = [
    {
      startIconId: 'comment',
      text: 'Demo Form',
      component: forwardRef((props, ref) => (
        <Link {...props} to="demo-form" ref={ref} />
      )),
    },
    {
      startIconId: 'visibility-off',
      text: 'Demo Form Uncontrolled',
      component: forwardRef((props, ref) => (
        <Link {...props} to="demo-form-uncontrolled" ref={ref} />
      )),
    },
    {
      startIconId: 'puzzle',
      text: 'Demo Dynamic Form',
      component: forwardRef((props, ref) => (
        <Link {...props} to="demo-dynamic-form" ref={ref} />
      )),
    },
    {
      startIconId: 'table',
      text: 'CSS Grid',
      component: React.forwardRef((props, ref) => (
        <Link {...props} to="css-grid" ref={ref} />
      )),
    },
    {
      startIconId: 'table',
      text: 'CSS Grid Template',
      component: React.forwardRef((props, ref) => (
        <Link {...props} to="css-grid-template" ref={ref} />
      )),
    },
    {
      startIconId: 'users',
      text: 'User List',
      component: React.forwardRef((props, ref) => (
        <Link {...props} to="user-table" ref={ref} />
      )),
    },
    {
      startIconId: 'pattern-bundle',
      text: 'Product Wrapper',
      component: React.forwardRef((props, ref) => (
        <Link {...props} to="product-buttons" ref={ref} />
      )),
    },
    {
      text: 'Sandbox',
      divider: true,
    },
    {
      startIconId: 'composition',
      text: 'Drawer',
      component: React.forwardRef((props, ref) => (
        <Link {...props} to="sandbox" ref={ref} />
      )),
    },
    {
      startIconId: 'release',
      text: 'Breadcrumbs',
      component: React.forwardRef((props, ref) => (
        <Link {...props} to="breadcrumbs" ref={ref} />
      )),
    },
  ];

  return (
    <>
      <DotAppToolbar
        avatar={userAvatar}
        dense={true}
        navItems={topNavItems}
        mainMenu={customMainMenu}
        mainMenuItems={sideNavItems}
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
          <NavRoutes />
        </section>
      </main>
    </>
  );
};
