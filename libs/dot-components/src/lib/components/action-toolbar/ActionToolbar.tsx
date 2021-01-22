import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import styled, { css } from 'styled-components';

export type DotActionBarVarient = 'regular' | 'dense';

export interface DotActionBarProps extends CommonProps {
  /** string or JSX element that is displayed inside the toolbar */
  children?: string | JSX.Element | JSX.Element[];
  /** DotActionBarVarient dense and regular for toolbar height */
  variant?: DotActionBarVarient;
}

const StyledToolbar = styled(Toolbar)<DotActionBarProps>`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-action-toolbar {
      border-bottom: 1px solid ${theme.palette.grey[100]};
    }
  `}
`;

export function DotActionToolbar({
  children,
  variant = 'dense',
}: DotActionBarProps) {
  const rootClasses = useStylesWithRootClass('dot-action-toolbar');

  return (
    <StyledToolbar className={rootClasses} variant={variant}>
      {children}
    </StyledToolbar>
  );
}

export default DotActionToolbar;
