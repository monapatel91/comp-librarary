import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { BreadcrumbProps, BreadcrumbItem, DotBreadcrumbs } from './Breadcrumbs';
import { LinkUnderline } from '../link/Link';
import { mockResizeObserver } from '../../../../../testing-utils/src/lib/resize-observer-mock';

describe('Breadcrumbs', () => {
  const onClick = jest.fn();
  const dummyItems: Array<BreadcrumbItem> = [
    { ariaLabel: 'link-1', href: '/', onClick: onClick, text: 'Link 1' },
    { ariaLabel: 'link-2', href: '/', onClick: onClick, text: 'Link 2' },
    { ariaLabel: 'link-3', href: '/', onClick: onClick, text: 'Link 3' },
  ];
  const dummyItemsNoOnClick: Array<BreadcrumbItem> = [
    { ariaLabel: 'link-1', href: '/', text: 'Link 1' },
    { ariaLabel: 'link-2', href: '/', text: 'Link 2' },
    { ariaLabel: 'link-3', href: '/', text: 'Link 3' },
    { ariaLabel: 'link-4', href: '/', text: 'Link 4' },
  ];

  const getBreadcrumbLinks = (): HTMLElement[] => screen.getAllByRole('link');

  const getBreadcrumbItem = (text: string): HTMLElement =>
    screen.getByText(text);

  const getMenuItem = (name: string): HTMLElement =>
    screen.getByRole('link', { name });

  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'breadcrumbs',
      className: 'test-class',
      'data-testid': 'testid',
      expansionMenu: false,
      items: dummyItems,
      maxItems: 5,
      minWidth: 500,
    };
    const breadcrumbProps: BreadcrumbProps = props;
    expect(breadcrumbProps).toEqual(props);

    const iProps = {
      ariaLabel: 'breadcrumb item',
      className: 'test-class',
      'data-testid': 'testid',
      href: '/',
      onClick: onClick,
      text: 'hello world',
      underline: 'always' as LinkUnderline,
    };
    const breadcrumbItemProps: BreadcrumbItem = iProps;
    expect(breadcrumbItemProps).toEqual(iProps);
  });

  beforeAll(() => {
    mockResizeObserver();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotBreadcrumbs items={dummyItems} />);
    expect(baseElement).toBeTruthy();
  });

  it('should hide additional breadcrumbs when more than maxItems', () => {
    render(<DotBreadcrumbs items={dummyItemsNoOnClick} maxItems={2} />);
    const links = getBreadcrumbLinks();
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
    dummyItems.forEach(({ ariaLabel, text }: BreadcrumbItem, index: number) => {
      const breadcrumbItem = getBreadcrumbItem(text);
      expect(breadcrumbItem).toHaveAttribute('aria-label', ariaLabel);
      index === dummyItems.length - 1 &&
        expect(breadcrumbItem).toHaveClass('current-page');
    });
  });

  it("should have 'aria-label' attribute, with correct value, for each breadcrumb link if more than 3 items", () => {
    render(<DotBreadcrumbs items={dummyItemsNoOnClick} maxItems={3} />);
    userEvent.click(screen.getByRole('button'));
    expect(getMenuItem('link-2')).toHaveAttribute('aria-label', 'link-2');
  });

  describe("automatic mode (no 'maxItems' prop set)", () => {
    it('should render all items', () => {
      render(<DotBreadcrumbs items={dummyItemsNoOnClick} />);
      const links = getBreadcrumbLinks();
      expect(links.length).toEqual(3);
      const lastItem = getBreadcrumbItem('Link 4');
      expect(lastItem).toBeVisible();
      expect(lastItem).toHaveClass('breadcrumb', 'current-page');
    });
  });
});
