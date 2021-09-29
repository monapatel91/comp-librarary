import React, { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledBadge } from './Badge.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type BadgeColor = 'default' | 'error' | 'primary' | 'secondary';
export type BadgeOverlap = 'circle' | 'rectangle' | 'circular' | 'rectangular';

export interface DotBadgeProps extends CommonProps {
  badgeColor?: string;
  children?: ReactNode;
  color?: BadgeColor;
  invisible?: boolean;
  overlap?: BadgeOverlap;
}

export function DotBadge({
  ariaLabel,
  badgeColor = '#33d389',
  children,
  className,
  color,
  'data-testid': dataTestId,
  invisible,
  overlap,
}: DotBadgeProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledBadge
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      invisible={invisible}
      overlap={overlap}
      variant="dot"
    >
      {children}
    </StyledBadge>
  );
}
