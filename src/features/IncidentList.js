import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    items: {
        margin: theme.spacing(1,0),
        padding: theme.spacing(3,2.5),
        width: '100%',
        height: theme.spacing(5),
        boxShadow: '0px 0px 10px #dbdbdb',
        backgroundColor: theme.palette.secondary.lighter,
        display: 'flex',
        alignItems: 'center'
    },
}));


export const IncidentList = (props) => {
    const classes = useStyles();

    return <>
        <Grid item className={classes.items}>
            <Typography>Hello</Typography>
        </Grid>
    </>
}