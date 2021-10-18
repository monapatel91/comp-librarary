import React from 'react';
import {
  AutoCompleteProps,
  CheckboxProps,
  CheckboxGroupProps,
  DotDynamicForm,
  ButtonProps,
  InputTextProps,
  DynamicFormSchema,
  DynamicFormState,
  DotBreadcrumbs,
  DotActionToolbar,
  DotIcon,
  FieldValidation,
  InputSelectProps,
  RadioGroupProps,
} from '@digital-ai/dot-components';
import { rootClassName, StyledDemoDynamicForm } from './DemoDynamicForm.styles';
import { Divider } from '@material-ui/core';
import { DynamicFormOutputData } from '../../../../libs/dot-components/src/lib/components/dynamic-form/helpers';

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
        controlName: 'hasMiddleName',
        controlType: 'dot-radio-group',
        controlProps: {
          id: 'hasMiddleName',
          name: 'hasMiddleName',
          groupLabel: 'Do you have middle name?',
          required: true,
          defaultValue: 'no',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ],
        } as RadioGroupProps,
        initialValue: 'no',
      },
      {
        controlName: 'middleName',
        controlType: 'dot-input-text',
        controlProps: {
          label: 'Middle Name',
        } as InputTextProps,
        hidden: [{ controlName: 'hasMiddleName', controlValue: 'no' }],
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
        controlName: 'username',
        controlType: 'dot-input-text',
        controlProps: {
          label: 'Username',
          required: true,
        } as InputTextProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          customValidator: (value: string): FieldValidation => {
            // Examples of taken usernames to validate against
            const takenUsernames = ['username', 'john', 'mark'];
            if (takenUsernames.includes(value)) {
              return {
                isValid: false,
                errorMessage: 'Username is already taken',
              };
            }
            return {
              isValid: true,
              errorMessage: null,
            };
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
        controlName: 'randomOption',
        controlType: 'dot-autocomplete',
        controlProps: {
          label: 'Random option',
          options: [
            { title: 'Option 1' },
            { title: 'Option 2' },
            { title: 'Option 3' },
            { title: 'Option 4' },
            { title: 'Option 5' },
          ],
        } as AutoCompleteProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          minLength: {
            errorMessage: 'Pick at least 2 options',
            value: 2,
          },
          maxLength: {
            errorMessage: 'Maximum of 4 options allowed',
            value: 4,
          },
        },
      },
      {
        controlName: 'receive',
        controlType: 'dot-checkbox-group',
        controlProps: {
          groupLabel: 'I would like to receive',
          required: true,
          options: [
            {
              label: 'Notification of new releases',
              value: 'releases',
            },
            {
              label: 'Concert schedule information',
              value: 'concerts',
            },
            { label: 'A free poster', value: 'poster' },
          ],
        } as CheckboxGroupProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          minLength: {
            errorMessage: 'Pick at least 2 options',
            value: 2,
          },
        },
      },
      {
        controlName: 'superheroes',
        controlType: 'dot-input-select',
        controlProps: {
          id: 'devType',
          label: 'Dev Type',
          name: 'devType',
          required: true,
          size: 'small',
          options: ['', 'React Dev', 'Angular Dev', 'Other Dev'],
        } as InputSelectProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'superHero',
        controlType: 'dot-radio-group',
        controlProps: {
          id: 'superHero',
          name: 'superHero',
          groupLabel: 'Select Your Favorite Superhero',
          required: true,
          defaultValue: 'None',
          options: [
            { label: 'None', value: 'None' },
            { label: 'Batman', value: 'Batman' },
            { label: 'Superman', value: 'Superman' },
            { label: 'Spiderman', value: 'Spiderman' },
          ],
        } as RadioGroupProps,
      },
      {
        controlName: 'isMandatory',
        controlType: 'dot-checkbox',
        controlProps: {
          label: 'Is Mandatory',
          className: 'is-mandatory',
        } as CheckboxProps,
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlType: 'custom-element',
        customElement: <Divider className="divider" />,
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

  const handleSubmit = (formData: DynamicFormOutputData) => {
    console.log(formData);
  };

  const handleChange = (formData: DynamicFormState) => {
    console.log(formData);
  };

  return (
    <StyledDemoDynamicForm className={rootClassName}>
      <DotActionToolbar>
        <DotBreadcrumbs items={[{ text: 'Demo Dynamic Form' }]} />
      </DotActionToolbar>

      <DotDynamicForm
        liveValidation={false}
        schema={schema}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </StyledDemoDynamicForm>
  );
};
