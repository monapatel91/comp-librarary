import React, { KeyboardEvent, MouseEvent } from 'react';
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
  /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
  disablePortal?: boolean;
  /** Unique ID that ties a particular menu to a specific element */
  id: string;
  /** Array of items to be displayed inside the menu */
  menuItems: Array<MenuItemProps>;
  /** Determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If true, the menu is open. */
  open?: boolean;
  /** Callback when menu item is selected */
  onSelect?: (event: MouseEvent, menuId: string, itemKey: string) => void;
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
}

export const DotMenu = ({
  anchorEl,
  className,
  'data-testid': dataTestId,
  disablePortal,
  id,
  menuItems = [],
  menuPlacement = 'bottom',
  onLeave,
  onSelect,
  open = false,
}: MenuProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handleSelect = (event, itemKey) => {
    onLeave && onLeave(event);
    onSelect && onSelect(event, id, itemKey);
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
      disablePortal={disablePortal}
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
                className="dot-ul"
                dense={true}
                id={id}
                onKeyDown={handleListKeyDown}
              >
                {menuItems.map((item, index: number) => {
                  return (
                    <MenuItem
                      className={`dot-li ${item.classes ? item.classes : ''}`}
                      onClick={(event) => handleSelect(event, item.key)}
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
};
