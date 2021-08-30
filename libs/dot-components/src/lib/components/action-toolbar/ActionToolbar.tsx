import React, { ReactNode } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledToolbar } from './ActionToolbar.styles';

export type DotActionBarVarient = 'regular' | 'dense';
export interface DotActionBarProps extends CommonProps {
  /** string or JSX element that is displayed inside the toolbar */
  children?: ReactNode;
  /** DotActionBarVarient dense and regular for toolbar height */
  variant?: DotActionBarVarient;
}

export const DotActionToolbar = ({
  ariaLabel,
  children,
  'data-testid': dataTestId,
  variant = 'dense',
}: DotActionBarProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName);

  return (
    <StyledToolbar
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      variant={variant}
    >
      {children}
    </StyledToolbar>
  );
};
