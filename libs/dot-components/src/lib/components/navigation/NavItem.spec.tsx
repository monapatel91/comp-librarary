import React from 'react';
import { renderWithRouter } from '../testing-utils/RenderWithRouter';
import { DotNavItem } from './NavItem';

describe(' NavItem', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotNavItem url="/" text="Batman Rocks" />
    );
    expect(baseElement).toBeTruthy();
  });
});
