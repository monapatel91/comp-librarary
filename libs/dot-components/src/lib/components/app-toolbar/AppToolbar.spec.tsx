import React from 'react';
import { Input } from '@material-ui/core';
import { render, screen } from '../../testing-utils';
import { DotAvatar } from '../avatar/Avatar';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { IconButtonProps } from '../button/IconButton';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as LogoDigitalAiCustom } from '../../assets/logo_digital_ai.svg';

const menuItems = new Array<IconButtonProps>();
const userAvatar = (
  <DotAvatar alt="Batman" text="Bruce Wayne" size="small" type="text" />
);
const customLogo = <LogoDigitalAiCustom title="digital.ai.custom" />;

describe(' AppToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      appName: 'Batman',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      className: 'test-class',
      customLogo: customLogo,
      'data-testid': 'testid',
      mainMenu: <DotSidebar />,
      mainMenuWidth: 240,
      navItems: menuItems,
    };

    const appToolbarProps: AppToolbarProps = props;
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
  it('should display default digital.ai logo if custom logo is not provided ', () => {
    render(<DotAppToolbar navItems={menuItems} />);
    expect(screen.getByTitle('digital.ai')).toBeVisible();
  });
  it('should display custom logo if provided', () => {
    render(<DotAppToolbar customLogo={customLogo} navItems={menuItems} />);
    expect(screen.getByTitle('digital.ai.custom')).toBeVisible();
  });
});
