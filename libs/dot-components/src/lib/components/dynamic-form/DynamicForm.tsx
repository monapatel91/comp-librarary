import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import { CheckboxProps, DotCheckbox } from '../checkbox/Checkbox';
import { DotForm } from '../form/Form';
import { ButtonProps, DotButton } from '../button/Button';
import {
  AutoCompleteProps,
  AutoCompleteValue,
  DotAutoComplete,
} from '../auto-complete/AutoComplete';
import {
  DynamicFormControl,
  DynamicFormControlType,
  DynamicFormSchema,
  DynamicFormState,
  DynamicFormStateData,
  DynamicFormStateItem,
  FormStateUpdateArgs,
} from './models';
import {
  checkIfFormDataValid,
  getControlValidationFromSchema,
  getFieldValidation,
} from './validation';

const initialStateItem: DynamicFormStateItem = {
  value: null,
  isValid: false,
  isTouched: false,
  errorMessage: null,
};

export interface DynamicFormProps extends CommonProps {
  onFormSubmit?: (formData: DynamicFormState) => void;
  schema: DynamicFormSchema;
}

export const DotDynamicForm = ({
  className,
  'data-testid': dataTestId,
  onFormSubmit,
  schema,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const getInitialState = () => {
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
        const dataControls: DynamicFormControlType[] = [
          'dot-autocomplete',
          'dot-input-text',
          'dot-checkbox',
        ];
        // Set only data controls (ignore buttons and other non-relevant elements)
        if (dataControls.includes(controlType)) {
          initialState.data[controlName] = { ...initialStateItem };
          if (initialValue) {
            initialState.data[controlName].value = initialValue;
          }
          // If there is no validation set up always set valid to true
          if (!validation || controlType === 'dot-checkbox') {
            // Set always to valid for now
            initialState.data[controlName].isValid = true;
          }
        }
      }
    );
    return initialState;
  };

  const [formState, setFormState] = useState<DynamicFormState>(
    getInitialState()
  );

  useEffect(() => {
    console.log(formState);
    const currentIsFormValid = checkIfFormDataValid(formState.data);
    if (formState.isValid !== currentIsFormValid) {
      setFormState((prevState) => ({
        ...prevState,
        isValid: currentIsFormValid,
      }));
    }
  }, [formState.data]);

  const updateFormState = ({
    controlName,
    newValue,
    formSchema,
    validate = true,
  }: FormStateUpdateArgs) => {
    let validationFields = {};
    if (validate) {
      const validation = getControlValidationFromSchema(
        controlName,
        formSchema
      );
      const fieldValidation = getFieldValidation(newValue, validation);
      validationFields = {
        isValid: fieldValidation.isValid,
        errorMessage: fieldValidation.errorMessage,
      };
    }
    setFormState((prevFormState) => ({
      ...prevFormState,
      data: {
        ...prevFormState.data,
        [controlName]: {
          ...prevFormState.data[controlName],
          value: newValue,
          isTouched: true,
          ...validationFields,
        },
      },
    }));
  };

  const handleInputTextChange =
    (controlName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      updateFormState({ controlName, formSchema: schema, newValue });
    };

  const handleCheckboxChange =
    (controlName: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.target.checked;
      updateFormState({
        controlName,
        formSchema: schema,
        newValue,
        validate: false,
      });
    };

  const handleAutocompleteChange =
    (controlName: string) =>
    (_: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue): void => {
      updateFormState({ controlName, formSchema: schema, newValue: value });
    };

  const handleReset = () => setFormState(getInitialState());

  const getControlValue = <T extends unknown>(
    controlName: string,
    data: DynamicFormStateData
  ): T => {
    return data[controlName].value as T;
  };

  const buildFormControls = () => {
    return schema.controls.map(
      (
        {
          controlName,
          controlType,
          controlProps,
          initialValue,
        }: DynamicFormControl,
        index: number
      ) => {
        switch (controlType) {
          case 'dot-input-text': {
            const props = controlProps as InputTextProps;
            const value =
              getControlValue<string>(controlName, formState.data) || '';
            const errorMessage = formState.data[controlName].errorMessage;
            return (
              <DotInputText
                key={index}
                {...props}
                value={value}
                error={!!errorMessage}
                helperText={errorMessage ? errorMessage : props.helperText}
                onChange={handleInputTextChange(controlName)}
              />
            );
          }
          case 'dot-autocomplete': {
            const props = controlProps as AutoCompleteProps;
            const value =
              getControlValue<AutoCompleteValue>(controlName, formState.data) ||
              [];
            const errorMessage = formState.data[controlName].errorMessage;
            return (
              <DotAutoComplete
                key={index}
                {...props}
                value={value}
                error={!!errorMessage}
                helperText={errorMessage ? errorMessage : props.helperText}
                onChange={handleAutocompleteChange(controlName)}
              />
            );
          }
          case 'dot-checkbox': {
            const props = controlProps as CheckboxProps;
            const checked =
              getControlValue<boolean>(controlName, formState.data) || false;
            return (
              <DotCheckbox
                key={index}
                {...props}
                checked={checked}
                onChange={handleCheckboxChange(controlName)}
              />
            );
          }
          case 'dot-button': {
            const props = controlProps as ButtonProps;
            return (
              <DotButton key={index} {...props}>
                {props.children}
              </DotButton>
            );
          }
          case 'dot-reset': {
            const props = controlProps as ButtonProps;
            return (
              <DotButton key={index} {...props} onClick={handleReset}>
                {props.children}
              </DotButton>
            );
          }
          case 'dot-submit': {
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
    onFormSubmit?.(formState);
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={handleFormSubmit}>{buildFormControls()}</DotForm>
    </StyledDynamicForm>
  );
};
