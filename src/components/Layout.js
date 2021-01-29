import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
    root: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        padding: '0px 20px'
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    return <div className={classes.root}>
        {props.children}
    </div>
}

export default Layout