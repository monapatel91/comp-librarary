import React from 'react';
import {
  buildAutocompleteControl,
  buildButtonControl,
  buildCheckboxControl,
  buildCheckboxGroupControl,
  buildInputSelectControl,
  buildInputTextControl,
  buildProgressButtonControl,
  buildProgressSubmitControl,
  buildRadioGroupControl,
  buildResetControl,
  buildSubmitControl,
  buildSwitchControl,
  ControlledInputArgs,
  getControlClickHandler,
  getInitialFormState,
  UncontrolledInputArgs,
} from './formHelpers';
import {
  getSampleConfig,
  getSampleFormState,
  sampleMiddleNameHiddenFn,
} from '../sample';
import {
  DotInputText,
  InputTextProps,
} from '../../input-form-fields/InputText';
import {
  DotInputSelect,
  InputSelectProps,
} from '../../input-form-fields/InputSelect';
import {
  AutoCompleteProps,
  DotAutoComplete,
} from '../../auto-complete/AutoComplete';
import { DotRadioGroup, RadioGroupProps } from '../../radio/RadioGroup';
import { CheckboxProps, DotCheckbox } from '../../checkbox/Checkbox';
import { DotSwitch, SwitchProps } from '../../switch/Switch';
import { ButtonProps, DotButton } from '../../button/Button';
import {
  CheckboxGroupProps,
  DotCheckboxGroup,
} from '../../checkbox/CheckboxGroup';
import {
  DotProgressButton,
  ProgressButtonProps,
} from '../../progress-button/ProgressButton';
import { DynamicFormOutputData } from '@digital-ai/dot-components';

describe('dynamic form helper functions', () => {
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
          gender: {
            errorMessage: null,
            isTouched: false,
            isValid: false,
            value: null,
          },
          hasMiddleName: {
            errorMessage: null,
            isTouched: false,
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
            isTouched: false,
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

  describe('getControlClickHandler', () => {
    const formValues: DynamicFormOutputData = {
      title: { value: 'my title' },
    };
    it('should return undefined when no event handler was passed in', () => {
      const result = getControlClickHandler(formValues, undefined);
      expect(result).toBeUndefined();
    });
    it("should return correct event handler when 'onControlClick' was passed in", () => {
      const onControlClick = jest.fn();
      const handlerFunction = getControlClickHandler(
        formValues,
        onControlClick
      );
      handlerFunction();
      expect(onControlClick).toHaveBeenCalledWith(formValues);
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
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
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
        disabled={false}
        error={false}
        id={controlProps.id}
        key={props.index}
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
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
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
        disabled={false}
        error={false}
        inputId={controlProps.inputId}
        key={props.index}
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
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
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
        disableGroup={false}
        error={false}
        groupLabel={controlProps.groupLabel}
        id={controlProps.id}
        key={props.index}
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
        controlProps: {
          ...controlProps,
          disableGroup: false,
        },
        disabled: true,
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
        id={controlProps.id}
        key={props.index}
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
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
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

  describe('buildCheckboxGroupControl', () => {
    const handleChange = jest.fn();
    const options = [
      { label: 'Concert', value: 'concerts' },
      { label: 'A free poster', value: 'poster' },
    ];
    const controlProps: CheckboxGroupProps = {
      id: 'my-checkbox-group-id',
      groupLabel: 'I would like to receive',
      options,
    };
    const formData = {
      receive: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value: null,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'receive',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotCheckboxGroup
        defaultValues={[]}
        disableGroup={false}
        error={false}
        groupLabel={controlProps.groupLabel}
        id={controlProps.id}
        key={props.index}
        options={options}
      />
    );

    it('should return correct component instance', () => {
      const result = buildCheckboxGroupControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disableGroup: false,
        },
        disabled: true,
      };
      const result = buildCheckboxGroupControl(customProps);
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
        receive: {
          errorMessage,
          isTouched: true,
          isValid: false,
          value: null,
        },
      } as never;
      const customProps = {
        ...props,
        formData: customFormData,
      };
      const result = buildCheckboxGroupControl(customProps);
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

  describe('buildSwitchControl', () => {
    const value = true;
    const handleChange = jest.fn();
    const controlProps: SwitchProps = {
      id: 'my-switch-id',
      label: 'switch label',
    };
    const formData = {
      isSwitched: {
        errorMessage: null,
        isTouched: true,
        isValid: true,
        value,
      },
    } as never;
    const props: ControlledInputArgs = {
      controlName: 'isSwitched',
      controlProps: controlProps,
      disabled: false,
      formData,
      handleChange,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotSwitch
        checked={value}
        disabled={false}
        id={controlProps.id}
        key={props.index}
        label={controlProps.label}
      />
    );

    it('should return correct component instance', () => {
      const result = buildSwitchControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
      };
      const result = buildSwitchControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });
  });

  describe('buildButtonControl', () => {
    const handleClick = jest.fn();
    const controlProps: ButtonProps = {
      children: 'My Button',
      size: 'small',
      type: 'primary',
    };
    const props: UncontrolledInputArgs = {
      controlProps: controlProps,
      disabled: false,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotButton
        disabled={false}
        key={props.index}
        size={controlProps.size}
        type={controlProps.type}
      >
        {controlProps.children}
      </DotButton>
    );

    it('should return correct component instance', () => {
      const result = buildButtonControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
      };
      const result = buildButtonControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with onClick prop', () => {
      const customProps: UncontrolledInputArgs = {
        ...props,
        handleClick,
      };
      const result = buildButtonControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          onClick: expect.any(Function),
        },
      });
    });
  });

  describe('buildProgressButtonControl', () => {
    const handleClick = jest.fn();
    const controlProps: ProgressButtonProps = {
      isLoading: false,
      title: 'My title',
      type: 'outlined',
    };
    const props: UncontrolledInputArgs = {
      controlProps: controlProps,
      disabled: false,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotProgressButton
        disabled={false}
        isLoading={controlProps.isLoading}
        key={props.index}
        title={controlProps.title}
        type={controlProps.type}
      />
    );

    it('should return correct component instance', () => {
      const result = buildProgressButtonControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
      };
      const result = buildProgressButtonControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with onClick prop', () => {
      const customProps: UncontrolledInputArgs = {
        ...props,
        handleClick,
      };
      const result = buildProgressButtonControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          onClick: expect.any(Function),
        },
      });
    });
  });

  describe('buildResetControl', () => {
    const propOnClick = jest.fn();
    const handleClick = jest.fn();
    const controlProps: ButtonProps = {
      children: 'My Reset Button',
      onClick: propOnClick,
      size: 'medium',
      type: 'text',
    };
    const props: UncontrolledInputArgs = {
      controlProps: controlProps,
      disabled: false,
      handleClick,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotButton
        disabled={false}
        key={props.index}
        size={controlProps.size}
        type={controlProps.type}
      >
        {controlProps.children}
      </DotButton>
    );

    /* We need to omit onClick prop because it won't work, and is not relevant in this test */
    const getRelevantProps = (result: JSX.Element) => {
      const { onClick, ...relevantProps } = result.props;
      return relevantProps;
    };

    it('should return correct component instance', () => {
      const result = buildResetControl(props);
      expect(getRelevantProps(result)).toEqual(expectedResult.props);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
      };
      const result = buildResetControl(customProps);
      expect(getRelevantProps(result)).toEqual({
        ...expectedResult.props,
        disabled: true,
      });
    });
  });

  describe('buildSubmitControl', () => {
    const handleClick = jest.fn();
    const controlProps: ButtonProps = {
      children: 'Submit',
      size: 'large',
      type: 'primary',
    };
    const formState = {
      isValid: true,
    } as never;
    const props: UncontrolledInputArgs = {
      controlProps: controlProps,
      disabled: false,
      formState,
      handleClick,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotButton
        disabled={false}
        isSubmit={true}
        key={props.index}
        size={controlProps.size}
        type={controlProps.type}
      >
        {controlProps.children}
      </DotButton>
    );

    it('should return correct component instance', () => {
      const result = buildSubmitControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
      };
      const result = buildSubmitControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with disabled prop when live validation is on and form validity is false', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
        },
        formState: {
          isValid: false,
        } as never,
      };
      const result = buildSubmitControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });
  });

  describe('buildProgressSubmitControl', () => {
    const handleClick = jest.fn();
    const controlProps: ProgressButtonProps = {
      isLoading: false,
      title: 'Save',
      type: 'primary',
    };
    const formState = {
      isValid: true,
    } as never;
    const props: UncontrolledInputArgs = {
      controlProps: controlProps,
      disabled: false,
      formState,
      handleClick,
      index: 0,
      liveValidation: true,
    };
    const expectedResult = (
      <DotProgressButton
        disabled={false}
        isLoading={false}
        isSubmit={true}
        key={props.index}
        size={controlProps.size}
        title={controlProps.title}
        type={controlProps.type}
      />
    );

    it('should return correct component instance', () => {
      const result = buildProgressSubmitControl(props);
      expect(result).toEqual(expectedResult);
    });

    it('should return component instance with disabled prop', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
          disabled: false,
        },
        disabled: true,
      };
      const result = buildProgressSubmitControl(customProps);
      expect(result).toEqual({
        ...expectedResult,
        props: {
          ...expectedResult.props,
          disabled: true,
        },
      });
    });

    it('should return component instance with disabled prop when live validation is on and form validity is false', () => {
      const customProps = {
        ...props,
        controlProps: {
          ...controlProps,
        },
        formState: {
          isValid: false,
        } as never,
      };
      const result = buildProgressSubmitControl(customProps);
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
