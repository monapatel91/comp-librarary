import { NestedListType } from '../List';

export const getChevronIcon = (
  nestedListType: NestedListType,
  isOpened: boolean
) => {
  if (nestedListType !== 'expandable') {
    return 'chevron-right';
  }
  if (isOpened) {
    return 'chevron-up';
  }
  return 'chevron-down';
};
