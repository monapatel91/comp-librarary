import React from 'react';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { DotActionBarProps } from './ActionToolbar.propTypes';
import { rootClassName, StyledToolbar } from './ActionToolbar.styles';

export function DotActionToolbar({
  children,
  variant = 'dense',
}: DotActionBarProps) {
  const rootClasses = useStylesWithRootClass(rootClassName);

  return (
    <StyledToolbar className={rootClasses} variant={variant}>
      {children}
    </StyledToolbar>
  );
}

export default DotActionToolbar;
