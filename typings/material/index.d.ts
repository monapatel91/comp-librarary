import '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    avatarColors: AvatarPaletteColorOptions;
    icon: IconPaletteColorOptions;
    layer: LayerPaletteColorOptions;
    product?: 'agility';
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

  interface AvatarPaletteColorOption {
    backgroundColor: string;
    color: string;
  }

  interface LayerPaletteColorOptions {
    n0: string;
    n50: string;
    n100: string;
    n200: string;
    n300: string;
    n400: string;
    n500: string;
    n600: string;
    n700: string;
    n800: string;
    n900: string;
  }

  interface IconPaletteColorOptions {
    checkOutline: string;
    emphasized: string;
    fileDotted: string;
    improve: string;
    improveHover: string;
    maintain: string;
    maintainHover: string;
    rogueCommits: string;
    unknown: string;
    unknownHover: string;
  }
}
