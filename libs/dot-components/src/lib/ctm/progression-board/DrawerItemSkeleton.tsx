import React, { ReactNode } from 'react';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotSkeleton } from '../../components';
import {
  rootClassName,
  StyledDrawerItemSkeleton,
} from './DrawerItemSkeleton.styles';

export interface DrawerItemSkeletonProps extends CommonProps {
  displayIconSkeleton?: boolean;
}

export const DrawerItemSkeleton = ({
  className,
  'data-testid': dataTestId,
  displayIconSkeleton = false,
}: DrawerItemSkeletonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const renderIconSkeleton = (): ReactNode => (
    <DotSkeleton
      className="icon-skeleton"
      data-testid={`${dataTestId}-icon-skeleton`}
      variant="circular"
    />
  );

  return (
    <StyledDrawerItemSkeleton className={rootClasses} data-testid={dataTestId}>
      <DotSkeleton
        className="avatar-skeleton"
        data-testid={`${dataTestId}-avatar-skeleton`}
        variant="circular"
      />
      <DotSkeleton
        className="content-skeleton"
        data-testid={`${dataTestId}-content-skeleton`}
        variant="text"
      />
      {displayIconSkeleton && renderIconSkeleton()}
    </StyledDrawerItemSkeleton>
  );
};
