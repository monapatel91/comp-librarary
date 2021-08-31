import React from 'react';
import { TextField } from '@material-ui/core';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { ListItemProps, NestedListType } from '../list/List';
import { BackItemProps, DotSidebar, SidebarProps } from './Sidebar';

const goBack = jest.fn();
const backItem: BackItemProps = {
  iconId: 'back',
  onClick: goBack,
  text: 'Home',
  title: `Go Back to Home`,
};

const navItems: Array<ListItemProps> = [
  {
    startIconId: 'block',
    text: 'Home',
    href: '/',
  },
  {
    startIconId: 'change',
    text: 'Changes',
    href: '/',
  },
];

describe(' Sidebar', () => {
  it('should have unchanged API', () => {
    const titleAvatarProps = { alt: 'avatar alt text', text: 'BM' };
    const props = {
      ariaLabel: 'sidebar',
      backItem: backItem,
      brandDesc: 'best brand',
      children: <TextField placeholder="search" variant="outlined" />,
      className: 'test-class',
      'data-testid': 'testid',
      collapsable: true,
      displayBrand: true,
      goBack: false,
      nestedListType: 'menu' as NestedListType,
      navItems: navItems,
      open: false,
      title: 'Captain Sidebar',
      titleAvatarProps: titleAvatarProps,
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
    expect(primaryNav).toHaveClass('expanded');
  });

  it('calls backItem callback when back button clicked', async () => {
    render(<DotSidebar backItem={backItem} goBack={true} />);
    const backButton = screen.getByTestId('back-button');
    userEvent.click(backButton);
    expect(goBack).toHaveBeenCalledTimes(1);
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-sidebar';
    render(<DotSidebar ariaLabel={ariaLabel} data-testid={dataTestId} />);
    const sidebarElement = screen.getByTestId(`primaryNav ${dataTestId}`);
    expect(sidebarElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
