import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotSidebar } from './Sidebar';

const primaryItems: Array<NavigationItemProps> = [
  {
    icon: 'block',
    title: 'Home',
    url: '/',
  },
  {
    icon: 'change',
    title: 'Changes',
    url: '/',
  },
];

const secondLevelNav: Array<NavigationItemProps> = [
  { icon: 'block', text: 'Batman', url: '' },
];

describe(' Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(
      <DotSidebar primaryItems={primaryItems} goBack={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  xit('should display the subnav correctly', async () => {
    const dummySubNav = [{ icon: 'block', text: 'Batman', url: '' }];
    renderWithRouter(<DotSidebar secondaryItems={dummySubNav} />);
    const primaryNav = screen.getByTestId('primaryNav');
    const subNav = screen.findByTestId('sub-nav');

    await waitFor(() => {
      expect(primaryNav).toBeTruthy();
      expect(subNav).toBeTruthy();
    });

    expect(screen.getByText('Batman')).toBeVisible();
  });

  xit('navigation expands/collapses as expected', async () => {
    renderWithRouter(<DotSidebar />);
    const primaryNav = screen.getByTestId('primaryNav');

    await waitFor(() => {
      expect(primaryNav).toBeTruthy();
    });

    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.findByTitle('Toggle Nav')).toBeTruthy();

    userEvent.click(screen.getByTitle('Toggle Nav'));
    expect(primaryNav).toHaveClass('collapsed');
  });

  xit('navigation is expanded by default', () => {
    renderWithRouter(<DotSidebar />);

    const primaryNav = screen.getByTestId('primaryNav');
    expect(primaryNav).toHaveClass('expanded');
  });

  xit('displays top level navigation when back button clicked', async () => {
    renderWithRouter(<DotSidebar secondaryItems={secondLevelNav} />);
    const primaryNav = screen.getByTestId('primaryNav');
    await waitFor(() => {
      expect(primaryNav.innerHTML).toContain('Batman');
    });
  });
});
