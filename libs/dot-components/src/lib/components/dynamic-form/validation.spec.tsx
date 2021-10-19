import {
  ConditionControl,
  DynamicFormConfig,
  DynamicFormValidation,
  FieldValidation,
  ValidationField,
} from './models';
import {
  checkIfFormDataValid,
  checkIfValidationApplies,
  getControlValidationFromConfig,
  getFieldValidation,
} from './validation';
import { InputTextProps } from '../input-form-fields/InputText';

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

    describe('maxLength', () => {
      it('should return correct object when string does not satisfy maxLength validation ', () => {
        const result = getFieldValidation(
          'aaaaabbbbbbbbbbb',
          validation,
          formValues
        );
        expect(result).toEqual({
          isValid: false,
          errorMessage: maxLengthErrorMsg,
        });
      });
      it('should return correct object when array does not satisfy maxLength validation ', () => {
        const result = getFieldValidation(
          ['1', '2', '3', '4', '5', '6', '7'],
          validation,
          formValues
        );
        expect(result).toEqual({
          isValid: false,
          errorMessage: maxLengthErrorMsg,
        });
      });
      it('should return correct object when passing in value and it satisfies maxLength validation', () => {
        const result = getFieldValidation('abcd', validation, formValues);
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in non-valid value but validation conditions are not met', () => {
        const customValidation: DynamicFormValidation = {
          maxLength: {
            ...validation.maxLength,
            condition: nonMatchingCondition,
          },
        };
        const result = getFieldValidation(
          'aaaaabbbbbbbbbbb',
          customValidation,
          formValues
        );
        expect(result).toEqual({
          isValid: true,
          errorMessage: null,
        });
      });
      it('should return correct object when passing in non-valid value and validation conditions are met', () => {
        const customValidation: DynamicFormValidation = {
          maxLength: {
            ...validation.maxLength,
            condition: matchingCondition,
          },
        };
        const result = getFieldValidation(
          'aaaaabbbbbbbbbbb',
          customValidation,
          formValues
        );
        expect(result).toEqual({
          isValid: false,
          errorMessage: maxLengthErrorMsg,
        });
      });
    });

    describe('customValidator', () => {
      const takenUsername = {
        isValid: false,
        errorMessage: 'Username is already taken',
      };
      const validField = {
        isValid: true,
        errorMessage: null,
      } as never;

      const validatorFunction = (value: string): FieldValidation => {
        // Examples of taken usernames to validate against
        const takenUsernames = ['username', 'john', 'mark'];
        if (takenUsernames.includes(value)) {
          return takenUsername;
        }
        return validField;
      };

      it('should return correct object when passing in data which does not satisfy custom validation', () => {
        const customValidation: DynamicFormValidation = {
          customValidator: validatorFunction,
        };
        const result = getFieldValidation(
          'username',
          customValidation,
          formValues
        );
        expect(result).toEqual(takenUsername);
      });
      it('should return correct object when passing in data which satisfies custom validation', () => {
        const customValidation: DynamicFormValidation = {
          customValidator: validatorFunction,
        };
        const result = getFieldValidation('1234', customValidation, formValues);
        expect(result).toEqual(validField);
      });
    });
  });

  describe('getControlValidationFromConfig', () => {
    const controlValidation: DynamicFormValidation = {
      isRequired: {
        errorMessage: 'Required field',
        value: true,
      },
      minLength: {
        value: 3,
        errorMessage: 'Please enter minimum 3 characters',
      },
    };

    const config: DynamicFormConfig = {
      controls: [
        {
          controlName: 'option',
          controlType: 'dot-checkbox',
          controlProps: {
            label: 'My checkbox',
          } as InputTextProps,
          validation: {
            isRequired: {
              errorMessage: 'Required field',
              value: true,
            },
          },
        },
        {
          controlName: 'username',
          controlType: 'dot-input-text',
          controlProps: {
            label: 'Username',
          } as InputTextProps,
          validation: controlValidation,
        },
      ],
    };

    it('should return correct validation object', () => {
      const validation = getControlValidationFromConfig('username', config);
      expect(validation).toEqual(controlValidation);
    });

    it('should return undefined if control is listed as data control without validation', () => {
      const validation = getControlValidationFromConfig('option', config);
      expect(validation).toBeUndefined();
    });

    it('should return undefined if passed in control is not found in config object', () => {
      const validation = getControlValidationFromConfig('1234', config);
      expect(validation).toBeUndefined();
    });
  });

  describe('checkIfFormDataValid', () => {
    const validFormData = {
      firstName: {
        isValid: true,
      },
      lastName: {
        isValid: true,
      },
      username: {
        isValid: true,
      },
    } as never;

    const invalidFormData = {
      firstName: {
        isValid: true,
      },
      lastName: {
        isValid: false,
      },
    } as never;

    it('should return false when form data is not valid', () => {
      const isValid = checkIfFormDataValid(invalidFormData);
      expect(isValid).toBe(false);
    });

    it('should return true when undefined form data is passed in', () => {
      const isValid = checkIfFormDataValid(undefined);
      expect(isValid).toBe(false);
    });

    it('should return true when form data is valid', () => {
      const isValid = checkIfFormDataValid(validFormData);
      expect(isValid).toBe(true);
    });
  });
});
