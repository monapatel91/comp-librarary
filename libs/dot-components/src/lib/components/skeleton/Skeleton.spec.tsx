import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotSkeleton, SkeletonProps } from './Skeleton';

describe('Skeleton', () => {
  it('should have unchanged API', () => {
    const props = {
      children: <div></div>,
      height: 50,
      width: 50,
      variant: 'rectangular',
    };
    const skeletonProps: SkeletonProps = {
      children: <div></div>,
      height: 50,
      width: 50,
      variant: 'rectangular',
    };
    expect(skeletonProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
