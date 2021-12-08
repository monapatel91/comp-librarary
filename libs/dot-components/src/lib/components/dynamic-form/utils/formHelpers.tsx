import React, { ChangeEvent, MouseEvent } from 'react';
import {
  DotInputText,
  InputTextProps,
} from '../../input-form-fields/InputText';
import {
  DotInputSelect,
  InputSelectProps,
} from '../../input-form-fields/InputSelect';
import {
  ControlClickHandler,
  DynamicFormConfig,
  DynamicFormControl,
  DynamicFormControlProps,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormStateData,
  DynamicFormStateItem,
} from '../models';
import {
  AutoCompleteProps,
  AutoCompleteValue,
  DotAutoComplete,
} from '../../auto-complete/AutoComplete';
import { ButtonProps, DotButton } from '../../button/Button';
import {
  DotProgressButton,
  ProgressButtonProps,
} from '../../progress-button/ProgressButton';
import { CheckboxProps, DotCheckbox } from '../../checkbox/Checkbox';
import {
  CheckboxGroupProps,
  DotCheckboxGroup,
} from '../../checkbox/CheckboxGroup';
import { DotRadioGroup, RadioGroupProps } from '../../radio/RadioGroup';
import { getFieldValidation } from './validation';
import {
  DATA_CONTROLS,
  DATA_CONTROLS_WITHOUT_VALIDATION,
  INITIAL_STATE_ITEM,
} from '../constants';
import { DotSwitch } from '../../switch/Switch';
import {
  checkIfHiddenControl,
  getControlValue,
  getFormDataFromInitialValues,
} from './helpers';

type AutoCompleteChangeHandler = (
  controlName: string
) => (e: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue) => void;

type ChangeHandler = (
  controlName: string
) => (e: ChangeEvent<HTMLInputElement>) => void;

type CheckboxGroupChangeHandler = (
  controlName: string
) => (event: ChangeEvent<HTMLInputElement>, value: CheckboxProps[]) => void;

export interface InputBaseArgs {
  controlProps: DynamicFormControlProps;
  disabled?: boolean;
  index: number;
  liveValidation: boolean;
}

export interface ControlledInputArgs extends InputBaseArgs {
  controlName: string;
  formData: DynamicFormStateData;
  handleChange:
    | AutoCompleteChangeHandler
    | ChangeHandler
    | CheckboxGroupChangeHandler;
}

export interface UncontrolledInputArgs extends InputBaseArgs {
  formState?: DynamicFormState;
  handleClick?: (formValues?: DynamicFormOutputData) => void;
}

export const getInitialStateFromControl = (
  {
    hidden,
    initialValue,
    controlType,
    validation,
    formSection,
  }: DynamicFormControl,
  liveValidation: boolean,
  formValues: DynamicFormOutputData
): DynamicFormStateItem => {
  // Skip non-data controls (ignore buttons and other non-relevant elements)
  // or hidden elements
  if (!DATA_CONTROLS.includes(controlType)) return;

  const formStateItem: DynamicFormStateItem = { ...INITIAL_STATE_ITEM };

  if (hidden) formStateItem.hidden = hidden;
  if (initialValue !== null && initialValue !== undefined) {
    formStateItem.value = initialValue;

    if (liveValidation) {
      const isHidden = checkIfHiddenControl(hidden, formValues);
      formStateItem.isTouched = true;
      // Since it is hidden field we will mark valid field to true so that is doesn't
      // prevent form submission
      if (isHidden) {
        formStateItem.isValid = true;
      } else {
        const fieldValidation = getFieldValidation(
          initialValue,
          validation,
          formValues
        );
        formStateItem.isValid = fieldValidation.isValid;
        formStateItem.errorMessage = fieldValidation.errorMessage;
      }
    }
  }
  // If no validation always set valid to true
  if (!validation || DATA_CONTROLS_WITHOUT_VALIDATION.includes(controlType)) {
    // Set always to valid for now
    formStateItem.isValid = true;
  }
  return formStateItem;
};

export const getInitialFormState = (
  config: DynamicFormConfig,
  liveValidation: boolean
): DynamicFormState => {
  const formValues = getFormDataFromInitialValues(config);
  const initialState: DynamicFormState = {
    data: {},
    isValid: false,
  };
  config.controls.forEach((control: DynamicFormControl) => {
    const { formSection } = control;
    // Check if there are form section controls and grab initial state from those
    if (formSection && formSection.sectionControls) {
      formSection.sectionControls.forEach(
        (formSectionControl: DynamicFormControl) => {
          const { controlName: formSectionControlName } = formSectionControl;
          const sectionFormStateItem = getInitialStateFromControl(
            formSectionControl,
            liveValidation,
            formValues
          );
          if (!sectionFormStateItem) return;
          initialState.data[formSectionControlName] = sectionFormStateItem;
        }
      );
    }
    const { controlName } = control;
    const formStateItem = getInitialStateFromControl(
      control,
      liveValidation,
      formValues
    );
    if (!formStateItem) return;
    initialState.data[controlName] = formStateItem;
  });
  return initialState;
};

export const getControlClickHandler = (
  formValues: DynamicFormOutputData,
  onControlClick?: ControlClickHandler
) => {
  return onControlClick ? () => onControlClick(formValues) : undefined;
};

export const buildInputTextControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as InputTextProps;
  const value = getControlValue<string>(controlName, formData) || '';
  const errorMessage =
    controlName in formData && formData[controlName].errorMessage;
  const handleChangeFn = handleChange as ChangeHandler;
  return (
    <DotInputText
      key={index}
      {...props}
      disabled={disabled}
      error={!!errorMessage}
      helperText={errorMessage || props.helperText}
      onChange={handleChangeFn(controlName)}
      value={value}
    />
  );
};

export const buildInputSelectControl = ({
  controlName,
  controlProps,
  disabled,
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
      disabled={disabled}
      error={!!errorMessage}
      helperText={errorMessage || props.helperText}
      onChange={handleChangeFn(controlName)}
      value={value}
    />
  );
};

export const buildAutocompleteControl = ({
  controlName,
  controlProps,
  disabled,
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
      disabled={disabled}
      error={!!errorMessage}
      helperText={errorMessage || props.helperText}
      onChange={handleChangeFn(controlName)}
      value={value}
    />
  );
};

export const buildRadioGroupControl = ({
  controlName,
  controlProps,
  disabled,
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
      disableGroup={disabled}
      error={!!errorMessage}
      helperText={errorMessage || props.helperText}
      onChange={handleChangeFn(controlName)}
      value={value}
    />
  );
};

export const buildCheckboxControl = ({
  controlName,
  controlProps,
  disabled,
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
      disabled={disabled}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildCheckboxGroupControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as CheckboxGroupProps;
  const errorMessage = formData[controlName].errorMessage;
  const values = getControlValue<CheckboxProps[]>(controlName, formData) || [];
  const handleChangeFn = handleChange as CheckboxGroupChangeHandler;
  return (
    <DotCheckboxGroup
      key={index}
      {...props}
      defaultValues={values}
      disableGroup={disabled}
      error={!!errorMessage}
      helperText={errorMessage || props.helperText}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildSwitchControl = ({
  controlName,
  controlProps,
  disabled,
  formData,
  handleChange,
  index,
}: ControlledInputArgs) => {
  const props = controlProps as CheckboxGroupProps;
  const checked = getControlValue<boolean>(controlName, formData) || false;
  const handleChangeFn = handleChange as ChangeHandler;
  return (
    <DotSwitch
      key={index}
      {...props}
      checked={checked}
      disabled={disabled}
      onChange={handleChangeFn(controlName)}
    />
  );
};

export const buildButtonControl = ({
  controlProps,
  disabled,
  index,
  handleClick,
}: UncontrolledInputArgs) => {
  const props = controlProps as ButtonProps;
  const { onClick } = props;
  const handleButtonClick =
    onClick || handleClick
      ? (e: MouseEvent) => {
          props.onClick?.(e);
          handleClick?.();
        }
      : undefined;
  return (
    <DotButton
      key={index}
      {...props}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      {props.children}
    </DotButton>
  );
};

export const buildProgressButtonControl = ({
  controlProps,
  disabled,
  index,
  handleClick,
}: UncontrolledInputArgs) => {
  const props = controlProps as ProgressButtonProps;
  const { onClick } = props;
  const handleButtonClick =
    onClick || handleClick
      ? (e: MouseEvent) => {
          props.onClick?.(e);
          handleClick?.();
        }
      : undefined;
  return (
    <DotProgressButton
      key={index}
      {...props}
      disabled={disabled}
      onClick={handleButtonClick}
    />
  );
};

export const buildResetControl = ({
  controlProps,
  disabled,
  handleClick,
  index,
}: UncontrolledInputArgs) => {
  const props = controlProps as ButtonProps;
  return (
    <DotButton
      key={index}
      {...props}
      disabled={disabled}
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
  disabled,
  formState,
  index,
  liveValidation,
}: UncontrolledInputArgs) => {
  const props = controlProps as ButtonProps;
  const isDisabled = disabled || (liveValidation && !formState.isValid);
  return (
    <DotButton key={index} {...props} disabled={isDisabled} isSubmit={true}>
      {props.children}
    </DotButton>
  );
};

export const buildProgressSubmitControl = ({
  controlProps,
  disabled,
  formState,
  index,
  liveValidation,
}: UncontrolledInputArgs) => {
  const props = controlProps as ProgressButtonProps;
  const isDisabled = disabled || (liveValidation && !formState.isValid);
  return (
    <DotProgressButton
      key={index}
      {...props}
      disabled={isDisabled}
      isSubmit={true}
    />
  );
};
