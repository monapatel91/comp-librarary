import React from 'react';
import { CardHeader } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

type TitleSize = 'small' | 'medium' | 'large';
type SubheaderSize = 'small' | 'large';

export interface CardHeaderProps extends CommonProps {
  /** Card subheader */
  subheader?: string;
  /** Card subheader size */
  subheaderSize?: SubheaderSize;
  /** Card title */
  title?: string;
  /** Card title size */
  titleSize?: TitleSize;
}

export const DotCardHeader = ({
  className,
  'data-testid': dataTestId,
  subheader,
  subheaderSize = 'large',
  title,
  titleSize = 'large',
}: CardHeaderProps) => {
  const rootClasses = useStylesWithRootClass('dot-card-header', className);
  let titleVariant: 'h4' | 'h3' | 'h2';
  switch (titleSize) {
    case 'small':
      titleVariant = 'h4';
      break;
    case 'medium':
      titleVariant = 'h3';
      break;
    case 'large':
      titleVariant = 'h2';
      break;
  }
  const titleTypographyProps = { variant: titleVariant };
  let subheaderVariant: 'body2' | 'body1';
  switch (subheaderSize) {
    case 'small':
      subheaderVariant = 'body2';
      break;
    case 'large':
      subheaderVariant = 'body1';
      break;
  }
  const subheaderTypographyProps = { variant: subheaderVariant };
  return (
    <CardHeader
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      subheader={subheader}
      subheaderTypographyProps={subheaderTypographyProps}
      title={title}
      titleTypographyProps={titleTypographyProps}
    ></CardHeader>
  );
};
