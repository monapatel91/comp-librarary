import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotMenu from './Menu';

describe('Menu', () => {
  const dummyMenuItems = [
    { children: <span>Batman</span> },
    { children: <span>Robin</span> },
    { children: <span>Bat Girl</span> },
  ];

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotMenu
        buttonContent="Toggle Menu"
        id="foo_bar"
        menuItems={dummyMenuItems}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should open when button is clicked', () => {
    render(
      <DotMenu
        buttonContent="Toggle Menu"
        id="foo_bar"
        menuItems={dummyMenuItems}
      />
    );
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Batman')).toBeVisible();
  });

  it('should close when a menu item is clicked', () => {
    render(
      <DotMenu
        buttonContent="Toggle Menu"
        id="foo_bar"
        menuItems={dummyMenuItems}
      />
    );
    userEvent.click(screen.getByRole('button'));

    const menuItem = screen.getByText('Batman');
    userEvent.click(menuItem);
    expect(menuItem).not.toBeVisible();
  });
});
