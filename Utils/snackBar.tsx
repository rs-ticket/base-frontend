import React, { useCallback } from 'react';
import { createStyles, makeStyles } from "@mui/styles";
import { Alert, IconButton, Snackbar, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    })
);


interface Props {
    showSnackBar: boolean,
    closeSnackBar: Function,
    message: string
}

const SnackBar: React.FC<Props> = ({
    showSnackBar,
    closeSnackBar,
    message
}) => {
    const classes = useStyles();
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        closeSnackBar(false);
    };

    const action = (
        <React.Fragment>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <React.Fragment>

            <Snackbar
                open={showSnackBar}
                autoHideDuration={null}
                onClose={handleClose}
                message={message}
                action={action}
                anchorOrigin = {{ vertical: 'top', horizontal: 'center' }}
            >
 <Alert severity="error">{message}</Alert>
                </Snackbar>
        </React.Fragment>
    )
}

export default SnackBar;