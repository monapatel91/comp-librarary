import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    icon: {
      checkOutline: '#1E88E5',
      checkSolid: '#1E88E5',
      errorOutlines: '#EA1C0D',
      errorSolid: '#3949AB',
      fileDotted: '#3949AB',
      improve: '#3D8B40',
      infoSolid: '#3DB840',
      lock: '#EA1C0D',
      maintain: '#EA1C0D',
      pendingClock: '#244451',
      rogueCommits: '#FFB300',
      thumbsDown: '#8E24AA',
    },
    primary: {
      '50': '#E6F0F4',
      '100': '#C3DBE4', // board column
      '200': '#FFF', // card background
      '300': '#9FC5D5', // swimlane column
      '500': '#589BB6',
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
    icon: {
      checkOutline: '#42A5F5',
      checkSolid: '#42A5F5',
      errorOutlines: '#F77066',
      errorSolid: '#9FA8DA',
      fileDotted: '#9FA8DA',
      improve: '#6EC071',
      infoSolid: '#6EC071',
      lock: '#F77066',
      maintain: '#F77066',
      pendingClock: '#FFFFFF',
      rogueCommits: '#FFB300',
      thumbsDown: '#CE93D8',
    },
    primary: {
      '50': '#050A0A',
      '100': '#244451', // board column
      '200': '#336275', // card background
      '300': '#336275', // swimlane column
      '500': '#9FC5D5',
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
