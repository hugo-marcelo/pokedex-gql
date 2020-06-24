import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FECF28',
    },
    secondary: {
      main: '#181a1f',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F8FBFC',
    },
  },
});

export default Theme;