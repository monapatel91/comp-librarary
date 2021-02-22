import React from 'react';
import { Input } from '@material-ui/core';
import { screen } from '@testing-library/dom';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { DotAvatar } from '../avatar/Avatar';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { DotSidebar } from '../sidebar/Sidebar';

const menuItems = [];
const userAvatar = (
  <DotAvatar alt="Batman" text="Bruce Wayne" size="small" type="text" />
);

describe(' AppToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      appName: 'Batman',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      mainMenu: <DotSidebar />,
      navItems: [],
    };
    const appToolbarProps: AppToolbarProps = {
      appName: 'Batman',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      mainMenu: <DotSidebar />,
      navItems: [],
    };
    expect(appToolbarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotAppToolbar navItems={menuItems} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the application name', () => {
    renderWithRouter(<DotAppToolbar appName="Lisbon" navItems={menuItems} />);
    expect(screen.getByText('Lisbon')).toBeVisible();
  });

  it('should display avatar if available', () => {
    renderWithRouter(
      <DotAppToolbar avatar={userAvatar} navItems={menuItems} />
    );
    expect(screen.getByText('BW')).toBeVisible();
  });
});
