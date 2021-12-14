import { ComponentType, ReactNode } from 'react';
import { AutoCompleteProps } from '../auto-complete/AutoComplete';
import { ButtonProps } from '../button/Button';
import { CheckboxProps } from '../checkbox/Checkbox';
import { InputTextProps } from '../input-form-fields/InputText';
import { InputSelectProps } from '../input-form-fields/InputSelect';
import { CheckboxGroupProps } from '../checkbox/CheckboxGroup';
import { RadioGroupProps } from '../radio/RadioGroup';
import { SwitchProps } from '../switch/Switch';
import { ProgressButtonProps } from '../progress-button/ProgressButton';

export type DynamicFormControlType =
  | 'dot-input-text'
  | 'dot-input-select'
  | 'dot-checkbox'
  | 'dot-checkbox-group'
  | 'dot-autocomplete'
  | 'dot-button'
  | 'dot-progress-button'
  | 'dot-radio-group'
  | 'dot-reset'
  | 'dot-submit'
  | 'dot-progress-submit'
  | 'dot-switch'
  | 'dot-form-section'
  | 'custom-element';

export type DynamicFormControlProps =
  | AutoCompleteProps
  | InputTextProps
  | InputSelectProps
  | CheckboxProps
  | CheckboxGroupProps
  | ButtonProps
  | ProgressButtonProps
  | RadioGroupProps
  | SwitchProps;

export interface DynamicFormOutputData {
  [key: string]: unknown;
}

export type ConditionFunction = (formValues: DynamicFormOutputData) => boolean;

export type DisabledConditionFunction = (
  formValues: DynamicFormOutputData,
  isFormValid: boolean
) => boolean;

export type ControlCondition = boolean | ConditionFunction;

export type DisabledControlCondition = boolean | DisabledConditionFunction;

export type ControlClickHandler = (formValues: DynamicFormOutputData) => void;

export interface DynamicFormSectionProps {
  sectionControls: ReactNode[];
}

export interface DynamicFormSection {
  FormSectionComponent: ComponentType<DynamicFormSectionProps>;
  sectionControls: DynamicFormControl[];
}

export interface DynamicFormControl {
  controlName?: string;
  controlProps?: DynamicFormControlProps;
  controlType: DynamicFormControlType;
  customElement?: ReactNode;
  disabled?: DisabledControlCondition;
  formSection?: DynamicFormSection;
  hidden?: ControlCondition;
  initialValue?: unknown;
  onControlClick?: ControlClickHandler;
  validation?: DynamicFormValidation;
}

export interface FieldValidation {
  errorMessage: string | null;
  isValid: boolean;
}

export interface DynamicFormConfig {
  controls: DynamicFormControl[];
}

export interface ValidationField {
  condition?: ConditionFunction;
  errorMessage: string;
}

export interface IsRequired extends ValidationField {
  value: boolean;
}

export interface Length extends ValidationField {
  value: number;
}

export interface DynamicFormValidation {
  customValidator?: (value: unknown) => FieldValidation;
  isRequired?: IsRequired;
  maxLength?: Length;
  minLength?: Length;
}

export interface DynamicFormStateItem {
  errorMessage: string;
  hidden?: ControlCondition;
  isTouched: boolean;
  isValid: boolean;
  value: unknown;
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
  formConfig: DynamicFormConfig;
  newValue: unknown;
  validate?: boolean;
}
