import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';

import DotActionToolbar from './ActionToolbar';

describe('ActionToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotActionToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
