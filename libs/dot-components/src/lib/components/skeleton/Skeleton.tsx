import React from 'react';
import { Skeleton } from '@material-ui/lab';
import './Skeleton.scss';
export type SkeletonAnimationType = 'pulse' | 'wave' | false;
export type SkeletonVariantType = 'circle' | 'rect' | 'text';

export interface SkeletonProps {
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
  height,
  width,
  variant,
}: SkeletonProps) => {
  return (
    <Skeleton
      animation={animation}
      className="dot-skeleton"
      height={height}
      width={width}
      variant={variant}
    >
      {children}
    </Skeleton>
  );
};

export default DotSkeleton;
