import React, { MouseEvent } from 'react';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
} from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledPopper } from './Menu.styles';

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
export interface MenuProps extends CommonProps {
  /** Element that menu is attached to */
  anchorEl?: Element;
  /** Unique ID that ties a particular menu to a specific element */
  id: string;
  /** Array of items to be displayed inside the menu */
  menuItems: Array<MenuItemProps>;
  /** Determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If true, the menu is open. */
  open?: boolean;
  /** Event callback when leaving menu via tab or clicking away */
  onLeave?: (event: KeyboardEvent | MouseEvent) => void;
}

export interface MenuItemProps {
  /** The text displayed on the item */
  children?: JSX.Element | string;
  /** Space delimited CSS classes to be attributed to the menu item */
  classes?: string;
  /** A key that can be used to determine which item was clicked */
  key?: string;
  /** Event callback on click */
  onClick?: (event: MouseEvent, menuId: string, menuItemKey: string) => void;
}

export function DotMenu({
  anchorEl,
  className,
  'data-testid': dataTestId,
  id,
  menuItems = [],
  menuPlacement = 'bottom',
  onLeave,
  open = false,
}: MenuProps) {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handleItemClick = (event, item) => {
    item.onClick && item.onClick(event, id, item.key);
  };

  function handleListKeyDown(event) {
    if (onLeave && event.key === 'Tab') {
      event.preventDefault();
      onLeave(event);
    }
  }

  function handleClickAway(event) {
    if (onLeave && (!anchorEl || !anchorEl.contains(event.target))) {
      onLeave(event);
    }
  }

  return (
    <StyledPopper
      anchorEl={anchorEl}
      className={rootClasses}
      data-testid={dataTestId}
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
          <Paper>
            <ClickAwayListener onClickAway={handleClickAway}>
              <MenuList
                autoFocusItem={open}
                dense={true}
                id={id}
                onKeyDown={handleListKeyDown}
              >
                {menuItems.map((item, index: number) => {
                  return (
                    <MenuItem
                      className={item.classes}
                      onClick={(event) => handleItemClick(event, item)}
                      key={index}
                    >
                      {item.children}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </StyledPopper>
  );
}

export default DotMenu;
