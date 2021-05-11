import '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    avatarColors: AvatarPaletteColorOptions;
    icon: IconPaletteColorOptions;
    layer: LayerPaletteColorOptions;
    progressionBoard: ProgressionBoardColorOptions;
  }

  interface Palette {
    avatarColors: AvatarPaletteColorOptions;
    icon: IconPaletteColorOptions;
    layer: LayerPaletteColorOptions;
    progressionBoard: ProgressionBoardColorOptions;
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

  interface ProgressionBoardColorOptions {
    board: string;
    boardColumn: string;
    boardColumnHeader: string;
    card: string;
    cardBorder: string;
    cardCorner: string;
    cardSelectedBorder: string;
    swimlaneColumnHeader: string;
  }

  interface IconPaletteColorOptions {
    checkOutline: string;
    checkSolid: string;
    emphasized: string;
    errorOutlines: string;
    errorSolid: string;
    fileDotted: string;
    improve: string;
    improveHover: string;
    infoSolid: string;
    lock: string;
    maintain: string;
    maintainHover: string;
    pendingClock: string;
    rogueCommits: string;
    thumbsDown: string;
    unknown: string;
    unknownHover: string;
  }
}
