import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';
import { Color, Theme, ThemeType } from './palleta';


export const THEMES: Record<ThemeType, Theme> = {
    light: {
      '--primary': Color.VIOLET,
      '--secondary': Color.DARK_VIOLET,
      '--background': Color.LIGHT_GRAY,
      '--white': Color.WHITE,
      '--contrastThresHold': 3,
      '--canalOfSet': 0.2,
    },
    dark: {
      '--primary': Color.VIOLET,
      '--secondary': Color.WHITE,
      '--background': Color.DARK_VIOLET,
      '--white': Color.WHITE,
      '--contrastThresHold': 3,
      '--canalOfSet': 0.2,
    }
  };

// Create a theme instance.
export const themeOne:Object = createMuiTheme({
  palette: {
    primary: {
      main:THEMES.light["--primary"],
    },
    secondary: {
      main:THEMES.light["--secondary"],
    },
    error: {
      main: red[500],
    },
    background: {
      default:THEMES.light["--background"],
    },
    contrastThreshold:THEMES.light["--contrastThresHold"],
    tonalOffset: THEMES.light["--canalOfSet"]
  },
});
// Create a theme instance.
export const themeTwo:Object = createMuiTheme({
  palette: {
    primary: {
      main:THEMES.dark["--primary"],
    },
    secondary: {
      main: THEMES.dark["--secondary"],
    },
    error: {
      main: red[500],
    },
    background: {
      default:THEMES.dark["--background"],
    },
    contrastThreshold: THEMES.dark["--contrastThresHold"],
    tonalOffset:THEMES.dark["--canalOfSet"],
  },
});
