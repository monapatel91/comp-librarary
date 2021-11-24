import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  RenderResult,
  screen,
  waitFor,
  within,
} from '../../testing-utils';
import { DotDynamicForm, DynamicFormProps } from './DynamicForm';
import { getSampleConfig } from './sample';

describe('DotDynamicForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const config = getSampleConfig();
  const ariaLabel = 'my aria label';

  const componentProps: DynamicFormProps = {
    ariaLabel,
    className: 'test-class',
    'data-testid': 'testid',
    disabled: false,
    liveValidation: true,
    onChange: handleChange,
    onSubmit: handleSubmit,
    config,
  };

  const renderComponent = (props?: DynamicFormProps): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DotDynamicForm {...renderProps} />);
  };

  const getAutocompleteElement = (): HTMLElement =>
    screen.getByTestId('randomOption');

  const getAutocompleteTextboxElement = (): HTMLElement =>
    within(getAutocompleteElement()).getByRole('textbox');

  const getFormElement = (): HTMLElement => screen.getByRole('form');

  const getRadioGroupElement = (): HTMLElement =>
    screen.getByTestId('hasMiddleName');

  const getSwitchElement = (): HTMLElement => screen.getByTestId('isMandatory');

  const getSwitchInputElement = (): HTMLElement =>
    within(getSwitchElement()).getByRole('checkbox');

  const getResetButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Reset' });

  const getSubmitButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Submit form' });

  const getTestButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Test' });

  const getFirstNameTextbox = (): HTMLElement =>
    screen.getByTestId('firstName');

  const getCheckboxElement = (): HTMLElement =>
    within(screen.getByTestId('newsletters')).getByTestId('receiveNewsletters');

  const getSelectElement = (): HTMLElement => screen.getByTestId('gender');

  const getCheckboxGroupElement = (): HTMLElement =>
    screen.getByTestId('receive');

  const getCheckboxGroupInputElements = (): HTMLElement[] =>
    within(getCheckboxGroupElement()).getAllByRole('checkbox');

  const queryMiddleNameTextboxElement = (): HTMLElement | undefined =>
    screen.queryByTestId('middleName');

  const removeAutocompleteOption = (autocompleteElement: HTMLElement): void => {
    const closeElement =
      autocompleteElement.getElementsByClassName('MuiChip-deleteIcon')[0];
    userEvent.click(closeElement);
  };

  const getHasVehicleControlElement = (): HTMLElement =>
    screen.getByTestId('hasVehicle');

  const getVehicleModelControlElement = (): HTMLElement =>
    screen.getByTestId('vehicleModel');

  const expectRadioGroupElementToBeChecked = (
    position: number,
    shouldBeChecked = true,
    radioGroupElement: HTMLElement
  ): void => {
    const radioElement =
      within(radioGroupElement).getAllByRole('radio')[position];
    shouldBeChecked
      ? expect(radioElement).toBeChecked()
      : expect(radioElement).not.toBeChecked();
  };

  const expectSwitchToBeChecked = (
    switchElement: HTMLElement,
    shouldBeChecked = true
  ): void => {
    const className = 'Mui-checked';
    shouldBeChecked
      ? expect(switchElement).toHaveClass(className)
      : expect(switchElement).not.toHaveClass(className);
  };

  const expectCheckboxGroupElementToBeChecked = (
    position: number,
    shouldBeChecked = true,
    checkboxGroupElement?: HTMLElement
  ): void => {
    if (!checkboxGroupElement) {
      checkboxGroupElement = getCheckboxGroupElement();
    }
    const checkboxElement =
      within(checkboxGroupElement).getAllByRole('checkbox')[position];
    shouldBeChecked
      ? expect(checkboxElement).toBeChecked()
      : expect(checkboxElement).not.toBeChecked();
  };

  const expectCheckboxGroupToBeEnabled = (shouldBeEnabled = true): void => {
    const checkboxElements = getCheckboxGroupInputElements();
    checkboxElements.forEach((cb) => {
      shouldBeEnabled ? expect(cb).toBeEnabled() : expect(cb).toBeDisabled();
    });
  };

  const expectAutocompleteMinLengthErrorMessage = (
    autocompleteElement: HTMLElement,
    shouldDisplayError = true
  ) => {
    const errorMessage = within(autocompleteElement).queryByText(
      'Pick at least 2 options'
    );
    shouldDisplayError
      ? expect(errorMessage).toBeVisible()
      : expect(errorMessage).not.toBeInTheDocument();
  };

  const typeFirstName = (text: string): void =>
    userEvent.type(getFirstNameTextbox(), text);

  const toggleSwitch = (): void => {
    userEvent.click(getSwitchElement());
  };

  const selectGender = (gender: string): void => {
    const selectElement = getSelectElement();
    userEvent.selectOptions(selectElement, gender);
  };

  const addAutocompleteOption = (
    option: string,
    autocompleteElement?: HTMLElement
  ): void => {
    if (!autocompleteElement) {
      autocompleteElement = getAutocompleteElement();
    }
    userEvent.click(within(autocompleteElement).getByRole('textbox'));
    const popperElement = screen.getByRole('presentation');
    userEvent.click(within(popperElement).getByText(option));
  };

  const submitForm = (): void => {
    const submitButton = getSubmitButton();
    userEvent.click(submitButton);
  };

  const resetForm = (): void => {
    const resetButton = getResetButton();
    userEvent.click(resetButton);
  };

  const selectRadioGroupOption = (
    position: number,
    radioGroupElement: HTMLElement
  ): void =>
    userEvent.click(within(radioGroupElement).getAllByRole('radio')[position]);

  const selectCheckboxGroupOption = (
    position: number,
    checkboxGroupElement?: HTMLElement
  ): void => {
    if (!checkboxGroupElement) {
      checkboxGroupElement = getCheckboxGroupElement();
    }
    userEvent.click(
      within(checkboxGroupElement).getAllByRole('checkbox')[position]
    );
  };

  it('should have unchanged API', () => {
    const props = {
      ariaLabel,
      className: 'test-class',
      'data-testid': 'testid',
      disabled: false,
      liveValidation: true,
      onChange: handleChange,
      onSubmit: handleSubmit,
      config,
    };
    expect(componentProps).toEqual(props);
  });

  describe('with default props', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('should render successfully', () => {
      const { baseElement } = renderComponent();
      expect(baseElement).toBeTruthy();
    });

    it('should have form element with aria label', () => {
      const formElement = getFormElement();
      expect(formElement).toHaveAttribute('aria-label', ariaLabel);
    });

    it('should render input text with appropriate initial value', () => {
      const inputElement = getFirstNameTextbox();
      expect(inputElement).toBeVisible();
      expect(inputElement).toHaveClass('dot-input');
      expect(inputElement).toHaveValue('my first name');
      expect(inputElement).toBeEnabled();
    });

    it('should render input text with appropriate label', () => {
      const inputElement = screen.getByText('First Name');
      expect(inputElement).toBeVisible();
    });

    it('should render input text with appropriate helper text', () => {
      const inputElement = screen.getByText('Your first name goes here');
      expect(inputElement).toBeVisible();
    });

    it('should render autocomplete control with appropriate initial value', () => {
      const autocompleteElement = getAutocompleteElement();
      expect(autocompleteElement).toBeVisible();
      expect(autocompleteElement).toHaveClass('dot-autocomplete');
      const inputElement = getAutocompleteTextboxElement();
      expect(inputElement).toBeEnabled();
      const selectedOptionElement =
        within(autocompleteElement).getByText('Option 1');
      expect(selectedOptionElement).toBeVisible();
    });

    it('should display correct error message when option is removed from the autocomplete field', () => {
      const autocompleteElement = getAutocompleteElement();
      removeAutocompleteOption(autocompleteElement);
      within(autocompleteElement).getByText('Required field');
    });

    it('should display correct error message when minLength condition is not satisfied', () => {
      const autocompleteElement = getAutocompleteElement();
      removeAutocompleteOption(autocompleteElement);
      addAutocompleteOption('Option 1', autocompleteElement);
      expectAutocompleteMinLengthErrorMessage(autocompleteElement);
    });

    it('should display correct error message when maxLength condition is not satisfied', () => {
      const autocompleteElement = getAutocompleteElement();
      addAutocompleteOption('Option 2', autocompleteElement);
      addAutocompleteOption('Option 3', autocompleteElement);
      addAutocompleteOption('Option 4', autocompleteElement);
      addAutocompleteOption('Option 5', autocompleteElement);
      within(autocompleteElement).getByText('Maximum of 4 options allowed');
    });

    it('should render radio group control with correct radio buttons and initial value', () => {
      const radioGroupElement = getRadioGroupElement();
      expect(radioGroupElement).toBeVisible();
      expect(radioGroupElement).toHaveClass('dot-radio-group');
      const radioButtons = within(radioGroupElement).getAllByRole('radio');
      const radioButtonNo = radioButtons[0];
      const radioButtonYes = radioButtons[1];
      expect(radioButtonNo).toBeInTheDocument();
      expect(radioButtonNo).toBeEnabled();
      expect(radioButtonNo).toBeChecked();
      expect(radioButtonYes).toBeInTheDocument();
      expect(radioButtonYes).toBeEnabled();
      expect(radioButtonYes).not.toBeChecked();
    });

    it('should render radio group control with correct label', () => {
      const labelElement = screen.getByText('Do you have middle name?');
      expect(labelElement).toBeVisible();
    });

    it('should NOT render middle name textbox by default', () => {
      const textboxElement = queryMiddleNameTextboxElement();
      expect(textboxElement).not.toBeInTheDocument();
    });

    it("should render middle name textbox when middle name radio group option is set to 'Yes'", () => {
      const radioGroupElement = getRadioGroupElement();
      selectRadioGroupOption(1, radioGroupElement);
      const textboxElement = queryMiddleNameTextboxElement();
      expect(textboxElement).toBeVisible();
      expect(textboxElement).toBeEnabled();
      expect(textboxElement).toBeEmptyDOMElement();
    });

    it('should render select element', () => {
      const selectElement = getSelectElement();
      expect(selectElement).toBeVisible();
      expect(selectElement).toBeEnabled();
      expect(selectElement).toHaveValue('');
      const options = within(selectElement).getAllByRole('option');
      expect(options[0]).toHaveValue('');
      expect(options[1]).toHaveValue('Male');
      expect(options[2]).toHaveValue('Female');
    });

    it('should render checkbox group element', () => {
      const checkboxGroupElement = getCheckboxGroupElement();
      expect(checkboxGroupElement).toBeVisible();
      const checkboxElements = getCheckboxGroupInputElements();
      checkboxElements.forEach((cb) => {
        expect(cb).toBeEnabled();
        expect(cb).not.toBeChecked();
      });
      expect(checkboxElements).toHaveLength(3);
    });

    it('should render custom element', () => {
      const customElement = screen.getByTestId('customElement');
      expect(customElement).toBeVisible();
    });

    it('should render isMandatory switch element with correct initial value', () => {
      const switchElement = getSwitchElement();
      expect(switchElement).toBeVisible();
      expect(switchElement).toHaveClass('MuiSwitch-switchBase');
      // Confirm that it is not checked (as per initial value)
      expectSwitchToBeChecked(switchElement, false);
      const checkboxElement = within(switchElement).getByRole('checkbox');
      expect(checkboxElement).toBeEnabled();
    });

    it('should render unchecked checkbox element', () => {
      const checkboxElement = getCheckboxElement();
      expect(checkboxElement).toBeVisible();
      expect(checkboxElement).not.toBeChecked();
    });

    it('should render enabled custom button', () => {
      const testButton = getTestButton();
      expect(testButton).toBeVisible();
      expect(testButton).toBeEnabled();
    });

    it('should render enabled reset button', () => {
      const resetButton = getResetButton();
      expect(resetButton).toBeVisible();
      expect(resetButton).toBeEnabled();
    });

    it('should remove all values from the form inputs when clicking Reset button', () => {
      const hasMiddleNameElement = getRadioGroupElement();
      const middleNameRadioButton =
        within(hasMiddleNameElement).getAllByRole('radio');
      const checkboxGroupElement = getCheckboxGroupElement();
      const switchElement = getSwitchElement();
      const resetButton = getResetButton();
      const firstNameElement = getFirstNameTextbox();
      const autocompleteTextboxElement = getAutocompleteTextboxElement();
      const hasVehicleElement = getHasVehicleControlElement();
      const vehicleModelElement = getVehicleModelControlElement();

      // Set initial values
      selectRadioGroupOption(1, hasMiddleNameElement);
      selectCheckboxGroupOption(0, checkboxGroupElement);
      selectCheckboxGroupOption(1, checkboxGroupElement);
      userEvent.click(switchElement);
      userEvent.type(firstNameElement, 'John');
      userEvent.type(autocompleteTextboxElement, 'Option 1');
      selectRadioGroupOption(1, hasVehicleElement);
      userEvent.type(vehicleModelElement, 'My vehicle');

      // Click reset button
      userEvent.click(resetButton);

      // Confirm that all values are reset
      expect(firstNameElement).toBeEmptyDOMElement();
      expect(vehicleModelElement).toBeEmptyDOMElement();
      expect(autocompleteTextboxElement).toBeEmptyDOMElement();
      waitFor(() => {
        expect(middleNameRadioButton[0]).toBeChecked();
        expectCheckboxGroupElementToBeChecked(0, false, checkboxGroupElement);
        expectCheckboxGroupElementToBeChecked(1, false, checkboxGroupElement);
        expectCheckboxGroupElementToBeChecked(2, false, checkboxGroupElement);
        expectSwitchToBeChecked(switchElement, false);
        expectRadioGroupElementToBeChecked(0, true, hasVehicleElement);
      });
    });

    it('should render disabled Submit button when live validation is on', () => {
      const submitButton = getSubmitButton();
      expect(submitButton).toBeVisible();
      expect(submitButton).toBeDisabled();
    });

    it('should execute correct event handler when form is submitted', () => {
      typeFirstName('first name');
      addAutocompleteOption('Option 2');
      selectGender('Male');
      toggleSwitch();
      const submitButton = getSubmitButton();
      expect(submitButton).toBeEnabled();
      userEvent.click(submitButton);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("should have disabled 'vehicleModel' control if 'hasVehicle' control's value is set to 'no'", () => {
      const hasVehicleElement = getHasVehicleControlElement();
      const vehicleModelElement = getVehicleModelControlElement();
      expectRadioGroupElementToBeChecked(0, true, hasVehicleElement);
      expect(vehicleModelElement).toBeDisabled();
    });

    it("should have enabled 'vehicleModel' control if 'hasVehicle' control's value is set to 'yes'", () => {
      const hasVehicleElement = getHasVehicleControlElement();
      const vehicleModelElement = getVehicleModelControlElement();
      selectRadioGroupOption(1, hasVehicleElement);
      expectRadioGroupElementToBeChecked(1, true, hasVehicleElement);
      expect(vehicleModelElement).toBeEnabled();
    });
  });

  describe('with custom props', () => {
    describe('without live validation', () => {
      const customProps: DynamicFormProps = {
        ...componentProps,
        liveValidation: false,
      };

      beforeEach(() => renderComponent(customProps));

      it('should display enabled Submit button', () => {
        const submitButton = getSubmitButton();
        expect(submitButton).toBeVisible();
        expect(submitButton).toBeEnabled();
      });

      it('should display error message when submitting a form while middle name is displayed and empty', () => {
        const radioGroupElement = getRadioGroupElement();
        selectRadioGroupOption(1, radioGroupElement);
        submitForm();
        const middleNameTextboxElement = queryMiddleNameTextboxElement();
        expect(
          within(middleNameTextboxElement.closest('.dot-text-field')).getByText(
            'Required field'
          )
        );
      });

      it('should NOT render error message when field is edited and validation is not satisfied', () => {
        const autocompleteElement = getAutocompleteElement();
        removeAutocompleteOption(autocompleteElement);
        addAutocompleteOption('Option 1', autocompleteElement);
        expectAutocompleteMinLengthErrorMessage(autocompleteElement, false);
      });

      it('should render error message on submit button click', () => {
        const autocompleteElement = getAutocompleteElement();
        submitForm();
        expectAutocompleteMinLengthErrorMessage(autocompleteElement, true);
      });

      it('should NOT render error message after form is reset', () => {
        // Trigger error message display
        submitForm();
        resetForm();
        const autocompleteElement = getAutocompleteElement();
        expectAutocompleteMinLengthErrorMessage(autocompleteElement, false);
      });
    });

    describe('disabled form', () => {
      const customProps: DynamicFormProps = {
        ...componentProps,
        disabled: true,
      };

      beforeEach(() => renderComponent(customProps));

      it('should display disabled elements', () => {
        const firstNameTextboxElement = getFirstNameTextbox();
        const autocompleteTextboxElement = getAutocompleteTextboxElement();
        const selectElement = getSelectElement();
        const switchInputElement = getSwitchInputElement();
        const testButtonElement = getTestButton();
        const resetButton = getResetButton();
        const submitButton = getSubmitButton();

        expect(firstNameTextboxElement).toBeDisabled();
        expect(autocompleteTextboxElement).toBeDisabled();
        expect(selectElement).toBeDisabled();
        expectCheckboxGroupToBeEnabled(false);
        expect(switchInputElement).toBeDisabled();
        expect(testButtonElement).toBeDisabled();
        expect(resetButton).toBeDisabled();
        expect(submitButton).toBeDisabled();
      });
    });
  });
});
