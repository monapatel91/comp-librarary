import React, { ReactNode } from 'react';
import { CardContent } from '@mui/material';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CardContentProps extends CommonProps {
  /** The content for the CardContent.*/
  children: ReactNode;
}

export const DotCardContent = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
}: CardContentProps) => {
  const rootClasses = useStylesWithRootClass('dot-card-content', className);
  return (
    <CardContent
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
    >
      {children}
    </CardContent>
  );
};
