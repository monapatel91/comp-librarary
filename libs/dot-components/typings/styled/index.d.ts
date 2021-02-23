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
}
