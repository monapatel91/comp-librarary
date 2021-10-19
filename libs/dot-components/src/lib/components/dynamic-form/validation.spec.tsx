import React from 'react';
import { ValidationField } from './models';
import { checkIfValidationApplies } from './validation';

describe('validation functions', () => {
  const formValues = {
    firstName: 'Mike',
    lastName: 'Tyson',
    age: '55',
    hasAccount: 'no',
    username: '',
  };

  describe('checkIfValidationApplies', () => {
    const validationField: ValidationField = {
      condition: [{ controlName: 'hasAccount', controlValue: 'yes' }],
      errorMessage: 'error',
    };
    it('should return false when single condition is not met', () => {
      const result = checkIfValidationApplies(validationField, formValues);
      expect(result).toBe(false);
    });
    it('should return false when at least one condition is not met', () => {
      const field: ValidationField = {
        ...validationField,
        condition: [
          { controlName: 'hasAccount', controlValue: 'no' },
          { controlName: 'age', controlValue: '33' },
        ],
      };
      const result = checkIfValidationApplies(field, formValues);
      expect(result).toBe(false);
    });
    it("should return true when 'condition' property is not defined", () => {
      const field: ValidationField = {
        ...validationField,
        condition: undefined,
      };
      const result = checkIfValidationApplies(field, formValues);
      expect(result).toBe(true);
    });
    it('should return true when all conditions are met', () => {
      const field: ValidationField = {
        ...validationField,
        condition: [
          { controlName: 'hasAccount', controlValue: 'no' },
          { controlName: 'age', controlValue: '55' },
        ],
      };
      const result = checkIfValidationApplies(field, formValues);
      expect(result).toBe(true);
    });
  });
});
