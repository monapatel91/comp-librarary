import React from 'react';
import { AutoCompleteProps } from '../auto-complete/AutoComplete';
import { ButtonProps } from '../button/Button';
import { CheckboxProps } from '../checkbox/Checkbox';
import { InputTextProps } from '../input-form-fields/InputText';
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
      controlType: 'custom-element',
      customElement: <p>test</p>,
    },
    {
      controlName: 'isMandatory',
      controlType: 'dot-switch',
      controlProps: {
        label: 'Is Mandatory',
      } as CheckboxProps,
      validation: {
        isRequired: {
          errorMessage: 'Required field',
          value: true,
        },
      },
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
    hasMiddleName: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'no',
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
