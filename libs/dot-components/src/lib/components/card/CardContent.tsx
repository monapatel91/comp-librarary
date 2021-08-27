import React, { ReactNode } from 'react';
import { CardContent } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CardContentProps extends CommonProps {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
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
