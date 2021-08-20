import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import {
  DotSwitch,
  SwitchColor,
  SwitchLabelPlacement,
  SwitchProps,
  SwitchSize,
} from './Switch';

describe('Switch', () => {
  const onChange = jest.fn();
  const inputRef = createRef<HTMLInputElement>();
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'aria label',
      checked: false,
      color: 'primary' as SwitchColor,
      disabled: false,
      id: 'id',
      inputRef: inputRef,
      label: 'My Switch',
      labelPlacement: 'end' as SwitchLabelPlacement,
      onChange: onChange,
      size: 'small' as SwitchSize,
    };
    const switchProps: SwitchProps = props;
    expect(switchProps).toEqual(props);
  });

  it('should render the medium switch size', () => {
    render(<DotSwitch data-testid="test-switch" size="medium"></DotSwitch>);

    expect(screen.getByTestId('test-switch').parentElement).not.toHaveClass(
      'MuiSwitch-sizeSmall'
    );
  });

  it('should render the small switch size', () => {
    render(<DotSwitch data-testid="test-switch" size="small"></DotSwitch>);
    expect(screen.getByTestId('test-switch').parentElement).toHaveClass(
      'MuiSwitch-sizeSmall'
    );
  });

  it('should render label', () => {
    render(<DotSwitch label="Test Label"></DotSwitch>);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  it('should be unchecked', () => {
    render(<DotSwitch data-testid="test-switch"></DotSwitch>);
    expect(screen.getByTestId('test-switch')).not.toHaveClass('Mui-checked');
  });

  it('should be checked', () => {
    render(<DotSwitch data-testid="test-switch" checked={true}></DotSwitch>);
    expect(screen.getByTestId('test-switch')).toHaveClass('Mui-checked');
  });
});

it('should toggle when enabled', () => {
  const onChange = jest.fn();
  render(
    <DotSwitch
      data-testid="test-switch"
      checked={false}
      onChange={onChange}
    ></DotSwitch>
  );
  userEvent.click(screen.getByTestId('test-switch'));
  expect(onChange).toHaveBeenCalledTimes(1);
});

it('should not toggle when disabled', () => {
  const onChange = jest.fn();
  render(
    <DotSwitch
      data-testid="test-switch"
      checked={true}
      disabled={true}
      onChange={onChange}
    ></DotSwitch>
  );
  userEvent.click(screen.getByTestId('test-switch'));
  expect(onChange).toHaveBeenCalledTimes(0);
});

it('label should be placed at start', () => {
  render(
    <DotSwitch
      data-testid="test-switch"
      label="Test Label"
      labelPlacement="start"
    ></DotSwitch>
  );
  expect(
    screen.getByTestId('test-switch').parentElement.parentElement
  ).toHaveClass('MuiFormControlLabel-labelPlacementStart');
});
