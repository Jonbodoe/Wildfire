import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1, 2)
    },
}));


const EventListContainer = (props) => {
    const classes = useStyles();
    return <Grid className={classes.container}>
        {props.children}
    </Grid>
}

export default EventListContainer;