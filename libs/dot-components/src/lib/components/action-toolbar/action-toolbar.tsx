import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, StyleRules } from '@material-ui/core/styles';

import './action-toolbar.scss';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    root: {
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      '& button': {
        margin: `0 ${theme.spacing(1)}px`
      }
    }
  });

/* eslint-disable-next-line */
export interface DotActionBarProps {
  /** string to add a custom class name to the div content wrapper */
  className?: string;
  /** string or JSX element that is displayed inside the toolbar */
  children?: string | JSX.Element | JSX.Element[];
}

export function DotActionToolbar({ children, className }: DotActionBarProps) {

  const classes = useStylesWithRootClass('dot-action-toolbar', styles, className);

  return (
    <Toolbar classes={{ ...classes }} className={classes.content} variant="dense">
      {children}
    </Toolbar>
  );
}

export default DotActionToolbar;
