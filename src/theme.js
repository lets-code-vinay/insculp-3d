import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#fffefe" },
    secondary: { main: "#0c2340" },
    disabled: { main: "#747575" },
  },
  typography: {
    fontFamily: "Grand-wilson",
    allVariants: {
      textTransform: "none",
    },
  },
  h1: {
    fontSize: "2.75rem !important",
    fontWeight: 700,
  },
  h2: {
    fontSize: "2.25rem !important",
    fontWeight: 700,
  },
  h3: {
    fontSize: "1.75rem !important",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.375rem !important",
    fontWeight: 500,
  },
  h5: {
    fontSize: "1rem !important",
    fontWeight: 400,
  },
  h6: {
    fontSize: "0.9375rem !important",
    fontWeight: 400,
  },
  body1: {
    fontSize: "1rem !important",
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem !important",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.75rem !important",
    fontWeight: 400,
  },
});

export default theme;
