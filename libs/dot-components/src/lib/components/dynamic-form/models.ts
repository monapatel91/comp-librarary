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
  | 'custom-element'
  | 'controls-wrapper';

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

export interface WrapperComponentProps {
  wrappedControls: ReactNode[];
}

export interface ControlsWrapper {
  WrapperComponent: ComponentType<WrapperComponentProps>;
  controlsToWrap: DynamicFormControl[];
}

export interface DynamicFormControl {
  controlName?: string;
  controlProps?: DynamicFormControlProps;
  controlType: DynamicFormControlType;
  controlsWrapper?: ControlsWrapper;
  customElement?: ReactNode;
  disabled?: DisabledControlCondition;
  hidden?: ControlCondition;
  initialValue?: unknown;
  onControlClick?: ControlClickHandler;
  validation?: DynamicFormValidation;
}

export interface FieldValidation {
  isValid: boolean;
  errorMessage: string | null;
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
  hidden?: ControlCondition;
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
  formConfig: DynamicFormConfig;
  validate?: boolean;
}
