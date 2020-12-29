import React, { MouseEvent } from 'react';
import { Drawer } from '@material-ui/core';
import './Drawer.scss';

export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';

export interface DrawerProps {
  /** Side from which the drawer will appear 'bottom', 'left', 'right', 'top' */
  anchor?: DrawerAnchor;
  /** string or JSX element that is displayed inside the drawer */
  children?: string | JSX.Element | JSX.Element[];
  /** space delimited set of classes applied to the root component */
  classes?: string;
  /** Callback fired when the component requests to be closed. */
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true, the drawer is open. */
  open: boolean;
  /** The variant to use 'permanent', 'persistent', 'temporary' */
  variant?: DrawerVariant;
}

export const DotDrawer = ({
  anchor = 'right',
  children,
  classes,
  onClose,
  open,
  variant = 'temporary',
}: DrawerProps) => {
  return (
    <Drawer
      anchor={anchor}
      classes={{ paper: 'dot-drawer-paper' }}
      className={`dot-drawer ${classes}`}
      onClose={(event: MouseEvent) => onClose && onClose(event)}
      open={open}
      variant={variant}
    >
      {children}
    </Drawer>
  );
};

export default DotDrawer;
