import React, { ElementType, MouseEvent, useState } from 'react';
import {
  Collapse,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { DotLink } from '../link/Link';
import { DotList } from '../list/List';
import { rootClassName, StyledListItem } from './ListItem.styles';

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
  /** Text which is displayed in the list item */
  text?: string;
  /** The tooltip text displayed on hover */
  title?: string;
}

export const DotListItem = ({
  className,
  component = 'li',
  'data-testid': dataTestId,
  divider = false,
  href,
  iconId,
  onClick,
  items = [],
  text,
  title,
}: ListItemProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const textVariant = divider ? 'h5' : 'body1';
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledListItem
        button
        classes={{ root: rootClasses }}
        component={component}
        data-testid={dataTestId}
        divider={divider}
        onClick={handleClick}
      >
        {iconId && (
          <ListItemIcon>
            <DotIcon iconId={iconId} />
          </ListItemIcon>
        )}
        {href ? (
          <Typography variant={textVariant}>
            <DotLink
              color="inherit"
              href={onClick ? '#' : href}
              onClick={(event) => onClick && onClick(event)}
              underline="none"
              title={title}
            >
              {text}
            </DotLink>
          </Typography>
        ) : (
          <ListItemText
            primary={text}
            primaryTypographyProps={{ variant: textVariant }}
          />
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
