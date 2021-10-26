import {
  DynamicFormConfig,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormValidation,
  FieldValidation,
  ValidationField,
} from './models';
import { DATA_CONTROLS_WITHOUT_VALIDATION } from './constants';
import { checkIfHiddenControl, getOutputFormData } from './helpers';

export const checkIfValidationApplies = (
  validationField: ValidationField,
  formValues: DynamicFormOutputData
) => {
  const condition = validationField.condition;
  if (!condition) return true;
  try {
    return condition(formValues);
  } catch (e) {
    return false;
  }
};

export const checkIfEmptyValue = (value: unknown): boolean =>
  value === '' || value === null || value === undefined;

export const checkIfString = (value: unknown): boolean =>
  typeof value === 'string';

export const checkIfEmptyString = (value: string): boolean =>
  value.trim() === '';

export const checkIfArray = (value: unknown): boolean => Array.isArray(value);

export const checkIfEmptyArray = (value: Array<unknown>): boolean =>
  !value.length;

export const checkIfStringRequiredInvalid = (
  value: string,
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): boolean =>
  validation.isRequired &&
  checkIfValidationApplies(validation.isRequired, formValues) &&
  checkIfEmptyString(value);

export const checkIfArrayRequiredInvalid = (
  value: unknown[],
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): boolean =>
  validation.isRequired &&
  checkIfValidationApplies(validation.isRequired, formValues) &&
  checkIfEmptyArray(value);

export const checkIfMinLengthInvalid = (
  value: string | unknown[],
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): boolean =>
  validation.minLength &&
  checkIfValidationApplies(validation.minLength, formValues) &&
  value.length < validation.minLength.value;

export const checkIfMaxLengthInvalid = (
  value: string | unknown[],
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): boolean =>
  validation.maxLength &&
  checkIfValidationApplies(validation.maxLength, formValues) &&
  value.length > validation.maxLength.value;

export const getInvalidFieldValidation = (
  errorMessage: string
): FieldValidation => ({
  isValid: false,
  errorMessage,
});

export const getRequiredFieldValidationError = (
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
) =>
  checkIfValidationApplies(validation.isRequired, formValues) &&
  getInvalidFieldValidation(validation.isRequired.errorMessage);

export const getMinLengthFieldValidationError = (
  validation: DynamicFormValidation
) => getInvalidFieldValidation(validation.minLength.errorMessage);

export const getMaxLengthFieldValidationError = (
  validation: DynamicFormValidation
) => getInvalidFieldValidation(validation.maxLength.errorMessage);

export const getEmptyValueValidationError = (
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): FieldValidation | null => {
  if (
    validation.isRequired &&
    checkIfValidationApplies(validation.isRequired, formValues)
  ) {
    return getRequiredFieldValidationError(validation, formValues);
  }
  return null;
};

export const getStringValidationError = (
  value: string,
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): FieldValidation | null => {
  if (checkIfStringRequiredInvalid(value, validation, formValues))
    return getRequiredFieldValidationError(validation, formValues);
  if (checkIfMinLengthInvalid(value, validation, formValues))
    return getMinLengthFieldValidationError(validation);
  if (checkIfMaxLengthInvalid(value, validation, formValues))
    return getMaxLengthFieldValidationError(validation);
  return null;
};

export const getArrayValidationError = (
  array: unknown[],
  validation: DynamicFormValidation,
  formValues: DynamicFormOutputData
): FieldValidation | null => {
  if (checkIfArrayRequiredInvalid(array, validation, formValues))
    return getRequiredFieldValidationError(validation, formValues);
  if (checkIfMinLengthInvalid(array, validation, formValues))
    return getMinLengthFieldValidationError(validation);
  if (checkIfMaxLengthInvalid(array, validation, formValues))
    return getMaxLengthFieldValidationError(validation);
  return null;
};

export const getCustomValidationError = (
  value: unknown,
  validation: DynamicFormValidation
) => {
  const customValidation = validation.customValidator(value);
  if (!customValidation.isValid) {
    return {
      isValid: false,
      errorMessage: customValidation.errorMessage,
    };
  }
  return null;
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

  // Empty value validation
  if (checkIfEmptyValue(value)) {
    const emptyValueError = getEmptyValueValidationError(
      validation,
      formValues
    );
    if (emptyValueError) return emptyValueError;
  }

  // String validations
  if (checkIfString(value)) {
    const stringValidationError = getStringValidationError(
      value as string,
      validation,
      formValues
    );
    if (stringValidationError) return stringValidationError;
  }
  // Array validations
  if (checkIfArray(value)) {
    const arrayValidationError = getArrayValidationError(
      value as unknown[],
      validation,
      formValues
    );
    if (arrayValidationError) return arrayValidationError;
  }
  if (validation.customValidator) {
    const customValidatorError = getCustomValidationError(value, validation);
    if (customValidatorError) return customValidatorError;
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

export const checkIfFormDataValid = (formState: DynamicFormState): boolean => {
  if (!formState || !('data' in formState)) return false;
  const formData = formState.data;
  for (const formDataKey in formData) {
    const formValues = getOutputFormData(formState);
    const isHidden = checkIfHiddenControl(
      formData[formDataKey].hidden,
      formValues
    );
    if (!formData[formDataKey].isValid && !isHidden) return false;
  }
  return true;
};
