import React, { createRef } from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotRadioButton,
  RadioButtonProps,
  RadioLabelPlacement,
  RadioSize,
} from './RadioButton';

describe('DotRadioButton', () => {
  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const inputRef = createRef<HTMLInputElement>();
    const props = {
      ariaLabel: 'radio button',
      checked: false,
      className: 'test-class',
      'data-testid': 'testid',
      disabled: false,
      id: 'button-id',
      inputRef: inputRef,
      label: 'My Label',
      labelPlacement: 'bottom' as RadioLabelPlacement,
      name: 'button-name',
      onChange: onChange,
      size: 'medium' as RadioSize,
      required: true,
      value: 'x',
    };
    const radioButtonProps: RadioButtonProps = props;
    expect(radioButtonProps).toEqual(props);
  });

  describe('Props', () => {
    it('should render the medium size', () => {
      render(<DotRadioButton data-testid="test-radio" value="test-value" />);

      expect(
        screen.getByTestId('test-radio').querySelector('svg')
      ).not.toHaveClass('MuiSvgIcon-fontSizeSmall');
    });
    it('should render with all props', () => {
      const { baseElement } = render(
        <DotRadioButton
          checked
          className="custom-test-class"
          data-testid="test-radio"
          disabled
          id="test-id"
          label="Test label"
          labelPlacement="bottom"
          name="test-name"
          required
          size="small"
          value="test-value"
        />
      );

      const input = screen.getByRole('radio');
      const testId = screen.getByTestId('test-radio');
      const formControlLabel = baseElement.querySelector('label');

      expect(input).toHaveAttribute('checked');
      expect(testId).toBeVisible();
      expect(input).toHaveAttribute('disabled');
      expect(input).toHaveAttribute('required');
      expect(input).toHaveAttribute('id', 'test-id');
      expect(formControlLabel).toHaveClass('custom-test-class');
      expect(baseElement.querySelector('svg')).toHaveClass(
        'MuiSvgIcon-fontSizeSmall'
      );
      expect(screen.getByText('Test label')).toBeVisible();
      expect(formControlLabel).toHaveClass(
        'MuiFormControlLabel-labelPlacementBottom'
      );
      expect(input).toHaveAttribute('name', 'test-name');
      expect(input).toHaveAttribute('value', 'test-value');
    });
    it('should render with label placed at the bottom', () => {
      const { baseElement } = render(
        <DotRadioButton
          checked
          className="custom-test-class"
          data-testid="test-radio"
          disabled
          label="Test label"
          labelPlacement="start"
          name="test name"
          size="small"
          value="test-value"
        />
      );
      const formControlLabel = baseElement.querySelector('label');
      expect(formControlLabel).toHaveClass(
        'MuiFormControlLabel-labelPlacementStart'
      );
    });
    it('should render medium radio button size', () => {
      const { baseElement } = render(
        <DotRadioButton
          checked
          className="custom-test-class"
          data-testid="test-radio"
          disabled
          label="Test label"
          labelPlacement="start"
          name="test name"
          size="medium"
          value="test-value"
        />
      );
      expect(baseElement.querySelector('svg')).not.toHaveClass(
        'MuiSvgIcon-fontSizeSmall'
      );
    });
    it("should have 'aria-label' attribute with correct value", () => {
      const ariaLabel = 'my label';
      const dataTestId = 'test-radio-button';
      render(<DotRadioButton ariaLabel={ariaLabel} data-testid={dataTestId} />);
      const radioButtonElement = screen.getByTestId(dataTestId);
      expect(radioButtonElement).toHaveAttribute('aria-label', ariaLabel);
    });
  });
});
