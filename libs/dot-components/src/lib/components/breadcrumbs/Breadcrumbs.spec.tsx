import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { BreadcrumbProps, BreadcrumbItem, DotBreadcrumbs } from './Breadcrumbs';
import { LinkUnderline } from '../link/Link';

describe('Breadcrumbs', () => {
  const onClick = jest.fn();
  const dummyItems: Array<BreadcrumbItem> = [
    { ariaLabel: 'link-1', href: '#', onClick: onClick, text: 'Link 1' },
    { ariaLabel: 'link-2', href: '#', onClick: onClick, text: 'Link 2' },
    { ariaLabel: 'link-3', href: '#', onClick: onClick, text: 'Link 3' },
  ];
  const dummyItemsNoOnClick: Array<BreadcrumbItem> = [
    { href: '#', text: 'Link 1' },
    { href: '#', text: 'Link 2' },
    { href: '#', text: 'Link 3' },
    { href: '#', text: 'Link 4' },
  ];

  const getBreadcrumbItem = (text: string): HTMLElement =>
    screen.getByText(text);

  it('should have unchanged API', () => {
    const props = {
      className: 'test-class',
      'data-testid': 'testid',
      expansionMenu: false,
      items: dummyItems,
      maxItems: 5,
    };
    const breadcrumbProps: BreadcrumbProps = props;
    expect(breadcrumbProps).toEqual(props);

    const iProps = {
      className: 'test-class',
      'data-testid': 'testid',
      href: '/',
      onClick: onClick,
      text: 'hello world',
      underline: 'always' as LinkUnderline,
    };
    const breadcrumbItempProps: BreadcrumbItem = iProps;
    expect(breadcrumbItempProps).toEqual(iProps);
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

  it("should have 'aria-label' attribute with correct value", () => {
    const dataTestId = 'test-breadcrumbs';
    render(<DotBreadcrumbs data-testid={dataTestId} items={dummyItems} />);
    const avatarGroupElement = screen.getByTestId(dataTestId);
    expect(avatarGroupElement).toHaveAttribute('aria-label', 'breadcrumb');
  });

  it("should have 'aria-label' attribute, with correct value, for each breadcrumb link", () => {
    render(<DotBreadcrumbs items={dummyItems} />);
    dummyItems.forEach(({ ariaLabel, text }: BreadcrumbItem) => {
      expect(getBreadcrumbItem(text)).toHaveAttribute('aria-label', ariaLabel);
    });
  });
});
