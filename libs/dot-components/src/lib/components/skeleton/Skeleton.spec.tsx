import React from 'react';
import { render, screen } from '../../testing-utils';
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-skeleton';
    render(<DotSkeleton ariaLabel={ariaLabel} data-testid={dataTestId} />);
    const skeletonElement = screen.getByTestId(dataTestId);
    expect(skeletonElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
