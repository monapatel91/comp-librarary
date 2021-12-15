import React, { createRef, useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { inputSizeOptions } from '../input-form-fields/InputFormFields.propTypes';
import { DotInputText, InputTextProps } from './InputText';
import { DotIcon } from '../icon/Icon';
import { DotButton } from '../button/Button';

const mockFunc = jest.fn();
const inputRef = createRef<HTMLInputElement>();

describe('DotInputText', () => {
  it('should have unchanged API', () => {
    const props = {
      autoFocus: true,
      className: 'test-class',
      'data-testid': 'testid',
      defaultValue: 'Batman',
      disabled: true,
      endIcon: <DotIcon iconId="save" />,
      error: true,
      fullWidth: true,
      hasDebounce: false,
      helperText: 'help me',
      id: 'text-id',
      inputRef: inputRef,
      label: 'text label',
      multiline: true,
      name: 'my-text',
      onBlur: mockFunc,
      onChange: mockFunc,
      onFocus: mockFunc,
      onKeyDown: mockFunc,
      placeholder: 'Enter something',
      readOnly: true,
      required: true,
      rows: 5,
      rowsMax: 15,
      size: 'small' as inputSizeOptions,
      startIcon: <DotIcon iconId="save" />,
      type: 'text',
      value: 'Batman',
      warning: false,
    };
    const inputTextProps: InputTextProps = props;
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
        data-testid="test-input"
        id="id-test"
        label="Test"
        name="test"
        onChange={onChange}
        required={false}
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
        data-testid="test-input"
        id="id-test"
        label="Test"
        name="test"
        onChange={onChange}
        required={false}
        value="test value"
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField.getAttribute('value')).toBe('test value');
  });

  it('should be multiline', () => {
    render(
      <DotInputText
        data-testid="test-input"
        id="id-test"
        label="Test"
        multiline
        name="test"
        required={false}
      />
    );
    const textarea = screen.getByTestId('test-input');
    expect(textarea).toBeVisible();
  });

  it('rows should be 4', async () => {
    render(
      <DotInputText
        data-testid="test-input"
        id="id-test"
        label="Test"
        multiline
        name="test"
        required={false}
        rows={4}
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField).toHaveAttribute('rows', '4');
  });

  it('should not be textarea', async () => {
    render(
      <DotInputText
        data-testid="test-input"
        id="id-test"
        label="Test"
        name="test"
        required={false}
        rows={4}
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
        data-testid="test-input"
        disabled={true}
        id="id-test"
        label="Test"
        name="test"
      />
    );
    const inputField = screen.getByTestId('test-input');
    expect(inputField).toBeDisabled();
  });

  describe('with icons', () => {
    const dataTestId = 'test-input';
    const renderComponent = (iconType: 'warning' | 'error') => {
      render(
        <DotInputText
          data-testid={dataTestId}
          error={iconType === 'error'}
          id="id-test"
          name="test"
          warning={iconType === 'warning'}
        />
      );
    };

    it('should render warning icon', () => {
      const iconType = 'warning';
      renderComponent(iconType);
      const warningIcon = screen.getByTestId(`${dataTestId}-${iconType}-icon`);
      const errorIcon = screen.queryByTestId(`${dataTestId}-error-icon`);
      expect(warningIcon).toBeVisible();
      expect(errorIcon).not.toBeInTheDocument();
    });

    it('should render error icon', () => {
      const iconType = 'error';
      renderComponent(iconType);
      const errorIcon = screen.getByTestId(`${dataTestId}-${iconType}-icon`);
      const warningIcon = screen.queryByTestId(`${dataTestId}-warning-icon`);
      expect(errorIcon).toBeVisible();
      expect(warningIcon).not.toBeInTheDocument();
    });
  });

  it('should execute callback function for each key stroke', () => {
    const dataTestId = 'test-input';
    const handleChange = jest.fn();
    const textToWrite = 'my sample text';
    render(
      <DotInputText
        data-testid={dataTestId}
        id="id-test"
        label="Test"
        name="test"
        onChange={handleChange}
      />
    );
    const inputField = screen.getByTestId(dataTestId);
    userEvent.type(inputField, textToWrite);
    expect(inputField).toHaveValue(textToWrite);
    expect(handleChange).toHaveBeenCalledTimes(textToWrite.length);
  });

  it('should execute callback function only after text has been entered', async () => {
    const dataTestId = 'test-input';
    const handleChange = jest.fn();
    const textToWrite = 'my sample text';
    render(
      <DotInputText
        data-testid={dataTestId}
        hasDebounce={true}
        id="id-test"
        name="test"
        onChange={handleChange}
      />
    );
    const inputField = screen.getByTestId(dataTestId);
    userEvent.type(inputField, textToWrite);
    expect(inputField).toHaveValue(textToWrite);
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({
            value: textToWrite,
          }),
        })
      );
    });
  });

  it('should set text value from the outside when debounce feature is enabled', () => {
    const dataTestId = 'test-input';
    const initialValue = 'my initial value';
    const Component = () => {
      const [text, setText] = useState(initialValue);
      const handleReset = () => setText('');
      return (
        <>
          <DotInputText
            data-testid={dataTestId}
            hasDebounce={true}
            id="id-test"
            name="test"
            value={text}
          />
          <DotButton onClick={handleReset}>Reset</DotButton>
        </>
      );
    };
    render(<Component />);
    const inputField = screen.getByTestId(dataTestId);
    expect(inputField).toHaveValue(initialValue);
    userEvent.click(screen.getByText('Reset'));
    waitFor(() => {
      expect(inputField).toHaveValue('');
    });
  });

  describe('with defaultProp', () => {
    const dataTestId = 'test-input';
    const defaultValue = 'my default value';

    const renderComponent = (hasDebounce = true) => {
      render(
        <DotInputText
          data-testid={dataTestId}
          defaultValue={defaultValue}
          hasDebounce={hasDebounce ? true : undefined}
          id="id-test"
          name="test"
        />
      );
    };

    it("should render text coming from 'defaultValue' prop when 'hasDebounce' feature is NOT enabled", async () => {
      renderComponent(false);
      const inputField = screen.getByTestId(dataTestId);
      expect(inputField).toHaveValue(defaultValue);
    });

    it("should NOT render text coming from 'defaultValue' prop when 'hasDebounce' feature is enabled", async () => {
      renderComponent(true);
      const inputField = screen.getByTestId(dataTestId);
      expect(inputField).not.toHaveValue(defaultValue);
    });
  });
});
