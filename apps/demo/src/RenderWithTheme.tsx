import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { DotThemeProvider } from '@digital-ai/dot-components';

export const renderWithTheme = (ui: ReactNode) => {
  return {
    ...render(<DotThemeProvider>{ui}</DotThemeProvider>),
  };
};
