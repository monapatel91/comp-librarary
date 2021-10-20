import React from 'react';
import {
  buildAutocompleteControl,
  buildCheckboxControl,
  buildInputSelectControl,
  buildInputTextControl,
  buildRadioGroupControl,
  checkIfHiddenControl,
  ControlledInputArgs,
  getControlValue,
  getFormDataFromInitialValues,
  getInitialFormState,
  getOutputFormData,
} from './helpers';
import { getSampleConfig, getSampleFormState } from './sample';
import { DotInputText, InputTextProps } from '../input-form-fields/InputText';
import {
  DotInputSelect,
  InputSelectProps,
} from '../input-form-fields/InputSelect';
import {
  DotAutoComplete,
  AutoCompleteProps,
} from '../auto-complete/AutoComplete';
import { DotRadioGroup, RadioGroupProps } from '../radio/RadioGroup';
import { DotCheckbox, CheckboxProps } from '../checkbox/Checkbox';

describe('dynamic form helper functions', () => {
  const data = {
    firstName: {
      value: '123',
    },
  };

  describe('getControlValue', () => {
    it('should get correct value from data object', () => {
      const value = getControlValue<string>('firstName', data as never);
      expect(value).toBe(data.firstName.value);
    });
  });
  describe('checkIfHiddenControl', () => {
    const formData = {
      firstName: {
        value: 'firstName',
      },
      lastName: {
        value: 'lastName',
      },
    };

    it('should return false when hidden is false', () => {
      const isHidden = checkIfHiddenControl(false, formData as never);
      expect(isHidden).toBe(false);
    });
    it('should return false when hidden is undefined', () => {
      const isHidden = checkIfHiddenControl(undefined, formData as never);
      expect(isHidden).toBe(false);
    });
    it('should return false when hidden condition does not match', () => {
      const isHidden = checkIfHiddenControl(
        [{ controlName: 'firstName', controlValue: '123' }],
        formData as never
      );
      expect(isHidden).toBe(false);
    });
    it('should return true when hidden is set to true', () => {
      const isHidden = checkIfHiddenControl(true, formData as never);
      expect(isHidden).toBe(true);
    });
    it('should return true when hidden condition does satisfy all cases', () => {
      const isHidden = checkIfHiddenControl(
        [
          { controlName: 'firstName', controlValue: formData.firstName.value },
          { controlName: 'lastName', controlValue: formData.lastName.value },
        ],
        formData as never
      );
      expect(isHidden).toBe(true);
    });
  });
  describe('getInitialFormState', () => {
    it('should return correct initial state based on a given form config with live validation', () => {
      const sampleConfig = getSampleConfig();
      const expectedFormState = getSampleFormState();
      const initialFormState = getInitialFormState(sampleConfig, true);
      expect(initialFormState).toEqual(expectedFormState);
    });
    it('should return correct initial state based on a given form config without live validation', () => {
      const sampleConfig = getSampleConfig();
      const initialFormState = getInitialFormState(sampleConfig, false);
      expect(initialFormState).toEqual({
        data: {
          firstName: {
            errorMessage: null,
            isTouched: false,
            isValid: false,
            value: 'my first name',
          },
          hasMiddleName: {
            errorMessage: null,
            isTouched: false,
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
            errorMessage: null,
            isTouched: false,
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
    });
  });
  describe('getOutputFormData', () => {
    it('should return correct output data', () => {
      const formData = getOutputFormData(getSampleFormState());
      expect(formData).toEqual({
        firstName: 'my first name',
        hasMiddleName: 'no',
        isMandatory: null,
        middleName: null,
        randomOption: [
          {
            title: 'Option 1',
          },
        ],
      });
    });
  });
  describe('getFormDataFromInitialValues', () => {
    it('should return object with correct initial values', () => {
      const initialValues = getFormDataFromInitialValues(getSampleConfig());
      expect(initialValues).toEqual({
        firstName: 'my first name',
        hasMiddleName: 'no',
        isMandatory: undefined,
        middleName: undefined,
        randomOption: [{ title: 'Option 1' }],
      });
    });
  });
  describe('buildInputTextControl', () => {
    const value = 'my first name';
    const handleChange = jest.fn();
    const controlProps: InputTextProps = {
      id: 'my-id',
      label: 'my control label',
      name: 'my-name',
    };
    const formData = {
      firstName: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'firstName',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: false,
    };
    const expectedResult = (
      <DotInputText
        key={props.index}
        disabled={false}
        error={false}
        id={controlProps.id}
        label={controlProps.label}
        name={controlProps.name}
        value={value}
      />
    );

    it('should return correct component instance', () => {
      const result = buildInputTextControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        disabled: true,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
      };
      const result = buildInputTextControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with error message handled', () => {
      const errorMessage = 'my error';
      const customFormData = {
        firstName: {
          errorMessage,
          isTouched: true,
          isValid: false,
          value,
        },
      } as never;
      const customProps = {
        ...props,
        formData: customFormData,
      };
      const result = buildInputTextControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          error: true,
          helperText: errorMessage,
        },
      });
    });
  });

  describe('buildInputSelectControl', () => {
    const value = 'my selection';
    const handleChange = jest.fn();
    const options = ['', 'React Dev', 'Angular Dev', 'Other Dev'];
    const controlProps: InputSelectProps = {
      id: 'my-select-id',
      label: 'select label',
      name: 'my-select-name',
      options,
    };
    const formData = {
      superheroes: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'superheroes',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotInputSelect
        key={props.index}
        disabled={false}
        error={false}
        id={controlProps.id}
        label={controlProps.label}
        name={controlProps.name}
        options={options}
        value={value}
      />
    );

    it('should return correct component instance', () => {
      const result = buildInputSelectControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        disabled: true,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
      };
      const result = buildInputSelectControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with error message handled', () => {
      const errorMessage = 'my error';
      const customFormData = {
        superheroes: {
          errorMessage,
          isTouched: true,
          isValid: false,
          value,
        },
      } as never;
      const customProps = {
        ...props,
        formData: customFormData,
      };
      const result = buildInputSelectControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          error: true,
          helperText: errorMessage,
        },
      });
    });
  });

  describe('buildAutocompleteControl', () => {
    const value = 'my autocomplete';
    const handleChange = jest.fn();
    const options = [{ title: 'Option 1' }, { title: 'Option 2' }];
    const controlProps: AutoCompleteProps = {
      inputId: 'my-autocomplete-id',
      label: 'autocomplete label',
      options,
    };
    const formData = {
      randomOption: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'randomOption',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotAutoComplete
        key={props.index}
        disabled={false}
        error={false}
        inputId={controlProps.inputId}
        label={controlProps.label}
        options={options}
        value={value}
      />
    );

    it('should return correct component instance', () => {
      const result = buildAutocompleteControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        disabled: true,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
      };
      const result = buildAutocompleteControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with error message handled', () => {
      const errorMessage = 'my error';
      const customFormData = {
        randomOption: {
          errorMessage,
          isTouched: true,
          isValid: false,
          value,
        },
      } as never;
      const customProps = {
        ...props,
        formData: customFormData,
      };
      const result = buildAutocompleteControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          error: true,
          helperText: errorMessage,
        },
      });
    });
  });

  describe('buildRadioGroupControl', () => {
    const value = 'my radio group';
    const handleChange = jest.fn();
    const options = [
      { label: 'None', value: 'None' },
      { label: 'Batman', value: 'Batman' },
    ];
    const controlProps: RadioGroupProps = {
      id: 'my-radio-group-id',
      groupLabel: 'Select Your Favorite Superhero',
      options,
    };
    const formData = {
      superHero: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'superHero',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotRadioGroup
        key={props.index}
        disableGroup={false}
        error={false}
        id={controlProps.id}
        groupLabel={controlProps.groupLabel}
        options={options}
        value={value}
      />
    );

    it('should return correct component instance', () => {
      const result = buildRadioGroupControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        disabled: true,
        controlProps: {
          ...controlProps,
          disableGroup: false,
        },
      };
      const result = buildRadioGroupControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disableGroup: true,
        },
      });
    });

    it('should return component instance with error message handled', () => {
      const errorMessage = 'my error';
      const customFormData = {
        superHero: {
          errorMessage,
          isTouched: true,
          isValid: false,
          value,
        },
      } as never;
      const customProps = {
        ...props,
        formData: customFormData,
      };
      const result = buildRadioGroupControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          error: true,
          helperText: errorMessage,
        },
      });
    });
  });

  describe('buildCheckboxControl', () => {
    const value = false;
    const handleChange = jest.fn();
    const controlProps: CheckboxProps = {
      id: 'my-radio-group-id',
      label: 'my checkbox',
      name: 'my checkbox name',
    };
    const formData = {
      isMandatory: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'isMandatory',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotCheckbox
        checked={false}
        disabled={false}
        key={props.index}
        id={controlProps.id}
        label={controlProps.label}
        name={controlProps.name}
      />
    );

    it('should return correct component instance', () => {
      const result = buildCheckboxControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        disabled: true,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
      };
      const result = buildCheckboxControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });
  });
});
