import React from 'react';
import { Input } from '@material-ui/core';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotAvatar } from '../avatar/Avatar';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { IconButtonProps } from '../button/IconButton';
import { DotSidebar } from '../sidebar/Sidebar';

const menuItems = new Array<IconButtonProps>();
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
      mainMenuWidth: 240,
      navItems: menuItems,
    };
    const appToolbarProps: AppToolbarProps = {
      appName: 'Batman',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      mainMenu: <DotSidebar />,
      mainMenuWidth: 240,
      navItems: menuItems,
    };
    expect(appToolbarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotAppToolbar navItems={menuItems} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the application name', () => {
    render(<DotAppToolbar appName="Lisbon" navItems={menuItems} />);
    expect(screen.getByText('Lisbon')).toBeVisible();
  });

  it('should display avatar if available', () => {
    render(<DotAppToolbar avatar={userAvatar} navItems={menuItems} />);
    expect(screen.getByText('BW')).toBeVisible();
  });
});
