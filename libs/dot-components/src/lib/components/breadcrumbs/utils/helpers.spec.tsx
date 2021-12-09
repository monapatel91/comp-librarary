import { getItemsAfterCollapse, getMaxItems, getWidthFromRef } from './helpers';

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
});
