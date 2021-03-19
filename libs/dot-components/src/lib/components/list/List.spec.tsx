import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { ListItemProps } from './ListItem';
import { DotList, ListProps } from './List';
import userEvent from '@testing-library/user-event';

const mockListItems: Array<ListItemProps> = [
  {
    text: 'Pipelines',
    href: '/pipelines',
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
});
