import React, { ReactNode } from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
  Theme,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { GlobalFonts } from '../fonts/fonts';

import * as lightColors from './colors/light-theme-colors';
import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

export type ThemeOptions = 'light' | 'dark' | 'agility-light' | 'agility-dark';

const typographyOptions: TypographyOptions = {
  fontFamily: 'Lato, sans-serif',
  allVariants: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontFeatureSettings: 'liga off',
    fontVariantLigatures: 'none',
  },
  h1: {
    fontSize: 24,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '30px',
  },
  h2: {
    fontSize: 20,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '26px',
    letterSpacing: '0.02em',
  },
  h3: {
    fontSize: 17,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '24px',
    letterSpacing: '0.02em',
  },
  h4: {
    fontSize: 14,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '18px',
    letterSpacing: '0.03em',
  },
  h5: {
    fontSize: 12,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '18px',
    letterSpacing: '0.03em',
  },
  subtitle1: {
    fontSize: 17,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '23px',
    letterSpacing: '0.03em',
    marginBottom: 1,
  },
  subtitle2: {
    fontSize: 14,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '20px',
    letterSpacing: '0.03em',
    marginBottom: 1,
  },
  body1: {
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '0.03em',
    marginBottom: 4,
  },
  body2: {
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: '0.02em',
    marginBottom: 3,
  },
  caption: {
    fontSize: 10,
    fontFamily: 'LatoBold, sans-serif',
    lineHeight: '16px',
    letterSpacing: '0.03em',
    marginBottom: 3,
  },
  overline: {
    fontSize: 9,
    lineHeight: '14px',
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  button: {
    fontSize: 14,
    letterSpacing: '0.03em',
    textTransform: 'none',
  },
};

const breakpointOptions: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 720,
    md: 1024,
    lg: 1280,
    xl: 1920,
  },
};

export const avatarColors = {
  default: {
    color: lightColors.n700,
    backgroundColor: lightColors.n100,
  },
  green: {
    color: lightColors.n0,
    backgroundColor: lightColors.g500,
  },
  blue: {
    color: lightColors.n0,
    backgroundColor: lightColors.b500,
  },
  orange: {
    color: lightColors.n700,
    backgroundColor: lightColors.o500,
  },
  purple: {
    color: lightColors.n0,
    backgroundColor: lightColors.p500,
  },
  yellow: {
    color: lightColors.n700,
    backgroundColor: lightColors.y500,
  },
  red: {
    color: lightColors.n0,
    backgroundColor: lightColors.r500,
  },
  darkGrey: {
    color: lightColors.n0,
    backgroundColor: lightColors.n700,
  },
  lightGrey: {
    color: lightColors.n700,
    backgroundColor: lightColors.n200,
  },
};

export const agilityLightTheme = createMuiTheme({
  breakpoints: {
    ...breakpointOptions,
  },
  palette: {
    type: 'light',
    product: 'agility',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: '#E6F0F4',
    },
    icon: {
      checkOutline: '#1E88E5',
      emphasized: '#C6F1FF',
      fileDotted: '#3949AB',
      improve: '#3D8B40',
      improveHover: '#6BA568',
      maintain: '#EA1C0D',
      maintainHover: '#F96244',
      rogueCommits: '#FFB300',
      unknown: '#4B626D',
      unknownHover: '#71828B',
    },
    layer: {
      n0: '#E6F0F4', // level-0
      n50: lightColors.n0, // level-1
      n100: '#C3DBE4', // level-2
      n200: '#9FC5D5', // level-3
      n300: '#7CB0C5',
      n400: '#589BB6', // text-3
      n500: '#438098', // text-2
      n600: '#326174', // text-1
      n700: '#244451', // text-0
      n800: '#14262E',
      n900: '#000',
    },
    agilityInterface: {
      activeBg: 'rgba(121, 181, 34, 0.2)',
      activeCardBg: '#EDF9DD',
      cardBg: '#FFF',
      disabledText: '#A1BFCB',
      fixedCol: '#E6F0F4',
      helpColor: '#FF5722',
      menuBg: '#FFF',
      panelBgActive: '#FFF',
      panelBgDefault: '#9FC6D5',
      panelTextActive: '#244451',
      panelTextDefault: '#244451',
      projectNavBg: 'rgba(67, 128, 152, 0.2)',
      warnCardBg: '#FBE9E7',
    },
  },
  typography: {
    ...typographyOptions,
    allVariants: {
      ...typographyOptions.allVariants,
      color: '#244451',
    },
  },
});

export const agilityDarkTheme = createMuiTheme({
  breakpoints: {
    ...breakpointOptions,
  },
  palette: {
    type: 'dark',
    product: 'agility',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: '#050A0A',
    },
    icon: {
      checkOutline: '#42A5F5',
      emphasized: '#C6F1FF',
      fileDotted: '#9FA8DA',
      improve: '#6EC071',
      improveHover: '#1A6D25',
      maintain: '#F77066',
      maintainHover: '#C50000',
      rogueCommits: '#FFB300',
      unknown: '#B7C6CD',
      unknownHover: '#88979D',
    },
    layer: {
      n0: '#050A0A', // level-0
      n50: '#14262E', // level-1
      n100: '#244451', // level-2
      n200: '#336275', // level-3
      n300: '#7CB0C5',
      n400: '#9FC5D5', // text-3
      n500: '#E6F0F4', // text-2
      n600: '#C3DBE4', // text-1
      n700: lightColors.n0, // text-0
      n800: lightColors.n0,
      n900: lightColors.n0,
    },
    agilityInterface: {
      activeBg: 'rgba(121, 181, 34, 0.2)',
      activeCardBg: '#405F12',
      cardBg: '#336275',
      disabledText: '#336275',
      fixedCol: '#1C3540',
      helpColor: '#FF5722',
      menuBg: '#244451',
      panelBgActive: '#7CB0C5',
      panelBgDefault: '#14272E',
      panelTextActive: '#14272E',
      panelTextDefault: '#9FC6D5',
      projectNavBg: 'rgba(67, 128, 152, 0.2)',
      warnCardBg: '#7A4637',
    },
  },
  typography: {
    ...typographyOptions,
    allVariants: {
      ...typographyOptions.allVariants,
      color: lightColors.n0,
    },
  },
});

export const darkTheme = createMuiTheme({
  breakpoints: {
    ...breakpointOptions,
  },
  palette: {
    type: 'dark',
    avatarColors: {
      ...avatarColors,
    },
    icon: {
      checkOutline: lightColors.b500,
      emphasized: lightColors.b300,
      fileDotted: lightColors.b500,
      improve: lightColors.g500,
      improveHover: lightColors.g300,
      maintain: lightColors.r500,
      maintainHover: lightColors.r300,
      rogueCommits: lightColors.o500,
      unknown: lightColors.n300,
      unknownHover: lightColors.n100,
    },
    layer: {
      n0: lightColors.n0, // text-0
      n50: lightColors.n0, // TBD - UX
      n100: '#B8C0C7', // text-1
      n200: lightColors.n300, // text-2
      n300: '#A9AEB3', // text-3
      n400: '#727A83',
      n500: '#30363D', // TBD - UX
      n600: '#30363D', // level-3
      n700: '#21272D', // level-2
      n800: '#171B22', // level-1
      n900: '#0D1017', // level-0
    },
    text: {
      primary: lightColors.n0,
    },
  },
  typography: {
    ...typographyOptions,
    allVariants: {
      ...typographyOptions.allVariants,
      color: lightColors.n0,
    },
  },
});

export const lightTheme = createMuiTheme({
  breakpoints: {
    ...breakpointOptions,
  },
  palette: {
    type: 'light',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: lightColors.n0,
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
    grey: {
      '50': lightColors.n50,
      '100': lightColors.n100,
      '200': lightColors.n200,
      '300': lightColors.n300,
      '400': lightColors.n400,
      '500': lightColors.n500,
      '600': lightColors.n600,
      '700': lightColors.n700,
      '800': lightColors.n800,
      '900': lightColors.n900,
      A100: lightColors.nA100,
      A200: lightColors.nA200,
      A400: lightColors.nA400,
      A700: lightColors.nA700,
    },
    layer: {
      n0: lightColors.n0, // level-0
      n50: lightColors.n50, // level-1
      n100: lightColors.n100, // level-2
      n200: lightColors.n200, // level-3
      n300: lightColors.n300,
      n400: lightColors.n400, // text-3
      n500: lightColors.n500, // text-2
      n600: lightColors.n600, // text-1
      n700: lightColors.n700, // text-0
      n800: lightColors.n800,
      n900: lightColors.n900,
    },
    icon: {
      checkOutline: lightColors.b500,
      emphasized: lightColors.b300,
      fileDotted: lightColors.b500,
      improve: lightColors.g500,
      improveHover: lightColors.g300,
      maintain: lightColors.r500,
      maintainHover: lightColors.r300,
      rogueCommits: lightColors.o500,
      unknown: lightColors.n300,
      unknownHover: lightColors.n100,
    },
    text: {
      primary: lightColors.n700,
    },
    tonalOffset: 0.2,
  },
  typography: {
    ...typographyOptions,
    allVariants: {
      ...typographyOptions.allVariants,
      color: lightColors.n700,
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme | ThemeOptions;
}

export function DotThemeProvider({
  children,
  theme = lightTheme,
}: ThemeProviderProps) {
  let userTheme = lightTheme;
  if (typeof theme === 'string') {
    switch (theme) {
      case 'dark':
        userTheme = darkTheme;
        break;
      case 'agility-dark':
        userTheme = agilityDarkTheme;
        break;
      case 'agility-light':
        userTheme = agilityLightTheme;
        break;
    }
  } else {
    userTheme = theme;
  }

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={userTheme}>
        <ThemeProvider theme={userTheme}>
          <GlobalFonts />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}
