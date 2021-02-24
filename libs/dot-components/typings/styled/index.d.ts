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
    layer?: LayerPaletteColorOptions;
  }

  interface Palette {
    icon?: IconPaletteColorOptions;
    layer?: LayerPaletteColorOptions;
  }

  interface LayerPaletteColorOptions {
    '0'?: string;
    '50'?: string;
    '100'?: string;
    '200'?: string;
    '300'?: string;
    '400'?: string;
    '500'?: string;
    '600'?: string;
    '700'?: string;
    '800'?: string;
    '900'?: string;
    card?: string;
  }

  interface IconPaletteColorOptions {
    checkOutline?: string;
    checkSolid?: string;
    errorOutlines?: string;
    errorSolid?: string;
    fileDotted?: string;
    improve?: string;
    improveHover?: string;
    infoSolid?: string;
    lock?: string;
    maintain?: string;
    maintainHover?: string;
    pendingClock?: string;
    rogueCommits?: string;
    thumbsDown?: string;
    unknown?: string;
    unknownHover?: string;
  }
}
