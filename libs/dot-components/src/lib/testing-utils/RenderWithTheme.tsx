import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { DotThemeProvider } from '../theme-provider/ThemeProvider';

export const renderWithTheme = (ui: ReactNode) => {
  return {
    ...render(<DotThemeProvider>{ui}</DotThemeProvider>),
  };
};
