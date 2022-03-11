import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#3f4040",
      main: "#0F1111",
      dark: "#0a0b0b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fbbf33",
      main: "#faaf00",
      dark: "#af7a00",
      contrastText: "#000",
    },
  },
});

export default theme;
