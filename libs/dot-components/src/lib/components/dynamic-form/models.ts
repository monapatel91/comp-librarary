import {
  ButtonProps,
  CheckboxProps,
  InputTextProps,
} from '@digital-ai/dot-components';

export type DynamicFormControlType =
  | 'dot-input-text'
  | 'dot-checkbox'
  | 'dot-button'
  | 'dot-reset'
  | 'dot-submit';

export type DynamicFormControlProps =
  | InputTextProps
  | CheckboxProps
  | ButtonProps;

export interface DynamicFormControl {
  controlName: string;
  controlType: DynamicFormControlType;
  controlProps: DynamicFormControlProps;
  initialValue?: unknown;
  validation?: DynamicFormValidation;
}

export interface FieldValidation {
  isValid: boolean;
  errorMessage: string | null;
}

export interface DynamicFormSchema {
  controls: DynamicFormControl[];
}

export interface ValidationField {
  errorMessage: string;
}

export interface IsRequired extends ValidationField {
  value: boolean;
}

export interface Length extends ValidationField {
  value: number;
}

export interface DynamicFormValidation {
  isRequired?: IsRequired;
  minLength?: Length;
  maxLength?: Length;
  customValidator?: (value: unknown) => FieldValidation;
}

export interface DynamicFormStateItem {
  value: unknown;
  isValid: boolean;
  isTouched: boolean;
  errorMessage: string;
}

export interface DynamicFormState {
  data: DynamicFormStateData;
  isValid: boolean;
}

export interface DynamicFormStateData {
  [key: string]: DynamicFormStateItem;
}
