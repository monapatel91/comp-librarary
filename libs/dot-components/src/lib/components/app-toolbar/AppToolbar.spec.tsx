import React from 'react';
import { Input } from '@material-ui/core';
import { render, screen } from '../../testing-utils';
import { DotAvatar } from '../avatar/Avatar';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { IconButtonProps } from '../button/IconButton';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

const menuItems = new Array<IconButtonProps>();
const userAvatar = (
  <DotAvatar alt="Batman" text="Bruce Wayne" size="small" type="text" />
);
const customLogo = <LogoDigitalAiWhite title="digital.ai" />;

describe(' AppToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      appName: 'Batman',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      customLogo: customLogo,
      mainMenu: <DotSidebar />,
      mainMenuWidth: 240,
      navItems: menuItems,
    };
    const appToolbarProps: AppToolbarProps = {
      appName: 'Batman',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      customLogo: customLogo,
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
  it('should display custom logo', () => {
    render(<DotAppToolbar customLogo={customLogo} navItems={menuItems} />);
    expect(screen.getByTitle('digital.ai')).toBeVisible();
  });
});
