import { Theme } from '@material-ui/core';
import '@material-ui/core/styles/createPalette';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    icon?: IconPaletteColorOptions;
  }

  interface Palette {
    icon?: IconPaletteColorOptions;
  }

  interface IconPaletteColorOptions {
    checkOutline?: string;
    checkSolid?: string;
    errorOutlines?: string;
    errorSolid?: string;
    fileDotted?: string;
    improve?: string;
    infoSolid?: string;
    lock?: string;
    maintain?: string;
    pendingClock?: string;
    rogueCommits?: string;
    thumbsDown?: string;
  }

  interface IconPaletteColor {
    checkOutline: '#1E88E5';
    checkSolid: '#1E88E5';
    errorOutlines: '#EA1C0D';
    errorSolid: '#3949AB';
    fileDotted: '#3949AB';
    improve: '#3D8B40';
    infoSolid: '#3DB840';
    lock: '#EA1C0D';
    maintain: '#EA1C0D';
    pendingClock: '#244451';
    rogueCommits: '#FFB300';
    thumbsDown: '#8E24AA';
  }
}
