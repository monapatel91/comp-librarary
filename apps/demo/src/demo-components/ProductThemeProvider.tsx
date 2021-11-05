import React, { ReactNode } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { DotThemeProvider, lightColors } from '@digital-ai/dot-components';
import { ThemeProvider } from 'styled-components';

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

const productDarkColors = {
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

const productLightColors = {
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

export const productLightTheme = createTheme({
  palette: {
    type: 'light',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: productLightColors.n0,
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
      n0: productLightColors.n0,
      n50: productLightColors.n50,
      n100: productLightColors.n100,
      n200: productLightColors.n200,
      n300: productLightColors.n300,
      n400: productLightColors.n400,
      n500: productLightColors.n500,
      n600: productLightColors.n600,
      n700: productLightColors.n700,
      n800: productLightColors.n800,
      n900: productLightColors.n900,
    },
    agilityInterface: {
      activeBg: 'rgba(121, 181, 34, 0.2)',
      activeCardBg: '#EDF9DD',
      cardBg: productLightColors.n50,
      disabledText: '#A1BFCB',
      fixedCol: productLightColors.n0,
      headerBg: lightColors.n700,
      helpColor: '#FF5722',
      menuBg: productLightColors.n50,
      panelBgActive: productLightColors.n50,
      panelBgDefault: '#9FC6D5',
      panelTextActive: productLightColors.n700,
      panelTextDefault: productLightColors.n700,
      projectNavBg: 'rgba(67, 128, 152, 0.2)',
      sideNavBorder: productLightColors.n300,
      sideNavHoverBg: lightColors.agilityLightGreen,
      sideNavHoverBorder: lightColors.agilityGreen,
      sideNavHoverText: lightColors.g500,
      sideNavSubHeaderText: productLightColors.n400,
      textColor: productLightColors.n700,
      topBarIconHoverBg: '#667384',
      warnCardBg: '#FBE9E7',
    },
  },
  typography: {
    h3: {
      color: productLightColors.n400,
      fontSize: 17,
      fontFamily: 'LatoBold, sans-serif',
      lineHeight: '24px',
      letterSpacing: '0.02em',
    },
    allVariants: {
      color: productLightColors.n700,
    },
  },
});

export const productDarkTheme = createTheme({
  palette: {
    type: 'dark',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: productDarkColors.n0,
    },
    primary: {
      main: productDarkColors.n300,
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
      n0: productDarkColors.n0,
      n50: productDarkColors.n50,
      n100: productDarkColors.n100,
      n200: productDarkColors.n200,
      n300: productDarkColors.n300,
      n400: productDarkColors.n400,
      n500: productDarkColors.n500,
      n600: productDarkColors.n600,
      n700: productDarkColors.n700,
      n800: productDarkColors.n700,
      n900: productDarkColors.n700,
    },
    agilityInterface: {
      activeBg: 'rgba(121, 181, 34, 0.2)',
      activeCardBg: '#405F12',
      cardBg: productDarkColors.n200,
      disabledText: productDarkColors.n200,
      fixedCol: '#1C3540',
      headerBg: '#14272E',
      helpColor: '#FF5722',
      menuBg: productDarkColors.n100,
      panelBgActive: productDarkColors.n300,
      panelBgDefault: '#14272E',
      panelTextActive: '#14272E',
      panelTextDefault: '#9FC6D5',
      projectNavBg: 'rgba(67, 128, 152, 0.2)',
      sideNavBorder: productDarkColors.n200,
      sideNavHoverBg: productDarkColors.n100,
      sideNavHoverBorder: productDarkColors.n300,
      sideNavHoverText: productDarkColors.n300,
      sideNavSubHeaderText: '#9FC6D5',
      textColor: productDarkColors.n700,
      topBarIconHoverBg: productDarkColors.n100,
      warnCardBg: '#7A4637',
    },
  },
  typography: {
    h3: {
      color: productDarkColors.n400,
      fontSize: 17,
      fontFamily: 'LatoBold, sans-serif',
      lineHeight: '24px',
      letterSpacing: '0.02em',
    },
    allVariants: {
      color: productDarkColors.n700,
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
  theme?: string;
}

export function CustomThemeProvider({ children, theme }: ThemeProviderProps) {
  const userTheme = theme === 'dark' ? productDarkTheme : productLightTheme;

  return (
    <StylesProvider injectFirst>
      <DotThemeProvider>
        <MuiThemeProvider theme={() => ({ ...DotThemeProvider, ...userTheme })}>
          <ThemeProvider theme={userTheme}>{children}</ThemeProvider>
        </MuiThemeProvider>
      </DotThemeProvider>
    </StylesProvider>
  );
}
