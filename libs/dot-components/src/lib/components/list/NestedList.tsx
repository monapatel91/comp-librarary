import React, { KeyboardEvent, MouseEvent } from 'react';
import { Collapse } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  listItemRootClass,
  nestedDrawerClassName,
  nestedListClassName,
} from './List.styles';
import { DotDrawer } from '../drawer/Drawer';
import { DotIcon } from '../icon/Icon';
import { DotList } from './List';
import { DotMenu, PopperPlacement } from '../menu/Menu';
import { DotTooltip } from '../tooltip/Tooltip';
import { DotTypography } from '../typography/Typography';
import { flyoutMenuClassName } from '../menu/Menu.styles';
import { CreateUUID } from '../createUUID';
import { CommonProps } from '../CommonProps';
import { ListItemProps } from './ListItem';
import {
  flyoutItemLinkClassName,
  flyoutListItemClassName,
  listItemLinkClassName,
  StyledListItem,
} from './ListItems.styles';

export type NestedListType = 'drawer' | 'expandable' | 'menu';

export interface NestedListProps extends CommonProps {
  /** Element that menu is attached to */
  anchorEl?: Element;
  /** Array of list items displayed */
  items: Array<ListItemProps>;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If nested type is 'drawer', determines the width of the left spacing */
  nestedDrawerLeftSpacing?: number;
  /** Event callback when leaving menu via tab or clicking away */
  onMenuLeave?: (event: KeyboardEvent | MouseEvent) => void;
  /** if true the nested list is visible */
  open: boolean;
  /** Index of the parent list item */
  parentItemIndex?: number;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  type?: NestedListType;
}

export const NestedList = ({
  ariaLabel,
  anchorEl,
  items,
  menuPlacement,
  nestedDrawerLeftSpacing,
  onMenuLeave,
  open,
  parentItemIndex,
  type,
}: NestedListProps) => {
  const flyoutItemClasses = useStylesWithRootClass(
    listItemRootClass,
    flyoutListItemClassName
  );
  const flyoutSpanClasses = useStylesWithRootClass(
    listItemLinkClassName,
    flyoutItemLinkClassName
  );

  if (type === 'expandable') {
    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <DotList
          ariaLabel={ariaLabel}
          className={nestedListClassName}
          component="div"
          disablePadding={true}
          items={items}
          key={parentItemIndex}
        />
      </Collapse>
    );
  }

  if (type === 'menu') {
    const menuItems = items.map((item, index) => {
      const { href, startIconId, target, onClick, title, tooltip, text } = item;
      const startIcon = <DotIcon iconId={startIconId} />;
      return {
        children: (
          <DotTooltip
            key={`${parentItemIndex}-${index}-tooltip`}
            placement="top-start"
            title={tooltip || title}
          >
            <StyledListItem
              className={flyoutItemClasses}
              component={href && !onClick ? 'a' : null}
              href={href}
              key={`${parentItemIndex}-${index}`}
              onClick={onClick}
              target={target}
            >
              <span className={flyoutSpanClasses}>
                {startIconId && startIcon}
                <DotTypography variant="body1">{text}</DotTypography>
              </span>
            </StyledListItem>
          </DotTooltip>
        ),
        classes: '',
        key: String(index),
      };
    });

    return (
      <DotMenu
        anchorEl={anchorEl}
        ariaLabel={ariaLabel}
        className={flyoutMenuClassName}
        id={CreateUUID()}
        key={parentItemIndex}
        menuItemHeight="auto"
        menuItems={menuItems}
        menuPlacement={menuPlacement}
        onLeave={onMenuLeave}
        open={open}
      />
    );
  }

  if (type === 'drawer') {
    return (
      <DotDrawer
        PaperProps={{ style: { left: `${nestedDrawerLeftSpacing}px` } }}
        anchor="left"
        className={nestedDrawerClassName}
        data-testid="nested-drawer"
        open={open}
        variant="persistent"
      >
        <DotList
          ariaLabel={ariaLabel}
          className={nestedListClassName}
          component="div"
          disablePadding={true}
          items={items}
          key={parentItemIndex}
        />
      </DotDrawer>
    );
  }
};
