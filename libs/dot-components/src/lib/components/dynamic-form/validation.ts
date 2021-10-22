import {
  DynamicFormConfig,
  DynamicFormOutputData,
  DynamicFormStateData,
  DynamicFormValidation,
  FieldValidation,
  ValidationField,
} from './models';
import { DATA_CONTROLS_WITHOUT_VALIDATION } from './constants';

export const checkIfValidationApplies = (
  validationField: ValidationField,
  formValues: DynamicFormOutputData
) => {
  const condition = validationField.condition;
  if (!condition) return true;
  try {
    return condition(formValues);
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const getFieldValidation = (
  value: unknown,
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): FieldValidation => {
  const fieldValidation: FieldValidation = {
    isValid: true,
    errorMessage: null,
  };
  // No validation checks are defined on the field
  if (!validation) return fieldValidation;
  // Field is required but value is not present
  if (
    validation.isRequired &&
    checkIfValidationApplies(validation.isRequired, formValues) &&
    (!value || (Array.isArray(value) && !value.length))
  ) {
    return {
      isValid: false,
      errorMessage: validation.isRequired.errorMessage,
    };
  }
  // String value doesn't meet min-length requirement
  if (
    (typeof value === 'string' || Array.isArray(value)) &&
    validation.minLength &&
    checkIfValidationApplies(validation.minLength, formValues) &&
    validation.minLength.value > value.length
  ) {
    return {
      isValid: false,
      errorMessage: validation.minLength.errorMessage,
    };
  }
  // String value doesn't meet max-length requirement
  if (
    (typeof value === 'string' || Array.isArray(value)) &&
    validation.maxLength &&
    checkIfValidationApplies(validation.maxLength, formValues) &&
    validation.maxLength.value < value.length
  ) {
    return {
      isValid: false,
      errorMessage: validation.maxLength.errorMessage,
    };
  }
  if (validation.customValidator) {
    const customValidation = validation.customValidator(value);
    if (!customValidation.isValid) {
      return {
        isValid: false,
        errorMessage: customValidation.errorMessage,
      };
    }
  }

  return fieldValidation;
};

export const getControlValidationFromConfig = (
  controlName: string,
  config: DynamicFormConfig
): DynamicFormValidation | undefined => {
  const formControl = config.controls.find(
    (control) => control.controlName === controlName
  );
  // Returned undefined if there is no such form control or is included in
  // array of controls for which we don't do validation
  if (
    !formControl ||
    DATA_CONTROLS_WITHOUT_VALIDATION.includes(formControl.controlType)
  )
    return;
  return formControl.validation;
};

export const checkIfFormDataValid = (
  formData: DynamicFormStateData
): boolean => {
  if (!formData) return false;
  for (const formDataKey in formData) {
    if (!formData[formDataKey].isValid) return false;
  }
  return true;
};
