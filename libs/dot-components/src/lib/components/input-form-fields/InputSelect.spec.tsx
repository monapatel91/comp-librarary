import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '../../testing-utils';
import { DotInputSelect, InputSelectProps } from './InputSelect';
import { inputSizeOptions } from '../input-form-fields/InputFormFields.propTypes';
import { DotIcon } from '../icon/Icon';

const sampleOptions = ['Batman', 'Ironman', 'Superman'];
const mockFunc = jest.fn();
const inputRef = createRef<HTMLInputElement>();

describe('DotInputSelect', () => {
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
      helperText: 'help me',
      id: 'text-id',
      inputRef: inputRef,
      label: 'select label',
      name: 'my-text',
      onBlur: mockFunc,
      onChange: mockFunc,
      onFocus: mockFunc,
      onkeydown: mockFunc,
      options: ['Batman', 'Superman'],
      required: true,
      size: 'small' as inputSizeOptions,
      startIcon: <DotIcon iconId="save" />,
      type: 'text',
      value: 'Batman',
      warning: false,
    };
    const inputSelectProps: InputSelectProps = props;
    expect(inputSelectProps).toEqual(props);
  });

  it('renders successfully', () => {
    const { baseElement } = render(
      <DotInputSelect
        id="test-id"
        label="Foo Bar"
        name="bar"
        required={false}
        options={sampleOptions}
        value="Batman"
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('displays correct number of options', async () => {
    render(
      <DotInputSelect
        id="test-id"
        label="Foo Bar"
        name="foo"
        required={false}
        options={sampleOptions}
        value="Batman"
      />
    );

    userEvent.click(screen.getByRole('combobox'));
    expect(await screen.findAllByRole('option')).toHaveLength(3);
  });

  it('should trigger the onChange event if one is provided', async () => {
    const onChange = jest.fn();
    render(
      <DotInputSelect
        id="test-id"
        label="Foo Bar"
        name="foo"
        required={false}
        options={sampleOptions}
        onChange={onChange}
        value="Batman"
      />
    );
    const inputField = screen.getByRole('combobox');

    fireEvent.change(inputField, { targe: { value: 'Ironman' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('should be enabled', () => {
    render(
      <DotInputSelect
        id="test-id"
        label="Foo Bar"
        name="foo"
        required={false}
        options={sampleOptions}
        value="Batman"
      />
    );
    const inputField = screen.getByRole('combobox');
    expect(inputField).toBeEnabled();
  });

  it('should be disabled', () => {
    render(
      <DotInputSelect
        disabled={true}
        id="test-id"
        label="Foo Bar"
        name="foo"
        required={false}
        options={sampleOptions}
        value="Batman"
      />
    );
    const inputField = screen.getByRole('combobox');
    expect(inputField).toBeDisabled();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-input-select';
    render(
      <DotInputSelect
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        id="test-id"
        label="Foo Bar"
        name="foo"
        options={sampleOptions}
        value="Batman"
      />
    );
    const inputSelectElement = screen.getByTestId(dataTestId);
    expect(inputSelectElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
