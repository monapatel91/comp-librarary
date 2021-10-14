import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import React, { ChangeEvent } from 'react';
import {
  DynamicFormControlProps,
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

export interface ControlledInputArgs {
  controlName: string;
  controlProps: DynamicFormControlProps;
  formData: DynamicFormStateData;
  handleChange: (
    controlName: string
  ) => (e: ChangeEvent<HTMLInputElement>, value?: AutoCompleteValue) => void;
  index: number;
}

export interface UncontrolledInputArgs {
  controlProps: DynamicFormControlProps;
  formState?: DynamicFormState;
  handleClick?: () => void;
  index: number;
}

const getControlValue = <T extends unknown>(
  controlName: string,
  data: DynamicFormStateData
): T => {
  return data[controlName].value as T;
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
  return (
    <DotInputText
      key={index}
      {...props}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChange(controlName)}
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
  return (
    <DotAutoComplete
      key={index}
      {...props}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage ? errorMessage : props.helperText}
      onChange={handleChange(controlName)}
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
  return (
    <DotCheckbox
      key={index}
      {...props}
      checked={checked}
      onChange={handleChange(controlName)}
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
