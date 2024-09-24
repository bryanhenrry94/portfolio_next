import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

import '@fontsource/roboto';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      light: indigo[50],
      dark: indigo[700],
      contrastText: "#ffffff",
      main: indigo[500],
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
