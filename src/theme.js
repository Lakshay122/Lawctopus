import { createTheme } from "@mui/material/styles";

// Define your light and dark themes
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // Define your light theme colors here
    primary: {
      main: "#fff",
      text: "black",
      yellow: "#f6a62c",
      navtext: "#33373d",
    },

    background: {
      default: "#fcfcfc",
      paper: "#f5f5f5",
      textField: "#F4F4F4",
      divider: "#eee",
    },
  },
  typography: {
    fontFamily: ["Monda", "sans-serif"].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // Define your dark theme colors here
    primary: {
      main: "#191919",
      text: "rgba(255, 255, 255, 0.87)",
      yellow: "#f6a62c",
      navtext: "#ccc",
    },

    background: {
      default: "#000",
      paper: "#191919",
      textField: "#202020",
      divider: "#444444",
    },
  },
  typography: {
    fontFamily: ["Monda", "sans-serif"].join(","),
  },
});
