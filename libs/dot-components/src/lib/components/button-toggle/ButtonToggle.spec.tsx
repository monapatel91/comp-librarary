import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  ButtonToggleOrientation,
  ButtonToggleProps,
  ButtonToggleSize,
  DotButtonToggle,
} from './ButtonToggle';

const ariaLabel = 'my label';
const buttonOptions = [
  {
    ariaLabel: 'button option',
    disabled: false,
    value: 'number',
    text: 'My button',
    iconId: 'save',
  },
];
const dataTestId = 'test-button-toggle';
const onChange = jest.fn();

describe('DotButtonToggle', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: ariaLabel,
      buttonOptions,
      className: 'test-class',
      'data-testid': dataTestId,
      disableFocusRipple: false,
      disableRipple: false,
      onChange,
      orientation: 'horizontal' as ButtonToggleOrientation,
      size: 'medium' as ButtonToggleSize,
      value: 'my value',
    };
    const buttonToggleProps: ButtonToggleProps = props;
    expect(buttonToggleProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotButtonToggle
        buttonOptions={buttonOptions}
        onChange={onChange}
        value="my toggle button"
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    render(
      <DotButtonToggle
        ariaLabel={ariaLabel}
        buttonOptions={buttonOptions}
        data-testid={dataTestId}
        onChange={onChange}
        value="my toggle button"
      />
    );
    const buttonToggleElement = screen.getByTestId(dataTestId);
    expect(buttonToggleElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
