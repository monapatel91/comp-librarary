import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import {
  AutoCompleteProps,
  ButtonProps,
  CheckboxGroupProps,
  CheckboxProps,
  DotActionToolbar,
  DotBreadcrumbs,
  DotDynamicForm,
  DotIcon,
  DotSwitch,
  DynamicFormConfig,
  DynamicFormOutputData,
  DynamicFormState,
  FieldValidation,
  InputSelectProps,
  InputTextProps,
  RadioGroupProps,
} from '@digital-ai/dot-components';
import { rootClassName, StyledDemoDynamicForm } from './DemoDynamicForm.styles';

export const DemoDynamicForm = () => {
  const config: DynamicFormConfig = {
    controls: [
      {
        controlName: 'firstName',
        controlProps: {
          autoFocus: true,
          helperText: 'Your first name goes here',
          label: 'First Name',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'hasMiddleName',
        controlProps: {
          'data-testid': 'hasMiddleName',
          defaultValue: 'no',
          groupLabel: 'Do you have middle name?',
          id: 'hasMiddleName',
          name: 'hasMiddleName',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ],
          required: true,
        } as RadioGroupProps,
        controlType: 'dot-radio-group',
        initialValue: 'no',
      },
      {
        controlName: 'middleName',
        controlProps: {
          label: 'Middle Name',
        } as InputTextProps,
        controlType: 'dot-input-text',
        hidden: (formValues: DynamicFormOutputData) =>
          formValues['hasMiddleName'] === 'no',
      },
      {
        controlName: 'lastName',
        controlProps: {
          label: 'Last Name',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
        validation: {
          isRequired: {
            condition: (formValues: DynamicFormOutputData) =>
              formValues['hasMiddleName'] === 'no',
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'username',
        controlProps: {
          label: 'Username',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
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
        controlProps: {
          endIcon: <DotIcon iconId="visibility-off" />,
          label: 'Password',
          required: true,
          type: 'password',
        } as InputTextProps,
        controlType: 'dot-input-text',
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
        controlType: 'dot-autocomplete',
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
        controlProps: {
          groupLabel: 'I would like to receive',
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
          required: true,
        } as CheckboxGroupProps,
        controlType: 'dot-checkbox-group',
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
        controlProps: {
          id: 'devType',
          label: 'Dev Type',
          name: 'devType',
          required: true,
          size: 'small',
          options: ['', 'React Dev', 'Angular Dev', 'Other Dev'],
        } as InputSelectProps,
        controlType: 'dot-input-select',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'superHero',
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
        controlType: 'dot-radio-group',
      },
      {
        controlName: 'isMandatory',
        controlProps: {
          label: 'Is Mandatory',
        } as CheckboxProps,
        controlType: 'dot-switch',
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
        controlProps: {
          children: 'Reset',
          fullWidth: false,
          isSubmit: false,
          type: 'text',
        } as ButtonProps,
        controlType: 'dot-reset',
      },
      {
        controlName: 'btnSubmit',
        controlProps: {
          children: 'Submit form',
          fullWidth: false,
          type: 'primary',
        } as ButtonProps,
        controlType: 'dot-submit',
      },
    ],
  };

  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [hasLiveValidation, setHasLiveValidation] = useState(false);

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

      <div className="options">
        <DotSwitch
          label="Disable form"
          checked={isFormDisabled}
          onChange={() => setIsFormDisabled((prevState) => !prevState)}
        />
        <DotSwitch
          label="Live validation"
          checked={hasLiveValidation}
          onChange={() => setHasLiveValidation((prevState) => !prevState)}
        />
      </div>

      <Divider />

      <DotDynamicForm
        disabled={isFormDisabled}
        liveValidation={hasLiveValidation}
        config={config}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </StyledDemoDynamicForm>
  );
};
