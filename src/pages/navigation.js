import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
// import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import routes from '../app/routes';
import { Divider } from '@material-ui/core';

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: '0px 15px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        alignItems: "center",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    title: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    nav_items: {
        padding: '0px 15px',
        // display: 'flex',
        // alignItems: "center",
    },
    date: {
        padding: '0px 15px'
    },
    appbar: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.dark,
        boxShadow: '0px 4px 15px #dbdbdb'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: theme.palette.primary.dark
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.dark
    },

}));

const GetDate = () => {
    const classes = useStyles();
    console.log(classes.drawer.width)
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
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h5">
                        Wildfire 
                        {/* Soon change to Title of page */}
                    </Typography>
                    <Typography className={classes.nav_items}>
                        {
                            routes.map(data => {
                                return <Link key={data.uid} className={classes.nav_items} component={RouterLink} color="inherit" to={data.path}>
                                    {data.label}
                                </Link>
                            })
                        }
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <GetDate/>
                    <Divider orientation="vertical" flexItem />
                    <IconButton className={classes.margin} aria-label="display more actions" edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >

                <Divider/>
            </Drawer>
        </div>
    );
}
