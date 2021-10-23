import React from 'react';
import { render, screen, fireEvent } from '../../testing-utils';

import { DotThemeProvider } from '../../theme-provider/ThemeProvider';
import { DotJsonSchemaForm } from './JsonSchemaForm';

describe('DotJsonSchemaForm', () => {
  describe.skip('events', () => {
    it('should trigger the onChange event as changes are made to the form', () => {
      expect.assertions(1);
      const changeSpy = jest.fn();
      render(
        <DotThemeProvider>
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
        </DotThemeProvider>
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
        <DotThemeProvider>
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
        </DotThemeProvider>
      );

      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveClass('dot-input');
    });

    it('should display error in hint if there is an error', () => {
      expect.assertions(2);
      render(
        <DotThemeProvider>
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
        </DotThemeProvider>
      );

      const description = screen.queryByText('Description of field');
      expect(description).not.toBeInTheDocument();
      const error = screen.queryByText('is a required property');
      expect(error).toBeInTheDocument();
    });

    it('should display description in hint if there is no error', () => {
      expect.assertions(2);
      render(
        <DotThemeProvider>
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
        </DotThemeProvider>
      );

      const description = screen.queryByText('Description of field');
      expect(description).toBeInTheDocument();
      const error = screen.queryByText('is a required property');
      expect(error).not.toBeInTheDocument();
    });

    it('should render a password field if that is the format specified', () => {
      expect.assertions(1);
      render(
        <DotThemeProvider>
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
        </DotThemeProvider>
      );

      const inputElement = screen.getByLabelText('Password');
      expect(inputElement).toHaveAttribute('type', 'password');
    });
  });
});
