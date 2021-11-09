import React, { ReactNode } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import {
  avatarColors,
  DotThemeProvider,
  lightColors,
  typographyOptions,
} from '@digital-ai/dot-components';

export const productLightTheme = createTheme({
  palette: {
    type: 'light',
    avatarColors: {
      ...avatarColors,
    },
    background: {
      default: '#E6F0F4',
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
    },
  },
  typography: {
    ...typographyOptions,
    h3: {
      ...typographyOptions.h3,
      color: '#589BB6',
    },
    allVariants: {
      ...typographyOptions.allVariants,
      color: '#244451',
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
      default: '#050A0A',
    },
    primary: {
      main: '#7CB0C5',
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
      n0: '#050A0A',
      n50: '#14262E',
      n100: '#244451',
      n200: '#336275',
      n300: '#7CB0C5',
      n400: '#9FC5D5',
      n500: '#E6F0F4',
      n600: '#C3DBE4',
      n700: '#FFFFFF',
      n800: '#FFFFFF',
      n900: '#FFFFFF',
    },
  },
  typography: {
    ...typographyOptions,
    h3: {
      ...typographyOptions.h3,
      color: '#9FC5D5',
    },
    allVariants: {
      ...typographyOptions.allVariants,
      color: '#FFFFFF',
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
        <MuiThemeProvider
          theme={(parentTheme) => ({ ...parentTheme, ...userTheme })}
        >
          {children}
        </MuiThemeProvider>
      </DotThemeProvider>
    </StylesProvider>
  );
}
