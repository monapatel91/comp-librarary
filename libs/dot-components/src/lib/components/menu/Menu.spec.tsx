import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotMenu, MenuProps, MenuItemProps, PopperPlacement } from './Menu';

describe('Menu', () => {
  const maxVisibleItems = 3;

  it('should have unchanged API', () => {
    const onLeave = jest.fn();
    const onSelect = jest.fn();
    const mProps = {
      anchorEl: null as Element,
      ariaLabel: 'my menu label',
      className: 'test-class',
      'data-testid': 'testid',
      dense: true,
      disablePortal: true,
      id: 'menu-id',
      maxVisibleItems,
      menuItems: [{ children: 'opt 1' }],
      menuPlacement: 'bottom' as PopperPlacement,
      open: true,
      onLeave: onLeave,
      onSelect: onSelect,
    };
    const menuProps: MenuProps = mProps;
    expect(menuProps).toEqual(mProps);
    const iProps = {
      ariaLabel: 'aria-label',
      children: 'opt 1',
      className: 'test-class',
      classes: 'menu-item-class',
      'data-testid': 'testid',
      key: 'opt1',
    };
    const menuItemProps: MenuItemProps = iProps;
    expect(menuItemProps).toEqual(iProps);
  });

  const getMenuListItem = (text: string): HTMLElement =>
    screen.getByText(text).closest('li');

  const dummyMenuItems = [
    { ariaLabel: 'item-1', children: <span>Batman</span> },
    { ariaLabel: 'item-2', children: <span>Robin</span> },
    { ariaLabel: 'item-3', children: <span>Bat Girl</span> },
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-menu';
    render(
      <DotMenu
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        id="foo_bar"
        menuItems={dummyMenuItems}
        open={true}
      />
    );
    const menuElement = screen.getByTestId(dataTestId);
    expect(menuElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it("should have 'aria-label' attribute, with correct value, for each menu item", () => {
    render(<DotMenu id="foo_bar" menuItems={dummyMenuItems} open={true} />);
    expect(getMenuListItem('Batman')).toHaveAttribute(
      'aria-label',
      dummyMenuItems[0].ariaLabel
    );
    expect(getMenuListItem('Robin')).toHaveAttribute(
      'aria-label',
      dummyMenuItems[1].ariaLabel
    );
    expect(getMenuListItem('Bat Girl')).toHaveAttribute(
      'aria-label',
      dummyMenuItems[2].ariaLabel
    );
  });
});
