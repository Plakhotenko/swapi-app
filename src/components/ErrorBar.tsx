import React, { FC, useContext } from 'react';
import { Snackbar, Alert } from "@mui/material";
import { ErrorBarContext } from "../providers/ErrorBarProvider";

export const ErrorBar: FC = () => {
  const { errorText, showError } = useContext(ErrorBarContext);
  const handleClose = () => showError('');

  return <Snackbar
          open={!!errorText}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
      {errorText}
    </Alert>
  </Snackbar>
}
