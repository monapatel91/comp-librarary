import React, { MouseEvent } from 'react';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import './Menu.scss';

export type PopperPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

/* eslint-disable-next-line */
export interface MenuProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  anchor?: any;
  /** Space delimited CSS classes to be attributed to the phase header */
  classes?: string;
  /** Unique ID that ties a particular menu to a specific element */
  id: string;
  /** Array of items to be displayed inside the menu */
  menuItems: Array<MenuItemProps>;
  /** the parent is responsible for controlling the open/close status of the menu */
  onClose: (event: MouseEvent<any>) => void;
  /** Used to determine if the menu is open or not */
  open: boolean;
  /** Determines the placement of the menu */
  menuPlacement?: PopperPlacement;
}

export interface MenuItemProps {
  /** The text displayed on the item */
  text?: string;
}

export function DotMenu({
  anchor,
  classes,
  id,
  menuItems = [],
  onClose,
  open,
  menuPlacement = 'bottom',
}: MenuProps) {
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      onClose(event);
    }
  }

  return (
    <Popper
      anchorEl={anchor}
      disablePortal={true}
      open={open}
      placement={menuPlacement}
      role={undefined}
      transition={true}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper className={classes}>
            <ClickAwayListener onClickAway={onClose}>
              <MenuList
                autoFocusItem={open}
                id={id}
                onKeyDown={handleListKeyDown}
              >
                {menuItems.map((item, index: number) => {
                  return (
                    <MenuItem onClick={onClose} key={index}>
                      {item.text}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default DotMenu;
