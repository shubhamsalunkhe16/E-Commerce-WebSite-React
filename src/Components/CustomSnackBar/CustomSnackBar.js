import React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function SnackBarApp(props) {
  const { type, message } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (type, text) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Hello", { type });
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleClick}>Show snackbar</Button> */}
      <Button onClick={handleClickVariant(type, message)}>BUtton</Button>
    </React.Fragment>
  );
}

export default function CustomSnackBar(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackBarApp props={props} />
    </SnackbarProvider>
  );
}
