import React from 'react';
import { render } from '@testing-library/react';

import { DotThemeProvider } from './ThemeProvider';

describe('DotThemeProvider', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <DotThemeProvider>
        <div data-testid="test-child">Test child</div>
      </DotThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
