import React, { ElementType } from 'react';
import { NavigationItemProps } from '../navigation/NavItem';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotListItem } from './ListItem';
import { rootClassName, StyledList } from './List.styles';

export interface ListProps extends CommonProps {
  /** string or JSX element that is displayed inside the toolbar */
  children?: JSX.Element;
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType;
  /** If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. */
  dense?: boolean;
  /** If true, vertical padding will be removed from the list. */
  disablePadding?: boolean;
  /** Array of list items displayed */
  items?: Array<NavigationItemProps>;
}

export const DotList = ({
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
      classes={{ root: rootClasses }}
      component={component}
      data-testid={dataTestId}
      dense={dense}
      disablePadding={disablePadding}
    >
      {items.map((item, index) => (
        <DotListItem
          component={item.component}
          divider={item.divider}
          href={item.href}
          iconId={item.iconId}
          items={item.items}
          key={index}
          title={item.text}
        />
      ))}
      {children}
    </StyledList>
  );
};
