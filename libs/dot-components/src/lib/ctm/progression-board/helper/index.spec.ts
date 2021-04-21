import { isIndexNumberValid } from '.';

describe('isIndexNumberValid function', () => {
  it('should return false if valid phases with index lower than zero passed in', () => {
    expect(isIndexNumberValid(-1)).toBe(false);
  });
  it('should return false if valid phases with index as float number passed in', () => {
    expect(isIndexNumberValid(0.6)).toBe(false);
  });
  it('should return false if valid phases with index as string passed in', () => {
    expect(isIndexNumberValid('2' as never)).toBe(false);
  });
  it('should return true if 0 is passed in', () => {
    expect(isIndexNumberValid(0)).toBe(true);
  });
  it('should return true if positive integer is passed in', () => {
    expect(isIndexNumberValid(23)).toBe(true);
  });
});
