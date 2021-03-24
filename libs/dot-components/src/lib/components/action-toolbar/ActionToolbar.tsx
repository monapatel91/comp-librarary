import React from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledToolbar } from './ActionToolbar.styles';

export type DotActionBarVarient = 'regular' | 'dense';
export interface DotActionBarProps extends CommonProps {
  /** string or JSX element that is displayed inside the toolbar */
  children?: string | JSX.Element | JSX.Element[];
  /** DotActionBarVarient dense and regular for toolbar height */
  variant?: DotActionBarVarient;
}

export const DotActionToolbar = ({
  children,
  variant = 'dense',
}: DotActionBarProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName);

  return (
    <StyledToolbar className={rootClasses} variant={variant}>
      {children}
    </StyledToolbar>
  );
};
