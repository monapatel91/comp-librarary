import React, { ReactNode } from 'react';
import { MuiThemeProvider, StylesProvider, Theme } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { lightColors } from '@digital-ai/dot-components';
import { ThemeProvider } from 'styled-components';

export type ThemeOptions = 'agility-light' | 'agility-dark';

interface AvatarPaletteColorOption {
  color: string;
  backgroundColor: string;
}

interface AvatarPaletteColorOptions {
  default: AvatarPaletteColorOption;
  green: AvatarPaletteColorOption;
  blue: AvatarPaletteColorOption;
  orange: AvatarPaletteColorOption;
  purple: AvatarPaletteColorOption;
  yellow: AvatarPaletteColorOption;
  red: AvatarPaletteColorOption;
  darkGrey: AvatarPaletteColorOption;
  lightGrey: AvatarPaletteColorOption;
}

export const avatarColors: AvatarPaletteColorOptions = {
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

const agilityDarkColors = {
  n0: '#050A0A',
  n50: '#14262E',
  n100: '#244451',
  n200: '#336275',
  n300: '#7CB0C5',
  n400: '#9FC5D5',
  n500: '#E6F0F4',
  n600: '#C3DBE4',
  n700: '#FFFFFF',
};

const agilityLightColors = {
  n0: '#E6F0F4',
  n50: '#FFFFFF',
  n100: '#C3DBE4',
  n200: '#9FC5D5',
  n300: '#7CB0C5',
  n400: '#589BB6',
  n500: '#438098',
  n600: '#326174',
  n700: '#244451',
  n800: '#14262E',
  n900: '#000000',
};

export const agilityLightTheme = createTheme({
  palette: {
    type: 'light',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: agilityLightColors.n0,
    },
    primary: {
      main: lightColors.agilityGreen,
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
      n0: agilityLightColors.n0,
      n50: agilityLightColors.n50,
      n100: agilityLightColors.n100,
      n200: agilityLightColors.n200,
      n300: agilityLightColors.n300,
      n400: agilityLightColors.n400,
      n500: agilityLightColors.n500,
      n600: agilityLightColors.n600,
      n700: agilityLightColors.n700,
      n800: agilityLightColors.n800,
      n900: agilityLightColors.n900,
    },
    agilityInterface: {
      activeBg: 'rgba(121, 181, 34, 0.2)',
      activeCardBg: '#EDF9DD',
      cardBg: agilityLightColors.n50,
      disabledText: '#A1BFCB',
      fixedCol: agilityLightColors.n0,
      headerBg: lightColors.n700,
      helpColor: '#FF5722',
      menuBg: agilityLightColors.n50,
      panelBgActive: agilityLightColors.n50,
      panelBgDefault: '#9FC6D5',
      panelTextActive: agilityLightColors.n700,
      panelTextDefault: agilityLightColors.n700,
      projectNavBg: 'rgba(67, 128, 152, 0.2)',
      sideNavBorder: agilityLightColors.n300,
      sideNavHoverBg: lightColors.agilityLightGreen,
      sideNavHoverBorder: lightColors.agilityGreen,
      sideNavHoverText: lightColors.g500,
      sideNavSubHeaderText: agilityLightColors.n400,
      textColor: agilityLightColors.n700,
      topBarIconHoverBg: '#667384',
      warnCardBg: '#FBE9E7',
    },
  },
  typography: {
    h3: {
      color: agilityLightColors.n400,
      fontSize: 17,
      fontFamily: 'LatoBold, sans-serif',
      lineHeight: '24px',
      letterSpacing: '0.02em',
    },
    allVariants: {
      color: agilityLightColors.n700,
    },
  },
});

export const agilityDarkTheme = createTheme({
  palette: {
    type: 'dark',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: agilityDarkColors.n0,
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
      n0: agilityDarkColors.n0,
      n50: agilityDarkColors.n50,
      n100: agilityDarkColors.n100,
      n200: agilityDarkColors.n200,
      n300: agilityDarkColors.n300,
      n400: agilityDarkColors.n400,
      n500: agilityDarkColors.n500,
      n600: agilityDarkColors.n600,
      n700: agilityDarkColors.n700,
      n800: agilityDarkColors.n700,
      n900: agilityDarkColors.n700,
    },
    agilityInterface: {
      activeBg: 'rgba(121, 181, 34, 0.2)',
      activeCardBg: '#405F12',
      cardBg: agilityDarkColors.n200,
      disabledText: agilityDarkColors.n200,
      fixedCol: '#1C3540',
      headerBg: '#14272E',
      helpColor: '#FF5722',
      menuBg: agilityDarkColors.n100,
      panelBgActive: agilityDarkColors.n300,
      panelBgDefault: '#14272E',
      panelTextActive: '#14272E',
      panelTextDefault: '#9FC6D5',
      projectNavBg: 'rgba(67, 128, 152, 0.2)',
      sideNavBorder: agilityDarkColors.n200,
      sideNavHoverBg: agilityDarkColors.n100,
      sideNavHoverBorder: agilityDarkColors.n300,
      sideNavHoverText: agilityDarkColors.n300,
      sideNavSubHeaderText: '#9FC6D5',
      textColor: agilityDarkColors.n700,
      topBarIconHoverBg: agilityDarkColors.n100,
      warnCardBg: '#7A4637',
    },
  },
  typography: {
    allVariants: {
      color: agilityDarkColors.n700,
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
  theme?: string;
}

export function AgilityThemeProvider({ children, theme }: ThemeProviderProps) {
  const userTheme = theme === 'dark' ? agilityDarkTheme : agilityLightTheme;

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={userTheme}>
        <ThemeProvider theme={userTheme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}
