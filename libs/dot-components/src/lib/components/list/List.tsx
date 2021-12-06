import React, {
  ElementType,
  MouseEvent,
  KeyboardEvent,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {
  Collapse,
  Divider,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotDrawer } from '../drawer/Drawer';
import { DotIcon } from '../icon/Icon';
import { DotLink, LinkTarget } from '../link/Link';
import { DotMenu, PopperPlacement } from '../menu/Menu';
import { flyoutMenuClassName } from '../menu/Menu.styles';
import { DotTooltip } from '../tooltip/Tooltip';
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
  nestedDrawerLeftSpacing?: number;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
  /** Width of list, defaults to 240px */
  width?: number | string;
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
  /** If provided, the menu item will display a nested list */
  items?: Array<ListItemProps>;
  /* If true, it will be marked as item which has nested list opened  */
  isOpened?: boolean;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If nested type is 'drawer', determines the width of the left spacing */
  nestedDrawerLeftSpacing?: number;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** Menu leave event callback */
  onMenuLeave?: () => void;
  /** The main content element */
  primaryText?: string;
  /** The secondary content element */
  secondaryText?: string;
  /** Selected list item */
  selected?: boolean;
  /** If provided, the icon ID which is displayed on the front of the list item */
  startIconId?: string;
  /** where to open the link */
  target?: LinkTarget;
  /** Text which is displayed in the list item */
  text?: string;
  /** DEPRECATED, DO NOT USE */
  title?: string;
  /** Tooltip text displayed on hover */
  tooltip?: string;
}

interface DividerProps {
  item: ListItemProps;
  index: number;
}

const NestedList = ({
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
              target={target}
              onClick={onClick}
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
        ariaLabel={ariaLabel}
        anchorEl={anchorEl}
        className={flyoutMenuClassName}
        id={CreateUUID()}
        menuItemHeight="auto"
        menuItems={menuItems}
        menuPlacement={menuPlacement}
        onLeave={onMenuLeave}
        open={open}
        key={parentItemIndex}
      />
    );
  }

  if (type === 'drawer') {
    return (
      <DotDrawer
        anchor="left"
        className={nestedDrawerClassName}
        data-testid="nested-drawer"
        open={open}
        PaperProps={{ style: { left: `${nestedDrawerLeftSpacing}px` } }}
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

const DotListDivider = ({ item, index }: DividerProps) => {
  if (item.text) {
    return (
      <ListSubheader disableSticky>
        <DotTypography variant="subtitle2">{item.text}</DotTypography>
      </ListSubheader>
    );
  }
  return <Divider aria-hidden={true} data-testid={`divider-${index}`} />;
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
  nestedDrawerLeftSpacing = 240,
  nestedListType = 'expandable',
  width = 240,
}: ListProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const listWidth = typeof width === 'number' ? `${width}px` : width;

  const [listItemIndex, setListItemIndex] = useState<number>(null);

  const updateSelectedListItem = (currentIndex: number): void => {
    currentIndex === listItemIndex
      ? setListItemIndex(null)
      : setListItemIndex(currentIndex);
  };

  return (
    <StyledList
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      component={component}
      data-testid={dataTestId}
      dense={dense}
      disablePadding={disablePadding}
      style={{ width: listWidth }}
    >
      {items.map((item, index) => {
        const handleListItemClick = (e: MouseEvent): void => {
          updateSelectedListItem(index);
          item.onClick?.(e);
        };

        const handleMenuLeave = () => setListItemIndex(null);

        if (item.child) {
          return item.child;
        }
        if (item.divider) {
          return (
            <DotListDivider
              item={item}
              index={index}
              key={`divider-${index}`}
            />
          );
        }
        return (
          <DotListItem
            className={item.className}
            component={item.component}
            data-testid={`${dataTestId}-item-${index}`}
            endIconId={item.endIconId}
            href={item.href}
            isOpened={listItemIndex === index}
            items={item.items}
            onClick={item.href && !item.onClick ? null : handleListItemClick}
            onMenuLeave={handleMenuLeave}
            key={index}
            menuPlacement={menuPlacement}
            nestedDrawerLeftSpacing={nestedDrawerLeftSpacing}
            nestedListType={nestedListType}
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
            selected={item.selected}
            startIconId={item.startIconId}
            target={item.target}
            text={item.text}
            title={item.title}
            tooltip={item.tooltip}
          />
        );
      })}
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
  isOpened,
  onClick,
  onMenuLeave,
  items = [],
  menuPlacement,
  nestedDrawerLeftSpacing,
  nestedListType,
  primaryText,
  secondaryText,
  selected,
  startIconId,
  target,
  text,
  title,
  tooltip,
}: ListItemProps) => {
  const hasChildren = items.length > 0;
  const isFlyout = nestedListType === 'menu' && hasChildren;
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const rootClasses = useStylesWithRootClass(
    listItemRootClass,
    className,
    isOpened ? 'open' : ''
  );

  useEffect(() => {
    // deprecation warning
    if (title) {
      console.warn(
        'The use of `title` is deprecated and will be removed in the next major release, please use `tooltip` instead.'
      );
    }
  }, []);

  const toggleOpen = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (onClick) {
      event.stopPropagation();
      onClick(event);
    }
    if (component === 'li') {
      toggleOpen(event);
    }
  };

  const handleMenuLeave = () => {
    setAnchorEl(null);
    onMenuLeave();
  };

  const getChevronIcon = () => {
    if (nestedListType !== 'expandable') {
      return 'chevron-right';
    }
    if (isOpened) {
      return 'chevron-up';
    }
    return 'chevron-down';
  };

  const startIcon = (
    <ListItemIcon>
      <DotIcon iconId={startIconId} />
    </ListItemIcon>
  );

  const endIcon = (
    <ListItemIcon className="dot-list-item-end-icon">
      <DotIcon iconId={endIconId} />
    </ListItemIcon>
  );

  return (
    <>
      <DotTooltip
        data-testid={`${dataTestId}-tooltip`}
        placement="top-start"
        title={tooltip || title}
      >
        <StyledListItem
          aria-label={ariaLabel}
          button
          classes={{ root: rootClasses }}
          component={href && !onClick ? 'a' : component}
          data-testid={dataTestId}
          divider={divider}
          href={onClick ? null : href}
          onClick={onClick || !href ? handleClick : null}
          selected={isFlyout ? isOpened : selected}
          target={target}
        >
          <span className={listItemLinkClassName}>
            {startIconId && startIcon}
            {primaryText && secondaryText ? (
              <ListItemText primary={primaryText} secondary={secondaryText} />
            ) : (
              <DotTypography variant="body1">{text}</DotTypography>
            )}
          </span>
          {hasChildren ? (
            <DotLink
              color="inherit"
              data-testid={`${dataTestId}-link`}
              onClick={toggleOpen}
              underline="none"
            >
              <DotIcon className="toggle-display" iconId={getChevronIcon()} />
            </DotLink>
          ) : (
            endIconId && endIcon
          )}
        </StyledListItem>
      </DotTooltip>
      {hasChildren && (
        <NestedList
          ariaLabel="nested list"
          anchorEl={anchorEl}
          items={items}
          nestedDrawerLeftSpacing={nestedDrawerLeftSpacing}
          menuPlacement={menuPlacement}
          onMenuLeave={handleMenuLeave}
          open={isOpened}
          type={nestedListType}
        />
      )}
    </>
  );
};
