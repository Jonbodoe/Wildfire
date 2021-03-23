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
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import routes from '../app/routes';
import PageTitle from './PageTitle';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0, 1.5)
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
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
        padding: theme.spacing(0, 5)
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
        margin: theme.spacing(0, 3),
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.darkish,
        },
    },
    container: {
        display: 'flex',
        alignItems: "center",
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


function Navigation(props) {
    // console.log(props)
    const locationInfo = props
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.container}>
                        <LocationTitle location={locationInfo} />
                        <div>
                            <Link 
                                component={RouterLink}
                                to={`/summary`}>
                                <Button
                                    className={classes.summaryButton}
                                    variant="contained"
                                    disableElevation
                                    // component={RouterLink}
                                    // to={`/summary`}
                                >

                                    Summary<NavigateNextIcon />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.container}>
                        <Divider orientation="vertical" flexItem />
                        <GetDateTime />
                        <Divider orientation="vertical" flexItem />
                        <ProfileNav />
                    </div>
                </Toolbar>
            </AppBar>
            <DrawerNav />
        </div>
    );
}

const LocationTitle = (props) => {
    const title = Object.assign({}, ...routes.filter(route => route.path === props.location.location.pathname))
    return <PageTitle title={title.label} />
}

export default withRouter(Navigation)
