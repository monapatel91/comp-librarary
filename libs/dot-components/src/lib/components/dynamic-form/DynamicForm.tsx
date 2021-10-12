import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import { CheckboxProps, DotCheckbox } from '../checkbox/Checkbox';
import { DotForm } from '../form/Form';
import { ButtonProps, DotButton } from '../button/Button';

export type DynamicFormControlType =
  | 'dot-input-text'
  | 'dot-checkbox'
  | 'dot-button'
  | 'dot-reset';

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
}

export interface DynamicFormStateItem {
  value: unknown;
  isValid: boolean;
  isTouched: boolean;
  errorMessage: string;
}

export interface DynamicFormState {
  [key: string]: DynamicFormStateItem;
}

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
    const initialState: DynamicFormState = {};
    schema.controls.forEach(
      ({ controlName, initialValue }: DynamicFormControl) => {
        initialState[controlName] = { ...initialStateItem };
        if (initialValue) {
          initialState[controlName].value = initialValue;
        }
      }
    );
    return initialState;
  };

  const [formData, setFormData] = useState<DynamicFormState>(getInitialState());

  const handleInputTextChange =
    (controlName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [controlName]: {
          ...prevFormData[controlName],
          value: e.target.value,
          isTouched: true,
        },
      }));
    };

  const handleCheckboxChange =
    (controlName: string) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [controlName]: {
          ...prevFormData[controlName],
          value: e.target.checked,
          isTouched: true,
        },
      }));
    };

  const handleReset = () => setFormData(getInitialState());

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
            const value = (formData[controlName].value as string) || '';
            return (
              <DotInputText
                key={index}
                {...props}
                value={value}
                onChange={handleInputTextChange(controlName)}
              />
            );
          }
          case 'dot-checkbox': {
            const props = controlProps as CheckboxProps;
            const checked = (formData[controlName].value as boolean) || false;
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
    onFormSubmit?.(formData);
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={handleFormSubmit}>{buildFormControls()}</DotForm>
    </StyledDynamicForm>
  );
};
