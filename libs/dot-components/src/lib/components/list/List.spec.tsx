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
const consoleSpy = jest.spyOn(global.console, 'warn');
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
  {
    primaryText: 'Primary Text',
    secondaryText: 'Secondary Text',
    endIconId: 'block',
  },
];

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

  it('should display nested menu when clicked', () => {
    render(<DotList items={mockListItems} nestedListType="menu" />);
    const item = screen.getAllByRole('button');
    const nestedItemText = 'Package Progression';

    waitFor(() => {
      expect(screen.getByText(nestedItemText)).not.toBeVisible();
    });

    userEvent.click(item[1]);
    expect(screen.getByText(nestedItemText)).toBeVisible();
  });

  it('should display nested drawer when clicked', () => {
    render(<DotList items={mockListItems} nestedListType="drawer" />);
    const item = screen.getAllByRole('button');
    const nestedItemText = 'Package Progression';

    waitFor(() => {
      expect(screen.getByText(nestedItemText)).not.toBeVisible();
    });

    userEvent.click(item[1]);
    expect(screen.getByText(nestedItemText)).toBeVisible();
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
      items: mockListItems,
      menuPlacement: 'right' as PopperPlacement,
      nestedDrawerSpacing: 240,
      nestedListType: 'expandable' as NestedListType,
      onClick: jest.fn(),
      primaryText: 'Primary Text',
      secondaryText: 'Secondary Text',
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
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });

  it('should display primary and secondary text if provided', () => {
    render(<DotList items={mockListItems} />);
    const primaryText = screen.getByText('Primary Text');
    const secondaryText = screen.getByText('Secondary Text');

    expect(primaryText).toBeVisible();
    expect(secondaryText).toBeVisible();
  });

  it('should have a deprecation warning if title is provided', () => {
    const deprecatedItems: Array<ListItemProps> = [
      { text: 'Hello World', title: 'well hello there' },
    ];
    render(<DotList items={deprecatedItems} />);
    waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  xit('should display the end icon if passed and no children', () => {
    render(<DotList items={mockListItems} />);
    const listItem = screen.getByText('Primary Text');

    expect(listItem).toBeVisible();
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
