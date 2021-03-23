import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
    root: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        marginTop: theme.spacing(5),
        padding: theme.spacing(6),
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.light
    },
}));

const Layout = (props) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <Grid container>
            {props.children}
        </Grid>
    </div>
}

export default Layout