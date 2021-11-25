import React from 'react';
import { AutoCompleteProps } from '../auto-complete/AutoComplete';
import { ButtonProps } from '../button/Button';
import { CheckboxProps } from '../checkbox/Checkbox';
import { InputTextProps } from '../input-form-fields/InputText';
import { InputSelectProps } from '../input-form-fields/InputSelect';
import { DotIcon } from '../icon/Icon';
import { CheckboxGroupProps } from '../checkbox/CheckboxGroup';
import { RadioGroupProps } from '../radio/RadioGroup';
import { ProgressButtonProps } from '../progress-button/ProgressButton';
import {
  ControlClickHandler,
  DynamicFormConfig,
  DynamicFormOutputData,
  DynamicFormState,
} from './models';

export const sampleMiddleNameHiddenFn = (formValues: DynamicFormOutputData) =>
  formValues['hasMiddleName'] === 'no';

export const getSampleConfig = (
  handleProgressControlClick: ControlClickHandler
): DynamicFormConfig => ({
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
      hidden: sampleMiddleNameHiddenFn,
      validation: {
        isRequired: {
          condition: (formValues: DynamicFormOutputData) =>
            formValues['hasMiddleName'] === 'yes',
          errorMessage: 'Required field',
          value: true,
        },
      },
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
      controlName: 'receive',
      controlType: 'dot-checkbox-group',
      controlProps: {
        'data-testid': 'receive',
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
      controlType: 'controls-wrapper',
      controlsWrapper: {
        WrapperComponent: ({ children }) => {
          return (
            <div className="newsletters" data-testid="newsletters">
              {children}
            </div>
          );
        },
        controlsToWrap: [
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
            controlType: 'custom-element',
            customElement: (
              <DotIcon
                iconId="info-solid"
                tooltip="You can opt out at any time"
              />
            ),
          },
        ],
      },
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
      controlName: 'btnProgress',
      controlType: 'dot-progress-button',
      controlProps: {
        title: 'Progress',
        type: 'outlined',
      } as ProgressButtonProps,
      disabled: (_formValues: DynamicFormOutputData, isValid: boolean) =>
        !isValid,
      onControlClick: handleProgressControlClick,
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
    receive: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
    receiveNewsletters: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
    hasVehicle: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'no',
    },
    vehicleModel: {
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
      hidden: sampleMiddleNameHiddenFn,
      isTouched: false,
      isValid: false,
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
