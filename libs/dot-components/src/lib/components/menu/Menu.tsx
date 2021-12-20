import React, { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotProgress } from '../progress/Progress';
import { rootClassName, StyledPopper } from './Menu.styles';

const MENU_ITEM_HEIGHT_NORMAL = 33;
const MENU_ITEM_HEIGHT_DENSE = 28;
const DEFAULT_MAX_VISIBLE_ITEMS = 7;

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

export interface MenuProps extends CommonProps {
  /** Element that menu is attached to */
  anchorEl?: Element;
  /** If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. **/
  dense?: boolean;
  /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
  disablePortal?: boolean;
  /** Unique ID that ties a particular menu to a specific element */
  id: string;
  /** If true, will display a loading indicator in the menu */
  loading?: boolean;
  /** Maximum number of visible menu items */
  maxVisibleItems?: number;
  /** Used to specify height of each menu item when custom component, set to "auto" if no specific height is needed or leave empty for auto calculation based on `maxVisibleItems` */
  menuItemHeight?: number | string;
  /** Array of items to be displayed inside the menu */
  menuItems: Array<MenuItemProps>;
  /** Determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** Event callback when leaving menu via tab or clicking away */
  onLeave?: (event: KeyboardEvent | MouseEvent) => void;
  /** Callback when menu item is selected */
  onSelect?: (
    event: MouseEvent | KeyboardEvent,
    menuId: string,
    itemKey: string
  ) => void;
  /** If true, the menu is open. */
  open?: boolean;
}

export interface MenuItemProps {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
  /** The text displayed on the item */
  children?: ReactNode;
  /** Space delimited CSS classes to be attributed to the menu item */
  classes?: string;
  /** A key that can be used to determine which item was clicked */
  key?: string;
}

export const DotMenu = ({
  anchorEl,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  dense = true,
  disablePortal,
  id,
  loading = false,
  maxVisibleItems = DEFAULT_MAX_VISIBLE_ITEMS,
  menuItemHeight,
  menuItems = [],
  menuPlacement = 'bottom',
  onLeave,
  onSelect,
  open = false,
}: MenuProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    loading ? 'loading' : ''
  );

  const handleSelect = (event: MouseEvent | KeyboardEvent, itemKey: string) => {
    onLeave && onLeave(event);
    onSelect && onSelect(event, id, itemKey);
  };

  const handleListKeyDown = (event: KeyboardEvent<Element>) => {
    if (onLeave && event.key === 'Tab') {
      event.preventDefault();
      onLeave(event);
    }
  };

  const handleClickAway = (event: MouseEvent<never>) => {
    if (onLeave && (!anchorEl || !anchorEl.contains(event.currentTarget))) {
      onLeave(event);
    }
  };

  const calculateItemHeight = (): number | string => {
    const itemHeightType = typeof menuItemHeight;

    if (itemHeightType === 'number' || itemHeightType === 'string') {
      return menuItemHeight;
    } else {
      return dense ? MENU_ITEM_HEIGHT_DENSE : MENU_ITEM_HEIGHT_NORMAL;
    }
  };

  const calculateMaxHeight = (): number | string => {
    let visibleItems = maxVisibleItems;
    const itemHeight = calculateItemHeight();

    // if menuItemHeight is "auto" set maxHeight as same
    if (typeof itemHeight === 'string') {
      return itemHeight;
    }

    if (!maxVisibleItems || maxVisibleItems <= 0) {
      return DEFAULT_MAX_VISIBLE_ITEMS * (itemHeight + 3);
    }

    if (maxVisibleItems > menuItems.length) {
      visibleItems = menuItems.length;
    }

    // + 3 is for bottom margin of menuItem
    return visibleItems * (itemHeight + 3);
  };

  return (
    <StyledPopper
      anchorEl={anchorEl}
      aria-label={ariaLabel}
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
              {loading ? (
                <DotProgress
                  title="Loading Data..."
                  tooltip="Loading Data..."
                  value={20}
                />
              ) : (
                <MenuList
                  autoFocusItem={open}
                  className="dot-ul"
                  data-testid={`${dataTestId}-menu`}
                  dense={dense}
                  id={id}
                  onKeyDown={handleListKeyDown}
                  style={{
                    height: calculateMaxHeight(),
                  }}
                >
                  {menuItems.map((item, index: number) => {
                    return (
                      <MenuItem
                        aria-label={item.ariaLabel}
                        className={`dot-li ${item.classes ? item.classes : ''}`}
                        key={index}
                        onClick={(event) => handleSelect(event, item.key)}
                        style={{ height: calculateItemHeight() }}
                      >
                        {item.children}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              )}
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </StyledPopper>
  );
};
