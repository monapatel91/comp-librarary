import React from 'react';
import { CardHeader } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CardHeaderProps extends CommonProps {
  /** Header of a card */
  title?: string;
  /** Sub header of a card */
  subheader?: string;
}

export const DotCardHeader = ({
  className,
  'data-testid': dataTestId,
  subheader,
  title,
}: CardHeaderProps) => {
  const rootClasses = useStylesWithRootClass('dot-card-header', className);
  return (
    <CardHeader
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      subheader={subheader}
      subheaderTypographyProps={{ variant: 'body2' }}
      title={title}
      titleTypographyProps={{ variant: 'h4' }}
    ></CardHeader>
  );
};
