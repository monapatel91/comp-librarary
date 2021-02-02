import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type SkeletonAnimationType = 'pulse' | 'wave' | false;
export type SkeletonVariantType = 'circle' | 'rect' | 'text';

export interface SkeletonProps extends CommonProps {
  /** type of animation that will displayed on the skeleton */
  animation?: SkeletonAnimationType;
  /** component(s) inside a skeleton will constrain the size/shape */
  children?: JSX.Element[] | JSX.Element;
  /** Determine height of skeleton */
  height?: number | string;
  /** Determine width of skeleton */
  width?: number | string;
  /** Control shape of skeleton 'circle', 'rect', 'text' */
  variant?: SkeletonVariantType;
}

/**
 * @experimental This component is still in development
 */
export const DotSkeleton = ({
  animation = 'wave',
  children,
  className,
  'data-testid': dataTestId,
  height,
  width,
  variant,
}: SkeletonProps) => {
  const rootClasses = useStylesWithRootClass('dot-skeleton', className);
  return (
    <Skeleton
      animation={animation}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      height={height}
      width={width}
      variant={variant}
    >
      {children}
    </Skeleton>
  );
};

export default DotSkeleton;
