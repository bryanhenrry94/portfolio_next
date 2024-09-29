import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

import '@fontsource/roboto';

const theme = createTheme({
  typography: {
    // fontFamily: 'Roboto, Arial, sans-serif',
    fontFamily: 'Montserrat Variable, sans-serif',
  },
  palette: {
    primary: {
      light: teal[50],
      dark: teal[700],
      contrastText: "#ffffff",
      main: teal[500],
    },
    secondary: {
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#ffffff",
      main: "#f44336",
    },
  },
});

export default theme;
