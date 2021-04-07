import React, { ElementType, ReactNode } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { Typography } from '@material-ui/core';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'srOnly'
  | 'inherit';

export interface TypographyProps extends CommonProps {
  /** The content of the component. */
  children: ReactNode;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** Applies the theme typography styles. */
  variant?: TypographyVariant;
}

export const DotTypography = ({
  className,
  'data-testid': dataTestId,
  children,
  component,
  variant,
}: TypographyProps) => {
  const rootClasses = useStylesWithRootClass('dot-typography', className);

  return (
    <Typography
      classes={{ root: rootClasses }}
      component={component}
      variant={variant}
    >
      {children}
    </Typography>
  );
};
