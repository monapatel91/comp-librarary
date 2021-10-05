import React, {
  ElementType,
  MouseEvent,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react';
import {
  Collapse,
  Divider,
  ListItemIcon,
  ListSubheader,
} from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotDrawer } from '../drawer/Drawer';
import { DotIcon } from '../icon/Icon';
import { DotLink } from '../link/Link';
import { DotMenu, PopperPlacement } from '../menu/Menu';
import {
  flyoutItemLinkClassName,
  flyoutListItemClassName,
  listItemLinkClassName,
  listItemRootClass,
  nestedDrawerClassName,
  nestedListClassName,
  rootClassName,
  StyledList,
  StyledListItem,
} from './List.styles';
import { CreateUUID } from '../createUUID';
import { DotTypography } from '../typography/Typography';

export type NestedListType = 'drawer' | 'expandable' | 'menu';

export interface NestedListProps extends CommonProps {
  /** Element that menu is attached to */
  anchorEl?: Element;
  /** Array of list items displayed */
  items: Array<ListItemProps>;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If nested type is 'drawer', determines the width of the left spacing */
  nestedDrawerSpacing?: number;
  /** Event callback when leaving menu via tab or clicking away */
  onMenuLeave?: (event: KeyboardEvent | MouseEvent) => void;
  /** if true the nested list is visible */
  open: boolean;
  /** Index of the parent list item */
  parentItemIndex?: number;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  type?: NestedListType;
}

export interface ListProps extends CommonProps {
  /** string or JSX element that is displayed inside the list */
  children?: ReactNode;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. */
  dense?: boolean;
  /** If true, vertical padding will be removed from the list. */
  disablePadding?: boolean;
  /** Array of list items displayed */
  items?: Array<ListItemProps>;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If nested type is 'drawer', determines the width of the left spacing */
  nestedDrawerSpacing?: number;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
}

export interface ListItemProps extends CommonProps {
  /** string or JSX element that is displayed inside the list */
  child?: ReactNode;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** If true, a 1px light border is added to the bottom of the list item. */
  divider?: boolean;
  /** If provided, the icon ID which is displayed at the end of the list item */
  endIconId?: string;
  /** If provided, the list item will be rendered as a link */
  href?: string;
  /** List item index */
  index?: number;
  /** If provided, the menu item will display a nested list */
  items?: Array<ListItemProps>;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If nested type is 'drawer', determines the width of the left spacing */
  nestedDrawerSpacing?: number;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** Selected list item */
  selected?: boolean;
  /** If provided, the icon ID which is displayed on the front of the list item */
  startIconId?: string;
  /** Text which is displayed in the list item */
  text?: string;
  /** The tooltip text displayed on hover */
  title?: string;
}

const NestedList = ({
  ariaLabel,
  anchorEl,
  items,
  menuPlacement,
  nestedDrawerSpacing,
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
        />
      </Collapse>
    );
  }

  if (type === 'menu') {
    const menuItems = items.map((item, index) => {
      const { href, startIconId, onClick, title, text } = item;
      const startIcon = <DotIcon iconId={startIconId} title={title} />;
      return {
        children: (
          <StyledListItem
            className={flyoutItemClasses}
            component={href && !onClick ? 'a' : null}
            href={onClick ? null : href}
            onClick={onClick}
          >
            <span className={flyoutSpanClasses}>
              {startIconId && startIcon}
              <DotTypography variant="body1">{text}</DotTypography>
            </span>
          </StyledListItem>
        ),
        classes: '',
        key: String(index),
      };
    });

    return (
      <DotMenu
        ariaLabel={ariaLabel}
        anchorEl={anchorEl}
        className={`dot-flyout-menu dot-flyout-menu-${parentItemIndex}`}
        id={CreateUUID()}
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
        anchor="left"
        className={nestedDrawerClassName}
        open={open}
        PaperProps={{ style: { left: `${nestedDrawerSpacing}px` } }}
        variant="persistent"
      >
        <DotList
          ariaLabel={ariaLabel}
          className={nestedListClassName}
          component="div"
          disablePadding={true}
          items={items}
        />
      </DotDrawer>
    );
  }
};

export const DotList = ({
  ariaLabel,
  children,
  className,
  component = 'ul',
  'data-testid': dataTestId,
  dense = false,
  disablePadding = false,
  items = [],
  menuPlacement = 'right-start',
  nestedDrawerSpacing,
  nestedListType = 'expandable',
}: ListProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledList
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      component={component}
      data-testid={dataTestId}
      dense={dense}
      disablePadding={disablePadding}
    >
      {items.map((item, index) =>
        item.child ? (
          item.child
        ) : item.divider ? (
          !item.text ? (
            <Divider key={index} />
          ) : (
            <ListSubheader disableSticky key={index}>
              <DotTypography variant="subtitle2">{item.text}</DotTypography>
            </ListSubheader>
          )
        ) : (
          <DotListItem
            component={item.component}
            data-testid={`${dataTestId}-item`}
            divider={item.divider}
            endIconId={item.endIconId}
            href={item.href}
            index={index}
            items={item.items}
            onClick={item.onClick}
            key={index}
            menuPlacement={menuPlacement}
            nestedDrawerSpacing={nestedDrawerSpacing}
            nestedListType={nestedListType}
            selected={item.selected}
            startIconId={item.startIconId}
            text={item.text}
            title={item.title}
          />
        )
      )}
      {children}
    </StyledList>
  );
};

export const DotListItem = ({
  ariaLabel,
  className,
  component = 'li',
  'data-testid': dataTestId,
  divider = false,
  endIconId,
  href,
  index,
  onClick,
  items = [],
  menuPlacement,
  nestedDrawerSpacing,
  nestedListType,
  selected,
  startIconId,
  text,
  title,
}: ListItemProps) => {
  const textVariant = divider ? 'h5' : 'body1';
  const isFlyout = nestedListType === 'menu' && items.length > 0;
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [open, setOpen] = useState(false);
  const rootClasses = useStylesWithRootClass(
    listItemRootClass,
    className,
    open && 'open'
  );

  const toggleOpen = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();

    // TODO: Find way to refactor flyout menus so that this is no longer necessary.
    let toggle = true;
    const flyoutMenus = document.getElementsByClassName('dot-flyout-menu');
    Array.from(flyoutMenus as HTMLCollectionOf<HTMLElement>).forEach(
      (flyoutMenu) => {
        if (flyoutMenu.classList.contains(`dot-flyout-menu-${index}`)) {
          if (open && flyoutMenu.style.display === 'none') {
            flyoutMenu.style.display = 'inherit';
            toggle = false;
          }
        } else {
          flyoutMenu.style.display = 'none';
        }
      }
    );

    setAnchorEl(event.currentTarget);
    if (toggle) {
      setOpen(!open);
    }
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (onClick) {
      event.stopPropagation();
      onClick(event);
    } else if (component === 'li') {
      toggleOpen(event);
    }
  };

  const handleMenuLeave = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const startIcon = (
    <ListItemIcon>
      <DotIcon iconId={startIconId} title={title} />
    </ListItemIcon>
  );

  const endIcon = (
    <ListItemIcon>
      <DotIcon iconId={endIconId} />
    </ListItemIcon>
  );

  return (
    <>
      <StyledListItem
        aria-label={ariaLabel}
        button
        classes={{ root: rootClasses }}
        component={href && !onClick ? 'a' : component}
        data-testid={dataTestId}
        divider={divider}
        href={onClick ? null : href}
        onClick={onClick || !href ? handleClick : null}
        selected={isFlyout ? open : selected}
        title={title}
      >
        <span className={listItemLinkClassName}>
          {startIconId && startIcon}
          <DotTypography variant={textVariant}>{text}</DotTypography>
        </span>
        {items.length > 0 ? (
          <DotLink color="inherit" onClick={toggleOpen} underline="none">
            <DotIcon
              className="toggle-display"
              iconId={
                nestedListType === 'menu' || nestedListType === 'drawer'
                  ? 'chevron-right'
                  : open
                  ? 'chevron-up'
                  : 'chevron-down'
              }
            />
          </DotLink>
        ) : (
          endIconId && endIcon
        )}
      </StyledListItem>
      {items.length > 0 && (
        <NestedList
          ariaLabel="nested list"
          anchorEl={anchorEl}
          items={items}
          nestedDrawerSpacing={nestedDrawerSpacing}
          menuPlacement={menuPlacement}
          onMenuLeave={handleMenuLeave}
          open={open}
          parentItemIndex={index}
          type={nestedListType}
        />
      )}
    </>
  );
};
