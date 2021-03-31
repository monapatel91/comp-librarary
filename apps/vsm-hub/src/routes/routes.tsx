import React from 'react';
import { BackItemProps, ListItemProps } from '@digital-ai/dot-components';
import { Link } from 'react-router-dom';

export const mainLevelNav: Array<ListItemProps> = [
  {
    iconId: 'home',
    text: 'Home',
    selected: true,
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/" ref={ref} />
    )),
  },
  {
    iconId: 'list',
    text: 'Accounts',

    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/accounts" ref={ref} />
    )),
  },
  // {
  //   iconId: 'cloud',
  //   text: 'Account',

  //   component: React.forwardRef((props, ref) => (
  //     <Link {...props} to="/account" ref={ref} />
  //   )),
  // },
  { text: '', divider: true },
  {
    iconId: 'settings',
    text: 'Settings',
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/admin" ref={ref} />
    )),
  },
];

export const accountLevelNav: Array<ListItemProps> = [
  {
    iconId: 'cloud',
    text: 'Overview',
    selected: true,
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/account" ref={ref} />
    )),
  },
  {
    iconId: 'settings',
    text: 'Settings',
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/account/settings" ref={ref} />
    )),
  },
];

export const productLevelNav: Array<ListItemProps> = [
  {
    iconId: 'cloud',
    text: 'Overview',
    selected: true,
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/product/agility" ref={ref} />
    )),
  },
  {
    iconId: 'monitor',
    text: 'Usage',
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/product/usage/agility" ref={ref} />
    )),
  },
  {
    iconId: 'dashboard',
    text: 'Analytics',
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/products/analytics/agility" ref={ref} />
    )),
  },
  {
    iconId: 'list',
    text: 'Logs',
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/products/logs/agility" ref={ref} />
    )),
  },
];

export const agilityBack: BackItemProps = {
  iconId: 'back',
  onClick: () => console.log('go back clicked'),
  text: 'Agility',
  title: `Go Back to Home`,
};

export const accountBack: BackItemProps = {
  iconId: 'back',
  onClick: () => console.log('go back clicked'),
  text: 'Account',
  title: `Go Back to Home`,
};

export const backItem: BackItemProps = {
  iconId: 'back',
  onClick: () => console.log('go back clicked'),
  text: 'Home',
  title: `Go Back to Home`,
};
