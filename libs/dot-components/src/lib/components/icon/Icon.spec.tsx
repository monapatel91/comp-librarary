import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotIcon } from './Icon';

describe('DotIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotIcon icon="script" />);
    expect(baseElement).toBeTruthy();
  });
});
