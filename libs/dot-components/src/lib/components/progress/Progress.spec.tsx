import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotProgress } from './Progress';

describe(' Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotProgress />);
    expect(baseElement).toBeTruthy();
  });
});
