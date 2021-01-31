import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
// import Link from '@material-ui/core/Link';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
// import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import routes from '../app/routes';
import { Avatar, Button, Divider} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DrawerNav from './DrawerNav';

const drawerWidth = 140;
const ITEM_HEIGHT = 40;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: '0px 10px'
    },
    menuButton: {
        marginRight: theme.spacing(0.5),
    },
    toolbar: {
        display: 'flex',
        alignItems: "center",
        // paddingTop: theme.spacing(1),
        // paddingBottom: theme.spacing(1),
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    title: {
        fontWeight: 600,
    },
    titleContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    date: {
        padding: theme.spacing(0, 2)
    },
    appbar: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.dark,
        boxShadow: '0px 4px 15px #dbdbdb'
    },
    drawer: {
        width: drawerWidth,
        // padding: '0px 20px',
        flexShrink: 0,
        backgroundColor: theme.palette.primary.dark
    },
    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(1.5, 2),
        backgroundColor: theme.palette.primary.dark
    },
    summaryButton: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(0, 3.5)
    },
    brandLogo: {
        color: theme.palette.secondary.lighter,
        paddingBottom: theme.spacing(1.5),
        fontWeight: 600,
    },
    dividerLight: {
        backgroundColor: theme.palette.primary.light
    }

}));


export default function Navigation() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const profileImg = require('../images/profile.jpg');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.titleContainer}>
                        <Typography className={classes.title} variant="h5">
                            Wildfire
                        {/* Soon change to Title of page */}
                        </Typography>
                        <Button className={`${classes.summaryButton} ${classes.margin}`} variant="contained" disableElevation>
                            Summary<NavigateNextIcon />
                        </Button>
                    </div>
                    {/* <Typography className={classes.nav_items}>
                        {
                            routes.map(data => {
                                return <Link key={data.uid} className={classes.nav_items} component={RouterLink} color="inherit" to={data.path}>
                                    {data.label}
                                </Link>
                            })
                        }
                    </Typography> */}
                    <Divider orientation="vertical" flexItem />
                    <GetDateTime />
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                        className={classes.margin}
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <Avatar src={profileImg.default} />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {/* {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))} */}
                    </Menu>
                </Toolbar>
            </AppBar>
            <DrawerNav/>
        </div>
    );
}

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
    // const getHours = (d) => {
    //     return d.getHours();
    // }
    return <Typography className={classes.date}>{`${getMonth(date)} ${getDay(date)}, ${getYear(date)}`}</Typography>
}
