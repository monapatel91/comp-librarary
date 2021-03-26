import React from 'react';
import { TextField } from '@material-ui/core';
import { screen } from '@testing-library/dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { ListItemProps } from '../list/List';
import { BackItemProps, DotSidebar, SidebarProps } from './Sidebar';

const backItem: BackItemProps = {
  iconId: 'back',
  onClick: () => console.log('go back clicked'),
  text: 'Home',
  title: `Go Back to Home`,
};

const navItems: Array<ListItemProps> = [
  {
    iconId: 'block',
    text: 'Home',
    href: '/',
  },
  {
    iconId: 'change',
    text: 'Changes',
    href: '/',
  },
];

describe(' Sidebar', () => {
  it('should have unchanged API', () => {
    const titleAvatarProps = { alt: 'avatar alt text', text: 'BM' };
    const props = {
      backItem: backItem,
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
      backItem: backItem,
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
    const { baseElement } = render(
      <DotSidebar navItems={navItems} goBack={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  xit('navigation expands/collapses as expected', async () => {
    render(<DotSidebar />);
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
    render(<DotSidebar navItems={navItems} />);

    const primaryNav = screen.getByTestId('primaryNav');
    expect(primaryNav).toHaveClass('expanded');
  });

  xit('displays top level navigation when back button clicked', async () => {
    render(<DotSidebar navItems={navItems} />);
    const primaryNav = screen.getByTestId('primaryNav');
    await waitFor(() => {
      expect(primaryNav.innerHTML).toContain('Batman');
    });
  });
});
