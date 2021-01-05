import React from 'react';
import { render } from '@testing-library/react';

import DotActionToolbar from './action-toolbar';

describe('ActionToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotActionToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
