import React, { MouseEvent } from 'react';
import { Typography } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledLink } from './Link.styles';

export type LinkColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';
export type LinkUnderline = 'always' | 'hover' | 'none';

export interface LinkProps extends CommonProps {
  /** text for the link. */
  children: JSX.Element | string;
  /** color options available 'initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary' */
  color?: LinkColor;
  /** href for the link. */
  href?: string;
  /** event callback */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** tab order for the link */
  tabIndex?: number;
  /**  underline the link */
  underline?: LinkUnderline;
}

export const DotLink = ({
  children,
  className,
  color = 'primary',
  'data-testid': dataTestId,
  href,
  onClick = null,
  tabIndex = 0,
  underline = 'always',
}: LinkProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledLink
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      href={onClick ? '#' : href}
      onClick={(event) => onClick && onClick(event)}
      tabIndex={tabIndex}
      underline={underline}
    >
      <Typography variant="body1">{children}</Typography>
    </StyledLink>
  );
};

export default DotLink;
