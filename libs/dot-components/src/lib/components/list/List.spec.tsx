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
    ],
    text: 'Progressions',
  },
  {
    text: 'Workflow',
    divider: true,
  },
  {
    startIconId: 'block',
    text: 'Packages',
    href: '/packages',
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

  it('should have an href if one is passed', () => {
    render(<DotList items={mockListItems} />);
    expect(
      screen.getByText('Packages').closest('a').getAttributeNode('href').value
    ).toEqual('/packages');
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
      selected: true,
      startIconId: 'home',
      text: 'Hello World',
      title: 'Hello App',
    };
    const listItemProps: ListItemProps = props;
    expect(listItemProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotListItem text="Hello" />);
    expect(baseElement).toBeTruthy();
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
