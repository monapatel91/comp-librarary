import { MutableRefObject } from 'react';
import { BreadcrumbItem } from '@digital-ai/dot-components';

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
