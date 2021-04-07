import React, { ReactNode } from 'react';
import { CardHeader } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

type TitleSize = 'small' | 'medium' | 'large';
type SubheaderSize = 'small' | 'large';

export interface CardHeaderProps extends CommonProps {
  /** Card header action */
  action?: ReactNode;
  /** Card header avatar */
  avatar?: ReactNode;
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
  action,
  avatar,
  className,
  'data-testid': dataTestId,
  subheader,
  subheaderSize = 'large',
  title,
  titleSize = 'large',
}: CardHeaderProps) => {
  const rootClasses = useStylesWithRootClass('dot-card-header', className);
  const titleVariant: 'h4' | 'h3' | 'h2' =
    titleSize === 'small' ? 'h4' : titleSize === 'medium' ? 'h3' : 'h2';
  const titleTypographyProps = { variant: titleVariant };
  const subheaderVariant: 'body2' | 'body1' =
    subheaderSize === 'small' ? 'body2' : 'body1';
  const subheaderTypographyProps = { variant: subheaderVariant };
  return (
    <CardHeader
      action={action}
      avatar={avatar}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      subheader={subheader}
      subheaderTypographyProps={subheaderTypographyProps}
      title={title}
      titleTypographyProps={titleTypographyProps}
    />
  );
};
