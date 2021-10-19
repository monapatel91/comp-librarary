import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  Fragment,
} from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotForm } from '../form/Form';

import { AutoCompleteValue } from '../auto-complete/AutoComplete';
import {
  DynamicFormControl,
  DynamicFormConfig,
  DynamicFormState,
  DynamicFormStateData,
  FormStateUpdateArgs,
  DynamicFormOutputData,
  FieldValidation,
} from './models';
import {
  checkIfFormDataValid,
  getControlValidationFromConfig,
  getFieldValidation,
} from './validation';
import {
  buildAutocompleteControl,
  buildButtonControl,
  buildCheckboxControl,
  buildCheckboxGroupControl,
  buildInputSelectControl,
  buildInputTextControl,
  buildRadioGroupControl,
  buildResetControl,
  buildSubmitControl,
  buildSwitchControl,
  checkIfHiddenControl,
  getInitialFormState,
  getOutputFormData,
  InputBaseArgs,
} from './helpers';
import { CheckboxProps } from '../checkbox/Checkbox';

export interface DynamicFormProps extends CommonProps {
  disabled?: boolean;
  liveValidation?: boolean;
  onChange?: (formData: DynamicFormState) => void;
  onSubmit?: (formData: DynamicFormOutputData) => void;
  config: DynamicFormConfig;
}

export const DotDynamicForm = ({
  className,
  'data-testid': dataTestId,
  disabled,
  liveValidation = true,
  onChange,
  onSubmit,
  config,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const initialFormState = getInitialFormState(config, liveValidation);

  const [formState, setFormState] =
    useState<DynamicFormState>(initialFormState);

  useEffect(() => {
    // Skip if live validation is turned off
    if (!liveValidation) return;
    const currentIsFormValid = checkIfFormDataValid(formState.data);
    // Check if validity state has changed
    if (formState.isValid !== currentIsFormValid) {
      setFormState((prevState) => {
        const newState = {
          ...prevState,
          isValid: currentIsFormValid,
        };
        onChange?.(newState);
        return newState;
      });
    } else {
      onChange?.(formState);
    }
  }, [formState]);

  const getControlValidation = (
    controlName: string,
    controlValue: unknown,
    formConfig: DynamicFormConfig
  ): FieldValidation => {
    const validation = getControlValidationFromConfig(controlName, formConfig);
    const formValues = getOutputFormData(formState);
    const fieldValidation = getFieldValidation(
      controlValue,
      validation,
      formValues
    );
    return {
      isValid: fieldValidation.isValid,
      errorMessage: fieldValidation.errorMessage,
    };
  };

  const updateFormState = ({
    controlName,
    newValue,
    formConfig,
    validate = true,
  }: FormStateUpdateArgs) => {
    let fieldValidation = {};
    if (validate && liveValidation) {
      fieldValidation = getControlValidation(controlName, newValue, formConfig);
    }
    setFormState((prevFormState) => ({
      ...prevFormState,
      data: {
        ...prevFormState.data,
        [controlName]: {
          ...prevFormState.data[controlName],
          value: newValue,
          isTouched: true,
          ...fieldValidation,
        },
      },
    }));
  };

  const validateForm = (): boolean => {
    const newFormData: DynamicFormStateData = {};
    const formData = formState.data;
    let isValid = true;
    for (const formDataKey in formData) {
      const formControl = formData[formDataKey];
      const fieldValidation = getControlValidation(
        formDataKey,
        formControl.value,
        config
      );
      const isFieldValid = fieldValidation.isValid;
      newFormData[formDataKey] = {
        ...formControl,
        isValid: isFieldValid,
        errorMessage: fieldValidation.errorMessage,
      };
      if (!isFieldValid && isValid) {
        isValid = false;
      }
    }
    setFormState((prevState) => ({ ...prevState, data: newFormData }));
    return isValid;
  };

  const handleInputChange =
    (controlName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      updateFormState({ controlName, formConfig: config, newValue });
    };

  const handleCheckChange =
    (controlName: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.target.checked;
      updateFormState({
        controlName,
        formConfig: config,
        newValue,
        validate: false,
      });
    };

  const handleCheckboxGroupChange =
    (controlName: string) =>
    (e: ChangeEvent<HTMLInputElement>, value: CheckboxProps[]): void => {
      updateFormState({
        controlName,
        formConfig: config,
        newValue: value,
      });
    };

  const handleAutocompleteChange =
    (controlName: string) =>
    (_: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue): void => {
      updateFormState({ controlName, formConfig: config, newValue: value });
    };

  const handleReset = () => setFormState(initialFormState);

  const buildFormControls = () => {
    return config.controls.map(
      (
        {
          controlName,
          controlType,
          controlProps = {},
          customElement,
          hidden,
          initialValue,
        }: DynamicFormControl,
        index: number
      ) => {
        const inputControlName = controlName ? controlName : `control-${index}`;
        if (checkIfHiddenControl(hidden, formState.data)) return '';

        const control: InputBaseArgs = {
          controlProps,
          disabled,
          index,
          liveValidation,
        };

        switch (controlType) {
          case 'dot-input-text': {
            return buildInputTextControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleInputChange,
            });
          }
          case 'dot-input-select': {
            return buildInputSelectControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleInputChange,
            });
          }
          case 'dot-autocomplete': {
            return buildAutocompleteControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleAutocompleteChange,
            });
          }
          case 'dot-radio-group': {
            return buildRadioGroupControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleInputChange,
            });
          }
          case 'dot-checkbox': {
            return buildCheckboxControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleCheckChange,
            });
          }
          case 'dot-checkbox-group': {
            return buildCheckboxGroupControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleCheckboxGroupChange,
            });
          }
          case 'dot-switch': {
            return buildSwitchControl({
              ...control,
              controlName: inputControlName,
              formData: formState.data,
              handleChange: handleCheckChange,
            });
          }
          case 'dot-button': {
            return buildButtonControl({ ...control });
          }
          case 'dot-reset': {
            return buildResetControl({
              ...control,
              handleClick: handleReset,
            });
          }
          case 'dot-submit': {
            return buildSubmitControl({ ...control, formState });
          }
          case 'custom-element': {
            return <Fragment key={index}>{customElement}</Fragment>;
          }
          default: {
            return '';
          }
        }
      }
    );
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isFormValid = true;
    // If live validation is turned off we have to validate form before submitting it
    if (!liveValidation) {
      isFormValid = validateForm();
    }
    if (!isFormValid) return;
    const formOutputData = getOutputFormData(formState);
    onSubmit?.(formOutputData);
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={handleFormSubmit}>{buildFormControls()}</DotForm>
    </StyledDynamicForm>
  );
};
