import React, { forwardRef } from 'react';
import { BackItemProps, ListItemProps } from '@digital-ai/dot-components';
import { Link } from 'react-router-dom';

export const mainLevelNav: Array<ListItemProps> = [
  {
    component: forwardRef((props, ref) => <Link {...props} to="/" ref={ref} />),
    selected: true,
    startIconId: 'home',
    text: 'Home',
  },
  {
    component: forwardRef((props, ref) => (
      <Link {...props} to="/accounts" ref={ref} />
    )),
    startIconId: 'list',
    text: 'Accounts',
  },
  // {
  //   iconId: 'cloud',
  //   text: 'Account',

  //   component: forwardRef((props, ref) => (
  //     <Link {...props} to="/account" ref={ref} />
  //   )),
  // },
  { text: '', divider: true },
  {
    component: forwardRef((props, ref) => (
      <Link {...props} to="/admin" ref={ref} />
    )),
    startIconId: 'settings',
    text: 'Settings',
  },
];

export const accountLevelNav: Array<ListItemProps> = [
  {
    startIconId: 'cloud',
    text: 'Overview',
    selected: true,
    component: forwardRef((props, ref) => (
      <Link {...props} to="/account" ref={ref} />
    )),
  },
  {
    startIconId: 'settings',
    text: 'Settings',
    component: forwardRef((props, ref) => (
      <Link {...props} to="/account/settings" ref={ref} />
    )),
  },
];

export const productLevelNav: Array<ListItemProps> = [
  {
    startIconId: 'cloud',
    text: 'Overview',
    selected: true,
    component: forwardRef((props, ref) => (
      <Link {...props} to="/product/agility" ref={ref} />
    )),
  },
  {
    startIconId: 'monitor',
    text: 'Usage',
    component: forwardRef((props, ref) => (
      <Link {...props} to="/product/usage/agility" ref={ref} />
    )),
  },
  {
    startIconId: 'dashboard',
    text: 'Analytics',
    component: forwardRef((props, ref) => (
      <Link {...props} to="/products/analytics/agility" ref={ref} />
    )),
  },
  {
    startIconId: 'list',
    text: 'Logs',
    component: forwardRef((props, ref) => (
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
