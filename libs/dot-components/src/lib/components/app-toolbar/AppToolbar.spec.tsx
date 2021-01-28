import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { DotAvatar } from '../avatar/Avatar';
import { DotAppToolbar } from './AppToolbar';

const menuItems = [];
const userAvatar = (
  <DotAvatar alt="Batman" text="Bruce Wayne" size="small" type="text" />
);

describe(' AppToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotAppToolbar navItems={menuItems} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the application name', () => {
    renderWithRouter(<DotAppToolbar appName="Lisbon" navItems={menuItems} />);
    expect(screen.getByText('Lisbon')).toBeVisible();
  });

  it('should display avatar if available', () => {
    renderWithRouter(
      <DotAppToolbar avatar={userAvatar} navItems={menuItems} />
    );
    expect(screen.getByText('BW')).toBeVisible();
  });
});
