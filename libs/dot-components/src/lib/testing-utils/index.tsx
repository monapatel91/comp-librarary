import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { DotThemeProvider } from '../theme-provider/ThemeProvider';
export { mockResizeObserver } from './resize-observer-mock';

const renderWithTheme = (ui: ReactNode) => {
  return {
    ...render(<DotThemeProvider>{ui}</DotThemeProvider>),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithTheme as render };
