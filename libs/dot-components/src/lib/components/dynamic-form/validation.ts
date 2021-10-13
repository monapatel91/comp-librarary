import {
  DynamicFormSchema,
  DynamicFormValidation,
  FieldValidation,
} from './models';

export const isStringEmpty = (stringToCheck: string): boolean =>
  stringToCheck.trim() === '';

export const getFieldValidation = (
  value: unknown,
  validation: DynamicFormValidation
): FieldValidation => {
  const fieldValidation: FieldValidation = {
    isValid: true,
    errorMessage: null,
  };
  // No validation checks are defined on the field
  if (!validation) return fieldValidation;
  // Field is required but value is not present
  if (validation.isRequired && !value) {
    return {
      isValid: false,
      errorMessage: validation.isRequired.errorMessage,
    };
  }
  return fieldValidation;
};

export const getControlValidationFromSchema = (
  controlName: string,
  schema: DynamicFormSchema
): DynamicFormValidation | undefined => {
  return schema.controls.find((control) => control.controlName === controlName)
    ?.validation;
};
