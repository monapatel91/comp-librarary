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
  DynamicFormControlType,
  DynamicFormSchema,
  DynamicFormState,
  DynamicFormStateItem,
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
} from './helpers';
import { CheckboxProps } from '../checkbox/Checkbox';

const initialStateItem: DynamicFormStateItem = {
  value: null,
  isValid: false,
  isTouched: false,
  errorMessage: null,
};

export interface DynamicFormProps extends CommonProps {
  onChange?: (formData: DynamicFormState) => void;
  onSubmit?: (formData: DynamicFormState) => void;
  schema: DynamicFormSchema;
}

/* Array of control types for which we manage form state */
const DATA_CONTROLS: DynamicFormControlType[] = [
  'dot-autocomplete',
  'dot-input-text',
  'dot-input-select',
  'dot-checkbox',
  'dot-checkbox-group',
  'dot-radio-group',
];

/* Array of control types for which don't have error state so validation doesn't make any sense */
const DATA_CONTROLS_WITHOUT_VALIDATION: DynamicFormControlType[] = [
  'dot-checkbox',
];

export const DotDynamicForm = ({
  className,
  'data-testid': dataTestId,
  onChange,
  onSubmit,
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
        // Set only data controls (ignore buttons and other non-relevant elements)
        if (DATA_CONTROLS.includes(controlType)) {
          initialState.data[controlName] = { ...initialStateItem };
          if (initialValue) {
            initialState.data[controlName].value = initialValue;
            initialState.data[controlName].isTouched = true;
            const fieldValidation = getFieldValidation(
              initialValue,
              validation
            );
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

  const [formState, setFormState] = useState<DynamicFormState>(
    getInitialState()
  );

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

  const handleReset = () => setFormState(getInitialState());

  const buildFormControls = () => {
    return schema.controls.map(
      (
        {
          controlName,
          controlType,
          controlProps = {},
          customElement,
          initialValue,
        }: DynamicFormControl,
        index: number
      ) => {
        const inputControlName = controlName ? controlName : `control-${index}`;
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
    onSubmit?.(formState);
  };

  return (
    <StyledDynamicForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={handleFormSubmit}>{buildFormControls()}</DotForm>
    </StyledDynamicForm>
  );
};
