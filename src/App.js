import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Converion from "./components/Conversion.js";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#3f51b4"
    },
    secondary: {
      main: "#00796b"
    }
  }
});

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Converion />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
