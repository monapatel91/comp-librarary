import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { DotNavItem, NavigationItemProps } from './NavItem';

describe(' NavItem', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const items = [{ text: 'I am an item' }];
    const props = {
      btnSize: 'small',
      btnType: 'primary',
      direction: 'horizontal',
      iconId: 'home',
      iconBtnSize: 'medium',
      iconClasses: 'icon-class',
      iconPlacement: 'last',
      iconSize: 'small',
      items: items,
      menuDirection: 'vertical',
      navOpen: false,
      onClick: onClick,
      text: 'the item',
      textClasses: 'text-class',
      type: 'link',
      url: 'http://someplace',
    };
    const navItemProps: NavigationItemProps = {
      btnSize: 'small',
      btnType: 'primary',
      direction: 'horizontal',
      iconId: 'home',
      iconBtnSize: 'medium',
      iconClasses: 'icon-class',
      iconPlacement: 'last',
      iconSize: 'small',
      items: items,
      menuDirection: 'vertical',
      navOpen: false,
      onClick: onClick,
      text: 'the item',
      textClasses: 'text-class',
      type: 'link',
      url: 'http://someplace',
    };
    expect(navItemProps).toEqual(props);
  });

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
