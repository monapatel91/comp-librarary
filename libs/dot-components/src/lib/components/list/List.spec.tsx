import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { DotList, ListItemProps, ListProps } from './List';

const onClick = jest.fn();

const mockListItems: Array<ListItemProps> = [
  {
    text: 'Pipelines',
    onClick: onClick,
    href: '/ignore/me',
  },
  {
    iconId: 'process-template',
    items: [
      {
        iconId: 'block',
        text: 'Package Progression',
        href: '/package-progression',
      },
      {
        iconId: 'block',
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
    iconId: 'block',
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
      component: 'ul',
      'data-testid': 'test-list',
      dense: false,
      disablePadding: false,
      items: mockListItems,
      menuPlacement: 'right',
      nestedListType: 'expandable',
    };
    const listProps: ListProps = {
      ariaLabel: 'hello',
      children: <h3>Hello World</h3>,
      className: 'foo-bar',
      component: 'ul',
      'data-testid': 'test-list',
      dense: false,
      disablePadding: false,
      items: mockListItems,
      menuPlacement: 'right',
      nestedListType: 'expandable',
    };
    expect(listProps).toEqual(props);
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
});
