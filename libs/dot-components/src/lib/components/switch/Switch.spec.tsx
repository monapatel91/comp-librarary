import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import DotSwitch, { SwitchProps } from './Switch';
import userEvent from '@testing-library/user-event';

describe('Switch', () => {
  const onChange = jest.fn();
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'aria label',
      checked: false,
      color: 'primary',
      disabled: false,
      label: 'My Switch',
      labelPlacement: 'end',
      onChange: onChange,
      size: 'small',
    };
    const switchProps: SwitchProps = {
      ariaLabel: 'aria label',
      checked: false,
      color: 'primary',
      disabled: false,
      label: 'My Switch',
      labelPlacement: 'end',
      onChange: onChange,
      size: 'small',
    };
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
