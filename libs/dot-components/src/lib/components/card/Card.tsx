import React, { ReactNode } from 'react';
import { Card } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CardProps extends CommonProps {
  children: ReactNode;
}

export const DotCard = ({
  children,
  className,
  'data-testid': dataTestId,
}: CardProps) => {
  const rootClasses = useStylesWithRootClass('dot-card', className);
  return (
    <Card
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      variant="outlined"
    >
      {children}
    </Card>
  );
};
