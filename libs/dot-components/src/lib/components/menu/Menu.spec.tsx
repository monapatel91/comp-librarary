import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import DotMenu, { MenuProps, MenuItemProps } from './Menu';

describe('Menu', () => {
  it('should have unchanged API', () => {
    const onLeave = jest.fn();
    const onSelect = jest.fn();
    const mProps = {
      anchorEl: null,
      disablePortal: true,
      id: 'menu-id',
      menuItems: [{ children: 'opt 1' }],
      menuPlacement: 'bottom',
      open: true,
      onLeave: onLeave,
      onSelect: onSelect,
    };
    const menuProps: MenuProps = {
      anchorEl: null,
      disablePortal: true,
      id: 'menu-id',
      menuItems: [{ children: 'opt 1' }],
      menuPlacement: 'bottom',
      open: true,
      onLeave: onLeave,
      onSelect: onSelect,
    };
    expect(menuProps).toEqual(mProps);
    const onClick = jest.fn();
    const iProps = {
      children: 'opt 1',
      classes: 'menu-item-class',
      key: 'opt1',
    };
    const menuItemProps: MenuItemProps = {
      children: 'opt 1',
      classes: 'menu-item-class',
      key: 'opt1',
    };
    expect(menuItemProps).toEqual(iProps);
  });

  const dummyMenuItems = [
    { children: <span>Batman</span> },
    { children: <span>Robin</span> },
    { children: <span>Bat Girl</span> },
  ];

  it('should show menu items when open', () => {
    render(<DotMenu id="foo_bar" menuItems={dummyMenuItems} open={true} />);
    const menuItem = screen.getByText('Batman');
    expect(menuItem).toBeVisible();
  });

  it('should not show menu items when not open', () => {
    render(<DotMenu id="foo_bar" menuItems={dummyMenuItems} />);
    const menuItem = screen.queryByText('Batman');
    expect(menuItem).toBeNull();
  });
});
