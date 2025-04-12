import React, { Fragment } from "react";
import MySnackbarContent from "./MySnackbarContent";
//material ui
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({});

function Toast(props) {
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
}

export default withStyles(styles, { withTheme: true })(Toast);
