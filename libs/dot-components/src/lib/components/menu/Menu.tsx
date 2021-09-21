import React, { KeyboardEvent, MouseEvent, ReactNode } from 'react';
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
import { renderActionItemButton } from './helper';

const MENU_ITEM_HEIGHT = 31;
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

export interface ActionItem {
  icon: ReactNode;
  onClick: () => void;
  text: string;
}

export interface MenuProps extends CommonProps {
  /** Action button as the last element on the menu **/
  actionItem?: ActionItem;
  /** Element that menu is attached to */
  anchorEl?: Element;
  /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
  disablePortal?: boolean;
  /** Unique ID that ties a particular menu to a specific element */
  id: string;
  /* Maximum number of visible menu items */
  maxVisibleItems?: number;
  /** Array of items to be displayed inside the menu */
  menuItems: Array<MenuItemProps>;
  /** Determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If true, the menu is open. */
  open?: boolean;
  /** Event callback when leaving menu via tab or clicking away */
  onLeave?: (event: KeyboardEvent | MouseEvent) => void;
  /** Callback when menu item is selected */
  onSelect?: (
    event: MouseEvent | KeyboardEvent,
    menuId: string,
    itemKey: string
  ) => void;
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
  actionItem,
  anchorEl,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  disablePortal,
  id,
  maxVisibleItems = DEFAULT_MAX_VISIBLE_ITEMS,
  menuItems = [],
  menuPlacement = 'bottom',
  onLeave,
  onSelect,
  open = false,
}: MenuProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

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

  const calculateMaxHeight = (): number | undefined => {
    let visibleItems = maxVisibleItems;
    if (!maxVisibleItems || maxVisibleItems <= 0)
      return DEFAULT_MAX_VISIBLE_ITEMS * MENU_ITEM_HEIGHT;
    if (maxVisibleItems > menuItems.length) {
      visibleItems = menuItems.length;
    }
    return visibleItems * MENU_ITEM_HEIGHT;
  };

  const renderActionItem = (menuActionItem: ActionItem): ReactNode => (
    <div className="action-item">{renderActionItemButton(menuActionItem)}</div>
  );

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
              <>
                <MenuList
                  autoFocusItem={open}
                  className="dot-ul"
                  dense={true}
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
                        onClick={(event) => handleSelect(event, item.key)}
                        key={index}
                      >
                        {item.children}
                      </MenuItem>
                    );
                  })}
                </MenuList>
                {actionItem && renderActionItem(actionItem)}
              </>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </StyledPopper>
  );
};
