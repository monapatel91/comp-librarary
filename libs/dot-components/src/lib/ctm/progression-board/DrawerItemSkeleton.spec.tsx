import React from 'react';
import { render, RenderResult, screen } from '../../testing-utils';
import {
  DrawerItemSkeleton,
  DrawerItemSkeletonProps,
} from './DrawerItemSkeleton';

describe('DrawerItemSkeleton', () => {
  const dataTestId = 'test-di-skeleton';

  const componentProps: DrawerItemSkeletonProps = {
    'data-testid': dataTestId,
    displayIconSkeleton: true,
  };

  const getIconSkeleton = (): HTMLElement =>
    screen.queryByTestId(`${dataTestId}-icon-skeleton`);

  const renderComponent = (
    props: DrawerItemSkeletonProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DrawerItemSkeleton {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      displayIconSkeleton: true,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  describe('default render', () => {
    beforeEach(() => renderComponent());

    it('should render avatar skeleton', () => {
      const avatarSkeleton = screen.getByTestId(
        `${dataTestId}-avatar-skeleton`
      );
      expect(avatarSkeleton).toBeVisible();
      expect(avatarSkeleton).toHaveClass('avatar-skeleton');
    });

    it('should render content skeleton', () => {
      const contentSkeleton = screen.getByTestId(
        `${dataTestId}-content-skeleton`
      );
      expect(contentSkeleton).toBeVisible();
      expect(contentSkeleton).toHaveClass('content-skeleton');
    });

    it('should render icon skeleton', () => {
      const iconSkeleton = getIconSkeleton();
      expect(iconSkeleton).toBeVisible();
      expect(iconSkeleton).toHaveClass('icon-skeleton');
    });
  });

  describe('with custom props', () => {
    const props: DrawerItemSkeletonProps = {
      ...componentProps,
      displayIconSkeleton: false,
    };

    beforeEach(() => renderComponent(props));

    it('should NOT render icon skeleton', () => {
      const iconSkeleton = getIconSkeleton();
      expect(iconSkeleton).not.toBeInTheDocument();
    });
  });
});
