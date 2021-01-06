import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

export type DotActionBarVarient = 'regular' | 'dense';

const styles: (theme: Theme) => StyleRules<string> = (theme) =>
  createStyles({
    root: {
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
    },
  });

export interface DotActionBarProps {
  /** string to add a custom class name to the div content wrapper */
  className?: string;
  /** string or JSX element that is displayed inside the toolbar */
  children?: string | JSX.Element | JSX.Element[];
  /** DotActionBarVarient dense and regular for toolbar height */
  variant?: DotActionBarVarient;
}

export function DotActionToolbar({
  children,
  className,
  variant = 'dense',
}: DotActionBarProps) {
  const classes = useStylesWithRootClass(
    'dot-action-toolbar',
    styles,
    className
  );

  return (
    <Toolbar classes={{ ...classes }} variant={variant}>
      {children}
    </Toolbar>
  );
}

export default DotActionToolbar;
