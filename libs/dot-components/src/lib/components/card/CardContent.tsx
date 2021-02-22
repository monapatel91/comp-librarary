import React from 'react';
import { CardContent } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CardContentProps extends CommonProps {
  children: JSX.Element | string;
}

export const DotCardContent = ({
  children,
  className,
  'data-testid': dataTestId,
}: CardContentProps) => {
  const rootClasses = useStylesWithRootClass('dot-card-content', className);
  return (
    <CardContent classes={{ root: rootClasses }} data-testid={dataTestId}>
      {children}
    </CardContent>
  );
};
