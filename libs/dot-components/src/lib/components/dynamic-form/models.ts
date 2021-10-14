import { AutoCompleteProps } from '../auto-complete/AutoComplete';
import { ButtonProps } from '../button/Button';
import { CheckboxProps } from '../checkbox/Checkbox';
import { InputTextProps } from '../input-form-fields/InputText';
import { ReactNode } from 'react';

export type DynamicFormControlType =
  | 'dot-input-text'
  | 'dot-checkbox'
  | 'dot-autocomplete'
  | 'dot-button'
  | 'dot-reset'
  | 'dot-submit'
  | 'custom-element';

export type DynamicFormControlProps =
  | AutoCompleteProps
  | InputTextProps
  | CheckboxProps
  | ButtonProps;

export interface DynamicFormControl {
  controlName?: string;
  controlType: DynamicFormControlType;
  controlProps?: DynamicFormControlProps;
  initialValue?: unknown;
  validation?: DynamicFormValidation;
  customElement?: ReactNode;
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

export interface FormStateUpdateArgs {
  controlName: string;
  newValue: unknown;
  formSchema: DynamicFormSchema;
  validate?: boolean;
}
