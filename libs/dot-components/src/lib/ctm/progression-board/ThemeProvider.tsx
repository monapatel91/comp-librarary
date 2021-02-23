import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      '50': '#E6F0F4',
      '100': '#C3DBE4',
      '200': '#9FC5D5',
      '300': '#589BB6',
      '500': '#589BB6',
    },
    error: {
      main: '#EA1C0D',
    },
    success: {
      main: '#3D8B40',
    },
    text: {
      primary: '#244451',
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#14262E',
    },
    primary: {
      '50': '#050A0A',
      '100': '#244451',
      '200': '#336275',
      '300': '#9FC5D5',
      '500': '#9FC5D5',
    },
    error: {
      main: '#F77066',
    },
    success: {
      main: '#6EC071',
    },
    text: {
      primary: '#fff',
    },
  },
});

export type ThemeOptions = 'light' | 'dark' | 'agility-light' | 'agility-dark';

interface ProgressionBoardThemeProviderProps {
  children: JSX.Element;
  theme?: ThemeOptions;
}

export function ProgressionBoardThemeProvider({
  children,
  theme = 'light',
}: ProgressionBoardThemeProviderProps) {
  const getTheme = () => {
    switch (theme) {
      case 'dark':
        return darkTheme;
      case 'agility-dark':
        return darkTheme;
      case 'agility-light':
        return lightTheme;
      default:
        return lightTheme;
    }
  };

  return <ThemeProvider theme={getTheme}>{children}</ThemeProvider>;
}
