import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.primary.main,
        fontSize: '1.4rem',
        height: '100%',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center'
        // padding: theme.spacing(0,2),
        // paddingTop: theme.spacing(2),
        // margin: theme.spacing(0.5,0)
    }
}));

const PageTitle = (props) => {
    const classes = useStyles();
    return <Grid item md={12}>
        <Typography className={classes.title} variant="h1">{props.title}</Typography>
    </Grid>
}

export default PageTitle;