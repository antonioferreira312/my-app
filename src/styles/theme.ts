import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';
import { Color, Theme, ThemeType } from './palleta';


export const THEMES: Record<ThemeType, Theme> = {
  light: {
    detail: Color.PINK,
    primary: Color.VIOLET,
    secondary: Color.DARK_VIOLET,
    background: Color.LIGHT_GRAY,
    white: Color.WHITE,
    contrastThresHold: 3,
    canalOfSet: 0.2,
  },
  dark: {
    detail: Color.DARK_VIOLET,
    primary: Color.DARK_VIOLET,
    secondary: Color.VIOLET,
    background: Color.DARK_VIOLET,
    white: Color.WHITE,
    contrastThresHold: 3,
    canalOfSet: 0.2,
  }
};

// Create a theme instance.
export const themePrimary: Object = createMuiTheme({
  palette: {
    common: { black: '#0B0017', white: '#fff' },
    detail: {
      main: THEMES.light.detail,
    },
    primary: {
      main: THEMES.light.primary,
    },
    secondary: {
      main: THEMES.light.secondary,
    },
    error: {
      main: red[500],
    },
    background: {
      default: THEMES.light.background,
    },
    contrastThreshold: THEMES.light.contrastThresHold,
    tonalOffset: THEMES.light.canalOfSet,
    text: {
      primary: '#2C0759',
      secondary: '#2C0759',
    },
  },
});
// Create a theme instance.
export const themeSecondary: Object = createMuiTheme({
  palette: {
    common: { black: '#0B0017', white: '#fff' },
    detail: {
      main: THEMES.light.detail,
    },
    primary: {
      main: THEMES.dark.primary,
    },
    secondary: {
      main: THEMES.dark.secondary,
    },
    error: {
      main: red[500],
    },
    background: {
      default: THEMES.dark.background,
    },
    contrastThreshold: THEMES.dark.contrastThresHold,
    tonalOffset: THEMES.dark.canalOfSet,
    text: {
      primary: 'white',
      secondary: 'white',
    },
  },
});

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    detail: Palette['primary'];
  }
  interface PaletteOptions {
    detail: PaletteOptions['primary'];
  }
}
