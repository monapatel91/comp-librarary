import React from 'react';
import { Card } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CardProps extends CommonProps {
  children: JSX.Element | string;
}

/**
 * @experimental This component is still in development
 */
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
