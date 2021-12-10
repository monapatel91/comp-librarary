import React, { MutableRefObject } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
import { DotLink } from '../../link/Link';

export interface BreadcrumbItemRefs {
  firstItemRef: MutableRefObject<HTMLDivElement>;
  lastItemRef: MutableRefObject<HTMLSpanElement>;
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
  items: BreadcrumbItem[],
  itemsAfterCollapse: number,
  currentIndex: number
): boolean => currentIndex === items.length - itemsAfterCollapse;

export const getExpandElement = (breadcrumbElement: HTMLElement) => {
  const elements =
    breadcrumbElement.getElementsByClassName('MuiBreadcrumbs-ol');
  if (!elements || elements.length !== 1) return null;
  return elements[0].getElementsByClassName('MuiButtonBase-root')[0];
};

export const getMenuItems = (
  items: BreadcrumbItem[],
  itemsAfterCollapse: number
) => {
  return items
    .slice(1, items.length - itemsAfterCollapse)
    .map((item, index) => {
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

export const mapBreadcrumbItems = (
  items: BreadcrumbItem[],
  refs: BreadcrumbItemRefs,
  itemsAfterCollapse: number
) => {
  const { firstItemRef, lastItemRef } = refs;
  return items.map((item: BreadcrumbItem, index: number) => {
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
  });
};
