import React, { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledBadge } from './Badge.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type BadgeOverlap = 'circle' | 'rectangle' | 'circular' | 'rectangular';

export interface BadgeProps extends CommonProps {
  /** custom color code for the badge */
  badgeColor?: string;
  /** component which will be wrapped with the badge */
  children: ReactNode;
  /** if true, the badge will be completely hidden*/
  invisible?: boolean;
  /** outline shape of the child component */
  overlap?: BadgeOverlap;
}

export const DotBadge = ({
  ariaLabel,
  badgeColor,
  children,
  className,
  'data-testid': dataTestId,
  invisible,
  overlap,
}: BadgeProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledBadge
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      aria-label={ariaLabel}
      badgeColor={badgeColor}
      classes={{ root: rootClasses }}
      color="primary"
      data-testid={dataTestId}
      invisible={invisible}
      overlap={overlap}
      variant="dot"
    >
      {children}
    </StyledBadge>
  );
};
