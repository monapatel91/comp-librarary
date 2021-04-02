import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledSkeleton } from './Skeleton.styles';

export type SkeletonVariantType = 'circular' | 'rectangular' | 'text';

export interface SkeletonProps extends CommonProps {
  /** component(s) inside a skeleton will constrain the size/shape */
  children?: JSX.Element[] | JSX.Element;
  /** Determine height of skeleton */
  height?: number | string;
  /** Determine width of skeleton */
  width?: number | string;
  /** Control shape of skeleton */
  variant?: SkeletonVariantType;
}

export const DotSkeleton = ({
  children,
  className,
  'data-testid': dataTestId,
  height,
  width,
  variant,
}: SkeletonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  // When we upgrade to Material UI v5 this must be removed!
  const skeletonVariant = variant
    ? variant === 'circular'
      ? 'circle'
      : variant === 'rectangular'
      ? 'rect'
      : variant
    : null;
  return (
    <StyledSkeleton
      animation="wave"
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      height={height}
      width={width}
      variant={skeletonVariant}
    >
      {children}
    </StyledSkeleton>
  );
};
