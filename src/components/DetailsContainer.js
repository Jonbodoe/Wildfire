import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(2,2),
        padding: theme.spacing(2,3),
        backgroundColor: theme.palette.secondary.lighter,
        boxShadow: '0px 0px 10px #dbdbdb',
    },
}));  

const DetailsContainer = (props) => {
    const classes = useStyles();
    return <Grid className={classes.container}>
        {props.children}
    </Grid>
}

export default DetailsContainer;