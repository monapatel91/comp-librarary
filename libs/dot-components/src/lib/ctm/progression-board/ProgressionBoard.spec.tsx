import React from 'react';
import { render } from '@testing-library/react';

import ProgressionBoard from './ProgressionBoard';

describe('ProgressionBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressionBoard />);
    expect(baseElement).toBeTruthy();
  });
});
