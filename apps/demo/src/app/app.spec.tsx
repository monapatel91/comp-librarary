import React from 'react';
import { renderWithTheme as render } from '../RenderWithTheme';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <App />
      </Router>
    );

    expect(baseElement).toBeTruthy();
  });
});
