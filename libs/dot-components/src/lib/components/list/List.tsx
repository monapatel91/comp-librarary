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
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { DotLink } from '../link/Link';
import { DotMenu, PopperPlacement } from '../menu/Menu';
import {
  listItemRootClass,
  rootClassName,
  StyledList,
  StyledListItem,
} from './List.styles';
import { CreateUUID } from '../createUUID';
import { DotTypography } from '../typography/Typography';

export type NestedListType = 'menu' | 'expandable';

interface NestedListProps extends CommonProps {
  /** Element that menu is attached to */
  anchorEl?: Element;
  /** Array of list items displayed */
  items: Array<ListItemProps>;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** Event callback when leaving menu via tab or clicking away */
  onMenuLeave?: (event: KeyboardEvent | MouseEvent) => void;
  /** if true the nested list is visible */
  open: boolean;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  type?: NestedListType;
}

export interface ListProps extends CommonProps {
  /** aria-label passed to the list component */
  ariaLabel?: string;
  /** string or JSX element that is displayed inside the toolbar */
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
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
}

export interface ListItemProps extends CommonProps {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** If true, a 1px light border is added to the bottom of the list item. */
  divider?: boolean;
  /** If provided, the list item will be rendered as a link */
  href?: string;
  /** If provided, the icon ID which is displayed on the front of the list item */
  iconId?: string;
  /** If provided, the menu item will display a nested list */
  items?: Array<ListItemProps>;
  /** If nested list type is 'menu', determines the placement of the menu */
  menuPlacement?: PopperPlacement;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** Selected list item */
  selected?: boolean;
  /** Text which is displayed in the list item */
  text?: string;
  /** The tooltip text displayed on hover */
  title?: string;
}

const NestedList = ({
  anchorEl,
  items,
  menuPlacement,
  onMenuLeave,
  open,
  type,
}: NestedListProps) => {
  if (type !== 'menu') {
    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <DotList
          className="dot-nested-list"
          component="div"
          disablePadding={true}
          items={items}
        />
      </Collapse>
    );
  } else {
    const menuItems = items.map((item, index) => {
      const { href, onClick, title, text } = item;
      return {
        children: (
          <DotLink href={href} underline="none" onClick={onClick} title={title}>
            <DotTypography variant="body1">{text}</DotTypography>
          </DotLink>
        ),
        classes: '',
        key: String(index),
      };
    });

    return (
      <DotMenu
        anchorEl={anchorEl}
        id={CreateUUID()}
        menuItems={menuItems}
        menuPlacement={menuPlacement}
        onLeave={onMenuLeave}
        open={open}
      />
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
        item.divider ? (
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
            divider={item.divider}
            href={item.href}
            iconId={item.iconId}
            items={item.items}
            onClick={item.onClick}
            key={index}
            menuPlacement={menuPlacement}
            nestedListType={nestedListType}
            selected={item.selected}
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
  className,
  component = 'li',
  'data-testid': dataTestId,
  divider = false,
  href,
  iconId,
  onClick,
  items = [],
  menuPlacement,
  nestedListType,
  selected,
  text,
  title,
}: ListItemProps) => {
  const rootClasses = useStylesWithRootClass(listItemRootClass, className);
  const textVariant = divider ? 'h5' : 'body1';
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [open, setOpen] = useState(false);
  const [isSelected, setSelected] = useState(selected);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
    setSelected(!isSelected);
  };

  const handleMenuLeave = () => {
    setAnchorEl(null);
    setOpen(false);
    setSelected(false);
  };

  const startIcon = (
    <ListItemIcon>
      <DotIcon iconId={iconId} title={title} />
    </ListItemIcon>
  );

  return (
    <>
      <StyledListItem
        button
        classes={{ root: rootClasses }}
        component={component}
        data-testid={dataTestId}
        divider={divider}
        onClick={handleClick}
        selected={isSelected}
        title={title}
      >
        {href || onClick ? (
          <DotLink
            color="inherit"
            href={href}
            onClick={onClick}
            underline="none"
            title={title}
          >
            {iconId && startIcon}
            <DotTypography variant={textVariant}>{text}</DotTypography>
          </DotLink>
        ) : (
          <>
            {iconId && startIcon}
            <ListItemText
              primary={text}
              primaryTypographyProps={{ variant: textVariant }}
            />
          </>
        )}
        {items.length > 0 && (
          <DotIcon
            className="toggle-display"
            iconId={
              nestedListType === 'menu'
                ? 'chevron-right'
                : open
                ? 'chevron-up'
                : 'chevron-down'
            }
          />
        )}
      </StyledListItem>
      {items.length > 0 && (
        <NestedList
          anchorEl={anchorEl}
          items={items}
          menuPlacement={menuPlacement}
          onMenuLeave={handleMenuLeave}
          open={open}
          type={nestedListType}
        />
      )}
    </>
  );
};
