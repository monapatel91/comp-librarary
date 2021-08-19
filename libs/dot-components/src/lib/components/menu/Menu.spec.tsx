import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotMenu, MenuProps, MenuItemProps, PopperPlacement } from './Menu';

describe('Menu', () => {
  it('should have unchanged API', () => {
    const onLeave = jest.fn();
    const onSelect = jest.fn();
    const mProps = {
      anchorEl: null as Element,
      className: 'test-class',
      'data-testid': 'testid',
      disablePortal: true,
      id: 'menu-id',
      menuItems: [{ children: 'opt 1' }],
      menuPlacement: 'bottom' as PopperPlacement,
      open: true,
      onLeave: onLeave,
      onSelect: onSelect,
    };
    const menuProps: MenuProps = mProps;
    expect(menuProps).toEqual(mProps);
    const iProps = {
      children: 'opt 1',
      className: 'test-class',
      classes: 'menu-item-class',
      'data-testid': 'testid',
      key: 'opt1',
    };
    const menuItemProps: MenuItemProps = iProps;
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
