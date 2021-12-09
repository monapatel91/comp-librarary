import { getItemsAfterCollapse } from './helpers';

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
});
