import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    saveButton: {
        fontWeight: 600,
        borderRadius: '0px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(2, 0),
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.darkish,
        },
    },
}))

const PrimaryButton = (props) => {
    const { children, handler, text, type, fullWidth} = props;
    const classes = useStyles();
    return <Button
        className={classes.saveButton}
        variant="contained"
        disableElevation
        onClick={handler}
        type={type || 'button'}
        fullWidth={fullWidth || false}
    >
        {text}{children}
    </Button>
}

export default PrimaryButton;