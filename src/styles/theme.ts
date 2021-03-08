import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { thema1, thema2 } from './Paleta';

// Create a theme instance.
export const themeOne = createMuiTheme({
  palette: {
    primary: {
      main: thema1.primary,
    },
    secondary: {
      main: thema1.primary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default:thema1.background,
    },
    contrastThreshold: thema1.contrastThresHold,
    tonalOffset: thema1.canalOfSet,
  },
});
// Create a theme instance.
export const themeTwo = createMuiTheme({
  palette: {
    primary: {
      main: thema2.primary,
    },
    secondary: {
      main: thema2.primary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default:thema2.background,
    },
    contrastThreshold: thema2.contrastThresHold,
    tonalOffset: thema2.canalOfSet,
  },
});


