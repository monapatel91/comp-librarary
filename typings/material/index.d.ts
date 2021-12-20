interface AvatarPaletteColorOption {
  backgroundColor: string;
  color: string;
}

export interface BreakpointOptions {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export interface AvatarPaletteColorOptions {
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

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    agilityInterface?: AgilityInterfaceOptions;
    avatarColors: AvatarPaletteColorOptions;
    icon: IconPaletteColorOptions;
    layer: LayerPaletteColorOptions;
    product?: 'agility';
  }

  interface AgilityInterfaceOptions {
    activeBg: string;
    activeCardBg: string;
    cardBg: string;
    disabledText: string;
    fixedCol: string;
    headerBg: string;
    helpColor: string;
    menuBg: string;
    panelBgActive: string;
    panelBgDefault: string;
    panelTextActive: string;
    panelTextDefault: string;
    projectNavBg: string;
    sideNavBorder: string;
    sideNavHoverBg: string;
    sideNavHoverBorder: string;
    sideNavHoverText: string;
    sideNavSubHeaderText: string;
    textColor: string;
    topBarIconHoverBg: string;
    warnCardBg: string;
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
