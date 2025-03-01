import React, { Fragment } from "react";

import MySnackbarContent from "./MySnackbarContent";

//material ui
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

// This example assumes you have a way to know/load this information

const styles = theme => ({});

const Toast = (props) => {
  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
      >
        <MySnackbarContent
          onClose={props.handleClose}
          variant={props.type}
          message={props.message}
        />
      </Snackbar>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(Toast);