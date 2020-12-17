import React, { ReactNode } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import 'typeface-lato';

import * as lightColors from './colors/light-theme-colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      main: lightColors.b500,
      '50': lightColors.b50,
      '100': lightColors.b100,
      '200': lightColors.b200,
      '300': lightColors.b300,
      '400': lightColors.b400,
      '500': lightColors.b500,
      '600': lightColors.b600,
      '700': lightColors.b700,
      '800': lightColors.b800,
      '900': lightColors.b900,
      A100: lightColors.bA100,
      A200: lightColors.bA200,
      A400: lightColors.bA400,
      A700: lightColors.bA700,
    },
    secondary: {
      main: lightColors.g500,
      '50': lightColors.g50,
      '100': lightColors.g100,
      '200': lightColors.g200,
      '300': lightColors.g300,
      '400': lightColors.g400,
      '500': lightColors.g500,
      '600': lightColors.g600,
      '700': lightColors.g700,
      '800': lightColors.g800,
      '900': lightColors.g900,
      A100: lightColors.gA100,
      A200: lightColors.gA200,
      A400: lightColors.gA400,
      A700: lightColors.gA700,
    },
    error: {
      main: lightColors.r500,
      '50': lightColors.r50,
      '100': lightColors.r100,
      '200': lightColors.r200,
      '300': lightColors.r300,
      '400': lightColors.r400,
      '500': lightColors.r500,
      '600': lightColors.r600,
      '700': lightColors.r700,
      '800': lightColors.r800,
      '900': lightColors.r900,
      A100: lightColors.rA100,
      A200: lightColors.rA200,
      A400: lightColors.rA400,
      A700: lightColors.rA700,
    },
    warning: {
      main: lightColors.o500,
      '50': lightColors.o50,
      '100': lightColors.o100,
      '200': lightColors.o200,
      '300': lightColors.o300,
      '400': lightColors.o400,
      '500': lightColors.o500,
      '600': lightColors.o600,
      '700': lightColors.o700,
      '800': lightColors.o800,
      '900': lightColors.o900,
      A100: lightColors.oA100,
      A200: lightColors.oA200,
      A400: lightColors.oA400,
      A700: lightColors.oA700,
    },
    success: {
      main: lightColors.g500,
      '50': lightColors.g50,
      '100': lightColors.g100,
      '200': lightColors.g200,
      '300': lightColors.g300,
      '400': lightColors.g400,
      '500': lightColors.g500,
      '600': lightColors.g600,
      '700': lightColors.g700,
      '800': lightColors.g800,
      '900': lightColors.g900,
      A100: lightColors.gA100,
      A200: lightColors.gA200,
      A400: lightColors.gA400,
      A700: lightColors.gA700,
    },
    text: {
      primary: lightColors.n700,
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
