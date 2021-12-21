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
import { getDynamicFormConfig } from './DynamicForm.stories.data';

describe('DotDynamicForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const handleProgressControlClick = jest.fn();
  const config = getDynamicFormConfig(handleProgressControlClick);
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

  const getInterestsAutocompleteElement = (): HTMLElement =>
    screen.getByTestId('interests');

  const getInterestsAutocompleteTextboxElement = (): HTMLElement =>
    within(getInterestsAutocompleteElement()).getByRole('textbox');

  const getFormElement = (): HTMLElement => screen.getByRole('form');

  const getGenderRadioGroupElement = (): HTMLElement =>
    screen.getByTestId('gender');

  const getHasVehicleRadioGroupElement = (): HTMLElement =>
    screen.getByTestId('hasVehicle');

  const getIsActiveSwitchElement = (): HTMLElement =>
    screen.getByTestId('isActive');

  const getIsActiveSwitchInputElement = (): HTMLElement =>
    within(getIsActiveSwitchElement()).getByRole('checkbox');

  const getCancelButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Cancel' });

  const getSubmitButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Submit form' });

  const getTestButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Test' });

  const getFirstNameTextbox = (): HTMLElement =>
    screen.getByTestId('firstName');

  const getLastNameTextbox = (): HTMLElement => screen.getByTestId('lastName');

  const getUsernameTextbox = (): HTMLElement => screen.getByTestId('username');

  const getPasswordTextbox = (): HTMLElement => screen.getByTestId('password');

  const getTermsCheckboxElement = (): HTMLElement =>
    within(screen.getByTestId('form-section-terms')).getByTestId('terms');

  const getTermsCheckboxInputElement = (): HTMLElement =>
    within(getTermsCheckboxElement()).getByRole('checkbox');

  const getUserTypeSelectElement = (): HTMLElement =>
    screen.getByTestId('userType');

  const getReceiveNewsCheckboxGroupElement = (): HTMLElement =>
    screen.getByTestId('receive');

  const getReceiveNewsCheckboxGroupInputElements = (): HTMLElement[] =>
    within(getReceiveNewsCheckboxGroupElement()).getAllByRole('checkbox');

  const queryCustomUserTypeTextboxElement = (): HTMLElement | undefined =>
    screen.queryByTestId('customUserType');

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
    radioGroupElement: HTMLElement,
    shouldBeChecked = true
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
      checkboxGroupElement = getReceiveNewsCheckboxGroupElement();
    }
    const checkboxElement =
      within(checkboxGroupElement).getAllByRole('checkbox')[position];
    shouldBeChecked
      ? expect(checkboxElement).toBeChecked()
      : expect(checkboxElement).not.toBeChecked();
  };

  const expectCheckboxGroupToBeEnabled = (shouldBeEnabled = true): void => {
    const checkboxElements = getReceiveNewsCheckboxGroupInputElements();
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

  const typeFirstName = (text: string): void => {
    const element = getFirstNameTextbox();
    userEvent.clear(element);
    userEvent.type(element, text);
    expect(element).toHaveValue(text);
  };

  const typeLastName = (text: string): void => {
    const element = getLastNameTextbox();
    userEvent.clear(element);
    userEvent.type(element, text);
  };

  const toggleIsActiveSwitch = (): void => {
    userEvent.click(getIsActiveSwitchElement());
  };

  const selectUserType = (userType: string): void => {
    const selectElement = getUserTypeSelectElement();
    userEvent.selectOptions(selectElement, userType);
  };

  const addAutocompleteOption = (
    option: string,
    autocompleteElement?: HTMLElement
  ): void => {
    if (!autocompleteElement) {
      autocompleteElement = getInterestsAutocompleteElement();
    }
    userEvent.click(within(autocompleteElement).getByRole('textbox'));
    const popperElement = screen.getByRole('presentation');
    userEvent.click(within(popperElement).getByText(option));
  };

  const fillFormWithData = () => {
    const receiveNewsCheckboxGroupElement =
      getReceiveNewsCheckboxGroupElement();
    // Set initial values
    typeFirstName('John');
    typeLastName('Wayne');
    selectRadioGroupOption(1, getGenderRadioGroupElement());
    userEvent.type(getUsernameTextbox(), 'jwayne');
    userEvent.type(getPasswordTextbox(), 'pass123');
    selectUserType('Administrator');
    addAutocompleteOption('Hiking', getInterestsAutocompleteElement());
    selectRadioGroupOption(1, getHasVehicleControlElement());
    selectCheckboxGroupOption(0, receiveNewsCheckboxGroupElement);
    selectCheckboxGroupOption(1, receiveNewsCheckboxGroupElement);
    toggleIsActiveSwitch();
    userEvent.click(getTermsCheckboxInputElement());
  };

  const submitForm = (): void => {
    const submitButton = getSubmitButton();
    userEvent.click(submitButton);
  };

  const resetForm = (): void => {
    const resetButton = getCancelButton();
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
      checkboxGroupElement = getReceiveNewsCheckboxGroupElement();
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
      const inputElement = getUserTypeSelectElement();
      expect(inputElement).toBeVisible();
      expect(inputElement).toHaveClass('dot-select');
      expect(inputElement).toHaveValue('Basic user');
      expect(inputElement).toBeEnabled();
    });

    it('should render input text with appropriate label', () => {
      const inputElement = screen.getByText('First Name');
      expect(inputElement).toBeVisible();
    });

    it('should render input text with appropriate helper text', () => {
      const inputElement = screen.getByText(
        'Your first name goes here (at least 2 characters required)'
      );
      expect(inputElement).toBeVisible();
    });

    it('should render autocomplete control with appropriate initial value', () => {
      const autocompleteElement = getInterestsAutocompleteElement();
      expect(autocompleteElement).toBeVisible();
      expect(autocompleteElement).toHaveClass('dot-autocomplete');
      const inputElement = getInterestsAutocompleteTextboxElement();
      expect(inputElement).toBeEnabled();
      const selectedOptionElement =
        within(autocompleteElement).getByText('Breathing');
      expect(selectedOptionElement).toBeVisible();
    });

    it('should display correct error message when option is removed from the autocomplete field', () => {
      const autocompleteElement = getInterestsAutocompleteElement();
      removeAutocompleteOption(autocompleteElement);
      within(autocompleteElement).getByText('Required field');
    });

    it('should display correct error message when minLength condition is not satisfied', () => {
      const autocompleteElement = getInterestsAutocompleteElement();
      removeAutocompleteOption(autocompleteElement);
      addAutocompleteOption('Programming', autocompleteElement);
      expectAutocompleteMinLengthErrorMessage(autocompleteElement);
    });

    it('should display correct error message when maxLength condition is not satisfied', () => {
      const autocompleteElement = getInterestsAutocompleteElement();
      addAutocompleteOption('Hiking', autocompleteElement);
      addAutocompleteOption('Breathing', autocompleteElement);
      addAutocompleteOption('Swimming', autocompleteElement);
      addAutocompleteOption('Dancing', autocompleteElement);
      within(autocompleteElement).getByText('Maximum of 4 options allowed');
    });

    it('should render radio group control with correct radio buttons and initial value', () => {
      const radioGroupElement = getHasVehicleRadioGroupElement();
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
      const labelElement = screen.getByText('Do you own a vehicle?');
      expect(labelElement).toBeVisible();
    });

    it('should NOT render custom user type textbox by default', () => {
      const textboxElement = queryCustomUserTypeTextboxElement();
      expect(textboxElement).not.toBeInTheDocument();
    });

    it("should render custom user type textbox when user type is set to 'Other'", () => {
      selectUserType('Other');
      const textboxElement = queryCustomUserTypeTextboxElement();
      expect(textboxElement).toBeVisible();
      expect(textboxElement).toBeEnabled();
      expect(textboxElement).toBeEmptyDOMElement();
    });

    it('should render select element', () => {
      const selectElement = getUserTypeSelectElement();
      expect(selectElement).toBeVisible();
      expect(selectElement).toBeEnabled();
      const options = within(selectElement).getAllByRole('option');
      expect(options[0]).toHaveValue('');
      expect(options[1]).toHaveValue('Basic user');
      expect(options[2]).toHaveValue('Administrator');
      expect(options[3]).toHaveValue('Other');
    });

    it('should render checkbox group element', () => {
      const checkboxGroupElement = getReceiveNewsCheckboxGroupElement();
      expect(checkboxGroupElement).toBeVisible();
      const checkboxElements = getReceiveNewsCheckboxGroupInputElements();
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

    it('should render isActive switch element with correct initial value', () => {
      const switchElement = getIsActiveSwitchElement();
      expect(switchElement).toBeVisible();
      expect(switchElement).toHaveClass('MuiSwitch-switchBase');
      // Confirm that it is not checked (as per initial value)
      expectSwitchToBeChecked(switchElement, false);
      const checkboxElement = within(switchElement).getByRole('checkbox');
      expect(checkboxElement).toBeEnabled();
    });

    it('should render unchecked checkbox element', () => {
      const checkboxElement = getTermsCheckboxElement();
      expect(checkboxElement).toBeVisible();
      expect(checkboxElement).not.toBeChecked();
    });

    it("should render disabled 'Test' button", () => {
      const testButton = getTestButton();
      expect(testButton).toBeVisible();
      expect(testButton).toBeDisabled();
      expect(testButton).toHaveClass('dot-progress-button');
    });

    it('should render enabled reset button', () => {
      const resetButton = getCancelButton();
      expect(resetButton).toBeVisible();
      expect(resetButton).toBeEnabled();
    });

    it('should remove all values from the form inputs when clicking Reset button', () => {
      const firstNameElement = getFirstNameTextbox();
      const lastNameElement = getLastNameTextbox();
      const genderRadioGroupElement = getGenderRadioGroupElement();
      const genderRadioButton = within(genderRadioGroupElement).getAllByRole(
        'radio'
      );
      const usernameElement = getUsernameTextbox();
      const passwordElement = getPasswordTextbox();
      const userTypeSelectElement = getUserTypeSelectElement();
      const interestsAutocompleteTextboxElement =
        getInterestsAutocompleteTextboxElement();
      const hasVehicleElement = getHasVehicleControlElement();
      const vehicleModelElement = getVehicleModelControlElement();
      const receiveNewsCheckboxGroupElement =
        getReceiveNewsCheckboxGroupElement();
      const isActiveSwitchElement = getIsActiveSwitchElement();
      const termsCheckboxElement = getTermsCheckboxElement();
      const cancelButton = getCancelButton();

      fillFormWithData();

      // Click reset button
      userEvent.click(cancelButton);

      // Confirm that all values are reset
      expect(firstNameElement).toBeEmptyDOMElement();
      expect(lastNameElement).toBeEmptyDOMElement();
      expect(usernameElement).toBeEmptyDOMElement();
      expect(passwordElement).toBeEmptyDOMElement();
      expect(userTypeSelectElement).toHaveValue('Basic user');
      expect(interestsAutocompleteTextboxElement).toBeEmptyDOMElement();
      expect(vehicleModelElement).toBeEmptyDOMElement();
      waitFor(() => {
        expect(genderRadioButton[0]).toBeChecked();
        expectRadioGroupElementToBeChecked(0, genderRadioGroupElement, true);
        expectRadioGroupElementToBeChecked(0, hasVehicleElement, false);
        expectCheckboxGroupElementToBeChecked(
          0,
          false,
          receiveNewsCheckboxGroupElement
        );
        expectCheckboxGroupElementToBeChecked(
          1,
          false,
          receiveNewsCheckboxGroupElement
        );
        expectCheckboxGroupElementToBeChecked(
          2,
          false,
          receiveNewsCheckboxGroupElement
        );
        expectSwitchToBeChecked(isActiveSwitchElement, false);
        expect(termsCheckboxElement).not.toBeChecked();
      });
    });

    it('should render disabled Submit button when live validation is on', () => {
      const submitButton = getSubmitButton();
      expect(submitButton).toBeVisible();
      expect(submitButton).toBeDisabled();
    });

    it('should execute correct event handler when form is submitted', () => {
      fillFormWithData();
      const submitButton = getSubmitButton();
      expect(submitButton).toBeEnabled();
      userEvent.click(submitButton);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("should execute correct event handler when 'Test' button is clicked", () => {
      fillFormWithData();
      const testButton = getTestButton();
      expect(testButton).toBeEnabled();
      userEvent.click(testButton);
      expect(handleProgressControlClick).toHaveBeenCalledTimes(1);
      expect(handleProgressControlClick).toHaveBeenCalledWith({
        customUserType: null,
        firstName: 'John',
        isAccountActive: true,
        lastName: 'Wayne',
        gender: 'female',
        hasVehicle: 'yes',
        interests: [
          {
            title: 'Breathing',
          },
          {
            title: 'Hiking',
          },
        ],
        password: 'pass123',
        receive: [
          {
            label: 'New products notifications',
            value: 'products',
          },
          {
            label: 'Personal info change notifications',
            value: 'personal',
          },
        ],
        terms: true,
        userType: 'Administrator',
        username: 'jwayne',
        vehicleModel: null,
      });
    });

    it("should have disabled 'vehicleModel' control if 'hasVehicle' control's value is set to 'no'", () => {
      const hasVehicleElement = getHasVehicleControlElement();
      const vehicleModelElement = getVehicleModelControlElement();
      expectRadioGroupElementToBeChecked(0, hasVehicleElement, true);
      expect(vehicleModelElement).toBeDisabled();
    });

    it("should have enabled 'vehicleModel' control if 'hasVehicle' control's value is set to 'yes'", () => {
      const hasVehicleElement = getHasVehicleControlElement();
      const vehicleModelElement = getVehicleModelControlElement();
      selectRadioGroupOption(1, hasVehicleElement);
      expectRadioGroupElementToBeChecked(1, hasVehicleElement, true);
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
        selectUserType('Other');
        submitForm();
        const middleNameTextboxElement = queryCustomUserTypeTextboxElement();
        expect(
          within(middleNameTextboxElement.closest('.dot-text-field')).getByText(
            'Required field'
          )
        );
      });

      it('should NOT render error message when field is edited and validation is not satisfied', () => {
        const autocompleteElement = getInterestsAutocompleteElement();
        removeAutocompleteOption(autocompleteElement);
        addAutocompleteOption('Hiking', autocompleteElement);
        expectAutocompleteMinLengthErrorMessage(autocompleteElement, false);
      });

      it('should render error message on submit button click', () => {
        const autocompleteElement = getInterestsAutocompleteElement();
        submitForm();
        expectAutocompleteMinLengthErrorMessage(autocompleteElement, true);
      });

      it('should NOT render error message after form is reset', () => {
        // Trigger error message display
        submitForm();
        resetForm();
        const autocompleteElement = getInterestsAutocompleteElement();
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
        const autocompleteTextboxElement =
          getInterestsAutocompleteTextboxElement();
        const selectElement = getUserTypeSelectElement();
        const switchInputElement = getIsActiveSwitchInputElement();
        const testButtonElement = getTestButton();
        const resetButton = getCancelButton();
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
