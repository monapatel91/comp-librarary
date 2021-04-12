import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { DotList, ListItemProps, ListProps } from './List';

const onClick = jest.fn();

const mockListItems: Array<ListItemProps> = [
  {
    text: 'Pipelines',
    onClick: onClick,
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
    href: '/progressions',
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
      children: <h3>Hello World</h3>,
      component: 'ul',
      dense: false,
      disablePadding: false,
      items: mockListItems,
    };
    const listProps: ListProps = {
      children: <h3>Hello World</h3>,
      component: 'ul',
      dense: false,
      disablePadding: false,
      items: mockListItems,
    };
    expect(listProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotList items={mockListItems} />);
    expect(baseElement).toBeTruthy();
  });

  it('should expand nested list when clicked', () => {
    render(<DotList items={mockListItems} />);
    const item = screen.getAllByRole('button');
    const nestedItemText = 'Package Progression';

    waitFor(() => {
      expect(screen.getByText(nestedItemText)).not.toBeVisible();
    });

    userEvent.click(item[1]);
    expect(screen.getByText(nestedItemText)).toBeVisible();
  });

  it('should have an href is one is passed', () => {
    render(<DotList items={mockListItems} />);
    expect(
      screen.getByText('Progressions').closest('a').getAttributeNode('href')
        .value
    ).toEqual('/progressions');
  });

  it('should not have an href if onClick is passed', () => {
    render(<DotList items={mockListItems} />);
    expect(
      screen.getByText('Pipelines').closest('a').getAttributeNode('href')
    ).toEqual(null);
  });

  it('should call onClick if one is passed down as a prop', () => {
    render(<DotList items={mockListItems} />);

    userEvent.click(screen.getByText('Pipelines'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
