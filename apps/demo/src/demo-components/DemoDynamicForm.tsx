import React from 'react';
import { CheckboxProps, DotDynamicForm } from '@digital-ai/dot-components';
import { DynamicFormSchema } from '../../../../libs/dot-components/src/lib/components/dynamic-form/DynamicForm';
import { InputTextProps } from '../../../../libs/dot-components/src/lib/components/input-form-fields/InputText';

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
        } as CheckboxProps,
      },
    ],
  };

  return <DotDynamicForm schema={schema} />;
};
