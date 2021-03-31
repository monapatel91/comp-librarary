import React, { ElementType, MouseEvent, useState } from 'react';
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
import {
  listItemRootClass,
  rootClassName,
  StyledList,
  StyledListItem,
} from './List.styles';
import { DotTypography } from '../typography/Typography';

export interface ListProps extends CommonProps {
  /** aria-label passed to the list component */
  ariaLabel?: string;
  /** string or JSX element that is displayed inside the toolbar */
  children?: JSX.Element;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. */
  dense?: boolean;
  /** If true, vertical padding will be removed from the list. */
  disablePadding?: boolean;
  /** Array of list items displayed */
  items?: Array<ListItemProps>;
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
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** Selected list item */
  selected?: boolean;
  /** Text which is displayed in the list item */
  text?: string;
  /** The tooltip text displayed on hover */
  title?: string;
}

export const DotList = ({
  ariaLabel,
  children,
  className,
  component = 'ul',
  'data-testid': dataTestId,
  dense = false,
  disablePadding = false,
  items = [],
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
  selected,
  text,
  title,
}: ListItemProps) => {
  const rootClasses = useStylesWithRootClass(listItemRootClass, className);
  const textVariant = divider ? 'h5' : 'body1';
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const startIcon = (
    <ListItemIcon>
      <DotIcon iconId={iconId} />
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
        selected={selected}
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
            iconId={open ? 'chevron-up' : 'chevron-down'}
          />
        )}
      </StyledListItem>
      {items.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <DotList
            className="dot-nested-list"
            component="div"
            disablePadding={true}
            items={items}
          />
        </Collapse>
      )}
    </>
  );
};
