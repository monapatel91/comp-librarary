import React from 'react';
import { Input } from '@material-ui/core';
import { fireEvent, render, screen } from '../../testing-utils';
import { DotAvatar } from '../avatar/Avatar';
import { DotAppToolbar, AppToolbarProps } from './AppToolbar';
import { IconButtonProps } from '../button/IconButton';
import { DotButton } from '../button/Button';
import { ReactComponent as LogoDigitalAiCustom } from '../../assets/logo_digital_ai.svg';

const menuItems = new Array<IconButtonProps>();
const userAvatar = (
  <DotAvatar alt="Batman" text="Bruce Wayne" size="small" type="text" />
);
const customLogo = <LogoDigitalAiCustom title="digital.ai.custom" />;
const mainMenuItems = [
  {
    startIconId: 'satellite-group',
    text: 'Link Item',
    href: '#',
  },
  {
    startIconId: 'dashboard',
    text: 'onClick Item',
    onClick: jest.fn(),
  },
  {
    text: 'Header',
    divider: true,
  },
];

describe(' AppToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      appName: 'Batman',
      ariaLabel: 'app toolbar',
      avatar: userAvatar,
      borderColor: '#1abc9c',
      children: <Input type="text" placeholder="search" />,
      className: 'test-class',
      customLogo: customLogo,
      'data-testid': 'testid',
      mainMenu: <DotButton>Batman was here</DotButton>,
      mainMenuItems: mainMenuItems,
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
  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-app-toolbar';
    render(
      <DotAppToolbar
        appName="Lisbon"
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        navItems={menuItems}
      />
    );
    const appToolbarElement = screen.getByTestId(dataTestId);
    expect(appToolbarElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it('should not display main menu if mainMenu and MainMenuItems are undefined', () => {
    render(<DotAppToolbar />);
    const mainMenuIcon = screen.queryByTestId('main-menu-icon');
    expect(mainMenuIcon).not.toBeInTheDocument();
  });

  it('should show/hide main menu when icon clicked', () => {
    render(<DotAppToolbar mainMenuItems={mainMenuItems} />);
    const mainMenuIcon = screen.getByTestId('main-menu-icon');
    const mainMenu = screen.getByTestId('main-menu');

    // click on hamburger
    fireEvent.click(mainMenuIcon);
    expect(mainMenu).toHaveClass('open');

    // click on close icon
    fireEvent.click(mainMenuIcon);
    expect(mainMenu).not.toHaveClass('open');
  });

  it('should display main menu unless link with href clicked', () => {
    render(<DotAppToolbar mainMenuItems={mainMenuItems} />);
    const mainMenuIcon = screen.getByTestId('main-menu-icon');
    const mainMenu = screen.getByTestId('main-menu');
    const linkItem = screen.getByText('Link Item');
    const onClickItem = screen.getByText('onClick Item');

    // click on hamburger
    fireEvent.click(mainMenuIcon);

    // click on item with onClick
    fireEvent.click(onClickItem);
    expect(mainMenu).toHaveClass('open');

    // click on item with href
    fireEvent.click(linkItem);
    expect(mainMenu).not.toHaveClass('open');
  });
});
