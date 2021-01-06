import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
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
  buttonContent: JSX.Element | string;
  /** Space delimited CSS classes to be attributed to the phase header */
  classes?: string;
  /** Unique ID that ties a particular menu to a specific element */
  id: string;
  /** Array of items to be displayed inside the menu */
  menuItems: Array<MenuItemProps>;
  /** Determines the placement of the menu */
  menuPlacement?: PopperPlacement;
}

export interface MenuItemProps {
  /** The text displayed on the item */
  text?: string;
}

/**
 * @experimental This component is still in development
 */
export function DotMenu({
  buttonContent,
  classes,
  id,
  menuItems = [],
  menuPlacement = 'bottom',
}: MenuProps) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      handleClose(event);
    }
  }

  return (
    <div className="dot-menu">
      <Button
        ref={anchorRef}
        aria-controls={open ? id : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {buttonContent}
      </Button>
      <Popper
        anchorEl={anchorRef.current}
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
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id={id}
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems.map((item, index: number) => {
                    return (
                      <MenuItem onClick={handleClose} key={index}>
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
    </div>
  );
}

export default DotMenu;
