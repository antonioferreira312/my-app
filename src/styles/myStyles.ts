import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';
import { thema1, thema2 } from './Paleta';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  button: {
    border: 0,
    color: /*thema2.secondary*/ red[900],
  },
});