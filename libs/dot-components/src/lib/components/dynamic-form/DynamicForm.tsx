import React, {
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
  useState,
} from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDynamicForm } from './DynamicForm.styles';
import { DotForm } from '../form/Form';
import { AutoCompleteValue } from '../auto-complete/AutoComplete';
import {
  DynamicFormConfig,
  DynamicFormControl,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormStateData,
  FieldValidation,
  FormStateUpdateArgs,
} from './models';
import {
  checkIfFormDataValid,
  getControlValidationFromConfig,
  getFieldValidation,
} from './utils/validation';
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
  getInitialFormState,
  InputBaseArgs,
} from './utils/formHelpers';
import {
  checkIfDisabledControl,
  checkIfHiddenControl,
  getOutputFormData,
} from './utils/helpers';
import { CheckboxProps } from '../checkbox/Checkbox';

export interface DynamicFormProps extends CommonProps {
  config: DynamicFormConfig;
  disabled?: boolean;
  liveValidation?: boolean;
  onChange?: (formData: DynamicFormState) => void;
  onSubmit?: (formData: DynamicFormOutputData) => void;
}

export const DotDynamicForm = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  config,
  disabled: isFormDisabled,
  liveValidation = true,
  onChange,
  onSubmit,
}: DynamicFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const initialFormState = getInitialFormState(config, liveValidation);

  const [formState, setFormState] =
    useState<DynamicFormState>(initialFormState);

  useEffect(() => {
    // Skip if live validation is turned off
    if (!liveValidation) return;
    const currentIsFormValid = checkIfFormDataValid(formState);
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

  const handleAutocompleteChange =
    (controlName: string) =>
    (_event: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue): void => {
      updateFormState({ controlName, formConfig: config, newValue: value });
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

  const handleInputChange =
    (controlName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      updateFormState({ controlName, formConfig: config, newValue });
    };

  const handleReset = () => setFormState(initialFormState);

  const buildFormControls = (
    controls: DynamicFormControl[],
    startIndex = 0
  ) => {
    if (!controls || !controls.length) return;
    return controls.map(
      (
        {
          controlName,
          controlType,
          controlProps = {},
          customElement,
          disabled,
          hidden,
          initialValue,
          controlsWrapper,
        }: DynamicFormControl,
        index: number
      ) => {
        const elementIndex = startIndex + index;
        const inputControlName = controlName || `control-${elementIndex}`;
        const formValues = getOutputFormData(formState);

        if (checkIfHiddenControl(hidden, formValues)) return '';

        // Control can be disabled when: 1) whole form is disabled, 2.) control is disabled via config prop
        // 3.) control is disabled via its own `disable` control prop
        const isDisabled =
          isFormDisabled ||
          checkIfDisabledControl(disabled, formValues) ||
          ('disabled' in controlProps && controlProps.disabled);

        const control: InputBaseArgs = {
          controlProps,
          disabled: isDisabled,
          index: elementIndex,
          liveValidation,
        };

        const commonControlledInputArgs = {
          ...control,
          controlName: inputControlName,
          formData: formState.data,
        };

        switch (controlType) {
          case 'dot-input-text': {
            return buildInputTextControl({
              ...commonControlledInputArgs,
              handleChange: handleInputChange,
            });
          }
          case 'dot-input-select': {
            return buildInputSelectControl({
              ...commonControlledInputArgs,
              handleChange: handleInputChange,
            });
          }
          case 'dot-autocomplete': {
            return buildAutocompleteControl({
              ...commonControlledInputArgs,
              handleChange: handleAutocompleteChange,
            });
          }
          case 'dot-radio-group': {
            return buildRadioGroupControl({
              ...commonControlledInputArgs,
              handleChange: handleInputChange,
            });
          }
          case 'dot-checkbox': {
            return buildCheckboxControl({
              ...commonControlledInputArgs,
              handleChange: handleCheckChange,
            });
          }
          case 'dot-checkbox-group': {
            return buildCheckboxGroupControl({
              ...commonControlledInputArgs,
              handleChange: handleCheckboxGroupChange,
            });
          }
          case 'dot-switch': {
            return buildSwitchControl({
              ...commonControlledInputArgs,
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
            return <Fragment key={elementIndex}>{customElement}</Fragment>;
          }
          case 'controls-wrapper': {
            const { WrapperComponent, controlsToWrap } = controlsWrapper;
            const wrapperStartIndex = elementIndex + 1;
            return (
              <WrapperComponent key={elementIndex}>
                {buildFormControls(controlsToWrap, wrapperStartIndex)}
              </WrapperComponent>
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
      <DotForm ariaLabel={ariaLabel} onSubmit={handleFormSubmit}>
        {buildFormControls(config.controls)}
      </DotForm>
    </StyledDynamicForm>
  );
};
