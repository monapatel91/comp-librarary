import React from 'react';
import { Divider } from '@material-ui/core';
import {
  ControlClickHandler,
  DynamicFormConfig,
  DynamicFormOutputData,
  FieldValidation,
  DynamicFormSectionProps,
} from './models';
import { InputTextProps } from '../input-form-fields/InputText';
import { RadioGroupProps } from '../radio/RadioGroup';
import { DotIcon } from '../icon/Icon';
import { AutoCompleteProps } from '../auto-complete/AutoComplete';
import { CheckboxGroupProps } from '../checkbox/CheckboxGroup';
import { InputSelectProps } from '../input-form-fields/InputSelect';
import { CheckboxProps } from '../checkbox/Checkbox';
import { ButtonProps } from '../button/Button';
import { ProgressButtonProps } from '../progress-button/ProgressButton';

export const getDynamicFormConfig = (
  handleProgressControlClick?: ControlClickHandler
): DynamicFormConfig => {
  const handleTestButtonClick = handleProgressControlClick
    ? handleProgressControlClick
    : (formValues: DynamicFormOutputData) => {
        alert('testing in progress....');
        console.log(formValues);
      };

  return {
    controls: [
      {
        controlName: 'firstName',
        controlProps: {
          autoFocus: true,
          'data-testid': 'firstName',
          helperText:
            'Your first name goes here (at least 2 characters required)',
          label: 'First Name',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          minLength: {
            value: 2,
            errorMessage: 'At least 2 characters required',
          },
        },
      },
      {
        controlName: 'lastName',
        controlProps: {
          'data-testid': 'lastName',
          helperText:
            'Your last name goes here (at least 2 characters required)',
          label: 'Last Name',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          minLength: {
            value: 2,
            errorMessage: 'At least 2 characters required',
          },
        },
      },
      {
        controlName: 'gender',
        controlProps: {
          'data-testid': 'gender',
          id: 'gender',
          name: 'gender',
          groupLabel: 'Select Gender',
          required: true,
          defaultValue: 'male',
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ],
        } as RadioGroupProps,
        controlType: 'dot-radio-group',
        initialValue: 'male',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'username',
        controlProps: {
          'data-testid': 'username',
          helperText:
            "Any string between 2 and 8 characters ('john' and 'mark') are already taken",
          label: 'Username',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
          minLength: {
            value: 2,
            errorMessage: 'At least 2 characters required',
          },
          maxLength: {
            value: 8,
            errorMessage: 'Please enter no more than 8 characters',
          },
          customValidator: (value: string): FieldValidation => {
            // Examples of taken usernames to validate against
            const takenUsernames = ['john', 'mark'];
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
          'data-testid': 'password',
          endIcon: <DotIcon iconId="visibility-off" />,
          helperText: 'Any string between 6 and 15 characters',
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
        controlName: 'userType',
        controlProps: {
          'data-testid': 'userType',
          helperText:
            "Select predefined type or 'Other' to display custom type textbox",
          id: 'userType',
          label: 'User Type',
          name: 'userType',
          required: true,
          size: 'small',
          options: ['', 'Basic user', 'Administrator', 'Other'],
        } as InputSelectProps,
        controlType: 'dot-input-select',
        initialValue: 'Basic user',
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'customUserType',
        controlType: 'dot-input-text',
        controlProps: {
          'data-testid': 'customUserType',
          label: 'Custom user type',
          required: true,
        } as InputTextProps,
        hidden: (formValues: DynamicFormOutputData) =>
          formValues['userType'] !== 'Other',
        validation: {
          isRequired: {
            condition: (formValues: DynamicFormOutputData) =>
              formValues['userType'] === 'Other',
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlName: 'interests',
        controlProps: {
          'data-testid': 'interests',
          helperText: 'Pick at least two interests',
          label: 'My interests',
          options: [
            { title: 'Programming' },
            { title: 'Hiking' },
            { title: 'Breathing' },
            { title: 'Swimming' },
            { title: 'Dancing' },
          ],
        } as AutoCompleteProps,
        controlType: 'dot-autocomplete',
        initialValue: [{ title: 'Breathing' }],
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
        controlName: 'hasVehicle',
        controlProps: {
          'data-testid': 'hasVehicle',
          id: 'hasVehicle',
          name: 'hasVehicle',
          groupLabel: 'Do you own a vehicle?',
          defaultValue: 'no',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ],
        } as RadioGroupProps,
        controlType: 'dot-radio-group',
        initialValue: 'no',
      },
      {
        controlName: 'vehicleModel',
        controlProps: {
          'data-testid': 'vehicleModel',
          label: 'Vehicle Model',
          required: true,
        } as InputTextProps,
        controlType: 'dot-input-text',
        disabled: (formValues: DynamicFormOutputData) =>
          formValues['hasVehicle'] === 'no',
      },
      {
        controlName: 'receive',
        controlProps: {
          'data-testid': 'receive',
          groupLabel: 'I would like to receive',
          helperText: 'Pick at least two options',
          options: [
            {
              label: 'New products notifications',
              value: 'products',
            },
            {
              label: 'Personal info change notifications',
              value: 'personal',
            },
            { label: 'New message notifications', value: 'message' },
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
            errorMessage: 'Please pick at least 2 options',
            value: 2,
          },
        },
      },

      {
        controlName: 'isAccountActive',
        controlProps: {
          'data-testid': 'isActive',
          label: 'Is Active Account',
        } as CheckboxProps,
        controlType: 'dot-switch',
        /* This will be ignored because there is no support for dot-switch validation */
        validation: {
          isRequired: {
            errorMessage: 'Required field',
            value: true,
          },
        },
      },
      {
        controlType: 'custom-element',
        customElement: <br data-testid="customElement" />,
      },
      {
        controlType: 'dot-form-section',
        formSection: {
          FormSectionComponent: ({
            sectionControls,
          }: DynamicFormSectionProps) => {
            return (
              <div className="terms" data-testid="form-section-terms">
                {sectionControls}
              </div>
            );
          },
          sectionControls: [
            {
              controlName: 'terms',
              controlType: 'dot-checkbox',
              controlProps: {
                'data-testid': 'terms',
                label: 'I agree to terms and conditions',
              } as CheckboxProps,
              initialValue: false,
            },
            {
              controlType: 'custom-element',
              customElement: (
                <DotIcon
                  iconId="info-solid"
                  tooltip="Please read terms and conditions carefully"
                />
              ),
            },
          ],
        },
      },
      {
        controlType: 'custom-element',
        customElement: (
          <Divider className="divider" style={{ margin: '32px 0' }} />
        ),
      },
      {
        controlType: 'dot-form-section',
        formSection: {
          FormSectionComponent: ({
            sectionControls,
          }: DynamicFormSectionProps) => {
            return (
              <div className="form-section-component">{sectionControls}</div>
            );
          },
          sectionControls: [
            {
              controlName: 'btnTest',
              controlProps: {
                children: 'Test',
                fullWidth: false,
                startIcon: <DotIcon fontSize="small" iconId="play" />,
                type: 'outlined',
              } as ProgressButtonProps,
              controlType: 'dot-progress-button',
              disabled: (
                _formValues: DynamicFormOutputData,
                isValid: boolean
              ) => !isValid,
              onControlClick: handleTestButtonClick,
            },
            {
              controlName: 'btnCancel',
              controlProps: {
                children: 'Cancel',
                fullWidth: false,
                isSubmit: false,
                type: 'destructive',
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
        },
      },
    ],
  };
};
