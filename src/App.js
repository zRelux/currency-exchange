import React, { Component, Fragment } from "react";
/*
  Material UI imports
 */
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

/*
  Component imports
 */
import "./App.css";
import Converion from "./components/Conversion";

// Theme of application
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

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Converion />
        </MuiThemeProvider>
      </Fragment>
    );
  }
}
export default App;
