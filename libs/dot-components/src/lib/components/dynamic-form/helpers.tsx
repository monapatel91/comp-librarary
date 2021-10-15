import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import {
  DotInputSelect,
  InputSelectProps,
} from '../input-form-fields/InputSelect';
import React, { ChangeEvent } from 'react';
import {
  DynamicFormControl,
  DynamicFormControlProps,
  DynamicFormSchema,
  DynamicFormState,
  DynamicFormStateData,
} from './models';
import {
  AutoCompleteProps,
  AutoCompleteValue,
  DotAutoComplete,
} from '../auto-complete/AutoComplete';
import { ButtonProps, DotButton } from '../button/Button';
import { CheckboxProps, DotCheckbox } from '../checkbox/Checkbox';
import {
  DotCheckboxGroup,
  CheckboxGroupProps,
} from '../checkbox/CheckboxGroup';
import { DotRadioGroup, RadioGroupProps } from '../radio/RadioGroup';
import { getFieldValidation } from './validation';
import {
  DATA_CONTROLS,
  DATA_CONTROLS_WITHOUT_VALIDATION,
  INITIAL_STATE_ITEM,
} from './constants';

type AutoCompleteChangeHandler = (
  controlName: string
) => (e: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue) => void;

type ChangeHandler = (
  controlName: string
) => (e: ChangeEvent<HTMLInputElement>) => void;

type CheckboxGroupChangeHandler = (
  controlName: string
) => (event: ChangeEvent<HTMLInputElement>, value: CheckboxProps[]) => void;

export interface ControlledInputArgs {
  controlName: string;
  controlProps: DynamicFormControlProps;
  formData: DynamicFormStateData;
  handleChange:
    | AutoCompleteChangeHandler
    | ChangeHandler
    | CheckboxGroupChangeHandler;
  index: number;
}

export interface UncontrolledInputArgs {
  controlProps: DynamicFormControlProps;
  formState?: DynamicFormState;
  handleClick?: () => void;
  index: number;
}

export interface DynamicFormOutputData {
  [key: string]: unknown;
}

const getControlValue = <T extends unknown>(
  controlName: string,
  data: DynamicFormStateData
): T => {
  return data[controlName].value as T;
};

export const getInitialFormState = (
  schema: DynamicFormSchema
): DynamicFormState => {
  const initialState: DynamicFormState = {
    data: {},
    isValid: false,
  };
  schema.controls.forEach(
    ({
      controlName,
      initialValue,
      controlType,
      validation,
    }: DynamicFormControl) => {
      // Set only data controls (ignore buttons and other non-relevant elements)
      if (DATA_CONTROLS.includes(controlType)) {
        initialState.data[controlName] = { ...INITIAL_STATE_ITEM };
        if (initialValue) {
          initialState.data[controlName].value = initialValue;
          initialState.data[controlName].isTouched = true;
          const fieldValidation = getFieldValidation(initialValue, validation);
          initialState.data[controlName].isValid = fieldValidation.isValid;
          initialState.data[controlName].errorMessage =
            fieldValidation.errorMessage;
        }
        // If no validation always set valid to true
        if (
          !validation ||
          DATA_CONTROLS_WITHOUT_VALIDATION.includes(controlType)
        ) {
          // Set always to valid for now
          initialState.data[controlName].isValid = true;
        }
      }
    }
  );
  return initialState;
};

export const getOutputFormData = (formState: DynamicFormState) => {
  const outputData: DynamicFormOutputData = {};
  for (const dataKey in formState.data) {
    outputData[dataKey] = formState.data[dataKey].value;
  }
  return outputData;
};

export const buildInputTextControl = ({
  controlName,
  controlProps,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as InputTextProps;
  const value = getControlValue<string>(controlName, formData) || '';
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange as ChangeHandler;
  return (
    <DotInputText
      key={index}
      {...props}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildInputSelectControl = ({
  controlName,
  controlProps,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as InputSelectProps;
  const value = getControlValue<string>(controlName, formData) || '';
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange as ChangeHandler;
  return (
    <DotInputSelect
      key={index}
      {...props}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildAutocompleteControl = ({
  controlName,
  controlProps,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as AutoCompleteProps;
  const value = getControlValue<AutoCompleteValue>(controlName, formData) || [];
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange as AutoCompleteChangeHandler;
  return (
    <DotAutoComplete
      key={index}
      {...props}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildRadioGroupControl = ({
  controlName,
  controlProps,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as RadioGroupProps;
  const value = getControlValue<string>(controlName, formData) || '';
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange as ChangeHandler;
  return (
    <DotRadioGroup
      key={index}
      {...props}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildCheckboxControl = ({
  controlName,
  controlProps,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as CheckboxProps;
  const checked = getControlValue<boolean>(controlName, formData) || false;
  const handleChangeFn = handleChange as ChangeHandler;
  return (
    <DotCheckbox
      key={index}
      {...props}
      checked={checked}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildCheckboxGroupControl = ({
  controlName,
  controlProps,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as CheckboxGroupProps;
  const errorMessage = formData[controlName].errorMessage;
  const handleChangeFn = handleChange as CheckboxGroupChangeHandler;
  return (
    <DotCheckboxGroup
      key={index}
      {...props}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildButtonControl = ({
  controlProps,
  index,
}: UncontrolledInputArgs) => {
  const props = controlProps as ButtonProps;
  return (
    <DotButton key={index} {...props}>
      {props.children}
    </DotButton>
  );
};

export const buildResetControl = ({
  controlProps,
  handleClick,
  index,
}: UncontrolledInputArgs) => {
  const props = controlProps as ButtonProps;
  return (
    <DotButton
      key={index}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        handleClick();
      }}
    >
      {props.children}
    </DotButton>
  );
};

export const buildSubmitControl = ({
  controlProps,
  formState,
  index,
}: UncontrolledInputArgs) => {
  const props = controlProps as ButtonProps;
  return (
    <DotButton
      key={index}
      {...props}
      isSubmit={true}
      disabled={!formState.isValid}
    >
      {props.children}
    </DotButton>
  );
};
