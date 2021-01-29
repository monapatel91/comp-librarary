import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotInputText } from './InputText';

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
