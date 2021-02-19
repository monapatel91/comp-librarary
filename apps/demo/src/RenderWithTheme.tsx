import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

export const renderWithTheme = (ui: ReactNode) => {
  return {
    ...render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>),
  };
};
