import React from 'react';
import { CardContent } from '@material-ui/core';
import { CommonProps } from '../CommonProps';

export interface CardContentProps extends CommonProps {
  children: JSX.Element | string;
  /** Space delimited CSS classes to be attributed to the CardContent. */
  classes?: string;
}

/**
 * @experimental This component is still in development
 */
export const DotCardContent = ({
  children,
  className,
  'data-testid': dataTestId,
}: CardContentProps) => {
  return (
    <CardContent classes={{ root: className }} data-testid={dataTestId}>
      {children}
    </CardContent>
  );
};
