import React, {
  ElementType,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { listItemRootClass } from './List.styles';
import { DotIcon } from '../icon/Icon';
import { DotLink, LinkTarget } from '../link/Link';
import { DotTooltip } from '../tooltip/Tooltip';
import { DotTypography } from '../typography/Typography';
import { getChevronIcon } from './utils/helpers';
import { CommonProps } from '../CommonProps';
import { PopperPlacement } from '../menu/Menu';
import { NestedList, NestedListType } from './NestedList';
import { listItemLinkClassName, StyledListItem } from './ListItem.styles';

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
  /** DEPRECATED, DO NOT USE */
  index?: number;
  /* If true, it will be marked as item which has nested list opened  */
  isOpened?: boolean;
  /** If provided, the menu item will display a nested list */
  items?: Array<ListItemProps>;
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
  index,
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
    // deprecation warnings
    if (title) {
      console.warn(
        'The use of `title` is deprecated and will be removed in the next major release, please use `tooltip` instead.'
      );
    }
    if (index) {
      console.warn(
        'The use of `index` is deprecated and will be removed in the next major release.'
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

  const renderListItemText = (): ReactNode =>
    primaryText && secondaryText ? (
      <ListItemText primary={primaryText} secondary={secondaryText} />
    ) : (
      <DotTypography variant="body1">{text}</DotTypography>
    );

  const renderListItemEndIcon = (): ReactNode =>
    hasChildren ? (
      <DotLink
        color="inherit"
        data-testid={`${dataTestId}-link`}
        onClick={toggleOpen}
        underline="none"
      >
        <DotIcon
          className="toggle-display"
          iconId={getChevronIcon(nestedListType, isOpened)}
        />
      </DotLink>
    ) : (
      endIconId && endIcon
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
            {renderListItemText()}
          </span>
          {renderListItemEndIcon()}
        </StyledListItem>
      </DotTooltip>
      {hasChildren && (
        <NestedList
          anchorEl={anchorEl}
          ariaLabel="nested list"
          items={items}
          menuPlacement={menuPlacement}
          nestedDrawerLeftSpacing={nestedDrawerLeftSpacing}
          onMenuLeave={handleMenuLeave}
          open={isOpened}
          type={nestedListType}
        />
      )}
    </>
  );
};
