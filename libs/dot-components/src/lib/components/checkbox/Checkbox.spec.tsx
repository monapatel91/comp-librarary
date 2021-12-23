import React, { createRef } from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotCheckbox,
  CheckboxLabelPlacement,
  CheckboxProps,
  CheckboxSize,
} from './Checkbox';

describe('DotCheckbox', () => {
  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const inputRef = createRef<HTMLInputElement>();
    const props = {
      ariaLabel: 'Accessibility for the win',
      ariaLabelledby: 'label-man',
      checked: true,
      className: 'test-class',
      'data-testid': 'testid',
      disabled: false,
      disableRipple: true,
      id: 'checkbox',
      indeterminate: false,
      inputRef: inputRef,
      label: 'checkbox label',
      labelPlacement: 'end' as CheckboxLabelPlacement,
      name: 'checkbox',
      onChange: onChange,
      required: false,
      size: 'medium' as CheckboxSize,
      value: 'Batman was here',
    };
    const checkboxProps: CheckboxProps = props;
    expect(checkboxProps).toEqual(props);
  });

  it('should render the medium size', () => {
    render(<DotCheckbox data-testid="test-checkbox" value="test-value" />);

    expect(
      screen.getByTestId('test-checkbox').querySelector('svg')
    ).not.toHaveClass('MuiSvgIcon-fontSizeSmall');
  });
  describe('Props', () => {
    it('should render with all props', () => {
      const { baseElement } = render(
        <DotCheckbox
          ariaLabel="Accessibility for the win"
          ariaLabelledby="label-man"
          checked
          className="custom-test-class"
          data-testid="test-checkbox"
          disabled
          label="Test label"
          labelPlacement="bottom"
          name="test-name"
          size="small"
          value="test-value"
        />
      );

      const input = screen.getByRole('checkbox');
      const testId = screen.getByTestId('test-checkbox');
      const formControlLabel = baseElement.querySelector('label');

      expect(input).toHaveAttribute('checked');
      expect(testId).toBeVisible();
      expect(input).toHaveAttribute('disabled');
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
      expect(input).toHaveAttribute('aria-label', 'Accessibility for the win');
      expect(input).toHaveAttribute('aria-labelledby', 'label-man');
    });
    it('should render with label placed at the bottom', () => {
      const { baseElement } = render(
        <DotCheckbox
          checked
          className="custom-test-class"
          data-testid="test-checkbox"
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
    it('should render medium checkbox button size', () => {
      const { baseElement } = render(
        <DotCheckbox
          checked
          className="custom-test-class"
          data-testid="test-checkbox"
          disabled
          label="Test label"
          labelPlacement="start"
          name="test name"
          size="medium"
          value="test-value"
        />
      );
      expect(baseElement.querySelector('svg')).toHaveClass(
        'MuiSvgIcon-fontSizeMedium'
      );
    });
  });
});
