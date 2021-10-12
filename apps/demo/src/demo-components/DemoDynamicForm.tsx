import React from 'react';
import {
  CheckboxProps,
  DotDynamicForm,
  ButtonProps,
  InputTextProps,
  DynamicFormSchema,
  DynamicFormState,
} from '@digital-ai/dot-components';
import { rootClassName, StyledDemoDynamicForm } from './DemoDynamicForm.styles';

export const DemoDynamicForm = () => {
  const schema: DynamicFormSchema = {
    controls: [
      {
        controlName: 'firstName',
        controlType: 'dot-input-text',
        controlProps: {
          label: 'First Name',
          autoFocus: true,
          required: true,
        } as InputTextProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'isMandatory',
        controlType: 'dot-checkbox',
        controlProps: {
          label: 'Is Mandatory',
          className: 'is-mandatory',
        } as CheckboxProps,
      },
      {
        controlName: 'btnReset',
        controlType: 'dot-button',
        controlProps: {
          type: 'text',
          isSubmit: false,
          children: 'Reset',
          fullWidth: false,
        } as ButtonProps,
      },
      {
        controlName: 'btnSubmit',
        controlType: 'dot-button',
        controlProps: {
          type: 'primary',
          isSubmit: true,
          children: 'Submit form',
          fullWidth: false,
        } as ButtonProps,
      },
    ],
  };

  const handleFormSubmit = (formData: DynamicFormState) => {
    console.log(formData);
  };

  return (
    <StyledDemoDynamicForm className={rootClassName}>
      <DotDynamicForm schema={schema} onFormSubmit={handleFormSubmit} />
    </StyledDemoDynamicForm>
  );
};
