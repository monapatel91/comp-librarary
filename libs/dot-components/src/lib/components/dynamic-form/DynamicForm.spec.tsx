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

  const getRadioGroupElement = (): HTMLElement =>
    screen.getByTestId('hasMiddleName');

  const queryMiddleNameTextboxElement = (): HTMLElement | undefined =>
    screen.queryByTestId('middleName');

  const removeAutocompleteOption = (autocompleteElement: HTMLElement): void => {
    const closeElement =
      autocompleteElement.getElementsByClassName('MuiChip-deleteIcon')[0];
    userEvent.click(closeElement);
  };

  const addAutocompleteOption = (
    option: string,
    autocompleteElement: HTMLElement
  ): void => {
    userEvent.click(within(autocompleteElement).getByRole('textbox'));
    const popperElement = screen.getByRole('presentation');
    userEvent.click(within(popperElement).getByText(option));
  };

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
      const inputElement = screen.getByTestId('firstName');
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
      const inputElement = within(autocompleteElement).getByRole('textbox');
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
      within(autocompleteElement).getByText('Pick at least 2 options');
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
  });
});
