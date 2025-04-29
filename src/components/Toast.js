import React, { Fragment } from "react";
import MySnackbarContent from "./MySnackbarContent";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import { Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => ({});

interface ToastProps extends WithStyles<typeof styles> {
  open: boolean;
  handleClose: (event: any, reason: string) => void;
  type: "success" | "warning" | "error" | "info";
  message: string;
}

function Toast(props: ToastProps): JSX.Element {
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
