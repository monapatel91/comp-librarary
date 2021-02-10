import React from 'react';
import { CardHeader } from '@material-ui/core';
import { CommonProps } from '../CommonProps';

export interface CardHeaderProps extends CommonProps {
  /** Header of a card */
  title?: string;
  /** Sub header of a card */
  subheader?: string;
}

/**
 * @experimental This component is still in development
 */
export const DotCardHeader = ({
  className,
  'data-testid': dataTestId,
  subheader,
  title,
}: CardHeaderProps) => {
  return (
    <CardHeader
      classes={{ root: className }}
      data-testid={dataTestId}
      subheader={subheader}
      subheaderTypographyProps={{ variant: 'body2' }}
      title={title}
      titleTypographyProps={{ variant: 'h4' }}
    ></CardHeader>
  );
};
