import React from 'react';
import { render } from '@testing-library/react';

import InputFormFields from './InputFormFields';

describe('InputFormFields', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputFormFields />);
    expect(baseElement).toBeTruthy();
  });
});
