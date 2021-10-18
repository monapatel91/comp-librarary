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
  DynamicFormSchema,
  DynamicFormState,
  FormStateUpdateArgs,
} from './models';
import {
  checkIfFormDataValid,
  getControlValidationFromSchema,
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
  checkIfHiddenControl,
  DynamicFormOutputData,
  getInitialFormState,
  getOutputFormData,
} from './helpers';
import { CheckboxProps } from '../checkbox/Checkbox';

export interface DynamicFormProps extends CommonProps {
  onChange?: (formData: DynamicFormState) => void;
  onSubmit?: (formData: DynamicFormOutputData) => void;
  schema: DynamicFormSchema;
}

export const DotDynamicForm = ({
  className,
  'data-testid': dataTestId,
  onChange,
  onSubmit,
  schema,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const initialFormState = getInitialFormState(schema);

  const [formState, setFormState] =
    useState<DynamicFormState>(initialFormState);

  useEffect(() => {
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

  const handleInputChange =
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

  const handleCheckboxGroupChange =
    (controlName: string) =>
    (e: ChangeEvent<HTMLInputElement>, value: CheckboxProps[]): void => {
      updateFormState({
        controlName,
        formSchema: schema,
        newValue: value,
      });
    };

  const handleAutocompleteChange =
    (controlName: string) =>
    (_: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue): void => {
      updateFormState({ controlName, formSchema: schema, newValue: value });
    };

  const handleReset = () => setFormState(initialFormState);

  const buildFormControls = () => {
    return schema.controls.map(
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
        switch (controlType) {
          case 'dot-input-text': {
            return buildInputTextControl({
              controlName: inputControlName,
              controlProps,
              formData: formState.data,
              index,
              handleChange: handleInputChange,
            });
          }
          case 'dot-input-select': {
            return buildInputSelectControl({
              controlName: inputControlName,
              controlProps,
              formData: formState.data,
              index,
              handleChange: handleInputChange,
            });
          }
          case 'dot-autocomplete': {
            return buildAutocompleteControl({
              controlName: inputControlName,
              controlProps,
              formData: formState.data,
              index,
              handleChange: handleAutocompleteChange,
            });
          }
          case 'dot-radio-group': {
            return buildRadioGroupControl({
              controlName: inputControlName,
              controlProps,
              formData: formState.data,
              index,
              handleChange: handleInputChange,
            });
          }
          case 'dot-checkbox': {
            return buildCheckboxControl({
              controlName: inputControlName,
              controlProps,
              formData: formState.data,
              index,
              handleChange: handleCheckboxChange,
            });
          }
          case 'dot-checkbox-group': {
            return buildCheckboxGroupControl({
              controlName: inputControlName,
              controlProps,
              formData: formState.data,
              index,
              handleChange: handleCheckboxGroupChange,
            });
          }
          case 'dot-button': {
            return buildButtonControl({ controlProps, index });
          }
          case 'dot-reset': {
            return buildResetControl({
              controlProps,
              handleClick: handleReset,
              index,
            });
          }
          case 'dot-submit': {
            return buildSubmitControl({ controlProps, formState, index });
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
    const formOutputData = getOutputFormData(formState);
    onSubmit?.(formOutputData);
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={handleFormSubmit}>{buildFormControls()}</DotForm>
    </StyledDynamicForm>
  );
};
