import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { DotInputText } from './InputFormFields';

describe('DotInputText', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <DotInputText label="Test" name="test" required={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should trigger the onChange event if one is provided', () => {
    const onChange = jest.fn();
    render(
      <DotInputText
        label="Test"
        name="test"
        required={false}
        onChange={onChange}
        data-testid="test-input"
      />
    );
    const inputField = screen.getByTestId('test-input');

    userEvent.type(inputField, 'Something super awesome!!!');
    expect(onChange).toHaveBeenCalled();
  });
});
