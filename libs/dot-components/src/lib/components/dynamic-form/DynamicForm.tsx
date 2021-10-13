import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import { CheckboxProps, DotCheckbox } from '../checkbox/Checkbox';
import { DotForm } from '../form/Form';
import { ButtonProps, DotButton } from '../button/Button';
import {
  DynamicFormControl,
  DynamicFormSchema,
  DynamicFormState,
  DynamicFormStateData,
  DynamicFormStateItem,
} from './models';
import { getFieldValidation } from './validation';

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
      ({ controlName, initialValue }: DynamicFormControl) => {
        initialState.data[controlName] = { ...initialStateItem };
        if (initialValue) {
          initialState.data[controlName].value = initialValue;
        }
      }
    );
    return initialState;
  };

  const [formState, setFormState] = useState<DynamicFormState>(
    getInitialState()
  );

  const checkIfFormDataValid = (formData: DynamicFormStateData): boolean => {
    for (const formDataKey in formData) {
      if (!formData[formDataKey].isValid) return false;
    }
    return true;
  };

  useEffect(() => {
    console.log(formState);
    const currentIsFormValid = checkIfFormDataValid(formState.data);
    if (formState.isValid !== currentIsFormValid) {
      setFormState((prevState) => ({
        ...prevState,
        isValid: currentIsFormValid,
      }));
    }
  }, [formState]);

  const handleInputTextChange =
    (controlName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const validation = schema.controls.find(
        (control) => control.controlName === controlName
      ).validation;
      const fieldValidation = getFieldValidation(newValue, validation);
      setFormState((prevFormState) => ({
        ...prevFormState,
        data: {
          ...prevFormState.data,
          [controlName]: {
            ...prevFormState.data[controlName],
            value: newValue,
            isTouched: true,
            isValid: fieldValidation.isValid,
            errorMessage: fieldValidation.errorMessage,
          },
        },
      }));
    };

  const handleCheckboxChange =
    (controlName: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      setFormState((prevFormState) => ({
        ...prevFormState,
        data: {
          ...prevFormState.data,
          [controlName]: {
            ...prevFormState.data[controlName],
            value: e.target.checked,
            isTouched: true,
          },
        },
      }));
    };

  const handleReset = () => setFormState(getInitialState());

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
            //const value = (formState.data[controlName].value as string) || '';
            const errorMessage = formState.data[controlName].errorMessage;
            console.log(errorMessage);
            return (
              <DotInputText
                key={index}
                {...props}
                error={!!errorMessage}
                helperText={errorMessage ? errorMessage : props.helperText}
                onChange={handleInputTextChange(controlName)}
              />
            );
          }
          case 'dot-checkbox': {
            const props = controlProps as CheckboxProps;
            const checked =
              (formState.data[controlName].value as boolean) || false;
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
