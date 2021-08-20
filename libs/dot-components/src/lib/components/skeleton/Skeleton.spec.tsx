import React from 'react';
import { render } from '../../testing-utils';
import { DotSkeleton, SkeletonProps, SkeletonVariantType } from './Skeleton';

describe('Skeleton', () => {
  it('should have unchanged API', () => {
    const props = {
      children: <div></div>,
      className: 'test-class',
      'data-testid': 'testid',
      height: 50,
      variant: 'rectangular' as SkeletonVariantType,
      width: 50,
    };
    const skeletonProps: SkeletonProps = props;
    expect(skeletonProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
