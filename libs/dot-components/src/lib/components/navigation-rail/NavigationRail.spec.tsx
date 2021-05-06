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

  const onItemOneClick = jest.fn();

  const onItemTwoClick = jest.fn();

  const onItemThreeClick = jest.fn();

  const railItems: Array<RailItem> = [
    {
      iconId: 'list',
      title: 'Test 1',
      onClick: onItemOneClick,
    },
    {
      iconId: 'history',
      title: 'Test 2',
      onClick: onItemTwoClick,
    },
    {
      iconId: 'users',
      title: 'Test 3',
      onClick: onItemThreeClick,
    },
  ];

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
    expect(screen.getByTestId(dataTestId)).toHaveStyle(
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

  const componentProps: NavigationRailProps = {
    'data-testid': dataTestId,
    railItemPosition: 'flex-start',
    railItems,
    selectedIndex: 0,
  };

  const renderComponent = (props: NavigationRailProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DotNavigationRail {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      railItemPosition: 'flex-start',
      railItems,
      selectedIndex: 0,
    };
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
      expect(onItemThreeClick).toHaveBeenCalledTimes(1);
      expectItemToBeSelected(selectedIndex);
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
      const nonDisplayedItems = [
        {
          iconId: 'list',
          title: 'Test 8',
          onClick: jest.fn(),
        },
        {
          iconId: 'history',
          title: 'Test 9',
          onClick: jest.fn(),
        },
      ];

      const displayedItems = [
        ...railItems,
        {
          iconId: 'list',
          title: 'Test 4',
          onClick: jest.fn(),
        },
        {
          iconId: 'history',
          title: 'Test 5',
          onClick: jest.fn(),
        },
        {
          iconId: 'users',
          title: 'Test 6',
          onClick: jest.fn(),
        },
        {
          iconId: 'users',
          title: 'Test 7',
          onClick: jest.fn(),
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
