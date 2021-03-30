import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotInputText, InputTextProps } from './InputText';
import { DotIcon } from '../icon/Icon';

const mockFunc = jest.fn();

describe('DotInputText', () => {
  it('should have unchanged API', () => {
    const props = {
      autoFocus: true,
      defaultValue: 'Batman',
      disabled: true,
      endIcon: <DotIcon iconId="save" />,
      error: true,
      fullWidth: true,
      helperText: 'help me',
      id: 'text-id',
      label: 'text label',
      multiline: true,
      name: 'my-text',
      onChange: mockFunc,
      placeholder: 'Enter something',
      readOnly: true,
      required: true,
      rows: 5,
      rowsMax: 15,
      size: 'small',
      startIcon: <DotIcon iconId="save" />,
      type: 'text',
      value: 'Batman',
      warning: false,
    };
    const inputTextProps: InputTextProps = {
      autoFocus: true,
      defaultValue: 'Batman',
      disabled: true,
      endIcon: <DotIcon iconId="save" />,
      error: true,
      fullWidth: true,
      helperText: 'help me',
      id: 'text-id',
      label: 'text label',
      multiline: true,
      name: 'my-text',
      onChange: mockFunc,
      placeholder: 'Enter something',
      readOnly: true,
      required: true,
      rows: 5,
      rowsMax: 15,
      size: 'small',
      startIcon: <DotIcon iconId="save" />,
      type: 'text',
      value: 'Batman',
      warning: false,
    };
    expect(inputTextProps).toEqual(props);
  });

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
  it('should value of "test value"', () => {
    const onChange = jest.fn();
    render(
      <DotInputText
        id="id-test"
        label="Test"
        name="test"
        required={false}
        onChange={onChange}
        data-testid="test-input"
        value="test value"
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField.getAttribute('value')).toBe('test value');
  });

  it('should be multiline', () => {
    render(
      <DotInputText
        id="id-test"
        label="Test"
        multiline
        name="test"
        required={false}
        data-testid="test-input"
      />
    );
    const textarea = screen.getByTestId('test-input');
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
    render(
      <DotInputText
        id="id-test"
        label="Test"
        name="test"
        required={false}
        rows={4}
        data-testid="test-input"
      />
    );

    const input = screen.getByTestId('test-input');
    expect(input.tagName).not.toBe('TEXTAREA');
    expect(input.tagName).toBe('INPUT');
  });

  it('should be enabled', () => {
    render(
      <DotInputText
        data-testid="test-input"
        id="id-test"
        label="Test"
        name="test"
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField).toBeEnabled();
  });

  it('should be disabled', () => {
    render(
      <DotInputText
        disabled={true}
        data-testid="test-input"
        id="id-test"
        label="Test"
        name="test"
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField).toBeDisabled();
  });
});
