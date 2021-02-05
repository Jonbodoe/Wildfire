import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Divider, Drawer, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import routes from '../app/routes';

const drawerWidth = 120;
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
        padding: theme.spacing(2.5,1),
        margin: theme.spacing(1, 0),
        display: 'list-item',
        textAlign: 'center',
        transition: '0.3 all'
    },
    drawerItemInactive: {
        color: theme.palette.secondary.lighter,
        backgroundColor: theme.palette.primary.main
    },
    drawerItemActive: {
        borderLeft: `5px solid ${theme.palette.secondary.main}`, 
        color: theme.palette.secondary.lighter,
        backgroundColor: theme.palette.primary.dark
    },
    brandLogo: {
        color: theme.palette.secondary.lighter,
        padding: theme.spacing(1, 2),
        fontWeight: 600,
    },
    dividerLight: {
        backgroundColor: theme.palette.primary.light
    },
    navList: {
        justifyContent: 'center', 
    },
    navIconInactive: {
        color: theme.palette.primary.lighter,
    },
    navIconActive: {
        color: theme.palette.secondary.light,
    },
    textCenter: {
        display: 'inline-block',
        textAlign: 'center'
    }

}));

const DrawerNav = (props) => {
    const classes = useStyles();
    const drawerItems = routes.filter((route) => route.menu === 'PRIMARY');
    return <Drawer
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
            drawerItems.map(data => {
                return <Link key={data.uid} button="true" component={RouterLink} to={data.path}>
                    <ListItem 
                        className={`${classes.drawerItem} ${props.location.pathname === data.path? classes.drawerItemActive : classes.drawerItemInactive}`} 
                        key={data.label}>
                    <Typography className={`${props.location.pathname === data.path? classes.navIconActive : classes.navIconInactive}`}>{data.icon}</Typography>
                        {data.label}
                    </ListItem>
                </Link>
            })
        }
        </List>
    </Drawer>
}

export default withRouter(DrawerNav)