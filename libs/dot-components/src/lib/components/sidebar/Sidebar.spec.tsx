import React from 'react';
import { TextField } from '@material-ui/core';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { ListItemProps, NestedListType } from '../list/List';
import { BackItemProps, DotSidebar, SidebarProps } from './Sidebar';
import { ReactComponent as DemoLogo } from '../../assets/demo-logo.svg';
import { ReactComponent as DemoLogoSmall } from '../../assets/demo-logo-small.svg';

const goBack = jest.fn();
const backItem: BackItemProps = {
  iconId: 'back',
  onClick: goBack,
  text: 'Home',
  title: `Go Back to Home`,
};

const appLogo = <DemoLogo title="app logo" />;
const appLogoSmall = <DemoLogoSmall title="app logo small" />;
const titleAvatarProps = { alt: 'avatar alt text', text: 'BM' };
const navItems: Array<ListItemProps> = [
  {
    startIconId: 'block',
    text: 'Home',
    href: '/',
  },
  {
    startIconId: 'change',
    text: 'Changes',
    items: [
      {
        text: 'PLANNING',
        divider: true,
      },
      {
        text: 'Nested Link',
      },
    ],
  },
];

describe(' Sidebar', () => {
  it('should have unchanged API', () => {
    const props = {
      appLogo: appLogo,
      appLogoSmall: appLogoSmall,
      ariaLabel: 'sidebar',
      backItem: backItem,
      brandDesc: 'best brand',
      children: <TextField placeholder="search" variant="outlined" />,
      className: 'test-class',
      collapsable: true,
      'data-testid': 'testid',
      displayAppLogo: true,
      displayBrand: true,
      goBack: false,
      nestedListType: 'menu' as NestedListType,
      navItems: navItems,
      open: false,
      title: 'Captain Sidebar',
      titleAvatarProps: titleAvatarProps,
      width: 240,
    };
    const sidebarProps: SidebarProps = props;
    expect(sidebarProps).toEqual(props);

    const bProps = {
      iconId: 'home',
      onClick: goBack,
      text: 'Go Back',
      title: 'Go Back Home',
    };

    const backItemProps: BackItemProps = bProps;
    expect(backItemProps).toEqual(bProps);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotSidebar navItems={navItems} goBack={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('navigation expands/collapses as expected', async () => {
    render(
      <DotSidebar
        backItem={backItem}
        collapsable={true}
        goBack={true}
        open={true}
      />
    );
    const primaryNav = screen.getByTestId('primaryNav');

    await waitFor(() => {
      expect(primaryNav).toBeTruthy();
    });

    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByTestId('toggle-nav')).toBeTruthy();

    userEvent.click(screen.getByTestId('toggle-nav'));
    expect(primaryNav).toHaveClass('collapsed');
  });

  it('navigation is expanded by default', () => {
    render(<DotSidebar navItems={navItems} />);

    const primaryNav = screen.getByTestId('primaryNav');
    expect(primaryNav).not.toHaveClass('collapsed');
  });

  it('nested drawer is hidden when sidebar collapsed', async () => {
    render(
      <DotSidebar
        collapsable={true}
        navItems={navItems}
        nestedListType="drawer"
        open={true}
      />
    );
    const primaryNav = screen.getByTestId('primaryNav');
    const changesLink = screen.getByText('Changes');

    await waitFor(() => {
      expect(primaryNav).toBeTruthy();
    });

    expect(changesLink).toBeVisible();
    userEvent.click(changesLink);

    await waitFor(() => {
      expect(screen.getByText('Nested Link')).toBeVisible();
    });

    userEvent.click(screen.getByTestId('toggle-nav'));
    expect(primaryNav).toHaveClass('collapsed');
    expect(screen.getByText('Nested Link')).not.toBeVisible();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-sidebar';
    render(<DotSidebar ariaLabel={ariaLabel} data-testid={dataTestId} />);
    const sidebarElement = screen.getByTestId(`primaryNav ${dataTestId}`);
    expect(sidebarElement).toHaveAttribute('aria-label', ariaLabel);
  });
});

describe(' Sidebar - Back Button', () => {
  it('calls backItem callback when back button clicked', () => {
    render(<DotSidebar backItem={backItem} goBack={true} />);
    const backButton = screen.getByTestId('back-button');
    userEvent.click(backButton);
    expect(goBack).toHaveBeenCalledTimes(1);
    const backButtonText = screen.getByText('Home');
    userEvent.click(backButtonText);
    expect(goBack).toHaveBeenCalledTimes(2);
  });

  it('should use backItem.title for backItem link and icon tooltips when title is provided', () => {
    render(<DotSidebar backItem={backItem} goBack={true} />);
    expect(screen.getAllByTitle(backItem.title)).toHaveLength(2);
  });

  it('should use backItem.text for backItem link and icon tooltips when title is not provided', () => {
    const noTitleBackItem: BackItemProps = {
      iconId: 'back',
      onClick: goBack,
      text: 'Home',
    };
    render(<DotSidebar backItem={noTitleBackItem} goBack={true} />);
    expect(screen.getAllByTitle(noTitleBackItem.text)).toHaveLength(2);
  });
});

describe(' Sidebar - Application Logo', () => {
  it('should not display application logo by default', () => {
    render(<DotSidebar appLogo={appLogo} navItems={navItems} />);
    expect(screen.queryByTitle('app logo')).toBeNull();
  });

  it('should display application logo if provided and enabled', () => {
    render(
      <DotSidebar appLogo={appLogo} displayAppLogo={true} navItems={navItems} />
    );
    expect(screen.getByTitle('app logo')).toBeVisible();
  });

  it('should display small application logo if collapsed', () => {
    render(
      <DotSidebar
        open={false}
        appLogo={appLogo}
        appLogoSmall={appLogoSmall}
        displayAppLogo={true}
        navItems={navItems}
      />
    );
    expect(screen.getByTitle('app logo small')).toBeVisible();
  });

  it('should not display header title if application logo provided', () => {
    render(
      <DotSidebar
        appLogo={appLogo}
        appLogoSmall={appLogoSmall}
        displayAppLogo={true}
        navItems={navItems}
        open={true}
        title="Wayne Enterprises"
      />
    );

    expect(screen.queryByText('Wayne Enterprises')).toBeNull();
  });

  it('should display header title if provided and no logo provided', () => {
    render(
      <DotSidebar navItems={navItems} open={true} title="Wayne Enterprises" />
    );

    expect(screen.queryByText('Wayne Enterprises')).toBeVisible();
  });
});
