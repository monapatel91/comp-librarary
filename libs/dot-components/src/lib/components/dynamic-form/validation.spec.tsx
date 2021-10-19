import {
  ConditionControl,
  DynamicFormValidation,
  ValidationField,
} from './models';
import { checkIfValidationApplies, getFieldValidation } from './validation';

describe('validation functions', () => {
  const formValues = {
    firstName: 'Mike',
    lastName: 'Tyson',
    age: '55',
    hasAccount: 'no',
    username: '',
  };

  const matchingCondition: ConditionControl[] = [
    { controlName: 'hasAccount', controlValue: 'no' },
    { controlName: 'age', controlValue: '55' },
  ];

  const nonMatchingCondition: ConditionControl[] = [
    { controlName: 'hasAccount', controlValue: 'no' },
    { controlName: 'age', controlValue: '33' },
  ];

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
        condition: nonMatchingCondition,
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
        condition: matchingCondition,
      };
      const result = checkIfValidationApplies(field, formValues);
      expect(result).toBe(true);
    });
  });

  describe('getFieldValidation', () => {
    const requiredErrorMsg = 'Required field';
    const minLengthErrorMsg = 'Min length validation failed';
    const maxLengthErrorMsg = 'Max length validation failed';

    const requiredOnlyValidation: DynamicFormValidation = {
      isRequired: {
        value: true,
        errorMessage: requiredErrorMsg,
      },
    };

    const validation: DynamicFormValidation = {
      isRequired: {
        value: true,
        errorMessage: requiredErrorMsg,
      },
      minLength: {
        value: 3,
        errorMessage: minLengthErrorMsg,
      },
      maxLength: {
        value: 6,
        errorMessage: maxLengthErrorMsg,
      },
    };

    describe('isRequired', () => {
      it('should return correct object when passing in empty string when value is required', () => {
        const result = getFieldValidation('', validation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: requiredErrorMsg,
        });
      });
      it('should return correct object when passing in null value when value is required', () => {
        const result = getFieldValidation(null, validation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: requiredErrorMsg,
        });
      });
      it('should return correct object when passing in undefined value when value is required', () => {
        const result = getFieldValidation(undefined, validation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: requiredErrorMsg,
        });
      });
      it('should return correct object when passing in empty array when value is required', () => {
        const result = getFieldValidation([], validation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: requiredErrorMsg,
        });
      });
      it('should return correct object when passing in empty string when value is NOT required', () => {
        const result = getFieldValidation('', undefined, formValues);
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in value and value is required', () => {
        const result = getFieldValidation('abc', validation, formValues);
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in value and value is required but conditions are NOT met', () => {
        const customValidation: DynamicFormValidation = {
          isRequired: {
            ...validation.isRequired,
            condition: nonMatchingCondition,
          },
        };
        const result = getFieldValidation('', customValidation, formValues);
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing value is required and conditions are met', () => {
        const customValidation: DynamicFormValidation = {
          isRequired: {
            ...validation.isRequired,
            condition: matchingCondition,
          },
        };
        const result = getFieldValidation('', customValidation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: requiredErrorMsg,
        });
      });
    });

    describe('minLength', () => {
      it('should return correct object when string does not satisfy minLength validation ', () => {
        const result = getFieldValidation('ab', validation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: minLengthErrorMsg,
        });
      });
      it('should return correct object when array does not satisfy minLength validation ', () => {
        const result = getFieldValidation(['1', '2'], validation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: minLengthErrorMsg,
        });
      });
      it('should return correct object when passing in empty string when minLength validation is NOT defined', () => {
        const result = getFieldValidation(
          'ab',
          requiredOnlyValidation,
          formValues
        );
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in value and it satisfies minLength validation', () => {
        const result = getFieldValidation('abc', validation, formValues);
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in non-valid value but validation conditions are not met', () => {
        const customValidation: DynamicFormValidation = {
          minLength: {
            ...validation.minLength,
            condition: nonMatchingCondition,
          },
        };
        const result = getFieldValidation('ab', customValidation, formValues);
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in non-valid value and validation conditions are met', () => {
        const customValidation: DynamicFormValidation = {
          minLength: {
            ...validation.minLength,
            condition: matchingCondition,
          },
        };
        const result = getFieldValidation('ab', customValidation, formValues);
        expect(result).toEqual({
          isValid: false,
          errorMessage: minLengthErrorMsg,
        });
      });
    });
  });
});
