import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  AutoCompleteOption,
  DotAutoComplete,
  parseAutoCompleteValue,
} from './AutoComplete';

describe('AutoComplete', () => {
  const dummyOptions: Array<AutoCompleteOption> = [
    { category: 'Marvel', title: 'Hulk' },
    { category: 'Marvel', title: 'Thor' },
    { category: 'Marvel', title: 'Ironman' },
    { category: 'Marvel', title: 'Spiderman' },
    { category: 'D.C.', title: 'Batman' },
    { category: 'D.C.', title: 'Flash' },
    { category: 'D.C.', title: 'Aquaman' },
    { category: 'D.C.', title: 'Wonderwoman' },
  ];

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotAutoComplete
        label="Label"
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display categories when grouping enabled', () => {
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
        label="Label"
        options={dummyOptions}
        placeholder="Choose your hero"
      />
    );
    const textField = screen.getByRole('textbox');
    userEvent.click(textField);

    const listBox = screen.getByRole('listbox');
    expect(listBox).toHaveTextContent('Marvel');
  });

  it('should allow arbitrary value when enabled', () => {
    const onChange = jest.fn();
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
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
    expect(onChange).toHaveBeenCalledWith(['Bob'], 'create-option');
  });

  it('should trigger the onChange event if one is provided', () => {
    const onChange = jest.fn();
    render(
      <DotAutoComplete
        data-testid="autocomplete-input-field"
        group={true}
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
    expect(onChange).toHaveBeenCalledWith(['Hulk'], 'create-option');
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
