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
      default: "#F4F6FB",
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
