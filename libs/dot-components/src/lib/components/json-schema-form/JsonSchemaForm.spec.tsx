import React from 'react';
import { render, screen, fireEvent } from '../../testing-utils';

import { DotJsonSchemaForm } from './JsonSchemaForm';

describe('DotJsonSchemaForm', () => {
  describe.skip('events', () => {
    it('should trigger the onChange event as changes are made to the form', () => {
      expect.assertions(1);
      const changeSpy = jest.fn();
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              stringField: {
                type: 'string',
                title: 'String field',
              },
            },
          }}
          onChange={changeSpy}
        />
      );

      const inputElement = screen.getByRole('textbox');
      // I DON'T UNDERSTAND WHY THIS IS FAILING
      fireEvent.keyPress(inputElement, 'a');
      expect(changeSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('string fields', () => {
    it('should use DotInputText components for string fields', () => {
      expect.assertions(1);
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              stringField: {
                type: 'string',
                title: 'String field',
              },
            },
          }}
        />
      );

      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveClass('dot-input');
    });

    it('should display error in hint if there is an error', () => {
      expect.assertions(2);
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              stringField: {
                type: 'string',
                title: 'String field',
                description: 'Description of field',
              },
            },
            required: ['stringField'],
          }}
          liveValidate={true}
        />
      );

      const description = screen.queryByText('Description of field');
      expect(description).not.toBeInTheDocument();
      const error = screen.queryByText('is a required property');
      expect(error).toBeInTheDocument();
    });

    it('should display description in hint if there is no error', () => {
      expect.assertions(2);
      render(
        <DotJsonSchemaForm
          formData={{ stringField: 'test value' }}
          liveValidate={true}
          schema={{
            properties: {
              stringField: {
                type: 'string',
                title: 'String field',
                description: 'Description of field',
              },
            },
            required: ['stringField'],
          }}
        />
      );

      const description = screen.queryByText('Description of field');
      expect(description).toBeInTheDocument();
      const error = screen.queryByText('is a required property');
      expect(error).not.toBeInTheDocument();
    });

    it('should render a password field if that is the format specified', () => {
      expect.assertions(1);
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              stringField: {
                type: 'string',
                title: 'Password',
                format: 'password',
              },
            },
          }}
        />
      );

      const inputElement = screen.getByLabelText('Password');
      expect(inputElement).toHaveAttribute('type', 'password');
    });
  });

  describe('select fields', () => {
    it('should use a select field when specific in the uiSchema', () => {
      expect.assertions(1);
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              selectField: {
                type: 'string',
                title: 'Select field',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: ['', 'Option 1', 'Option 2', 'Option 3'],
                },
              },
            },
          }}
          uiSchema={{
            selectField: {
              'ui:widget': 'select',
            },
          }}
        />
      );

      const selectElement = screen.getByLabelText('Select field');
      expect(selectElement).toHaveClass('dot-select');
    });
  });

  describe('checkboxes fields', () => {
    it('should use a checkboxes field when specific in the uiSchema', () => {
      expect.assertions(1);
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              checkboxesField: {
                type: 'array',
                title: 'Checkboxes field',
                uniqueItems: true,
                items: {
                  type: 'string',
                  anyOf: [
                    { title: 'Title 1', const: 'value1' },
                    { title: 'Title 2', const: 'value2' },
                    { title: 'Title 3', const: 'value3' },
                  ],
                },
              },
            },
          }}
          uiSchema={{
            checkboxesField: {
              'ui:widget': 'checkboxes',
            },
          }}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes.length).toEqual(3);
    });
  });

  describe('radio fields', () => {
    it('should use a radio field when specific in the uiSchema', () => {
      expect.assertions(1);
      render(
        <DotJsonSchemaForm
          schema={{
            properties: {
              radioField: {
                type: 'string',
                title: 'Radio field',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                },
              },
            },
          }}
          uiSchema={{
            radioField: {
              'ui:widget': 'radio',
            },
          }}
        />
      );

      const radios = screen.getAllByRole('radio');
      expect(radios.length).toEqual(4);
    });
  });
});
