import React from 'react';
import { render, screen } from '../../testing-utils';

import { DotThemeProvider } from '../../theme-provider/ThemeProvider';
import { DotJsonSchemaForm } from './JsonSchemaForm';

describe('DotJsonSchemaForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotThemeProvider>
        <DotJsonSchemaForm schema={{}} />
      </DotThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  describe('string fields', () => {
    it('should use DotInputText components for string fields', () => {
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
