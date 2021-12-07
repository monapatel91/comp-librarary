export const getItemsAfterCollapse = (
  adjustMaxItems: boolean,
  maxItems?: number
): number | undefined => {
  // Check if maximum number of items is defined via prop
  if (maxItems) {
    return adjustMaxItems ? 1 : 2;
  }
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
