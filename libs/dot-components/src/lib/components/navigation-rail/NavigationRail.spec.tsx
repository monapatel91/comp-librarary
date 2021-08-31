import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderResult, screen } from '../../testing-utils';
import {
  DotNavigationRail,
  NavigationRailProps,
  RailItem,
  RailItemsPosition,
} from './NavigationRail';

describe('NavigationRail', () => {
  const dataTestId = 'test-navigation-rail';

  const onChange = jest.fn();

  const navRailAriaLabel = 'navigation rail label';

  const railItems: Array<RailItem> = [
    {
      ariaLabel: 'list item 1',
      iconId: 'list',
      title: 'Test 1',
    },
    {
      ariaLabel: 'list item 2',
      iconId: 'history',
      title: 'Test 2',
    },
    {
      ariaLabel: 'list item 3',
      iconId: 'users',
      title: 'Test 3',
    },
  ];

  const getNavigationRail = (): HTMLElement => screen.getByTestId(dataTestId);

  const getRailItem = (index: number): HTMLElement =>
    screen.getByTestId(`rail-item-${index}`);

  const expectItemToBeSelected = (selectedIndex: number): void => {
    expect(getRailItem(selectedIndex)).toHaveClass('selected');
    railItems.forEach((_: RailItem, index: number) => {
      if (index !== selectedIndex) {
        expect(getRailItem(index)).not.toHaveClass('selected');
      }
    });
  };

  const expectToHavePositionValue = (
    railItemsPosition: RailItemsPosition
  ): void =>
    expect(getNavigationRail()).toHaveStyle(
      `justify-content: ${railItemsPosition}`
    );

  const expectItemsToBeVisible = (
    railItems: Array<RailItem>,
    shouldBeVisible = true
  ): void =>
    railItems.forEach((railItem: RailItem) => {
      const item = screen.queryByText(railItem.title);
      shouldBeVisible
        ? expect(item).toBeVisible()
        : expect(item).not.toBeInTheDocument();
    });

  const props = {
    ariaLabel: navRailAriaLabel,
    className: 'test-class',
    'data-testid': dataTestId,
    onChange,
    railItemPosition: 'flex-start' as RailItemsPosition,
    railItems,
    selectedIndex: 0,
  };

  const componentProps: NavigationRailProps = props;

  const renderComponent = (props: NavigationRailProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DotNavigationRail {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const iProps = {
      ariaLabel: 'item label',
      iconId: 'home',
      title: 'welcome home',
    };

    const itemProps: RailItem = iProps;

    expect(itemProps).toEqual(iProps);
    expect(componentProps).toEqual(props);
  });

  describe('default render', () => {
    let baseComponentElement: HTMLElement;

    beforeEach(() => {
      const { baseElement } = renderComponent();
      baseComponentElement = baseElement;
    });

    it('should render successfully', () => {
      const { baseElement } = renderComponent();
      expect(baseElement).toBeTruthy();
    });

    it('should display rail items', () => {
      expectItemsToBeVisible(railItems);
    });

    it('should display first item as selected', () => {
      expectItemToBeSelected(0);
    });

    it('should change selected item on non-selected item click event', () => {
      const selectedIndex = 2;
      const railItem = getRailItem(selectedIndex);
      userEvent.click(railItem);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(selectedIndex);
      expectItemToBeSelected(selectedIndex);
    });

    it("should have 'aria-label' attribute with correct value", () => {
      const navigationRailElement = getNavigationRail();
      expect(navigationRailElement).toHaveAttribute(
        'aria-label',
        navRailAriaLabel
      );
    });

    it("should have 'aria-label' attribute, with correct value, for each rail item", () => {
      railItems.forEach(({ ariaLabel }: RailItem, index: number) => {
        expect(getRailItem(index)).toHaveAttribute('aria-label', ariaLabel);
      });
    });
  });

  describe('with custom props', () => {
    it("should have 'flex-start' style selector when default position is changed", () => {
      const railItemPosition = 'flex-start';
      const props: NavigationRailProps = {
        ...componentProps,
        railItemPosition,
      };
      renderComponent(props);
      expectToHavePositionValue(railItemPosition);
    });

    it("should have 'center' style selector when default position is changed", () => {
      const railItemPosition = 'center';
      const props: NavigationRailProps = {
        ...componentProps,
        railItemPosition,
      };
      renderComponent(props);
      expectToHavePositionValue(railItemPosition);
    });

    it("should have 'flex-end' style selector when default position is changed", () => {
      const railItemPosition = 'flex-end';
      const props: NavigationRailProps = {
        ...componentProps,
        railItemPosition,
      };
      renderComponent(props);
      expectToHavePositionValue(railItemPosition);
    });

    it('should have correct selected item', () => {
      const selectedIndex = 2;
      const props: NavigationRailProps = {
        ...componentProps,
        selectedIndex,
      };
      renderComponent(props);
      expectItemToBeSelected(selectedIndex);
    });

    it('should display maximum of 7 items', () => {
      const nonDisplayedItems: Array<RailItem> = [
        {
          iconId: 'list',
          title: 'Test 8',
        },
        {
          iconId: 'history',
          title: 'Test 9',
        },
      ];

      const displayedItems: Array<RailItem> = [
        ...railItems,
        {
          iconId: 'list',
          title: 'Test 4',
        },
        {
          iconId: 'history',
          title: 'Test 5',
        },
        {
          iconId: 'users',
          title: 'Test 6',
        },
        {
          iconId: 'users',
          title: 'Test 7',
        },
      ];

      const items = [...displayedItems, ...nonDisplayedItems];

      const props: NavigationRailProps = {
        ...componentProps,
        railItems: items,
      };
      renderComponent(props);
      expectItemsToBeVisible(displayedItems, true);
      expectItemsToBeVisible(nonDisplayedItems, false);
    });
  });
});
