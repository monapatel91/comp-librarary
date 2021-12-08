import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { DotLink, LinkUnderline } from '../link/Link';
import { DotMenu } from '../menu/Menu';
import { rootClassName, StyledBreadcrumbs } from './Breadcrumbs.styles';
import { compareWidth } from '../compareSize';
import {
  checkIfFirstItemAfterCollapse,
  getItemsAfterCollapse,
  getMaxItems,
} from './utils/helpers';
import { useBreadcrumbsObserver } from './utils/useBreadcrumbsObserver';

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

  const clickListener = (event: MouseEvent) => {
    event.stopPropagation();
    setMenuOpen((currentMenuOpen) => {
      return !currentMenuOpen;
    });
  };

  const getExpandElement = () => {
    const elements = document.getElementsByClassName('MuiBreadcrumbs-ol');
    return elements.length === 1
      ? elements[0].getElementsByClassName('MuiButtonBase-root')[0]
      : null;
  };

  const getMenuItems = () => {
    return items.slice(1, items.length - 2).map((item, index) => {
      const itemChildren = (
        <DotLink
          ariaLabel={item.ariaLabel}
          className="breadcrumb"
          color="inherit"
          href={item.href}
          key={index}
          onClick={item.onClick}
          tabIndex={0}
          underline={item.underline}
        >
          {item.text}
        </DotLink>
      );
      return { children: itemChildren, key: index.toString() };
    });
  };

  const menuItems = items.length > maxVisibleItems ? getMenuItems() : null;

  const onMenuLeave = (_event: KeyboardEvent | React.MouseEvent) => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (expansionMenu) {
      const expandElement = getExpandElement();
      if (expandElement) {
        setAnchorEl(expandElement);
        expandElement.addEventListener('click', clickListener);
        return () => {
          expandElement.removeEventListener('click', clickListener);
        };
      }
    }
  }, []);

  useEffect(() => {
    if (maxItems && breadcrumbRef?.current && wrapperRef?.current) {
      setAdjustMaxItems(
        compareWidth(wrapperRef.current, breadcrumbRef.current)
      );
    }
  }, [maxItems, breadcrumbRef?.current, wrapperRef?.current]);

  const itemsAfterCollapse = getItemsAfterCollapse(
    adjustMaxItems,
    maxVisibleItems,
    maxItems
  );

  return (
    <div ref={wrapperRef} style={{ overflow: 'hidden' }}>
      <StyledBreadcrumbs
        aria-label="breadcrumb"
        classes={{
          root: rootClasses,
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
        {items.map((item: BreadcrumbItem, index: number) => {
          const { ariaLabel, href, onClick, text, underline } = item;
          if (index === items.length - 1) {
            return (
              <span
                aria-label={ariaLabel}
                className="breadcrumb current-page"
                key={index}
                ref={lastItemRef}
              >
                {text}
              </span>
            );
          } else {
            const isFirstItemAfterCollapse = checkIfFirstItemAfterCollapse(
              items,
              itemsAfterCollapse,
              index
            );
            return (
              <div
                key={index}
                ref={isFirstItemAfterCollapse ? firstItemRef : undefined}
              >
                <DotLink
                  ariaLabel={ariaLabel}
                  className="breadcrumb"
                  color="inherit"
                  href={href}
                  onClick={onClick}
                  tabIndex={0}
                  underline={underline}
                >
                  {text}
                </DotLink>
              </div>
            );
          }
        })}
      </StyledBreadcrumbs>
      <DotMenu
        anchorEl={anchorEl}
        id="expand-menu"
        menuItems={menuItems}
        menuPlacement="bottom-start"
        onLeave={onMenuLeave}
        open={menuOpen}
      />
    </div>
  );
};
