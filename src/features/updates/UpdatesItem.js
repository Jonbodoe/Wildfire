import React from 'react';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink as RouterLink, useRouteMatch} from 'react-router-dom';
import { getUpdateId, selectUpdate } from '../../app/reducers/updates/updateSlice';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    row: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: theme.palette.secondary.dark,
        width: theme.spacing(6),
        height: theme.spacing(6),
        padding: theme.spacing(0),
        margin: theme.spacing(0)
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    name: {
        color: theme.palette.primary.dark,
        fontWeight: '600',
        marginBottom: theme.spacing(0.75)
    },
    containerSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        textTransform: 'none',
        borderRadius: '0px',
        padding: theme.spacing(2),
    },
    link: {
        color: theme.palette.secondary.dark
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
}));



const UpdatesItem = (props) => {
    const { update } = props;
    const {_id, general, profileData, updates} = update;
    const { path } = useRouteMatch();
    const classes = useStyles();
    const dispatch = useDispatch()
    const selectedId = useSelector(getUpdateId)
    // console.log(selectedId, _id, 'ig')

    const setSelectedId = (event) => {
        dispatch(selectUpdate(event))
        // console.log(event)
    };
    return <Link 
        key={_id} 
        component={RouterLink} 
        to={`${path}/${_id}`}
        > 
        <Button
        fullWidth
        data-id={_id}
        className={`${classes.button} ${_id === selectedId ? classes.active : classes.inactive}`}
        onClick={(e) => setSelectedId(e.currentTarget.dataset.id)}
        >
        <Grid container>
            <div className={classes.row}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.iconContainer}>
                    <Avatar className={classes.icon} src={require(`./../../images/${profileData.information.img_src}`).default}/>
                    </Grid>
                        <Grid item xs zeroMinWidth>
                            <Grid container className={classes.containerSpaceBetween}>
                                <Typography variant="body2" className={classes.title}>{profileData.information.position}</Typography>
                                <Typography variant="body2" className={classes.title}>{general.timestamp}</Typography>
                            </Grid>
                            <Typography variant="body2" align='left' className={classes.name}>{profileData.information.fullname}</Typography>
                            <Typography variant="body2" align='left' className={classes.message} noWrap>{`Updated Incident ${updates.incidentArea} [Id: ${updates.incidentId.substr(selectedId.length - 5)}]`}</Typography>
                        </Grid>
                </Grid>
            </div>
        </Grid>
        </Button>
    </Link>
}

export default UpdatesItem;