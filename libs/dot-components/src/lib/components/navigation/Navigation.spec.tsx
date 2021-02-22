import React from 'react';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import DotNavigation, { NavigationProps } from './Navigation';
import { NavigationItemProps } from './NavItem';

const onClick = jest.fn();

const mockNavItems: Array<NavigationItemProps> = [
  {
    direction: 'horizontal',
    iconId: 'block',
    iconPlacement: 'first',
    text: 'Link One',
    url: '/',
  },
  {
    direction: 'vertical',
    onClick: onClick,
    text: 'Link Two',
    url: '/',
  },
  {
    direction: 'horizontal',
    text: 'Link Three',
    url: '/',
  },
];

describe(' Navigation', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'aria label',
      direction: 'vertical',
      iconSize: 'small',
      isOpen: false,
      items: mockNavItems,
    };
    const navigationProps: NavigationProps = {
      ariaLabel: 'aria label',
      direction: 'vertical',
      iconSize: 'small',
      isOpen: false,
      items: mockNavItems,
    };
    expect(navigationProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotNavigation items={mockNavItems} />
    );
    const items = screen.getAllByRole('listitem');
    expect(baseElement).toBeTruthy();
    expect(items).toHaveLength(3);
  });

  it('displays icon if available', async () => {
    renderWithRouter(<DotNavigation items={mockNavItems} />);
    const items = screen.getAllByRole('listitem');
    const icon = screen.getByTestId('link-icon');

    expect(items[0]).toContainElement(icon);
    expect(items[1]).not.toContainElement(icon);
  });

  it('displays text if available', async () => {
    renderWithRouter(<DotNavigation items={mockNavItems} />);
    const items = await screen.findAllByRole('listitem');

    expect(items[1]).toHaveTextContent('Link Two');
  });

  it('correct classes are applied', async () => {
    renderWithRouter(<DotNavigation items={mockNavItems} />);
    const items = await screen.findAllByRole('listitem');

    expect(items[0]).toHaveClass('horizontal');
    expect(items[1]).toHaveClass('vertical');
  });

  it('user is able to click', async () => {
    renderWithRouter(<DotNavigation items={mockNavItems} />);
    const link = await screen.findAllByRole('link');

    userEvent.click(link[1]);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
