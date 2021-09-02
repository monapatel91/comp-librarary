import { render, screen } from '../../testing-utils';
import React from 'react';
import {
  ButtonToggleOrientation,
  ButtonToggleProps,
  ButtonToggleSize,
  DotButtonToggle,
} from './ButtonToggle';

describe('DotButtonToggle', () => {
  const onChange = jest.fn();
  const buttonOptions = [
    {
      ariaLabel: 'button option',
      disabled: false,
      value: 'number',
      text: 'My button',
      iconId: 'save',
    },
  ];
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'button toggle',
      buttonOptions,
      className: 'test-class',
      'data-testid': 'testid',
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
    const ariaLabel = 'my label';
    const dataTestId = 'test-button-toggle';
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
