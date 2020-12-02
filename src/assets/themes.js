import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const themeButton = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: "white",
    },
  },
});

export { themeButton };
