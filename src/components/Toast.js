import React, { Fragment } from "react";
import MySnackbarContent from "./MySnackbarContent";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

const styles = (theme: any) => ({});

interface ToastProps {
  open: boolean;
  handleClose: () => void;
  type: string;
  message: string;
}

function Toast(props: ToastProps) {
  const { open, handleClose, type, message } = props;
  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContent
          onClose={handleClose}
          variant={type}
          message={message}
        />
      </Snackbar>
    </Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(Toast);
