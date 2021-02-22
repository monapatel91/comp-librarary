import React from 'react';
import '@testing-library/jest-dom';
import { TextField } from '@material-ui/core';
import { screen } from '@testing-library/dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotSidebar, SidebarProps } from './Sidebar';

const navItems: Array<NavigationItemProps> = [
  {
    iconId: 'block',
    title: 'Home',
    url: '/',
  },
  {
    iconId: 'change',
    title: 'Changes',
    url: '/',
  },
];

describe(' Sidebar', () => {
  it('should have unchanged API', () => {
    const titleAvatarProps = { alt: 'avatar alt text', text: 'BM' };
    const props = {
      backItem: navItems,
      brandDesc: 'best brand',
      children: <TextField placeholder="search" variant="outlined" />,
      collapsable: true,
      displayBrand: true,
      goBack: false,
      navItems: navItems,
      title: 'Captain Sidebar',
      titleAvatarProps: titleAvatarProps,
    };
    const sidebarProps: SidebarProps = {
      backItem: navItems,
      brandDesc: 'best brand',
      children: <TextField placeholder="search" variant="outlined" />,
      collapsable: true,
      displayBrand: true,
      goBack: false,
      navItems: navItems,
      title: 'Captain Sidebar',
      titleAvatarProps: titleAvatarProps,
    };
    expect(sidebarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotSidebar navItems={navItems} goBack={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  xit('navigation expands/collapses as expected', async () => {
    renderWithRouter(<DotSidebar />);
    const primaryNav = screen.getByTestId('primaryNav');

    await waitFor(() => {
      expect(primaryNav).toBeTruthy();
    });

    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.findByTitle('Toggle Nav')).toBeTruthy();

    userEvent.click(screen.getByTitle('Toggle Nav'));
    expect(primaryNav).toHaveClass('collapsed');
  });

  xit('navigation is expanded by default', () => {
    renderWithRouter(<DotSidebar navItems={navItems} />);

    const primaryNav = screen.getByTestId('primaryNav');
    expect(primaryNav).toHaveClass('expanded');
  });

  xit('displays top level navigation when back button clicked', async () => {
    renderWithRouter(<DotSidebar navItems={navItems} />);
    const primaryNav = screen.getByTestId('primaryNav');
    await waitFor(() => {
      expect(primaryNav.innerHTML).toContain('Batman');
    });
  });
});
