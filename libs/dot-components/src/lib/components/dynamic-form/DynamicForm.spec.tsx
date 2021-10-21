import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, RenderResult, within } from '../../testing-utils';
import { DotDynamicForm, DynamicFormProps } from './DynamicForm';
import { getSampleConfig } from './sample';

describe('DotDynamicForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const config = getSampleConfig();

  const componentProps: DynamicFormProps = {
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

  const getRadioGroupElement = (): HTMLElement =>
    screen.getByTestId('hasMiddleName');

  const getSwitchElement = (): HTMLElement => screen.getByTestId('isMandatory');

  const getResetButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Reset' });

  const getSubmitButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Submit form' });

  const getTestButton = (): HTMLElement =>
    screen.getByRole('button', { name: 'Test' });

  const getFirstNameTextbox = (): HTMLElement =>
    screen.getByTestId('firstName');

  const queryMiddleNameTextboxElement = (): HTMLElement | undefined =>
    screen.queryByTestId('middleName');

  const removeAutocompleteOption = (autocompleteElement: HTMLElement): void => {
    const closeElement =
      autocompleteElement.getElementsByClassName('MuiChip-deleteIcon')[0];
    userEvent.click(closeElement);
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

  it('should have unchanged API', () => {
    const props = {
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

    it('should remove all values from the form inputs', () => {
      const hasMiddleNameElement = getRadioGroupElement();
      const switchElement = getSwitchElement();
      selectRadioGroupOption(1, hasMiddleNameElement);
      userEvent.click(switchElement);
      const resetButton = getResetButton();
      userEvent.click(resetButton);
      const firstNameElement = getFirstNameTextbox();
      const autocompleteTextboxElement = getAutocompleteTextboxElement();
      expect(firstNameElement).toBeEmptyDOMElement();
      expect(autocompleteTextboxElement).toBeEmptyDOMElement();
      expect(
        within(hasMiddleNameElement).getAllByRole('radio')[0]
      ).toBeChecked();
      expectSwitchToBeChecked(switchElement, false);
    });

    it('should render disabled Submit button when live validation is on', () => {
      const submitButton = getSubmitButton();
      expect(submitButton).toBeVisible();
      expect(submitButton).toBeDisabled();
    });

    it('should execute correct event handler when form is submitted', () => {
      typeFirstName('first name');
      addAutocompleteOption('Option 2');
      toggleSwitch();
      const submitButton = getSubmitButton();
      expect(submitButton).toBeEnabled();
      userEvent.click(submitButton);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
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
  });
});
