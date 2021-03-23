import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectIncident,
    select
} from '../../app/reducers/incidents/incidentSlice'
import { NavLink as RouterLink, useRouteMatch} from 'react-router-dom';
import Link from '@material-ui/core/Link';
// import DetailsTitle from '../../components/DetailsTitle';

const useStyles = makeStyles((theme) => ({
    items: {
        padding: theme.spacing(0, 1.5),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    itemContent: {
        textAlign: 'left',
        flexGrow: 1,
        flexBasis: 0,
    },
    icon: {
        display: 'flex',
        textAlign: 'right',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        textTransform: 'none',
        borderRadius: '0px',
        height: theme.spacing(5),
        color: theme.palette.primary.main,
        borderLeft: '4px solid',
        // backgroundColor: theme.palette.secondary.lighter,
        // color: theme.palette.primary.main,
        // margin: theme.spacing(1, 0),
        // '$:focus-visible': {
        //     border: `3px solid theme.p`
        // }
    },
    inactive: {
        backgroundColor: theme.palette.secondary.lighter,
        margin: theme.spacing(0.7, 0),
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.darkish,
        },
    },
    active: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.lighter,
        margin: theme.spacing(0.7, 1.5),
        '&$active': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    openLabel: {
        borderColor: theme.palette.warning.light
    },
    reviewingLabel: {
        borderColor: theme.palette.info.light
    },
    mustResolveLabel: {
        borderColor: theme.palette.error.light
    },
    resolvedLabel: {
        borderColor: theme.palette.success.light
    },
}));

const IncidentItem = (props) => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();

    const labelColorSwitch = (props) => {
        switch (props.query) {
            case "Open": return classes.openLabel;
            case "Reviewing": return classes.reviewingLabel;
            case "Must Resolve": return classes.mustResolveLabel;
            case "Resolved": return classes.resolvedLabel;
            default: return
        }
    }

    const setSelectedId = (event) => {
        dispatch(select(event))
    };
    const dispatch = useDispatch()
    const selectedId = useSelector(selectIncident)
    // console.log(_.isEmpty(selectedId));
    
    return <>
    <Link 
        key={props.state._id} 
        component={RouterLink} 
        to={`${url}/${props.state._id}`}
        // activeClassName={}
        // Needa figure out the color issue with this.
    >
    <Button
        // disableRipple
        // focusVisibleClassName
        data-id={props.state._id}
        className={`${classes.button} ${props.state._id === selectedId ? classes.active : classes.inactive} ${labelColorSwitch(props)}`}
        onClick={(e) => setSelectedId(e.currentTarget.dataset.id)}
    >
        <Grid item className={`${classes.items}`}>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.state.geographics.municipal}</Typography>
            </Grid>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.state.geographics.state}</Typography>
            </Grid>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.state.incident.priority}</Typography>
            </Grid>
            <Grid className={classes.itemContent}>
                <Typography variant="body2">{props.state.incident.status}</Typography>
            </Grid>
        </Grid>
    </Button>
    </Link>
</>
}

export default IncidentItem;
