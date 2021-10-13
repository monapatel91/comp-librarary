import React from 'react';
import {
  CheckboxProps,
  DotDynamicForm,
  ButtonProps,
  InputTextProps,
  DynamicFormSchema,
  DynamicFormState,
  DotBreadcrumbs,
  DotActionToolbar,
  DotIcon,
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
          helperText: 'Your first name goes here',
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
        controlName: 'middleName',
        controlType: 'dot-input-text',
        controlProps: {
          label: 'Middle Name',
        } as InputTextProps,
      },
      {
        controlName: 'lastName',
        controlType: 'dot-input-text',
        controlProps: {
          label: 'Last Name',
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
        controlName: 'password',
        controlType: 'dot-input-text',
        controlProps: {
          label: 'Password',
          required: true,
          type: 'password',
          endIcon: <DotIcon iconId="visibility-off" />,
        } as InputTextProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          minLength: {
            errorMessage: 'Minimum of 6 characters required',
            value: 6,
          },
          maxLength: {
            errorMessage: 'Password cannot be longer than 15 characters',
            value: 15,
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
        controlType: 'dot-reset',
        controlProps: {
          type: 'text',
          isSubmit: false,
          children: 'Reset',
          fullWidth: false,
        } as ButtonProps,
      },
      {
        controlName: 'btnSubmit',
        controlType: 'dot-submit',
        controlProps: {
          type: 'primary',
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
      <DotActionToolbar>
        <DotBreadcrumbs items={[{ text: 'Demo Dynamic Form' }]} />
      </DotActionToolbar>

      <DotDynamicForm schema={schema} onFormSubmit={handleFormSubmit} />
    </StyledDemoDynamicForm>
  );
};
