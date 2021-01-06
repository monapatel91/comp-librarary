import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { DotNavItem } from './NavItem';

describe(' NavItem', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotNavItem url="/" text="Batman Rocks" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a divider', () => {
    renderWithRouter(<DotNavItem type="divider" />);
    expect(screen.getByRole('listitem')).toHaveClass('divider');
  });

  it('should render a button', () => {
    renderWithRouter(<DotNavItem type="button" text="Batman" />);
    expect(screen.getByRole('button')).toHaveTextContent('Batman');
  });
});
