import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { BreadcrumbProps, BreadcrumbItem, DotBreadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  const onClick = jest.fn();
  const dummyItems: Array<BreadcrumbItem> = [
    { href: '#', onClick: onClick, text: 'Link 1' },
    { href: '#', onClick: onClick, text: 'Link 2' },
    { href: '#', onClick: onClick, text: 'Link 3' },
  ];
  const dummyItemsNoOnClick: Array<BreadcrumbItem> = [
    { href: '#', text: 'Link 1' },
    { href: '#', text: 'Link 2' },
    { href: '#', text: 'Link 3' },
    { href: '#', text: 'Link 4' },
  ];

  it('should have unchanged API', () => {
    const props = {
      expansionMenu: false,
      items: dummyItems,
      maxItems: 5,
    };
    const breadcrumbProps: BreadcrumbProps = {
      expansionMenu: false,
      items: dummyItems,
      maxItems: 5,
    };
    expect(breadcrumbProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotBreadcrumbs items={dummyItems} />);
    expect(baseElement).toBeTruthy();
  });

  it('should hide additional breadcrumbs when more than maxItems', () => {
    render(<DotBreadcrumbs items={dummyItemsNoOnClick} maxItems={2} />);
    const links = screen.getAllByRole('link');

    expect(links.length).toEqual(2);
  });

  it('should show expansion menu on ... click when more than maxItems and expansionMenu is true', () => {
    render(
      <DotBreadcrumbs
        items={dummyItemsNoOnClick}
        expansionMenu={true}
        maxItems={2}
      />
    );
    waitFor(() => {
      expect(screen.getByText('Link 2')).not.toBeVisible();
    });
    const expandButton = screen.getByRole('button');
    userEvent.click(expandButton);
    waitFor(() => {
      expect(screen.getByText('Link 2')).toBeVisible();
    });
  });

  it('should call onClick if one is passed down as a prop', () => {
    render(<DotBreadcrumbs items={dummyItems} />);

    userEvent.click(screen.getByText('Link 2'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
