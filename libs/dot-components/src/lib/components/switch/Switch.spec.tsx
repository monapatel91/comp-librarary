import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import DotSwitch, { SwitchProps } from './Switch';
import userEvent from '@testing-library/user-event';

describe('Switch', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'aria label',
      checked: false,
      color: 'primary',
      disabled: false,
      label: 'My Switch',
      labelPlacement: 'end',
      size: 'small',
    };
    const switchProps: SwitchProps = {
      ariaLabel: 'aria label',
      checked: false,
      color: 'primary',
      disabled: false,
      label: 'My Switch',
      labelPlacement: 'end',
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
  render(<DotSwitch data-testid="test-switch" checked={false}></DotSwitch>);
  userEvent.click(screen.getByTestId('test-switch'));
  expect(screen.getByTestId('test-switch')).toHaveClass('Mui-checked');
  userEvent.click(screen.getByTestId('test-switch'));
  expect(screen.getByTestId('test-switch')).not.toHaveClass('Mui-checked');
});

it('should not toggle when disabled', () => {
  render(
    <DotSwitch
      data-testid="test-switch"
      checked={true}
      disabled={true}
    ></DotSwitch>
  );
  userEvent.click(screen.getByTestId('test-switch'));
  expect(screen.getByTestId('test-switch')).toHaveClass('Mui-checked');
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
