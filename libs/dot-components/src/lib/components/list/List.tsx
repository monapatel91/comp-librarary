import React, { ElementType, MouseEvent, ReactNode, useState } from 'react';
import { Divider, ListSubheader } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { PopperPlacement } from '../menu/Menu';
import { rootClassName, StyledList } from './List.styles';
import { DotTypography } from '../typography/Typography';
import { DotListItem, ListItemProps } from './ListItem';
import { NestedListType } from './NestedList';

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

interface DividerProps {
  index: number;
  item: ListItemProps;
}

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
      {items.map((item: ListItemProps, index) => {
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
              index={index}
              item={item}
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
            key={index}
            menuPlacement={menuPlacement}
            nestedDrawerLeftSpacing={nestedDrawerLeftSpacing}
            nestedListType={nestedListType}
            onClick={item.href && !item.onClick ? null : handleListItemClick}
            onMenuLeave={handleMenuLeave}
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
            selected={item.selected}
            startIconId={item.startIconId || 'block'}
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
