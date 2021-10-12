import React, { ChangeEvent, useEffect, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import { CheckboxProps, DotCheckbox } from '../checkbox/Checkbox';
import { DotForm } from '../form/Form';

export type DynamicFormControlType = 'dot-input-text' | 'dot-checkbox';

export type DynamicFormControlProps = InputTextProps | CheckboxProps;

export interface DynamicFormControl {
  controlName: string;
  controlType: DynamicFormControlType;
  controlProps: DynamicFormControlProps;
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

export interface DynamicFormProps extends CommonProps {
  schema: DynamicFormSchema;
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

export const DotDynamicForm = ({
  className,
  'data-testid': dataTestId,
  schema,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const getInitialState = () => {
    const initialState: DynamicFormState = {};
    schema.controls.forEach(({ controlName }: DynamicFormControl) => {
      initialState[controlName] = initialStateItem;
    });
    return initialState;
  };

  const [formData, setFormData] = useState<DynamicFormState>(getInitialState());

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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

  const buildFormControls = () => {
    return schema.controls.map(
      (
        { controlName, controlType, controlProps }: DynamicFormControl,
        index: number
      ) => {
        switch (controlType) {
          case 'dot-input-text': {
            const props = controlProps as InputTextProps;
            return (
              <DotInputText
                key={index}
                {...props}
                onChange={handleInputTextChange(controlName)}
              />
            );
          }
          case 'dot-checkbox': {
            const props = controlProps as CheckboxProps;
            return (
              <DotCheckbox
                key={index}
                {...props}
                onChange={handleCheckboxChange(controlName)}
              />
            );
          }
          default: {
            return '';
          }
        }
      }
    );
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={() => console.log('submitted...')}>
        {buildFormControls()}
      </DotForm>
    </StyledDynamicForm>
  );
};
