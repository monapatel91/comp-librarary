import {
  ConditionFunction,
  DynamicFormConfig,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormValidation,
  FieldValidation,
  IsRequired,
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

  const getRequiredValidationObject = (errorMsg: string): IsRequired => ({
    value: true,
    errorMessage: errorMsg,
  });

  const getFieldValidationObject = (
    isValid: boolean,
    errorMessage: string = null
  ): FieldValidation => ({
    isValid,
    errorMessage,
  });

  const matchingCondition: ConditionFunction = (
    formValues: DynamicFormOutputData
  ) => formValues['hasAccount'] === 'no' && formValues['age'] === '55';

  const nonMatchingCondition: ConditionFunction = (
    formValues: DynamicFormOutputData
  ) => formValues['hasAccount'] === 'no' && formValues['age'] === '33';

  describe('checkIfValidationApplies', () => {
    const validationField: ValidationField = {
      condition: (formValues: DynamicFormOutputData) =>
        formValues['hasAccount'] === 'yes',
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

    it('should return false when exception occurs', () => {
      const field: ValidationField = {
        ...validationField,
        condition: (_formValues: DynamicFormOutputData) => {
          throw new Error();
        },
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

    const isRequired = getRequiredValidationObject(requiredErrorMsg);

    const requiredOnlyValidation: DynamicFormValidation = {
      isRequired,
    };

    const validation: DynamicFormValidation = {
      isRequired,
      minLength: {
        value: 3,
        errorMessage: minLengthErrorMsg,
      },
      maxLength: {
        value: 6,
        errorMessage: maxLengthErrorMsg,
      },
    };

    const fieldValidationRequired = getFieldValidationObject(
      false,
      requiredErrorMsg
    );
    const fieldValidationMinLength = getFieldValidationObject(
      false,
      minLengthErrorMsg
    );
    const fieldValidationMaxLength = getFieldValidationObject(
      false,
      maxLengthErrorMsg
    );
    const fieldValidationValid = getFieldValidationObject(true);

    describe('isRequired', () => {
      it('should return correct object when passing in empty string when value is required', () => {
        const result = getFieldValidation('', validation, formValues);
        expect(result).toEqual(fieldValidationRequired);
      });
      it('should return correct object when passing in null value when value is required', () => {
        const result = getFieldValidation(null, validation, formValues);
        expect(result).toEqual(fieldValidationRequired);
      });
      it('should return correct object when passing in undefined value when value is required', () => {
        const result = getFieldValidation(undefined, validation, formValues);
        expect(result).toEqual(fieldValidationRequired);
      });
      it('should return correct object when passing in empty array when value is required', () => {
        const result = getFieldValidation([], validation, formValues);
        expect(result).toEqual(fieldValidationRequired);
      });
      it('should return correct object when passing in empty string when value is NOT required', () => {
        const result = getFieldValidation('', undefined, formValues);
        expect(result).toEqual(fieldValidationValid);
      });
      it('should return correct object when passing in value and value is required', () => {
        const result = getFieldValidation('abc', validation, formValues);
        expect(result).toEqual(fieldValidationValid);
      });
      it('should return correct object when passing in value and value is required but conditions are NOT met', () => {
        const customValidation: DynamicFormValidation = {
          isRequired: {
            ...validation.isRequired,
            condition: nonMatchingCondition,
          },
        };
        const result = getFieldValidation('', customValidation, formValues);
        expect(result).toEqual(fieldValidationValid);
      });
      it('should return correct object when passing value is required and conditions are met', () => {
        const customValidation: DynamicFormValidation = {
          isRequired: {
            ...validation.isRequired,
            condition: matchingCondition,
          },
        };
        const result = getFieldValidation('', customValidation, formValues);
        expect(result).toEqual(fieldValidationRequired);
      });
    });

    describe('minLength', () => {
      it('should return correct object when string does not satisfy minLength validation ', () => {
        const result = getFieldValidation('ab', validation, formValues);
        expect(result).toEqual(fieldValidationMinLength);
      });
      it('should return correct object when array does not satisfy minLength validation ', () => {
        const result = getFieldValidation(['1', '2'], validation, formValues);
        expect(result).toEqual(fieldValidationMinLength);
      });
      it('should return correct object when passing in empty string when minLength validation is NOT defined', () => {
        const result = getFieldValidation(
          'ab',
          requiredOnlyValidation,
          formValues
        );
        expect(result).toEqual(fieldValidationValid);
      });
      it('should return correct object when passing in value and it satisfies minLength validation', () => {
        const result = getFieldValidation('abc', validation, formValues);
        expect(result).toEqual(fieldValidationValid);
      });
      it('should return correct object when passing in non-valid value but validation conditions are not met', () => {
        const customValidation: DynamicFormValidation = {
          minLength: {
            ...validation.minLength,
            condition: nonMatchingCondition,
          },
        };
        const result = getFieldValidation('ab', customValidation, formValues);
        expect(result).toEqual(fieldValidationValid);
      });
      it('should return correct object when passing in non-valid value and validation conditions are met', () => {
        const customValidation: DynamicFormValidation = {
          minLength: {
            ...validation.minLength,
            condition: matchingCondition,
          },
        };
        const result = getFieldValidation('ab', customValidation, formValues);
        expect(result).toEqual(fieldValidationMinLength);
      });
    });

    describe('maxLength', () => {
      it('should return correct object when string does not satisfy maxLength validation ', () => {
        const result = getFieldValidation(
          'aaaaabbbbbbbbbbb',
          validation,
          formValues
        );
        expect(result).toEqual(fieldValidationMaxLength);
      });
      it('should return correct object when array does not satisfy maxLength validation ', () => {
        const result = getFieldValidation(
          ['1', '2', '3', '4', '5', '6', '7'],
          validation,
          formValues
        );
        expect(result).toEqual(fieldValidationMaxLength);
      });
      it('should return correct object when passing in value and it satisfies maxLength validation', () => {
        const result = getFieldValidation('abcd', validation, formValues);
        expect(result).toEqual(fieldValidationValid);
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
        expect(result).toEqual(fieldValidationValid);
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
        expect(result).toEqual(fieldValidationMaxLength);
      });
    });

    describe('customValidator', () => {
      const takenUsername = {
        isValid: false,
        errorMessage: 'Username is already taken',
      };

      const validatorFunction = (value: string): FieldValidation => {
        // Examples of taken usernames to validate against
        const takenUsernames = ['username', 'john', 'mark'];
        if (takenUsernames.includes(value)) {
          return takenUsername;
        }
        return fieldValidationValid;
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
        expect(result).toEqual(fieldValidationValid);
      });
    });
  });

  describe('getControlValidationFromConfig', () => {
    const isRequired = getRequiredValidationObject('Required field');

    const controlValidation: DynamicFormValidation = {
      isRequired,
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
            isRequired,
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
    const validFormState: DynamicFormState = {
      data: {
        firstName: {
          isValid: true,
        } as never,
        lastName: {
          isValid: true,
        } as never,
        username: {
          isValid: true,
        } as never,
      },
      isValid: true,
    };

    const invalidFormState: DynamicFormState = {
      data: {
        firstName: {
          isValid: false,
        } as never,
        lastName: {
          isValid: true,
          value: '33',
        } as never,
        username: {
          isValid: true,
        } as never,
      },
      isValid: true,
    };

    it('should return false when form data is not valid', () => {
      const isValid = checkIfFormDataValid(invalidFormState);
      expect(isValid).toBe(false);
    });

    it('should return true when undefined form data is passed in', () => {
      const isValid = checkIfFormDataValid(undefined);
      expect(isValid).toBe(false);
    });

    it('should return true when form data is valid', () => {
      const isValid = checkIfFormDataValid(validFormState);
      expect(isValid).toBe(true);
    });

    it('should return true when form data is valid2', () => {
      const formState: DynamicFormState = {
        ...invalidFormState,
        data: {
          ...invalidFormState.data,
          firstName: {
            isValid: false,
            hidden: (formValues: DynamicFormOutputData) =>
              formValues['lastName'] === '33',
          } as never,
        },
      };
      const isValid = checkIfFormDataValid(formState);
      expect(isValid).toBe(true);
    });
  });
});
