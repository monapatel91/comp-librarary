import React, { ReactNode } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3d6c9e',
      light: '5A82AD',
      contrastText: '#fff',
    },
    secondary: {
      main: '#498500',
      contrastText: '#fff',
    },
    error: {
      main: '#d61f21',
      contrastText: '#fff',
    },
    text: {
      primary: '#3B485C',
    },
    tonalOffset: 0.2,
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
