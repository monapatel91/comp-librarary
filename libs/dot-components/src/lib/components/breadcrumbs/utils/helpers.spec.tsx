import {
  checkIfFirstItemAfterCollapse,
  getExpandElement,
  getItemsAfterCollapse,
  getMaxItems,
  getWidthFromRef,
} from './helpers';
import { BreadcrumbItem } from '@digital-ai/dot-components';

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
    const breadcrumbItems: BreadcrumbItem[] = [
      {
        text: 'First',
      },
      {
        text: 'Second',
      },
      {
        text: 'Third',
      },
      {
        text: 'Fourth',
      },
    ];

    it('should return false if item is not first item after collapse', () => {
      checkIfFirstItemAfterCollapse(breadcrumbItems, 2, 3);
    });

    it('should return true if item is first item after collapse', () => {
      checkIfFirstItemAfterCollapse(breadcrumbItems, 2, 2);
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
});
