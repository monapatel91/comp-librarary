import React, { useEffect, useRef, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { LinkUnderline } from '../link/Link';
import { DotMenu } from '../menu/Menu';
import {
  rootBreadcrumbsClassName,
  rootClassName,
  StyledBreadcrumbs,
} from './Breadcrumbs.styles';
import { compareWidth } from '../compareSize';
import {
  addListenersToMenu,
  BreadcrumbItemRefs,
  getExpandElement,
  getItemsAfterCollapse,
  getMaxItems,
  getMenuItems,
  mapBreadcrumbItems,
  removeListenersFromMenu,
} from './utils/helpers';
import { useBreadcrumbsObserver } from './utils/useBreadcrumbsObserver';
import { Breadcrumbs } from '@material-ui/core';

export type BreadcrumbItem = {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
  /** link the breadcrumb goes to */
  href?: string;
  // Using React.MouseEvent here rather than importing MouseEvent from 'react'
  // because component is also using the native MouseEvent in clickListener.
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** text displayed */
  text: string;
  /** determines if and when the underline will be shown */
  underline?: LinkUnderline;
};

export interface BreadcrumbProps extends CommonProps {
  /** determines if the menu expands on click */
  expansionMenu?: boolean;
  /** array of breadcrumb items to display */
  items: Array<BreadcrumbItem>;
  /** determines the maximum number of items to display */
  maxItems?: number;
  /** minimum width before `maxItems` will be adjusted */
  minWidth?: number;
}

export const DotBreadcrumbs = ({
  className,
  'data-testid': dataTestId,
  expansionMenu = false,
  items,
  maxItems,
  minWidth,
}: BreadcrumbProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const wrapperRef = useRef();

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [adjustMaxItems, setAdjustMaxItems] = useState(false);

  const [{ breadcrumbRef, firstItemRef, lastItemRef }, maxVisibleItems] =
    useBreadcrumbsObserver(items, maxItems);

  const itemsAfterCollapse = getItemsAfterCollapse(
    adjustMaxItems,
    maxVisibleItems,
    maxItems
  );

  const menuItems =
    items.length > maxVisibleItems
      ? getMenuItems(items, itemsAfterCollapse)
      : [];

  const breadcrumbItemRefs: BreadcrumbItemRefs = {
    firstItemRef,
    lastItemRef,
  };

  const clickListener = (event: MouseEvent | KeyboardEvent) => {
    if (event instanceof KeyboardEvent && event.key !== 'Enter') return;
    event.stopPropagation();
    setMenuOpen((currentMenuOpen) => {
      return !currentMenuOpen;
    });
  };

  const onMenuLeave = (_event: React.KeyboardEvent | React.MouseEvent) => {
    setMenuOpen(false);
  };

  /* Build and connect expansion menu if 'expansionMenu' is set to true */
  useEffect(() => {
    if (!expansionMenu || !breadcrumbRef || !breadcrumbRef.current) return;
    const expandElement = getExpandElement(breadcrumbRef.current);
    if (expandElement) {
      setAnchorEl(expandElement);
      addListenersToMenu(expandElement, clickListener);
      return () => removeListenersFromMenu(expandElement, clickListener);
    }
  }, [expansionMenu, maxVisibleItems, adjustMaxItems]);

  useEffect(() => {
    if (maxItems && breadcrumbRef?.current && wrapperRef?.current) {
      setAdjustMaxItems(
        compareWidth(wrapperRef.current, breadcrumbRef.current)
      );
    }
  }, [maxItems, breadcrumbRef?.current, wrapperRef?.current]);

  return (
    <StyledBreadcrumbs
      className={rootClasses}
      data-testid={dataTestId && `${dataTestId}-wrapper`}
      ref={wrapperRef}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        classes={{
          root: rootBreadcrumbsClassName,
          ol: 'dot-ol',
          li: 'dot-li',
        }}
        data-testid={dataTestId}
        itemsAfterCollapse={itemsAfterCollapse}
        maxItems={getMaxItems(adjustMaxItems, maxVisibleItems, maxItems)}
        ref={breadcrumbRef}
        separator={<DotIcon iconId="chevron-right" className="separator" />}
        style={{ width: minWidth }}
      >
        {mapBreadcrumbItems(items, breadcrumbItemRefs, itemsAfterCollapse)}
      </Breadcrumbs>
      <DotMenu
        anchorEl={anchorEl}
        className="dot-breadcrumbs-menu"
        disablePortal={true}
        id="expand-menu"
        menuItems={menuItems}
        menuPlacement="bottom-start"
        onLeave={onMenuLeave}
        open={menuOpen}
      />
    </StyledBreadcrumbs>
  );
};
