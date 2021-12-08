import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { getWidthFromRef } from './helpers';
import { BreadcrumbItem } from '../Breadcrumbs';

export const MIN_AVAILABLE_SPACE = 30;
export const ITEMS_SEPARATOR_SPACE = 20;

interface MaxVisibleItems {
  maxVisibleItems: number;
  lastRemovedItemWidth?: number;
}

interface BreadcrumbsObserverRefs {
  breadcrumbRef: MutableRefObject<HTMLElement>;
  firstItemRef: MutableRefObject<HTMLDivElement>;
  lastItemRef: MutableRefObject<HTMLSpanElement>;
}

export const useBreadcrumbsObserver = (
  items: Array<BreadcrumbItem>,
  maxItems?: number
): [BreadcrumbsObserverRefs, number] => {
  const breadcrumbRef = useRef<HTMLElement>();
  const firstItemRef = useRef<HTMLDivElement>();
  const lastItemRef = useRef<HTMLSpanElement>();

  const initialMaxVisibleItems: MaxVisibleItems = {
    maxVisibleItems: (items && Array.isArray(items) && items.length) || 0,
    lastRemovedItemWidth: undefined,
  };

  const [breadcrumbsWidth, setBreadcrumbsWidth] = useState<number>(null);
  const [breadcrumbsSettings, setBreadcrumbsSettings] =
    useState<MaxVisibleItems>(initialMaxVisibleItems);

  /* Observe breadcrumbs width change and store it in state */
  useEffect(() => {
    // Automatic resizing is performed only when 'maxItem' is NOT set
    if (maxItems) return;
    const breadcrumbsObserver = new ResizeObserver((entries) => {
      setBreadcrumbsWidth(entries[0].target.clientWidth);
    });
    breadcrumbsObserver.observe(breadcrumbRef.current);

    return () => {
      breadcrumbRef.current &&
        breadcrumbsObserver.unobserve(breadcrumbRef.current);
    };
  }, [maxItems, breadcrumbRef, setBreadcrumbsWidth]);

  /* Adjust number of visible items after collapse */
  useEffect(() => {
    // Automatic resizing is performed only when 'maxItem' is NOT set
    if (maxItems || !lastItemRef?.current || !breadcrumbsWidth) return;

    // Get width of breadcrumb's last item
    const lastItemWidth = getWidthFromRef(lastItemRef);
    // Get width of breadcrumb's first item after collapse
    // Sometimes first item can also be last item
    const firstItemWidth = getWidthFromRef(firstItemRef) || lastItemWidth;
    // Get left coordinate of the last item
    const lastItemLeftCoord = lastItemRef.current.getBoundingClientRect().left;

    const { lastRemovedItemWidth, maxVisibleItems } = breadcrumbsSettings;

    const availableSpace = breadcrumbsWidth - lastItemLeftCoord;
    const hasHiddenItems = maxVisibleItems < items.length - 1;
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
    breadcrumbsWidth,
    lastItemRef?.current,
    firstItemRef?.current,
    breadcrumbsSettings,
  ]);

  return [
    { breadcrumbRef, firstItemRef, lastItemRef },
    breadcrumbsSettings.maxVisibleItems,
  ];
};
