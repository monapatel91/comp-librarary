import React, { MutableRefObject, useEffect, useState } from 'react';
import { getInitialMaxVisibleItems, getWidthFromRef } from './helpers';
import {
  ITEMS_SEPARATOR_SPACE,
  MIN_AVAILABLE_SPACE,
} from './useBreadcrumbsObserver';
import { BreadcrumbItem } from '../Breadcrumbs';

export interface MaxVisibleItems {
  maxVisibleItems: number;
  lastRemovedItemWidth?: number;
}

interface BreadcrumbsResizerRefs {
  firstItemRef: MutableRefObject<HTMLDivElement>;
  lastItemRef: MutableRefObject<HTMLSpanElement>;
}

interface BreadcrumbItemsProps {
  items: Array<BreadcrumbItem>;
  maxItems?: number;
}

export const useBreadcrumbsResizer = (
  breadcrumbsRightCoord: number,
  breadcrumbItemsProps: BreadcrumbItemsProps,
  refs: BreadcrumbsResizerRefs
): [MaxVisibleItems] => {
  const { firstItemRef, lastItemRef } = refs;
  const { items, maxItems } = breadcrumbItemsProps;

  const initialMaxVisibleItems: MaxVisibleItems = {
    maxVisibleItems: getInitialMaxVisibleItems(items, maxItems),
    lastRemovedItemWidth: undefined,
  };

  const [breadcrumbsSettings, setBreadcrumbsSettings] =
    useState<MaxVisibleItems>(initialMaxVisibleItems);

  /* Adjust number of visible items after collapse */
  useEffect(() => {
    // Automatic resizing is performed only when 'maxItem' is NOT set
    if (
      maxItems !== undefined ||
      !lastItemRef?.current ||
      !breadcrumbsRightCoord
    )
      return;

    // Get width of breadcrumb's last item
    const lastItemWidth = getWidthFromRef(lastItemRef);
    // Get width of breadcrumb's first item after collapse
    // Sometimes first item can also be last item
    const firstItemWidth = getWidthFromRef(firstItemRef) || lastItemWidth;
    // Get left coordinate of the last item
    const lastItemLeftCoord = lastItemRef.current.getBoundingClientRect().left;

    const { lastRemovedItemWidth, maxVisibleItems } = breadcrumbsSettings;

    const availableSpace = breadcrumbsRightCoord - lastItemLeftCoord;
    const hasHiddenItems = maxVisibleItems < items.length;
    const isLastRemovedItemSuitable =
      lastRemovedItemWidth !== undefined
        ? availableSpace - lastRemovedItemWidth > MIN_AVAILABLE_SPACE
        : false;

    if (availableSpace < MIN_AVAILABLE_SPACE && maxVisibleItems > 2) {
      setBreadcrumbsSettings((prevValue) => ({
        maxVisibleItems: prevValue.maxVisibleItems - 1,
        lastRemovedItemWidth: firstItemWidth + ITEMS_SEPARATOR_SPACE,
      }));
    } else if (
      hasHiddenItems &&
      (lastRemovedItemWidth === undefined || isLastRemovedItemSuitable)
    ) {
      setBreadcrumbsSettings((prevValue) => ({
        maxVisibleItems: prevValue.maxVisibleItems + 1,
        lastRemovedItemWidth: undefined,
      }));
    }
  }, [
    maxItems,
    breadcrumbsRightCoord,
    lastItemRef?.current,
    firstItemRef?.current,
    breadcrumbsSettings,
  ]);

  return [breadcrumbsSettings];
};
