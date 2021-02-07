import React from 'react';
import { render } from '@testing-library/react';

import { DotRadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotRadioButton value="dot-radio" />);
    expect(baseElement).toBeTruthy();
  });
});
