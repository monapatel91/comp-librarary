import React, { ElementType } from 'react';
import { Divider, ListSubheader, Typography } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotListItem, ListItemProps } from './ListItem';
import { rootClassName, StyledList } from './List.styles';

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
            <ListSubheader key={index}>
              <Typography variant="subtitle2">{item.text}</Typography>
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
            text={item.text}
            title={item.title}
          />
        )
      )}
      {children}
    </StyledList>
  );
};
