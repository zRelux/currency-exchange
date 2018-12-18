import React, { Component, Fragment } from "react";

import MySnackbarContent from "./MySnackbarContent";

//material ui
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

// This example assumes you have a way to know/load this information

const styles = theme => ({});

class Toast extends Component {
  // Render your list
  render() {
    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.props.handleClose}
        >
          <MySnackbarContent
            onClose={this.props.handleClose}
            variant={this.props.type}
            message={this.props.message}
          />
        </Snackbar>
      </Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Toast);
