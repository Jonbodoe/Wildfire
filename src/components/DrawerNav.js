import React from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Divider, Drawer, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import routes from '../app/routes';

const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: theme.palette.primary.dark
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.dark
    },
    drawerItem: {
        padding: theme.spacing(2, 1),
        margin: theme.spacing(1, 0),
        display: 'list-item',
        textAlign: 'center',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
    drawerItemActive: {
        borderLeft: `5px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.darker,
        display: 'list-item',
    },
    brandLogo: {
        color: theme.palette.secondary.lighter,
        padding: theme.spacing(1),
        fontWeight: 600,
    },
    dividerLight: {
        backgroundColor: theme.palette.primary.light
    },
    navList: {
        justifyContent: 'center',
        color: theme.palette.secondary.light,
    },
    textCenter: {
        display: 'inline-block',
        textAlign: 'center'
    }

}));

const DrawerNav = () => {
    const classes = useStyles();
    const drawerItems = routes.filter((route) => route.menu === 'PRIMARY');
    // Filtering for links that are in the primary navigation
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <Typography className={classes.brandLogo}>
                Intuitive <br />Robotics
        </Typography>
            <Divider className={classes.dividerLight} />
            <List className={classes.navList}>
                {
                    drawerItems.map(data => <Link
                        component={RouterLink}
                        // Passing the react router link component into material UI's Link component
                        exact={false}
                        activeClassName={classes.drawerItemActive}
                        to={data.path}
                        key={data.label}
                    >
                    <ListItem
                        disableRipple
                        button={true}
                        className={`${classes.drawerItem}`}
                    >
                            <Typography>{data.icon}</Typography>
                            {data.label}
                        </ListItem>
                    </Link>
                    )
                }
            </List>
        </Drawer>
    )
}

export default withRouter(DrawerNav)