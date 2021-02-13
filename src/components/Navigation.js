import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Divider } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DrawerNav from './DrawerNav';
import ProfileNav from './ProfileNav';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0, 1.5)
    },
    toolbar: {
        alignItems: "center",
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    date: {
        padding: theme.spacing(0, 2)
    },
    appbar: {
        display: 'flex',
        alignContent: 'flex-end',
        backgroundColor: theme.palette.secondary.lighter,
        color: theme.palette.primary.dark,
        boxShadow: '0px 0px 15px #dbdbdb',
        padding: theme.spacing(0,5)
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: theme.palette.primary.dark
    },
    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(1.5, 2),
        backgroundColor: theme.palette.primary.dark
    },
    summaryButton: {
        fontWeight: 600,
        borderRadius: '0px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
    },
    summaryContainer: {
        flexGrow: 1
    },
    dividerLight: {
        backgroundColor: theme.palette.primary.light
    }

}));

const GetDateTime = () => {
    const classes = useStyles();
    const date = new Date();
    const getMonth = (d) => {
        const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthList[d.getMonth()];
    }
    const getDay = (d) => {
        return d.getDate();
    }
    const getYear = (d) => {
        return d.getFullYear();
    }
    return <Typography className={classes.date}>{`${getMonth(date)} ${getDay(date)}, ${getYear(date)}`}</Typography>
}


export default function Navigation() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                        <div className={classes.summaryContainer}>
                        <Button className={classes.summaryButton} variant="contained" disableElevation>
                            Summary<NavigateNextIcon />
                        </Button>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <GetDateTime />
                        <Divider orientation="vertical" flexItem />
                        <ProfileNav/>
                </Toolbar>
            </AppBar>
            <DrawerNav />
        </div>
    );
}
