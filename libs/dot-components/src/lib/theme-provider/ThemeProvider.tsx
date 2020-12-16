import React, { ReactNode } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { blue, green, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
    warning: {
      main: red[500],
    },
  },
  typography: {
    fontFamily:
      '"Lato", -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
    allVariants: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontFeatureSettings: '"liga" off',
      fontVariantLigatures: 'none',
    },
    h1: {
      fontSize: 24,
    },
    h3: {
      fontSize: 17,
    },
    caption: {
      fontSize: 10,
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function DotThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
