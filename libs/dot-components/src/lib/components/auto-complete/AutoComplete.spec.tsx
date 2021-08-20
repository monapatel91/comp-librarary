import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import {
  AutoCompleteOption,
  AutoCompleteProps,
  autoCompleteSize,
  DotAutoComplete,
  parseAutoCompleteValue,
} from './AutoComplete';

describe('AutoComplete', () => {
  const dummyOptions: Array<AutoCompleteOption> = [
    { group: 'Marvel', title: 'Hulk' },
    { group: 'Marvel', title: 'Thor' },
    { group: 'Marvel', title: 'Ironman' },
    { group: 'Marvel', title: 'Spiderman' },
    { group: 'D.C.', title: 'Batman', error: true },
    { group: 'D.C.', title: 'Flash', error: false },
    { group: 'D.C.', title: 'Aquaman' },
    { group: 'D.C.', title: 'Wonderwoman' },
    { title: 'Underdog' },
  ];

  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const inputRef = createRef<HTMLInputElement>();
    const props = {
      autoFocus: true,
      defaultValue: dummyOptions[0],
      disabled: true,
      error: false,
      freesolo: false,
      group: true,
      helperText: 'a little help here?',
      inputId: 'input-id',
      inputRef: inputRef,
      label: 'My Label',
      multiple: false,
      onChange: onChange,
      options: dummyOptions,
      placeholder: 'Select a hero',
      size: 'medium' as autoCompleteSize,
      value: dummyOptions[1],
    };
    const autoCompleteProps: AutoCompleteProps = props;
    expect(autoCompleteProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotAutoComplete
        inputId="input-id"
        label="Label"
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display chips with correct error styling', () => {
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
        inputId="input-id"
        label="Label"
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    const textField = screen.getByRole('textbox');
    // error = true
    userEvent.click(textField);
    const batmanOption = screen.getByText('Batman');
    userEvent.click(batmanOption);
    const batmanChip = screen.getByText('Batman');
    expect(batmanChip.closest('div')).toHaveClass('Mui-error');
    // error = false
    userEvent.click(textField);
    const flashOption = screen.getByText('Flash');
    userEvent.click(flashOption);
    const flashChip = screen.getByText('Flash');
    expect(flashChip.closest('div')).not.toHaveClass('Mui-error');
    // error not provided
    userEvent.click(textField);
    const aquamanOption = screen.getByText('Aquaman');
    userEvent.click(aquamanOption);
    const aquamanChip = screen.getByText('Aquaman');
    expect(aquamanChip.closest('div')).not.toHaveClass('Mui-error');
  });

  it('should display categories when grouping enabled', () => {
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
        inputId="input-id"
        label="Label"
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    const textField = screen.getByRole('textbox');
    userEvent.click(textField);

    const listBox = screen.getByRole('listbox');
    expect(listBox).toHaveTextContent('Marvel');
    // option with group provided
    expect(listBox).toHaveTextContent('Spiderman');
    // option with no group provided
    expect(listBox).toHaveTextContent('Underdog');
  });

  it('should be disabled', () => {
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        disabled={true}
        group={true}
        inputId="input-id"
        label="Label"
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    const textField = screen.getByRole('textbox');
    expect(textField).toBeDisabled();
  });

  it('should allow arbitrary value when enabled', () => {
    const onChange = jest.fn();
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
        inputId="input-id"
        label="Label"
        onChange={onChange}
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    const textField = screen.getByRole('textbox');

    userEvent.click(textField);
    userEvent.type(textField, 'Bob');
    expect(textField).toHaveValue('Bob');
    userEvent.type(textField, '{enter}');
    expect(onChange).toHaveBeenCalledWith(
      expect.anything(),
      ['Bob'],
      'create-option'
    );
  });

  it('should trigger the onChange event if one is provided', () => {
    const onChange = jest.fn();
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
        inputId="input-id"
        label="Label"
        onChange={onChange}
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );

    const textField = screen.getByRole('textbox');
    userEvent.type(textField, 'Hulk');
    userEvent.type(textField, '{enter}');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(
      expect.anything(),
      ['Hulk'],
      'create-option'
    );
  });
});

describe('parseAutoCompleteValue', () => {
  it('parses an object', () => {
    const sampleObject = {
      title: 'Batman',
      category: 'Superhero',
    };
    const value = parseAutoCompleteValue(sampleObject);
    expect(value).toBe('Batman');
  });

  it('parses a string', () => {
    const sampleString = 'Robin';
    const value = parseAutoCompleteValue(sampleString);
    expect(value).toBe('Robin');
  });

  it('returns an empty string if invalid', () => {
    const value = parseAutoCompleteValue(null);
    expect(value).toBe('');
  });
});
