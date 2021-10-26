import React from 'react';
import { render, screen } from '../../testing-utils';
import userEvent from '@testing-library/user-event';
import { DotMenu, MenuProps, MenuItemProps, PopperPlacement } from './Menu';

describe('Menu', () => {
  const maxVisibleItems = 3;
  const dummyMenuItems = [
    { ariaLabel: 'item-1', children: <span>Batman</span>, classes: 'batman' },
    { ariaLabel: 'item-2', children: <span>Robin</span> },
    { ariaLabel: 'item-3', children: <span>Bat Girl</span> },
    { ariaLabel: 'item-4', children: <span>Flash</span> },
    { ariaLabel: 'item-5', children: <span>Arrow</span> },
    { ariaLabel: 'item-6', children: <span>Wonderwoman</span> },
    { ariaLabel: 'item-7', children: <span>Superman</span> },
  ];

  const getMenuListItem = (text: string): HTMLElement =>
    screen.getByText(text).closest('li');

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
      loading: false,
      maxVisibleItems,
      menuItemHeight: 40,
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

  it('should apply classes to the menu item', () => {
    render(<DotMenu id="foo_bar" menuItems={dummyMenuItems} open={true} />);
    expect(getMenuListItem('Batman')).toHaveClass('batman');
  });

  it('should display progress indicator when `loading` is true', () => {
    render(
      <DotMenu
        id="foo_bar"
        loading={true}
        menuItems={dummyMenuItems}
        open={true}
      />
    );
    const loadingIndicator = screen.queryByTitle('Loading Data...');
    expect(loadingIndicator).toBeVisible();
  });

  it('should trigger handleClickAway when user clicks', () => {
    const onLeave = jest.fn();
    render(
      <DotMenu
        anchorEl={null}
        data-testid="test-menu"
        id="foo_bar"
        menuItems={dummyMenuItems}
        onLeave={onLeave}
        open={true}
      />
    );
    const menuItem = getMenuListItem('Batman');
    userEvent.click(menuItem);
    expect(onLeave).toHaveBeenCalled();
  });

  describe('should display correct height', () => {
    it('when `dense` is false', () => {
      const dataTestId = 'test-id';
      render(
        <DotMenu
          data-testid={dataTestId}
          dense={false}
          id="foo_bar"
          menuItems={dummyMenuItems}
          open={true}
        />
      );
      const menuElement = screen.getByTestId(`${dataTestId}-menu`);
      expect(menuElement).toHaveStyle({ height: '252px' });
    });

    it('when `dense` is true', () => {
      const dataTestId = 'test-id';
      render(
        <DotMenu
          data-testid={dataTestId}
          dense={true}
          id="foo_bar"
          menuItems={dummyMenuItems}
          open={true}
        />
      );
      const menuElement = screen.getByTestId(`${dataTestId}-menu`);
      expect(menuElement).toHaveStyle({ height: '217px' });
    });

    it('when menuItemHeight passed', () => {
      const dataTestId = 'test-id';
      render(
        <DotMenu
          data-testid={dataTestId}
          id="foo_bar"
          menuItems={dummyMenuItems}
          open={true}
          menuItemHeight={25}
        />
      );
      const menuElement = screen.getByTestId(`${dataTestId}-menu`);
      expect(menuElement).toHaveStyle({ height: '196px' });
    });

    it('when maxVisibleItems is not default of 7', () => {
      const dataTestId = 'test-id';
      render(
        <DotMenu
          data-testid={dataTestId}
          id="foo_bar"
          maxVisibleItems={null}
          menuItems={dummyMenuItems}
          open={true}
        />
      );
      const menuElement = screen.getByTestId(`${dataTestId}-menu`);
      expect(menuElement).toHaveStyle({ height: '217px' });
    });
  });

  describe('Accessibility', () => {
    it('should trigger handleListKeyDown when "Tab" pressed', () => {
      const onLeave = jest.fn();
      render(
        <DotMenu
          id="foo_bar"
          menuItems={dummyMenuItems}
          onLeave={onLeave}
          open={true}
        />
      );
      const menuItem = getMenuListItem('Batman');
      expect(onLeave).not.toHaveBeenCalled();

      userEvent.type(menuItem, '{tab}');
      expect(onLeave).toHaveBeenCalled();
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
});
