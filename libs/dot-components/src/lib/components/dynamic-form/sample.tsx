import React from 'react';
import { AutoCompleteProps } from '../auto-complete/AutoComplete';
import { ButtonProps } from '../button/Button';
import { CheckboxProps } from '../checkbox/Checkbox';
import { InputTextProps } from '../input-form-fields/InputText';
import { InputSelectProps } from '../input-form-fields/InputSelect';
import { RadioGroupProps } from '../radio/RadioGroup';
import { DynamicFormConfig, DynamicFormState } from './models';

export const getSampleConfig = (): DynamicFormConfig => ({
  controls: [
    {
      controlName: 'firstName',
      controlType: 'dot-input-text',
      controlProps: {
        'data-testid': 'firstName',
        label: 'First Name',
        helperText: 'Your first name goes here',
        autoFocus: true,
        required: true,
      } as InputTextProps,
      initialValue: 'my first name',
      validation: {
        isRequired: {
          errorMessage: 'Required field',
          value: true,
        },
      },
    },
    {
      controlName: 'randomOption',
      controlType: 'dot-autocomplete',
      controlProps: {
        'data-testid': 'randomOption',
        label: 'Random option',
        options: [
          { title: 'Option 1' },
          { title: 'Option 2' },
          { title: 'Option 3' },
          { title: 'Option 4' },
          { title: 'Option 5' },
        ],
      } as AutoCompleteProps,
      initialValue: [{ title: 'Option 1' }],
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
      controlName: 'hasMiddleName',
      controlType: 'dot-radio-group',
      controlProps: {
        'data-testid': 'hasMiddleName',
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
        'data-testid': 'middleName',
        label: 'Middle Name',
      } as InputTextProps,
      hidden: [{ controlName: 'hasMiddleName', controlValue: 'no' }],
    },
    {
      controlName: 'gender',
      controlType: 'dot-input-select',
      controlProps: {
        'data-testid': 'gender',
        id: 'gender',
        label: 'Gender',
        name: 'gender',
        required: true,
        size: 'small',
        options: ['', 'Male', 'Female'],
      } as InputSelectProps,
      validation: {
        isRequired: {
          errorMessage: 'Required field',
          value: true,
        },
      },
    },
    {
      controlType: 'custom-element',
      customElement: <p data-testid="customElement">test</p>,
    },
    {
      controlName: 'isMandatory',
      controlType: 'dot-switch',
      controlProps: {
        'data-testid': 'isMandatory',
        label: 'Is Mandatory',
      } as CheckboxProps,
      initialValue: false,
      validation: {
        isRequired: {
          errorMessage: 'Required field',
          value: true,
        },
      },
    },
    {
      controlName: 'receiveNewsletters',
      controlType: 'dot-checkbox',
      controlProps: {
        'data-testid': 'receiveNewsletters',
        label: 'Receive Newsletters?',
      } as CheckboxProps,
      initialValue: false,
    },
    {
      controlName: 'btnTest',
      controlType: 'dot-button',
      controlProps: {
        type: 'outlined',
        children: 'Test',
        fullWidth: false,
      } as ButtonProps,
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
});

export const getSampleFormState = (): DynamicFormState => ({
  data: {
    firstName: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'my first name',
    },
    gender: {
      errorMessage: null,
      isTouched: false,
      isValid: false,
      value: null,
    },
    hasMiddleName: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'no',
    },
    receiveNewsletters: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
    isMandatory: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
    middleName: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
    randomOption: {
      errorMessage: 'Pick at least 2 options',
      isTouched: true,
      isValid: false,
      value: [
        {
          title: 'Option 1',
        },
      ],
    },
  },
  isValid: false,
});
