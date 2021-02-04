import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotInputText } from './InputText';

describe('DotInputText', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <DotInputText id="test-id" label="Test" name="test" required={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should trigger the onChange event if one is provided', () => {
    const onChange = jest.fn();
    render(
      <DotInputText
        id="id-test"
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

  it('should be multiline', () => {
    const { baseElement } = render(
      <DotInputText
        id="id-test"
        label="Test"
        multiline
        name="test"
        required={false}
        data-testid="test-input"
      />
    );
    const textarea = baseElement.querySelector('textarea');
    expect(textarea).toBeVisible();
  });

  it('rows should be 4', async () => {
    render(
      <DotInputText
        id="id-test"
        label="Test"
        rows={4}
        multiline
        name="test"
        required={false}
        data-testid="test-input"
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField).toHaveAttribute('rows', '4');
  });

  it('should not be textarea', async () => {
    const { baseElement } = render(
      <DotInputText
        id="id-test"
        label="Test"
        name="test"
        required={false}
        rows={4}
        data-testid="test-input"
      />
    );
    const textarea = baseElement.querySelector('textarea');
    const input = baseElement.querySelector('input');
    expect(textarea).toBeFalsy();
    expect(input).toBeVisible();
  });
});
