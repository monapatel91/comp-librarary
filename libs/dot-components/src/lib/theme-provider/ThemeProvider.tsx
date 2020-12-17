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
    fontFamily: '"Lato", sans-serif',
    allVariants: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontFeatureSettings: '"liga" off',
      fontVariantLigatures: 'none',
    },
    h1: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '30px',
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: '26px',
      letterSpacing: '0.02em',
    },
    h3: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0.02em',
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '18px',
      letterSpacing: '0.03em',
    },
    h5: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '18px',
      letterSpacing: '0.03em',
    },
    subtitle1: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: '23px',
      letterSpacing: '0.03em',
      marginBottom: 1,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '0.03em',
      marginBottom: 1,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.03em',
      marginBottom: 4,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.02em',
      marginBottom: 3,
    },
    caption: {
      fontSize: 10,
      fontWeight: 700,
      lineHeight: '16px',
      letterSpacing: '0.03em',
      marginBottom: 3,
    },
    overline: {
      fontSize: 9,
      fontWeight: 400,
      lineHeight: '14px',
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      marginBottom: 3,
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.03em',
      textTransform: 'none',
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
