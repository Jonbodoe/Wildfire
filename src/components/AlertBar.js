import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    alert: {
       marginBottom: theme.spacing(2)
    }
}));


const AlertBar = (props) => {
    const classes = useStyles();
    const { updated, error, message } = props;
    // console.log( updated, error, message, 'the props')

    const alertSwitch = (updated, error, message) => {
        // console.log('before', updated, error)
        // switch (updated, error, message) {
        //     case updated:
        //         console.log('success')
        //         return <Alert className={classes.alert} severity="success" variant="outlined">{message}</Alert>
        //     case error:
        //         console.log('error')
        //         return <Alert className={classes.alert} severity="error" variant="outlined">{message}</Alert>
        //     default:
        //         console.log('hah nothing', updated, error)
        //         return <></>;
        // }
        if (updated && !error) {
            return <Alert className={classes.alert} severity="success" variant="outlined">{message}</Alert>;
        } else if ( !updated && error) {
            return <Alert className={classes.alert} severity="error" variant="outlined">{message}</Alert>;
        } else {
            return <></>;
        }
    }
    const alert = alertSwitch(updated, error, message);
    return alert;
}

export default AlertBar;