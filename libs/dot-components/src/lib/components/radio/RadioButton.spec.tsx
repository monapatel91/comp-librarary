import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotRadioButton } from './RadioButton';

describe('RadioButton', () => {
  describe('Props', () => {
    it('should render the medium size', () => {
      render(<DotRadioButton value="test-value" data-testid="test-radio" />);

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
          label="Test label"
          labelPlacement="bottom"
          name="test-name"
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
  });
});
