import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
// import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import routes from '../app/routes';
// import { Box } from '@material-ui/core';
// import Dashboard from './../pages/dashboard.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 10,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    links: {
        // flexGrow: 1,
        alignItems: "center",
    },
    link: {
        padding: '10px',
        alignItems: "center",
    }
}));

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h5">
                        Wildfire
                    </Typography>
                    <Typography className={classes.link}>
                        {
                            routes.map(data => {
                                return <Link key={data.uid} className={classes.link} component={RouterLink} color="inherit" to={data.path}>
                                    {data.label}
                                </Link>
                            })
                        }
                    </Typography>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
