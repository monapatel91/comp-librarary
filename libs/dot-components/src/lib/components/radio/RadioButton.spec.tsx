import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { DotRadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('should render the medium switch size', () => {
    render(
      <DotRadioButton
        data-testid="test-radio"
        size="medium"
        value="test-value"
      />
    );

    expect(
      screen.getByTestId('test-radio').querySelector('svg')
    ).not.toHaveClass('MuiSvgIcon-fontSizeSmall');
  });
});
