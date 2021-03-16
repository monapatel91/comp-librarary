import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotBreadcrumbs, { BreadcrumbProps, BreadcrumbItem } from './Breadcrumbs';

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
  ];

  it('should have unchanged API', () => {
    const props = {
      items: dummyItems,
      maxItems: 5,
    };
    const breadcrumbProps: BreadcrumbProps = {
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

  it('should call onClick if one is passed down as a prop', () => {
    render(<DotBreadcrumbs items={dummyItems} />);

    userEvent.click(screen.getByText('Link 2'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
