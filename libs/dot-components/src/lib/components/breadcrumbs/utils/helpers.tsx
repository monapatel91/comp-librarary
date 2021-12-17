import React, { MutableRefObject, ReactElement } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
import { DotLink } from '../../link/Link';
import { DotTooltip } from '@digital-ai/dot-components';

export interface BreadcrumbItemRefs {
  firstItemRef: MutableRefObject<HTMLDivElement>;
  lastItemRef: MutableRefObject<HTMLSpanElement>;
}

export interface BreadcrumbItemsConfig {
  isLastItemFullyVisible: boolean;
  itemsAfterCollapse: number;
}

export const getItemsAfterCollapse = (
  adjustMaxItems: boolean,
  visibleItemsNumber: number,
  maxItems?: number
): number | undefined => {
  // Check if maximum number of items is defined via prop
  if (maxItems) {
    return adjustMaxItems ? 1 : 2;
  }

  if (visibleItemsNumber > 1) return visibleItemsNumber - 1;
  if (visibleItemsNumber === 1) return visibleItemsNumber;
  return undefined;
};

export const getMaxItems = (
  adjustMaxItems: boolean,
  visibleItemsNumber: number,
  maxItems?: number
): number | undefined => {
  // Check if maximum number of items is defined via prop
  if (maxItems) {
    return adjustMaxItems ? 2 : maxItems;
  }
  return visibleItemsNumber > 0 ? visibleItemsNumber : undefined;
};

export const getWidthFromRef = <T extends HTMLElement>(
  ref: MutableRefObject<T>
): number | undefined => {
  return ref?.current?.getBoundingClientRect().width;
};

export const checkIfFirstItemAfterCollapse = (
  currentIndex: number,
  items: BreadcrumbItem[],
  itemsAfterCollapse: number
): boolean => currentIndex === items.length - itemsAfterCollapse;

export const getExpandElement = (breadcrumbElement: HTMLElement) => {
  const elements =
    breadcrumbElement.getElementsByClassName('MuiBreadcrumbs-ol');
  if (!elements || elements.length !== 1) return null;
  return elements[0].getElementsByClassName('MuiButtonBase-root')[0];
};

export const getInitialMaxVisibleItems = (
  items: BreadcrumbItem[],
  maxItems?: number
): number => maxItems || (items && Array.isArray(items) && items.length) || 0;

export const getMenuItems = (
  items: BreadcrumbItem[],
  itemsAfterCollapse: number
) => {
  if (
    !items ||
    !items.length ||
    !isFinite(itemsAfterCollapse) ||
    itemsAfterCollapse < 1 ||
    itemsAfterCollapse >= items.length - 1
  )
    return [];
  const sliceEnd = items.length - itemsAfterCollapse;
  const menuItems = items.slice(1, sliceEnd);
  if (!menuItems.length) return [];
  return menuItems.map((item, index) => {
    const itemChildren = (
      <DotLink
        ariaLabel={item.ariaLabel}
        className="breadcrumb"
        color="inherit"
        href={item.href}
        key={index}
        onClick={item.onClick}
        tabIndex={0}
        underline="none"
      >
        {item.text}
      </DotLink>
    );
    return { children: itemChildren, key: index.toString() };
  });
};

export const addListenersToMenu = (
  expandElement: Element,
  eventListener: EventListener
) => {
  expandElement.addEventListener('click', eventListener);
  expandElement.addEventListener('keydown', eventListener);
};

export const removeListenersFromMenu = (
  expandElement: Element,
  eventListener: EventListener
) => {
  expandElement.removeEventListener('click', eventListener);
  expandElement.removeEventListener('keydown', eventListener);
};

export const getLastItemElement = (
  { ariaLabel, text }: BreadcrumbItem,
  lastItemRef: React.MutableRefObject<HTMLSpanElement>,
  index?: number
): ReactElement => {
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
};

export const mapBreadcrumbItems = (
  items: BreadcrumbItem[],
  refs: BreadcrumbItemRefs,
  { isLastItemFullyVisible, itemsAfterCollapse }: BreadcrumbItemsConfig
) => {
  const { firstItemRef, lastItemRef } = refs;
  return items.map((item: BreadcrumbItem, index: number) => {
    const { ariaLabel, href, onClick, text, underline } = item;
    // Check if last element
    if (index === items.length - 1) {
      // Add tooltip if item is not fully visible
      return isLastItemFullyVisible ? (
        getLastItemElement(item, lastItemRef, index)
      ) : (
        <DotTooltip title={text} key={index}>
          {getLastItemElement(item, lastItemRef)}
        </DotTooltip>
      );
    } else {
      const isFirstItemAfterCollapse = checkIfFirstItemAfterCollapse(
        index,
        items,
        itemsAfterCollapse
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
  });
};

export const checkIfLastItemFullyVisible = (
  breadcrumbRef: React.MutableRefObject<HTMLElement>,
  lastItemRef: React.MutableRefObject<HTMLSpanElement>
): boolean => {
  if (!breadcrumbRef?.current || !lastItemRef.current) return false;
  const availableSpace =
    breadcrumbRef?.current.getBoundingClientRect().right -
    lastItemRef.current.getBoundingClientRect().left;
  const lastItemWidth = getWidthFromRef(lastItemRef);
  return lastItemWidth <= availableSpace;
};
