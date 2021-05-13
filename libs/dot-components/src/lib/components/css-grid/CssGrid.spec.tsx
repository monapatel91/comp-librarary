import React from 'react';
import { render } from '../../testing-utils';

import { CssGrid } from './CssGrid';

describe('CssGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CssGrid />);
    expect(baseElement).toBeTruthy();
  });
});
