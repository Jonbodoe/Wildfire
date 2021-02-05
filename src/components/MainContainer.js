import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
    root: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        padding: theme.spacing(0, 4.5),
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