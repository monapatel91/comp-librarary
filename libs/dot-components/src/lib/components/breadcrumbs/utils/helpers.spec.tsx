import {
  checkIfFirstItemAfterCollapse,
  getExpandElement,
  getInitialMaxVisibleItems,
  getItemsAfterCollapse,
  getMaxItems,
  getMenuItems,
  getWidthFromRef,
} from './helpers';
import { mockBreadcrumbItems } from '../Breadcrumbs.data';

describe('breadcrumbs helper functions', () => {
  describe('getItemsAfterCollapse', () => {
    it("should return undefined when 'maxItems' argument is not defined and 'visibleItemsNumber' is less than 1", () => {
      const result = getItemsAfterCollapse(true, 0);
      expect(result).toBeUndefined();
    });
    it("should return 1 when 'maxItems' argument is not defined and 'visibleItemsNumber' equals 1", () => {
      const result = getItemsAfterCollapse(true, 1);
      expect(result).toBe(1);
    });
    it("should return `visibleItemsNumber - 1` when 'maxItems' argument is not defined and 'visibleItemsNumber' is greater than 1", () => {
      const visibleItemsNumber = 5;
      const result = getItemsAfterCollapse(true, visibleItemsNumber);
      expect(result).toBe(visibleItemsNumber - 1);
    });
    it("should return 2 when 'maxItems' argument is defined and 'adjustMaxItems' is set to false", () => {
      const result = getItemsAfterCollapse(false, 99, 4);
      expect(result).toBe(2);
    });
    it("should return 1 when 'maxItems' argument is defined and 'adjustMaxItems' is set to true", () => {
      const result = getItemsAfterCollapse(true, 99, 4);
      expect(result).toBe(1);
    });
  });
  describe('getMaxItems', () => {
    it("should return undefined when 'maxItems' argument is not set and 'visibleItemsNumber' is less than 1", () => {
      const result = getMaxItems(true, 0);
      expect(result).toBeUndefined();
    });
    it("should return correct value when 'maxItems' argument is not set and 'visibleItemsNumber' is greater than 0", () => {
      const visibleItemsNumber = 5;
      const result = getMaxItems(true, visibleItemsNumber);
      expect(result).toBe(visibleItemsNumber);
    });
    it("should return correct value when 'maxItems' argument is set and 'adjustMaxItems' is set to false", () => {
      const maxItems = 6;
      const result = getMaxItems(false, 99, maxItems);
      expect(result).toBe(maxItems);
    });
    it("should return 2 when 'maxItems' argument is set and 'adjustMaxItems' is set to true", () => {
      const result = getMaxItems(true, 99, 4);
      expect(result).toBe(2);
    });
  });

  describe('getWidthFromRef', () => {
    it('should return undefined if ref is undefined', () => {
      const refMock = undefined as never;
      const result = getWidthFromRef(refMock);
      expect(result).toBeUndefined();
    });
    it("should return undefined if 'current' prop is not defined", () => {
      const refMock = {} as never;
      const result = getWidthFromRef(refMock);
      expect(result).toBeUndefined();
    });
    it('should return correct value if width is defined', () => {
      const width = 22;
      const refMock = {
        current: {
          getBoundingClientRect: () => {
            return { width };
          },
        },
      } as never;
      const result = getWidthFromRef(refMock);
      expect(result).toBe(width);
    });
  });

  describe('checkIfFirstItemAfterCollapse', () => {
    it('should return false if item is not first item after collapse', () => {
      checkIfFirstItemAfterCollapse(3, mockBreadcrumbItems, 2);
    });

    it('should return true if item is first item after collapse', () => {
      checkIfFirstItemAfterCollapse(2, mockBreadcrumbItems, 2);
    });
  });

  describe('getExpandElement', () => {
    it('should return null when breadcrumbs element cannot be found', () => {
      const breadcrumbsElementMock = document.createElement('ol');
      const result = getExpandElement(breadcrumbsElementMock);
      expect(result).toBeNull();
    });

    it('should return null when multiple breadcrumbs elements are found', () => {
      const createBreadcrumbElementMock = (): Node => {
        const breadcrumbsElementMock = document.createElement('ol');
        breadcrumbsElementMock.classList.add('MuiBreadcrumbs-ol');
        return breadcrumbsElementMock;
      };
      const divElement = document.createElement('div');
      divElement.appendChild(createBreadcrumbElementMock());
      divElement.appendChild(createBreadcrumbElementMock());
      const result = getExpandElement(divElement);
      expect(result).toBeNull();
    });
  });

  describe('getInitialMaxVisibleItems', () => {
    it('should return maxItems when it is number greater than zero', () => {
      const maxItems = 2;
      const result = getInitialMaxVisibleItems(mockBreadcrumbItems, maxItems);
      expect(result).toBe(maxItems);
    });
    it('should return array length when valid array is provided and maxItems is not provided', () => {
      const result = getInitialMaxVisibleItems(mockBreadcrumbItems);
      expect(result).toBe(mockBreadcrumbItems.length);
    });

    it("should return zero when 'items' is empty array and 'maxItems' is not provided", () => {
      const result = getInitialMaxVisibleItems([]);
      expect(result).toBe(0);
    });
    it("should return zero when 'items' is undefined and 'maxItems' is not provided", () => {
      const result = getInitialMaxVisibleItems(undefined);
      expect(result).toBe(0);
    });
  });

  describe('getMenuItems', () => {
    it("should return empty array when 'items' is undefined", () => {
      const result = getMenuItems(undefined as never, 3);
      expect(result).toEqual([]);
    });
    it("should return empty array when 'items' is empty array", () => {
      const result = getMenuItems([], 2);
      expect(result).toEqual([]);
    });
    it("should return empty array when 'itemsAfterCollapse' is equal length of the array", () => {
      const result = getMenuItems([{ text: 'First' }, { text: 'Second' }], 2);
      expect(result).toEqual([]);
    });
    it("should return empty array when 'itemsAfterCollapse' is not a number", () => {
      const result = getMenuItems(mockBreadcrumbItems, 'xxx' as never);
      expect(result).toEqual([]);
    });
    it("should return empty array when 'itemsAfterCollapse' is less than 1", () => {
      const result = getMenuItems(mockBreadcrumbItems, 0);
      expect(result).toEqual([]);
    });
    it('should return empty array when no menu items', () => {
      const result = getMenuItems([{ text: 'First' }, { text: 'Second' }], 1);
      expect(result).toEqual([]);
    });
    it('should return correct number of items when valid arguments are passed in', () => {
      const menuItems = getMenuItems(mockBreadcrumbItems, 1);
      expect(menuItems.length).toEqual(3);
    });
  });
});
