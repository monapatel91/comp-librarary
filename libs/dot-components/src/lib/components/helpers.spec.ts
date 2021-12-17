import {
  calculateNumberFromText,
  getAvatarColorForInputText,
  isString,
} from './helpers';

describe('helpers', () => {
  describe('calculateNumberFromText', () => {
    it('should always generate same number for given text input', () => {
      const text1 = 'John';
      const text2 = 'Craig';
      for (let i = 0; i < 20; i++) {
        expect(calculateNumberFromText(text1)).toBe(74111104110);
        expect(calculateNumberFromText(text2)).toBe(6711497105103);
      }
    });
  });

  describe('getAvatarColorForInputText', () => {
    it('should always generate same hash number for given input', () => {
      const text1 = 'John Wayne';
      const text2 = 'Mike Harris';
      for (let i = 0; i < 20; i++) {
        expect(getAvatarColorForInputText(text1)).toBe('blue');
        expect(getAvatarColorForInputText(text2)).toBe('green');
      }
    });
    it("should return 'default' color when no value is provided", () => {
      expect(getAvatarColorForInputText('')).toBe('default');
    });
  });

  describe('isString', () => {
    it('should return true when string is passed in', () => {
      const result = isString('123');
      expect(result).toBe(true);
    });
    it('should return false when non-string value is passed in', () => {
      const result = isString({ value: 123 });
      expect(result).toBe(false);
    });
  });
});
