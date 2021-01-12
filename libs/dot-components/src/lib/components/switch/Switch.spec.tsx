import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import DotSwitch from './Switch';

describe('Switch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
