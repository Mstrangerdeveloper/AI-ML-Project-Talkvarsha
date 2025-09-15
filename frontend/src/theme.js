import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h3: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
  palette: {
    primary: {
      main: "#6a11cb",
    },
    secondary: {
      main: "#2575fc",
    },
    background: {
      default: "#f4f7fb",
    },
  },
});

export default theme;
