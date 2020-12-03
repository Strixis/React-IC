import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const themeGreen = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: "white",
    },
  },
});

export { themeGreen };
