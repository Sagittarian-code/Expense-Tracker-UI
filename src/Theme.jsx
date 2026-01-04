import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B5FEC", // Indigo
    },
    secondary: {
      main: "#F50057", // Pink
    },
    success: {
      main: "#2E7D32",
    },
    error: {
      main: "#D32F2F",
    },
    background: {
      default: "#d0ddffff",
      paper: "#f6cca7ff",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
