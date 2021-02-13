import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        fontWeight: '600',
        color: theme.palette.primary.darker,
        padding: theme.spacing(1,0) 
    }
}));  

const DetailsHeader = (props) => {
    const classes = useStyles();
    return <Typography className={classes.header}>
        Incident: {props.header}
    </Typography>
}

export default DetailsHeader;