import React, { ElementType } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import {
  DotList,
  DotListItem,
  ListItemProps,
  ListProps,
  NestedListProps,
  NestedListType,
} from './List';
import { PopperPlacement } from '../menu/Menu';
import { LinkTarget } from '../link/Link';

const onClick = jest.fn();

const mockListItems: Array<ListItemProps> = [
  {
    text: 'Pipelines',
    onClick: onClick,
    href: '/ignore/me',
  },
  {
    startIconId: 'process-template',
    items: [
      {
        startIconId: 'block',
        text: 'Package Progression',
        href: '/package-progression',
      },
      {
        startIconId: 'block',
        text: 'Feature Progression',
        href: '/feature-progression',
      },
      {
        child: 'Hello Batman',
      },
    ],
    text: 'Progressions',
  },
  {
    text: 'Workflow',
    divider: true,
  },
  {
    divider: true,
  },
  {
    startIconId: 'block',
    text: 'Packages',
    href: '/packages',
    target: '_blank',
    tooltip: 'The Dark Knight',
  },
];

const clickListItem = (itemPosition: number): void => {
  const item = screen.getAllByRole('button');
  userEvent.click(item[itemPosition]);
};

const expectNestedDrawerItemToBeVisible = async (
  nestedItemText: string,
  shouldBeVisible = true
): Promise<void> => {
  const nestedItemElement = screen.getByText(nestedItemText);

  await waitFor(() => {
    shouldBeVisible
      ? expect(nestedItemElement).toBeVisible()
      : expect(nestedItemElement).not.toBeVisible();
  });
};

const expectNestedMenuItemToBeVisible = async (
  nestedItemText: string,
  shouldBeVisible = true
): Promise<void> => {
  const nestedItemElement = screen.queryByText(nestedItemText);

  await waitFor(() => {
    shouldBeVisible
      ? expect(nestedItemElement).toBeVisible()
      : expect(nestedItemElement).not.toBeInTheDocument();
  });
};

describe('List', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'hello',
      children: <h3>Hello World</h3>,
      className: 'foo-bar',
      component: 'ul' as ElementType,
      'data-testid': 'test-list',
      dense: false,
      disablePadding: false,
      items: mockListItems,
      menuPlacement: 'right' as PopperPlacement,
      nestedDrawerSpacing: 240,
      nestedListType: 'expandable' as NestedListType,
    };
    const listProps: ListProps = props;
    expect(listProps).toEqual(props);

    const nProps = {
      ariaLabel: 'nested list',
      anchorEl: null as Element,
      items: mockListItems,
      menuPlacement: 'right' as PopperPlacement,
      nestedDrawerSpacing: 240,
      onMenuLeave: jest.fn(),
      open: false,
      parentItemIndex: 1,
      type: 'expandable' as NestedListType,
    };
    const nestedListProps: NestedListProps = nProps;
    expect(nestedListProps).toEqual(nProps);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotList items={mockListItems} />);
    expect(baseElement).toBeTruthy();
  });

  it('should expand nested list when clicked', () => {
    render(<DotList items={mockListItems} nestedListType="expandable" />);
    const item = screen.getAllByRole('button');
    const nestedItemText = 'Package Progression';

    waitFor(() => {
      expect(screen.getByText(nestedItemText)).not.toBeVisible();
    });

    userEvent.click(item[1]);
    expect(screen.getByText(nestedItemText)).toBeVisible();
  });

  it('should display nested menu when clicked', async () => {
    render(<DotList items={mockListItems} nestedListType="menu" />);
    const nestedItemText = 'Package Progression';

    await expectNestedMenuItemToBeVisible(nestedItemText, false);
    clickListItem(1);
    await expectNestedMenuItemToBeVisible(nestedItemText);
  });

  it('should show and hide nested menu when same item is clicked twice', async () => {
    render(<DotList items={mockListItems} nestedListType="menu" />);
    const nestedItemText = 'Package Progression';
    clickListItem(1);
    await expectNestedMenuItemToBeVisible(nestedItemText);
    clickListItem(1);
    await expectNestedMenuItemToBeVisible(nestedItemText, false);
  });

  it('should display nested drawer when clicked', async () => {
    render(<DotList items={mockListItems} nestedListType="drawer" />);
    const nestedItemText = 'Package Progression';
    await expectNestedDrawerItemToBeVisible(nestedItemText, false);
    clickListItem(1);
    await expectNestedDrawerItemToBeVisible(nestedItemText);
  });

  it('should show and hide nested drawer when same item is clicked twice', async () => {
    render(<DotList items={mockListItems} nestedListType="drawer" />);
    const nestedItemText = 'Package Progression';
    clickListItem(1);
    await expectNestedDrawerItemToBeVisible(nestedItemText);
    clickListItem(1);
    await expectNestedDrawerItemToBeVisible(nestedItemText, false);
  });

  it('should have an href if one is passed', () => {
    render(<DotList items={mockListItems} />);
    expect(
      screen.getByText('Packages').closest('a').getAttributeNode('href').value
    ).toEqual('/packages');
  });

  it('should have a target if one is passed', () => {
    render(<DotList items={mockListItems} />);
    expect(
      screen.getByText('Packages').closest('a').getAttributeNode('target').value
    ).toEqual('_blank');
  });

  it('should not have an href if onClick is passed', () => {
    render(<DotList items={mockListItems} />);
    expect(screen.getByText('Pipelines').closest('a') === null);
  });

  it('should call onClick if one is passed down as a prop', () => {
    render(<DotList items={mockListItems} />);

    userEvent.click(screen.getByText('Pipelines'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'dot-list';
    render(
      <DotList
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        items={mockListItems}
      />
    );
    const linkElement = screen.getByTestId(dataTestId);
    expect(linkElement).toHaveAttribute('aria-label', ariaLabel);
  });
  it('should hide divider from screen reader to count correct number of list items', () => {
    render(<DotList items={mockListItems} />);
    const divider = screen.getByTestId('divider-3');
    expect(divider).toHaveAttribute('aria-hidden', 'true');
  });

  it('should display empty list element when no items are provided', () => {
    render(<DotList />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
  });
});

describe('ListItem', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'hello',
      child: <h3>Hello World</h3>,
      className: 'foo-bar',
      component: 'ul' as ElementType,
      'data-testid': 'test-list',
      divider: true,
      endIconId: 'home',
      href: 'http://www.digital.ai',
      index: 0,
      isOpened: false,
      items: mockListItems,
      menuPlacement: 'right' as PopperPlacement,
      nestedDrawerSpacing: 240,
      nestedListType: 'expandable' as NestedListType,
      onClick: jest.fn(),
      onMenuLeave: jest.fn(),
      selected: true,
      startIconId: 'home',
      target: '_blank' as LinkTarget,
      text: 'Hello World',
      title: 'Hello App',
    };
    const listItemProps: ListItemProps = props;
    expect(listItemProps).toEqual(props);
  });

  it('should only display one tooltip', () => {
    const testId = 'tooltip_unit_test';
    render(<DotList data-testid={testId} items={mockListItems} />);
    const listItem = screen.getByTestId(`${testId}-item-4`);
    const tooltip = screen.queryAllByTitle('The Dark Knight');

    userEvent.hover(listItem);
    waitFor(() => {
      expect(tooltip).toHaveLength(1);
    });
  });

  xit("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'dot-list-item';
    render(
      <DotListItem
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        items={mockListItems}
      />
    );
    const linkElement = screen.getByTestId(dataTestId);
    expect(linkElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
