import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
import { useBreadcrumbsResizer } from './useBreadcrumbsResizer';

export const MIN_AVAILABLE_SPACE = 60;
export const ITEMS_SEPARATOR_SPACE = 20;

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

  const [breadcrumbsRightCoord, setBreadcrumbsRightCoord] =
    useState<number>(null);
  const [breadcrumbsSettings] = useBreadcrumbsResizer(
    breadcrumbsRightCoord,
    { items, maxItems },
    { firstItemRef, lastItemRef }
  );

  /* Observe breadcrumbs width change and store it in state */
  useEffect(() => {
    // Automatic resizing is performed only when 'maxItem' is NOT set
    if (maxItems !== undefined) return;
    const breadcrumbsObserver = new ResizeObserver((entries) => {
      setBreadcrumbsRightCoord(entries[0].target.getBoundingClientRect().right);
    });
    breadcrumbsObserver.observe(breadcrumbRef.current);

    return () => {
      breadcrumbRef.current &&
        breadcrumbsObserver.unobserve(breadcrumbRef.current);
    };
  }, [maxItems, breadcrumbRef, setBreadcrumbsRightCoord]);

  return [
    { breadcrumbRef, firstItemRef, lastItemRef },
    breadcrumbsSettings.maxVisibleItems,
  ];
};
