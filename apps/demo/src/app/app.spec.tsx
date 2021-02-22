import React from 'react';
import { renderWithTheme as render } from '../RenderWithTheme';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});
