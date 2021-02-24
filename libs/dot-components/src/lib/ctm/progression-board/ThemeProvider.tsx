import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

const agilityLightTheme = createMuiTheme({
  palette: {
    type: 'light',
    icon: {
      checkOutline: '#1E88E5',
      checkSolid: '#1E88E5',
      errorOutlines: '#EA1C0D',
      errorSolid: '#3949AB',
      fileDotted: '#3949AB',
      improve: '#3D8B40',
      improveHover: '#6BA568',
      infoSolid: '#3DB840',
      lock: '#EA1C0D',
      maintain: '#EA1C0D',
      maintainHover: '#F96244',
      pendingClock: '#244451',
      rogueCommits: '#FFB300',
      thumbsDown: '#8E24AA',
      unknown: '#4B626D',
      unknownHover: '#71828B',
    },
    layer: {
      '0': '#FFF',
      '50': '#E6F0F4',
      '100': '#C3DBE4',
      '200': '#9FC5D5',
      '300': '#589BB6',
      card: '#FFF',
    },
    text: {
      primary: '#244451',
    },
  },
});

const agilityDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#14262E',
    },
    icon: {
      checkOutline: '#42A5F5',
      checkSolid: '#42A5F5',
      errorOutlines: '#F77066',
      errorSolid: '#9FA8DA',
      fileDotted: '#9FA8DA',
      improve: '#6EC071',
      improveHover: '#1A6D25',
      infoSolid: '#6EC071',
      lock: '#F77066',
      maintain: '#F77066',
      maintainHover: '#C50000',
      pendingClock: '#FFFFFF',
      rogueCommits: '#FFB300',
      thumbsDown: '#CE93D8',
      unknown: '#B7C6CD',
      unknownHover: '#88979D',
    },
    layer: {
      '0': '#050A0A',
      '50': '#050A0A',
      '100': '#244451',
      '200': '#336275',
      '300': '#9FC5D5',
      card: '#336275',
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
        return agilityDarkTheme;
      case 'agility-dark':
        return agilityDarkTheme;
      case 'agility-light':
        return agilityLightTheme;
      default:
        return agilityLightTheme;
    }
  };

  return <ThemeProvider theme={getTheme}>{children}</ThemeProvider>;
}
