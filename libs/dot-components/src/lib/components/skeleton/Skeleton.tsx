import React, { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledSkeleton } from './Skeleton.styles';

export type SkeletonVariantType = 'circular' | 'rectangular' | 'text';

export interface SkeletonProps extends CommonProps {
  /** component(s) inside a skeleton will constrain the size/shape */
  children?: ReactNode;
  /** Determine height of skeleton */
  height?: number | string;
  /** Control shape of skeleton */
  variant?: SkeletonVariantType;
  /** Determine width of skeleton */
  width?: number | string;
}

export const DotSkeleton = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  height,
  width,
  variant,
}: SkeletonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledSkeleton
      animation="wave"
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      height={height}
      variant={variant}
      width={width}
    >
      {children}
    </StyledSkeleton>
  );
};
